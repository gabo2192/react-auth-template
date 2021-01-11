import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Heading,
} from "@chakra-ui/react";

export function PasswordConfirmation() {
  const [code, setCode] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ code, newPassword });
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
        Password Confirmation
      </Heading>
      <FormControl>
        <FormLabel>Confirmation Code</FormLabel>
        <Input
          type="code"
          placeholder="123456"
          onClick={(event) => setCode(event.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>New Password</FormLabel>
        <Input
          type="password"
          onClick={(event) => setNewPassword(event.target.value)}
        />
      </FormControl>
      <Box
        display="flex"
        justifyContent="space-around"
        flexDirection={["column", "row"]}
        gridGap={3}
      >
        <Button
          type="submit"
          width="max-content"
          justifySelf="center"
          alignSelf="center"
          colorScheme="purple"
        >
          Confirm Password
        </Button>
      </Box>
    </Box>
  );
}
