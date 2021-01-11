import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Heading,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";

export function SignIn() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { login } = useContext(AuthContext);
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
    login();
    history.push("/");
  };
  return (
    <Box
      width={["100%", "480px"]}
      mx="auto"
      as="form"
      onSubmit={handleSubmit}
      display="grid"
      gridGap={5}
    >
      <Heading textAlign="center" mb={5} color="purple.900">
        Sign In
      </Heading>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          placeholder="jhon.doe@doecorp.com"
          onClick={(event) => setEmail(event.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          onClick={(event) => setPassword(event.target.value)}
        />
      </FormControl>
      <Link to="/reset-password">Forgot Password?</Link>
      <Box
        display="flex"
        justifyContent="space-around"
        flexDirection={["column", "row"]}
        gridGap={3}
      >
        <Button
          type="button"
          width="max-content"
          justifySelf="center"
          alignSelf="center"
          as={Link}
          to="/signup"
        >
          Register
        </Button>
        <Button
          type="submit"
          width="max-content"
          justifySelf="center"
          alignSelf="center"
          colorScheme="purple"
        >
          Sign in
        </Button>
      </Box>
    </Box>
  );
}
