import {
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Button from "../util/Button";

function Defi() {
  return (
    <div className="defi">
      <Container
        maxW={1000}
        h={{ base: "auto", md: "450px" }}
        overflowY="hidden"
      >
        <Grid gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}>
          <GridItem display={{ base: "none", md: "block" }}>
            <Image mx="auto" src="/assets/mobile.png" alt="" />
          </GridItem>

          <GridItem pt={{ base: 0, md: 32 }} pb={{ base: 4, md: 0 }}>
            <Text fontSize="18px" className="text-grad">
              CRYPTO.COM DEFI
            </Text>
            <Heading fontSize="48px">DeFi Made Simple</Heading>
            <Text my={2}>
              <Text as="span" color="blue.400">
                DeFi Wallet.
              </Text>{" "}
              Your Keys, Your Crypto.
            </Text>
            <Text my={2}>
              <Text as="span" color="blue.400">
                DeFi Earn.
              </Text>{" "}
              No lock-up period and stable returns.
            </Text>
            <Text my={2}>
              <Text as="span" color="blue.400">
                DeFi Swap.
              </Text>{" "}
              Swap DeFi coins and earn Triple Yield.
            </Text>
            <Button text="Calculate Rewards" />
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
}
export default Defi;
