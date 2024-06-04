import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Welcome to Financial Times</Heading>
        <Text fontSize="lg">
          Stay updated with the latest news in finance, business, and economics.
        </Text>
        <Box bg="gray.100" p={6} borderRadius="md" w="full">
          <Heading as="h2" size="lg" mb={4}>Main News Section</Heading>
          <Text>
            Here you will find the most important news articles of the day.
          </Text>
        </Box>
        <Box bg="gray.100" p={6} borderRadius="md" w="full">
          <Heading as="h2" size="lg" mb={4}>Sidebar</Heading>
          <Text>
            Additional content and links can be found here.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;