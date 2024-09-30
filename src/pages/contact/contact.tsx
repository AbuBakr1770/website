import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import {Fragment} from "react";
import {Controller, Form, useForm} from "react-hook-form";

export default function Contact() {
  const {
    control,
    handleSubmit
  } = useForm<{
    name: string;
    email: string;
    message: string;
  }>();
  return (
    <Center my="44">
      <VStack spacing={30}>
        <Heading maxW="750px" textAlign="center" color="primary.700">
          Get In Touch
        </Heading>
        <Box bgColor="gray.100" p="14" borderRadius="3xl">
          <Form
            control={control}
            onSubmit={(e) => {
              handleSubmit(
                (data) => {},
                (error) => {
                  console.log(error);
                }
              )(e.event);
            }}
          >
            <VStack w="500px">
              <Controller
                rules={{
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                }}
                control={control}
                name="name"
                render={({field, fieldState: {error}}) => (
                  <Fragment>
                    <Input
                      placeholder="Name"
                      bgColor="white"
                      size="lg"
                      isInvalid={!!error}
                      {...field}
                    />
                    <Text color="red">{error?.message}</Text>
                  </Fragment>
                )}
              />
              <Controller
                rules={{
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                }}
                control={control}
                name="email"
                render={({field, fieldState: {error}}) => (
                  <Fragment>
                    <Input
                      placeholder="Email"
                      bgColor="white"
                      size="lg"
                      isInvalid={!!error}
                      {...field}
                    />
                    <Text color="red">{error?.message}</Text>
                  </Fragment>
                )}
              />
              <Controller
                rules={{
                  required: {
                    value: true,
                    message: "Message is required",
                  },
                }}
                control={control}
                name="message"
                render={({field, fieldState: {error}}) => (
                  <Fragment>
                    <Textarea
                      placeholder="Message"
                      bgColor="white"
                      size="lg"
                      isInvalid={!!error}
                      {...field}
                    />
                    <Text color="red">{error?.message}</Text>
                  </Fragment>
                )}
              />

              <Button w="full" type="submit">
                Submit
              </Button>
            </VStack>
          </Form>
        </Box>
      </VStack>
    </Center>
  );
}
