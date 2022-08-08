import axios from "axios";
const API_URL = "api/account/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "login", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.data.data.access_token) {
            localStorage.setItem("user", JSON.stringify(response.data.data.data));
            localStorage.setItem("userName", username);
        }
        return response.data.data.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
    window.location.href = "/";
  }
  register(name, email, confirmEmail) {
    return axios.post(API_URL + "register", {
      name,
      email,
      confirmEmail,
    });
  }

  forgetPassword(email) {
    return axios.post(API_URL + "forgetpassword", {
      email,
    });
  }

  resetPassword(email, code, password, confirmPassword) {
    return axios.post(API_URL + "resetpassword", {
      email,
      code,
      password,
      confirmPassword,
    });
  }

  emailConfirmation(email, code, password, confirmPassword) {
    return axios.post(API_URL + "confirmemail", {
      email,
      code,
      password,
      confirmPassword,
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
    }
  getCurrentUserName() {
      return localStorage.getItem("userName");
      //return "MOHSEN@HO.COM";
    }
  getCurrentExamId() {
      return localStorage.getItem("examId");
  }
}
export default new AuthService();
