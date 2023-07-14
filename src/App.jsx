import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// Amplify auth
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
// import '@aws-amplify/ui-react/styles.css';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';
// auth components
// import { Header } from "./pages/auth/Header";
import { Footer } from "./pages/auth/Footer";
import { SignInHeader } from "./pages/auth/SignInHeader";
import { SignInFooter } from "./pages/auth/SignInFooter";
import "./styles.css";

// ----------------------------------------------------------------------

Amplify.configure(awsconfig);

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ScrollToTop />
          <StyledChart />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default withAuthenticator(App, {
  components: {
    SignIn: {
      Header: SignInHeader,
      Footer: SignInFooter
    },
    Footer
  },
  hideSignUp: true
});