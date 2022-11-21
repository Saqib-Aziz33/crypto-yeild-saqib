import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Table from "./Table";

function Analytics() {
  return (
    <div className="analytics">
      <Container maxW={1400} mt={40}>
        <Container maxW={600} textAlign="center">
          <Text className="text-grad">
            SECURELY BUY, SELL, STORE, SEND AND TRACK
          </Text>
          <Heading fontSize="48px">Buy crypto at true cost</Heading>
          <Text color="#2C3A4B" mt={4}>
            Buy and sell 250+ cryptocurrencies with 20+ fiat currencies using
            bank transfers or your credit/debit card.
          </Text>
        </Container>

        <Box mt={16} overflowX="scroll">
          <Table />
        </Box>
      </Container>
    </div>
  );
}
export default Analytics;
