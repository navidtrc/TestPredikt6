import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import {
  Button,
  Card,
  Link,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  createTheme,
  CssBaseline,
  Paper,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import svg1 from "../assets/Vectorshopping_cart.svg";
import svg2 from "../assets/dashedLine.svg";

import SecondAppBar from "../components/SecondAppBar";
import WizardComponent from "../components/WizardComponent";
import { Box } from "@mui/system";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Fira Sans",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

function getDateFormated() {
  var dateParts = new Date().toString().split(" ");
  return `${dateParts[0]}, ${dateParts[1]} ${dateParts[2]}, ${dateParts[3]}`;
}

export default function PaymentPage(props) {
  const ePaymentType = {
    CreditCard: "CreditCard",
    PayPal: "PayPal",
    ApplePay: "ApplePay",
    GooglePay: "GooglePay",
  };
  const ePaymentStep = {
    Invoice: "Invoice",
    Information: "Information",
  };
  const [paymentStep, setPaymentStep] = useState(ePaymentStep.Invoice);
  const [testPrediktPrice, setTestPrediktPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [tax, setTax] = useState(0);
  const [billingId, setBillingId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [paymentMehod, setPaymentMehod] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <SecondAppBar title="·• Order Summary •·"></SecondAppBar>
        <WizardComponent step="1"></WizardComponent>
        {paymentStep === ePaymentStep.Invoice ? (
          <Container component="main" maxWidth="lg">
            <CssBaseline />
            <Typography sx={{ mt: 3 }} component="h4" variant="h4"></Typography>

            <Grid container spacing={2} justify="center">
              <Grid
                item
                container
                direction="column"
                xs={12}
                sm={4}
                spacing={2}
              >
                <Grid item>
                  <Card
                    sx={{
                      borderRadius: 4,
                      background: "#EFF0F5",
                      color: "#000",
                      minHeight: "275px",
                      textAlign: "start",
                    }}
                  >
                    <CardContent sx={{ mx: 1 }}>
                      <Typography variant="h6">IMPORTANT!</Typography>
                      <Typography variant="h6">
                        Read before you begin
                      </Typography>
                    </CardContent>
                    <CardContent sx={{ mx: 1 }}>
                      <Typography variant="body2">
                        Click on “Read more” to become familiar with the whole
                        process: Prediktor™ Wizard, C-Test and V-Test.
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{ mx: 1, mb: 1, justifyContent: "center" }}
                    >
                      <Link to="/dashboard/at-a-glance">
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{
                            background: "#fff",
                            color: "#000",
                            textTransform: "none",
                            borderRadius: 3,
                          }}
                        >
                          Read more
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item>
                  <Card
                    sx={{
                      borderRadius: 4,
                      background: "#FFEEF8",
                      color: "#C11574",
                      minHeight: "275px",
                    }}
                  >
                    <CardContent sx={{ mx: 1 }}>
                      <Typography variant="h6">Discounts & offers</Typography>
                    </CardContent>
                    <CardContent sx={{ mx: 1 }}>
                      <Typography variant="body2">
                        Upload your official test results form to improve your
                        prediction, and receive a $X TestPredikt™ credit.
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{ mx: 1, mb: 1, mt: 6.5, justifyContent: "center" }}
                    >
                      <Link to="/dashboard/upload">
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{
                            background: "#fff",
                            color: "#000",
                            textTransform: "none",
                            borderRadius: 3,
                          }}
                        >
                          Upload
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={8}>
                <Card
                  sx={{
                    borderRadius: 4,
                    background: "#FFFFFF",
                  }}
                >
                  <CardContent sx={{ mx: 1 }}>
                    <div style={{ textAlign: "left" }}>
                      <div
                        style={{
                          float: "left",
                          marginRight: "20px",
                          margingLeft: "20px",
                        }}
                      >
                        <img src={svg1} alt="shoppingcart" />
                      </div>

                      <Typography variant="h5">
                        TestPredikt's Prediktor: <b>${testPrediktPrice}</b>
                      </Typography>
                      <br />

                      <Typography>
                        A TestPredikt's Prediktor consists of:
                      </Typography>
                      <Typography>
                        <u>one</u>{" "}
                        <b>
                          Prediktor{" "}
                          <sup>
                            <b>TM</b>
                          </sup>
                        </b>
                      </Typography>
                      <Typography>
                        <u>one</u> <b>C-Test</b>
                      </Typography>
                      <Typography>
                        <u>one</u> <b>V-Test</b>
                      </Typography>
                    </div>
                    <br />
                    <img src={svg2} alt="dashedLine" />
                  </CardContent>
                  <div
                    style={{
                      textAlign: "left",
                      paddingLeft: "145px",
                      paddingRight: "350px",
                    }}
                  >
                    <CardContent sx={{ mx: 1 }}>
                      <Typography variant="h5">
                        Discount: <b>${discount}</b>
                      </Typography>
                      <br />
                      <Typography variant="body2">
                        Upload your official test results to receive a $X
                        discount.
                      </Typography>
                      <br />
                      <Typography variant="h5">
                        Tax: <b>${tax}</b>
                      </Typography>
                      <br />

                      <Typography variant="body2">
                        Tax is about 9% of the fee you pay
                      </Typography>
                    </CardContent>
                  </div>
                  <img src={svg2} alt="dashedLine" />

                  <div style={{ textAlign: "left" }}>
                    <CardContent sx={{ mx: 1 }}>
                      <Typography>
                        {`${firstName} ${lastName}`} purchase on:
                      </Typography>
                      <Typography>
                        <b>{getDateFormated()}</b>
                      </Typography>
                      <br />
                      <Typography>
                        Billing ID: <b>{billingId}</b>
                      </Typography>
                      <Typography style={{ textAlign: "right" }}>
                        Total: <b>${testPrediktPrice - discount}</b>
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Link to="/dashboard/at-a-glance">
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      color: "#277AFF",
                      background: "#fff",
                      textTransform: "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Go back
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setPaymentStep(ePaymentStep.Information);
                  }}
                  sx={{
                    background: "#277AFF",
                    //textTransform: "none",
                    color: "#FFFFFF"
                  }}
                >
                  Buy
                </Button>

              </Grid>
            </Grid>
          </Container>
        ) : null}
        {paymentStep === ePaymentStep.Information ? (
          <div>
            <Container component="main" maxWidth="lg">
              <CssBaseline />
              <Typography sx={{ mt: 3 }} component="h4" variant="h4">
                Billing Address
              </Typography>

              <Paper style={{ padding: 16 }}>
                <Grid
                  style={{ width: "50%" }}
                  container
                  justify="flex-start"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item xs={12} md={6}>
                    <TextField
                      name="name"
                      fullWidth
                      type="text"
                      label="First name"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      name="name"
                      fullWidth
                      type="text"
                      label="Last name"
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      name="name"
                      fullWidth
                      type="text"
                      label="Street address"
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      name="name"
                      fullWidth
                      type="text"
                      label="Province"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      name="name"
                      fullWidth
                      type="text"
                      label="Postal code"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      name="name"
                      fullWidth
                      type="text"
                      label="Country"
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Container>
            <Container component="main" maxWidth="xl">
              <Grid container spacing={2} sx={{ mt: 3 }} >
                <Grid item xs={2}>
                  <Button
                    variant="outlined"
                    color='primary'
                    onClick={() => {
                      setPaymentStep(ePaymentStep.Invoice)
                    }}
                    sx={{
                      color: "#277AFF",
                      background: '#fff',
                      textTransform: "none",
                    }}
                  >
                    Go back
                  </Button>
                </Grid>
                <Grid item xs={6}>
                </Grid>

                <Grid item xs={3}>
                  {/* <Link to='/dashboard/prediktor-wizard-2'> */}
                  <Button
                    onClick={() => { navigate("/dashboard/prediktor-wizard") }}
                    variant="contained"
                    color='primary'
                    sx={{
                      textTransform: "none",
                    }}
                  >
                    Pay
                  </Button>
                  {/* </Link> */}
                </Grid>
              </Grid>
            </Container>
          </div>
        ) : null}
      </ThemeProvider>
    </div>
  );
}
