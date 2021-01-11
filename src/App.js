import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { Layout } from "./components/layout";
import { SignIn } from "./components/sign-in";
import { SignUp } from "./components/sign-up";
import { ResetPassword } from "./components/reset-password";
import { PasswordConfirmation } from "./components/password-confirmation";
import { ProtectedRoute } from "./components/protected-route";
import { AuthProvider } from "./context/auth-context";
import { EmailConfirmation } from "./components/email-confirmation";

function Home() {
  return <div>Hello Jude</div>;
}

export default function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Router>
          <Layout>
            <Switch>
              <Route path="/email-confirmation" component={EmailConfirmation} />
              <Route
                path="/password-confirmation"
                component={PasswordConfirmation}
              />
              <Route path="/reset-password" component={ResetPassword} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <ProtectedRoute path="/" component={Home} />
            </Switch>
          </Layout>
        </Router>
      </AuthProvider>
    </ChakraProvider>
  );
}
