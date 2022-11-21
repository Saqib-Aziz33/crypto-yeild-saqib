import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
  Stack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaBars } from "react-icons/fa";

export default function MobileNav({ links }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} className="mobile-toggler" onClick={onOpen}>
        <FaBars />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent className="bg-secondary">
          <DrawerCloseButton color="white" />
          <DrawerHeader color="white">Crypto Yeild</DrawerHeader>

          <DrawerBody>
            <Stack mt={8} gap={2}>
              {links.map((link) => (
                <a href={`/${link.toLowerCase()}`} key={link}>
                  <Text className="text-gray" fontWeight="600">
                    {link}
                  </Text>
                </a>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
