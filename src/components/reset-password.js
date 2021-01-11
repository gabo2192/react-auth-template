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

export function ResetPassword() {
  const [email, setEmail] = useState(null);
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
    history.push("/password-confirmation");
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
        Reset Password
      </Heading>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          placeholder="jhon.doe@doecorp.com"
          onClick={(event) => setEmail(event.target.value)}
        />
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
          I've remember my password!
        </Button>
        <Button
          type="submit"
          width="max-content"
          justifySelf="center"
          alignSelf="center"
          colorScheme="purple"
        >
          Recover my password
        </Button>
      </Box>
    </Box>
  );
}
