import {
  Container,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineDesktop, AiOutlineMobile } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";

function Trade() {
  return (
    <div className="trade">
      <Container maxW={1400} textAlign="center">
        <Text className="text-grad">CRYPTO.COM EXCHANGE</Text>
        <Heading fontSize="48px">
          Trade with confidence on the world’s fastest and most secure crypto
          exchange
        </Heading>

        <Container maxW={600} mt={12} px={0}>
          <Stack direction="row" gap={8} alignItems="flex-start" wrap="wrap">
            <HStack>
              <AiOutlineDesktop size={50} />
              <Stack textAlign="start" fontSize="16px">
                <Text>Desktop</Text>
                <Link
                  href="#"
                  color="blue.600"
                  textDecor="underline"
                  style={{ marginTop: 0 }}
                >
                  Go to Exchange{" "}
                  <HiOutlineExternalLink style={{ display: "inline" }} />
                </Link>
              </Stack>
            </HStack>

            <HStack>
              <AiOutlineMobile size={50} />
              <Stack>
                <Text textAlign="start">Android Apps</Text>
                <HStack>
                  <img src="/assets/android-grad.png" alt="" />
                  <img src="/assets/ios-grad.png" alt="" />
                </HStack>
              </Stack>
            </HStack>
          </Stack>
        </Container>
      </Container>
    </div>
  );
}
export default Trade;
