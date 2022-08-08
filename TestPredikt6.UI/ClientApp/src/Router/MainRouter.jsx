import React from "react";
import { createMemoryHistory } from "history";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthService from "../services/auth.service";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import TestimonialsPage from "../pages/TestimonialsPage";
import FAQPage from "../pages/FAQPage";
import LandingPage from "../pages/LandingPage";
import DashboardPage from "../pages/DashboardPage";
import AtAGlancePage from "../pages/AtAGlancePage";
import PrediktorWizardPage from "../pages/PrediktorWizardPage";
import PrediktorWizard2Page from "../pages/PrediktorWizard2Page";
import PrediktorWizard3Page from "../pages/PrediktorWizard3Page";
import CTestPage from "../pages/CTestPage";
import CTest2Page from "../pages/CTest2Page";
import CTest3Page from "../pages/CTest3Page";
import CTest4Page from "../pages/CTest4Page";
import VTestPage from "../pages/VTestPage0";
import VTest2Page from "../pages/VTest2Page";
import VTest3Page from "../pages/VTest3Page";
import VTest4Page from "../pages/VTest4Page";
import DashboardLayout from "../layouts/DashboardLayout";
import UploadPage from "../pages/UploadPage";
import TalkToUsPage from "../pages/TalkToUsPage";
import TerminologyPage from "../pages/TerminologyPage";
import PaymentPage from "../pages/PaymentPage";


export default class MainRouter extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      currentUser: undefined,
    };
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }
  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegistrationPage />} />
            <Route path="reset-password" element={<ResetPasswordPage />} />
            <Route path="about" element={<AboutPage />} />

            <Route path="contact" element={<ContactPage />} />
            <Route path="testimonials" element={<TestimonialsPage />} />
            <Route path="faq" element={<FAQPage />} />
          </Route>

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="talktous" element={<TalkToUsPage />} />
            <Route path='at-a-glance' element={<AtAGlancePage />} />
            <Route path='prediktor-wizard' element={<PrediktorWizardPage />} />
            <Route path='prediktor-wizard-2' element={<PrediktorWizard2Page />} />
            <Route path='prediktor-wizard-3' element={<PrediktorWizard3Page />} />
            <Route path='c-test' element={<CTestPage />} />
            <Route path='c-test-2' element={<CTest2Page />} />
            <Route path='c-test-3' element={<CTest3Page />} />
            <Route path='c-test-4' element={<CTest4Page />} />
            <Route path='v-test' element={<VTestPage />} />
            {/* <Route path='v-test' element={<VTestPage />} />
            <Route path='v-test-2' element={<VTest2Page />} />
            <Route path='v-test-3' element={<VTest3Page />} />
            <Route path='v-test-4' element={<VTest4Page />} /> */}
            <Route path='upload' element={<UploadPage />} />
            <Route path='terminology' element={<TerminologyPage />} />
            <Route path='payment' element={<PaymentPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
