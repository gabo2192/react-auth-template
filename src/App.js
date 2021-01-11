import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { Layout } from "./componens/layout";
import { SignIn } from "./componens/sign-in";
import { SignUp } from "./componens/sign-up";
import { ResetPassword } from "./componens/reset-password";
import { PasswordConfirmation } from "./componens/password-confirmation";
import { ProtectedRoute } from "./componens/protected-route";
import { AuthProvider } from "./context/auth-context";
import { EmailConfirmation } from "./componens/email-confirmation";

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
