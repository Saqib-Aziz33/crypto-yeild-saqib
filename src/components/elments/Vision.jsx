import {
  Container,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";

function Vision() {
  return (
    <div className="vision">
      <div className="overlay" />
      <Container className="container" maxW="400px">
        <Text className="text-grad">OUR VISION</Text>
        <Heading my={8}>Cryptocurrency in Every Wallet™</Heading>
        <HStack gap={8} justify="center">
          <Stack>
            <Text>Founded in</Text>
            <Heading className="text-primary" size="lg">
              2022
            </Heading>
          </Stack>
          <Divider orientation="vertical" h={12} color="#545D69" />
          <Stack>
            <Text>Users</Text>
            <Heading className="text-primary" size="lg">
              70M
            </Heading>
          </Stack>
        </HStack>
      </Container>
    </div>
  );
}
export default Vision;
