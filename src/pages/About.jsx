import { Box, Container, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" mb={6}>About Us</Heading>
      <Text fontSize="lg" mb={4}>
        The Financial Times is a British daily newspaper printed in broadsheet and published digitally that focuses on business and economic current affairs. 
      </Text>
      <Text fontSize="lg">
        Our mission is to deliver accurate and insightful news to our readers, helping them stay informed about the latest developments in the financial world.
      </Text>
    </Container>
  );
};

export default About;