import { Center, Container, Heading, Text } from "@chakra-ui/react";
import Button from "../util/Button";

function CryptoCom() {
  return (
    <div className="crypto-com">
      <Container textAlign="center">
        <Text>CRYPTO.COM VISA CARD</Text>
        <Heading fontSize="48px">The only card you need</Heading>
        <Text fontWeight={400} mt={4}>
          Enjoy up to 5% back on all spending with your sleek, pure metal card.
          No annual fees. Top-up with fiat or crypto.
        </Text>
        <Center mt={12}>
          <Button text="Choose your cards" white={true} />
        </Center>
      </Container>
    </div>
  );
}
export default CryptoCom;
