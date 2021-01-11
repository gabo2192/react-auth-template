import { Box, Button, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

export function Layout({ children }) {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const history = useHistory();
  return (
    <>
      <Box
        as="header"
        height="64px"
        bg="purple.500"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        padding={2}
      >
        <Link to="/">
          <Heading as="h1">Auth</Heading>
        </Link>
        <Button
          onClick={() => {
            isAuthenticated ? logout() : history.push("/signin");
          }}
          color="black"
        >
          {isAuthenticated ? "Log Out" : "Log In"}
        </Button>
      </Box>
      <Box
        as="main"
        display="grid"
        placeItems="center"
        minH="calc(100vh - 64px)"
        padding={3}
        overflowX="scroll"
      >
        {children}
      </Box>
    </>
  );
}
