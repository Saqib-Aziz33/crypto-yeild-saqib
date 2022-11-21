import { Button, Heading, Image, Text } from "@chakra-ui/react";
import data from "../util/analyticsData.json";

function Table() {
  return (
    <>
      <table>
        {data.map((item, i) => (
          <tr key={i} style={{ borderBottom: "1px solid #545D6945" }}>
            <td>
              <Heading fontWeight={600} size="lg" color="#2C3A4B">
                {item.name}
                <Text
                  as="span"
                  color="#545D69"
                  fontWeight={400}
                  fontSize="18px"
                  ml={2}
                >
                  {item.sub}
                </Text>
              </Heading>
            </td>
            <td>
              <Heading size="lg">{item.price1}</Heading>
            </td>
            <td>
              <Text color="#FF6262">{item.percent}</Text>
            </td>
            <td>
              <Text fontWeight={600}>{item.price2}</Text>
            </td>
            <td>
              <Image
                src={`/assets/${i % 2 === 0 ? "graph1" : "graph2"}.png`}
                // width="100px"
                maxW="200px"
              />
            </td>
            <td>
              <Button
                bg="#160F1A"
                color="white"
                fontWeight={400}
                _hover={{ bgColor: "#3d3d3d" }}
              >
                Trade
              </Button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}
export default Table;
