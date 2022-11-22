import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import Button from "../util/Button";

function Earn() {
  return (
    <div className="earn">
      <Container
        maxW={1000}
        h={{ base: "auto", md: "450px" }}
        overflowY="hidden"
      >
        <Grid gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}>
          <GridItem pb={{ base: 4, md: 0 }}>
            <Text fontSize="18px" className="text-grad">
              CRYPTO EARN
            </Text>
            <Heading fontSize="48px">
              Deposit crypto, <br /> earn rewards
            </Heading>
            <Text fontSize="18px" my={4}>
              Choose from 40+ cryptocurrencies and stablecoins.
            </Text>
            <Button text="Calculate Rewards" />

            <HStack mt={8} color="#6D7580" gap={8}>
              <Box>
                <Text color="#2C3A4B">upto</Text>
                <Heading fontSize="44px">14.5%</Heading>
                <Text color="#2C3A4B">p.a. on cryptos</Text>
              </Box>
              <Box>
                <Text color="#2C3A4B">upto</Text>
                <Heading fontSize="44px">8.5%</Heading>
                <Text color="#2C3A4B">p.a. on stablecoins</Text>
              </Box>
            </HStack>
          </GridItem>

          <GridItem display={{ base: "none", md: "block" }}>
            <Image mx="auto" src="/assets/mobile.png" alt="" />
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
}
export default Earn;
