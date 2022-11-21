import {
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

function Hero() {
  return (
    <div className="hero">
      <Container maxW={1400}>
        <Grid gridTemplateColumns={{ base: "1fr", lg: "1fr 2fr" }}>
          <GridItem
            display={{ base: "none", lg: "block" }}
            className="mobile-item"
          >
            <img src="/assets/mobile.png" alt="" className="mobile-img" />
          </GridItem>

          <GridItem>
            <Heading fontSize="48px">
              The World’s Fastest Growing Crypto App
            </Heading>

            <Stack mt={6}>
              <HStack>
                <img src="/assets/tick.png" alt="" />
                <Text color="#EBEEF2;">
                  Join <span className="text-primary">50m+</span> users buying
                  and selling{" "}
                  <span className="text-primary">
                    250+ cryptocurrencies at true cost
                  </span>
                </Text>
              </HStack>
              <HStack>
                <img src="/assets/tick.png" alt="" />
                <Text color="#EBEEF2;">
                  Spend with the Crypto Yeild Visa Card and{" "}
                  <span className="text-primary">get up to 5%</span> back
                </Text>
              </HStack>
              <HStack>
                <img src="/assets/tick.png" alt="" />
                <Text color="#EBEEF2;">
                  Grow your portfolio by{" "}
                  <span className="text-primary">
                    receiving rewards up to 14.5%
                  </span>{" "}
                  on your crypto assets
                </Text>
              </HStack>
            </Stack>

            {/* buttons */}
            <HStack mt={12} gap={4}>
              <img src="/assets/android.png" alt="" />
              <img src="/assets/ios.png" alt="" />
              <Image
                display={["none", null, "block"]}
                src="/assets/qr.png"
                alt=""
              />
            </HStack>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
}
export default Hero;
