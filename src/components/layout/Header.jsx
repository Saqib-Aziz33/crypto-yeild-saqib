import {
  Container,
  Heading,
  HStack,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import { IoLogoGooglePlaystore, IoLogoApple } from "react-icons/io5";
import MobileNav from "./MobileNav";

const links = ["NFT", "Price", "Products", "Company", "Learn"];

function Header() {
  return (
    <header className="header">
      <Container maxW={1400} p={4}>
        <HStack justify="space-between">
          <Heading color="white">Crypto Yeild</Heading>

          {/* desktop menu */}
          <HStack gap={8} display={["none", null, "flex"]}>
            {links.map((link) => (
              <a href={`/${link.toLowerCase()}`} key={link}>
                <Text className="text-gray" fontWeight="600">
                  {link}
                </Text>
              </a>
            ))}
            <HStack gap={2}>
              <IconButton icon={<IoLogoApple size={20} />} />
              <IconButton icon={<IoLogoGooglePlaystore size={20} />} />
            </HStack>
          </HStack>

          {/* mobile menu */}
          <Box display={["block", null, "none"]}>
            <MobileNav links={links} />
          </Box>
        </HStack>
      </Container>
    </header>
  );
}
export default Header;

// IconButton component for icons
function IconButton({ icon }) {
  return (
    <Button
      px={2}
      borderWidth={1}
      className="icon-button"
      bg="transparent"
      color="#fff"
    >
      {icon}
    </Button>
  );
}
