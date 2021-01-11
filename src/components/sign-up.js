import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Heading,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

export function SignUp() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password, name, phone });
    history.pushState("/email-confirmation");
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
        Sign Up
      </Heading>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          type="name"
          placeholder="Jhon Doe"
          onChange={(event) => setName(event.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Phone</FormLabel>
        <Input
          type="tel"
          placeholder="+51912312123"
          onChange={(event) => setPhone(event.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <InputGroup></InputGroup>
        <Input
          type="email"
          colorScheme="purple"
          placeholder="jhon.doe@doecorp.com"
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          pr="4.5rem"
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button
            h="1.75rem"
            size="sm"
            onClick={() => setShowPassword((c) => !c)}
          >
            {showPassword ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </FormControl>
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
          to="/signin"
        >
          I already have an account
        </Button>
        <Button
          type="submit"
          width="max-content"
          justifySelf="center"
          alignSelf="center"
          colorScheme="purple"
        >
          Sign up
        </Button>
      </Box>
    </Box>
  );
}
