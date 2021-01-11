import { useHistory } from "react-router-dom";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Heading,
} from "@chakra-ui/react";

export function EmailConfirmation() {
  const [code, setCode] = useState(null);
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ code });
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
        Email Confirmation
      </Heading>
      <FormControl>
        <FormLabel>Confirmation Code</FormLabel>
        <Input
          type="code"
          placeholder="123456"
          onClick={(event) => setCode(event.target.value)}
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
          Confirm Email
        </Button>
      </Box>
    </Box>
  );
}
