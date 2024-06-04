import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" mb={6}>Contact Us</Heading>
      <Text fontSize="lg" mb={4}>
        For inquiries, please reach out to us at:
      </Text>
      <Text fontSize="lg" mb={4}>
        Email: contact@financialtimes.com
      </Text>
      <Text fontSize="lg">
        Phone: +44 20 1234 5678
      </Text>
    </Container>
  );
};

export default Contact;