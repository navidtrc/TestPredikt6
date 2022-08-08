using Common;
using FluentValidation.AspNetCore;
using MediatR;
using MediatR.Pipeline;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using TestPredikt.Application.Apps.SecurityApplication.Authentication;
using TestPredikt.Application.Apps.SecurityApplication.Authentication.Login;
using TestPredikt.Application.Common;
using TestPredikt.Application.SecurityApplication.Services.Authentication;
using TestPredikt.Application.WebFramework.Configuration;
using TestPredikt.Application.WebFramework.CustomMapping;
using TestPredikt.Domain.Models.Security;
using TestPredikt.Infrastructure.Persistance;
using TestPredikt.Infrastructure.Persistance.Core;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.InitializeAutoMapper();

var config = builder.Configuration.GetSection(nameof(SiteSetting));
builder.Services.Configure<SiteSetting>(config);

builder.Services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(
                    builder.Configuration.GetConnectionString("TestPredikt")));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();

builder.Services.AddDefaultIdentity<User>(options =>
{
    options.SignIn.RequireConfirmedAccount = true;
    options.Password.RequireDigit = false;
    options.Password.RequiredLength = 3;
    options.Password.RequireNonAlphanumeric = false; //#@!
    options.Password.RequireUppercase = false;
    options.Password.RequireLowercase = false;
    options.User.RequireUniqueEmail = false;
    options.SignIn.RequireConfirmedEmail = true;
}).AddEntityFrameworkStores<ApplicationDbContext>();

builder.Services.AddIdentityServer()
    .AddApiAuthorization<User, ApplicationDbContext>();

builder.Services.AddAuthentication()
    .AddIdentityServerJwt();


builder.Services.AddControllersWithViews()
        .AddNewtonsoftJson(options =>
        options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);

builder.Services.AddMediatR(typeof(LoginCommand).GetTypeInfo().Assembly);
builder.Services.AddFluentValidation(new List<Assembly> { typeof(LoginCommand).GetTypeInfo().Assembly });
builder.Services.AddScoped(typeof(IRequestPostProcessor<,>), typeof(CommitCommandPostProcessor<,>));
builder.Services.AddEmailService(builder.Configuration);
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddScoped<IJwtService, JwtService>();
builder.Services.AddCors(o => o.AddPolicy("AllowAnyOrigin",
                      builder =>
                      {
                          builder.AllowAnyOrigin()
                                 .AllowAnyMethod()
                                 .AllowAnyHeader();
                      }));

builder.Services.AddSpaStaticFiles(configuration =>
{
    configuration.RootPath = "ClientApp/build";
});

var app = builder.Build();

// Configure the HTTP request pipeline.
app.IntializeDatabase();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseMigrationsEndPoint();
}
else
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseAuthentication();
app.UseIdentityServer();
app.UseAuthorization();
app.UseCors("AllowAnyOrigin");


app.UseEndpoints(config =>
{
    config.MapControllers();
});

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller}/{action=Index}/{id?}");
    endpoints.MapRazorPages();
});

app.UseSpa(spa =>
{
    spa.Options.SourcePath = "ClientApp";

    if (app.Environment.IsDevelopment())
    {
        spa.UseReactDevelopmentServer(npmScript: "start");
    }
});

app.Run();
