// Amplify auth
import {Amplify} from 'aws-amplify';
import {withAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ThemeSettings from './components/settings';
import { ChartStyle } from './components/chart';
import ScrollToTop from './components/ScrollToTop';
import { ProgressBarStyle } from './components/ProgressBar';
import NotistackProvider from './components/NotistackProvider';
import MotionLazyContainer from './components/animate/MotionLazyContainer';
// auth components
import { Header } from "./pages/auth/Header";
import { Footer } from "./pages/auth/Footer";
import { SignInHeader } from "./pages/auth/SignInHeader";
import { SignInFooter } from "./pages/auth/SignInFooter";
import "./styles.css";

// ----------------------------------------------------------------------

Amplify.configure(awsconfig);
function App() {
  return (
    <MotionLazyContainer>
      <ThemeProvider>
        <ThemeSettings>
          <NotistackProvider>
            <ProgressBarStyle />
            <ChartStyle />
            <ScrollToTop />
            <Router />
          </NotistackProvider>
        </ThemeSettings>
      </ThemeProvider>
    </MotionLazyContainer>
  );
}

export default withAuthenticator(App, {
  components: {
    // Header,
    SignIn: {
      Header: SignInHeader,
      Footer: SignInFooter
    },
    Footer
  },
  hideSignUp: true
});