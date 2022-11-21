import { ChakraProvider } from "@chakra-ui/react";
// layout
import Base from "./components/layout/Base";
// pages
import Home from "./pages/Home";
// others
import "./app.scss";

function App() {
  return (
    <>
      <ChakraProvider>
        <Base>
          <Home />
        </Base>
      </ChakraProvider>
    </>
  );
}
export default App;
