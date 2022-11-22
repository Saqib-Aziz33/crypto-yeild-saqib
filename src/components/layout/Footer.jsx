import {
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  Link,
  HStack,
  Text,
  Stack,
} from "@chakra-ui/react";
// icons
import {
  BsApple,
  BsFacebook,
  BsGithub,
  BsGoogle,
  BsInstagram,
  BsLinkedin,
  BsMedium,
  BsPinterest,
  BsTelegram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <Container maxW={1400} p={4}>
        <Grid
          rowGap={4}
          py={6}
          gridTemplateColumns={{
            base: "1fr 1fr",
            md: "repeat(4, 1fr)",
            lg: "repeat(6, 1fr)",
          }}
        >
          <GridItem>
            <Heading as="h4">App</Heading>
            <Link>Buy and Sell</Link>
            <Link>Crypto Earn</Link>
            <Link>Crypto Credit</Link>
            <Link>Crypto.com Pay</Link>
          </GridItem>

          <GridItem>
            <Heading as="h4">Exchange</Heading>
            <Link>Exchange Home</Link>
            <Link>Margin Trading</Link>
            <Link>Derivatives Trading</Link>
            <Link>The Syndicate</Link>
            <Link>Supercharger</Link>
            <Link>Trading Arena</Link>
            <Link>Commerce</Link>
          </GridItem>

          <GridItem>
            <Heading as="h4">Blockchain</Heading>
            <Link>Crypto.org Chain</Link>
            <Link>Chain Explorer</Link>
          </GridItem>

          <GridItem>
            <Heading as="h4">Resources</Heading>
            <Link>Prices</Link>
            <Link>Site Widgets</Link>
            <Link>Tax</Link>
            <Link>Support</Link>
          </GridItem>

          <GridItem colSpan={2}>
            <HStack>
              <img src="/assets/appstore.png" alt="" />
              <img src="/assets/playstore.png" alt="" />
            </HStack>
            <Stack
              className="icons"
              gap={6}
              mt={2}
              wrap="wrap"
              maxW="250px"
              direction="row"
              justifyContent="flex-start"
            >
              <BsFacebook />
              <BsTwitter />
              <BsInstagram />
              <BsLinkedin />
              <BsGoogle />
              <BsYoutube />
              <BsApple />
              <BsPinterest />
              <FaDiscord />
              <BsTelegram />
              <BsMedium />
              <BsGithub />
            </Stack>
          </GridItem>

          {/* <GridItem>
            <Heading as="h4">App</Heading>
            <Link></Link>
            <Link></Link>
            <Link></Link>
            <Link></Link>
          </GridItem> */}
        </Grid>
        <Divider />

        <Text pt={4}>
          Copyright © 2018 - 2022 Crypto.com. All rights reserved.
        </Text>
      </Container>
    </footer>
  );
}
export default Footer;
