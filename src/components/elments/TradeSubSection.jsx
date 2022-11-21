import {
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

function TradeSubSection() {
  return (
    <div className="trade-sub-section">
      <Container maxW={1000}>
        <Image mx="auto" src="/assets/medias.png" />

        <Grid
          mt={8}
          gap={4}
          gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        >
          <GridItem>
            <Heading>Liquidity</Heading>
            <Text mt={4}>
              Deep order book liquidity in all market conditions
            </Text>
          </GridItem>

          <GridItem>
            <Heading>Speed</Heading>
            <Text mt={4}>2.7m TPS matching engine</Text>
            <Text mt={4}>50 micro second core latency</Text>
          </GridItem>

          <GridItem>
            <Heading>Security</Heading>
            <Text mt={4}>SOC2 Type 1 Compliance</Text>
            <Text mt={4}>PCI:DSS 3.2.1 Level 1 compliance</Text>
            <Text mt={4}>ISO/IEC 27001:2013</Text>
            <Text mt={4}>ISO/IEC 27701:2019</Text>
            <Text mt={4}>Singapore Data Protection Trust Mark</Text>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
}
export default TradeSubSection;
