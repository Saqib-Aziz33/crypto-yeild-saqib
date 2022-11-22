import {
  Box,
  Container,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import Button from "../util/Button";

function Contact() {
  return (
    <div className="contact">
      <Container maxW={600} py={16}>
        <Heading textAlign="center" className="text-grad">
          Contact Us
        </Heading>
        <Stack mt={8} gap={3}>
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Textarea placeholder="Message..." />
          <Box alignSelf="flex-end">
            <Button
              text="Submit"
              style={{ paddingTop: "8px", paddingBottom: "8px" }}
            />
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
export default Contact;
