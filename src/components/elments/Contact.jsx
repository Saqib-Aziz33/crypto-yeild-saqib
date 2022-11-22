import {
  Container,
  Heading,
  Input,
  Stack,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { db } from "../../firebase.config";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const collectionId = "crypto_yeild";

  const submitMessage = async () => {
    if (!name || !email || !message) {
      return alert("Form fields are empty");
    }
    try {
      setLoading(true);
      const docRef = await addDoc(collection(db, collectionId), {
        name,
        email,
        message,
      });
      alert("form submitted");
      resetForm();
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("something went wrong while submitting form");
    } finally {
      setLoading(false);
    }
  };

  function resetForm() {
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="contact">
      <Container maxW={600} py={16}>
        <Heading textAlign="center" className="text-grad">
          Contact Us
        </Heading>
        <Stack mt={8} gap={3}>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Textarea
            placeholder="Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button
            onClick={submitMessage}
            className="ch-button"
            isLoading={loading}
          >
            Submit
          </Button>
        </Stack>
      </Container>
    </div>
  );
}
export default Contact;
