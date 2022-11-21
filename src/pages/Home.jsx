import Analytics from "../components/elments/Analytics";
import Hero from "../components/elments/Hero";
import CryptoCom from "../components/elments/CryptoCom";
import Earn from "../components/elments/Earn";
import Trade from "../components/elments/Trade";
import TradeSubSection from "../components/elments/TradeSubSection";

function Home() {
  return (
    <>
      <Hero />
      <Analytics />
      <CryptoCom />
      <Earn />
      <Trade />
      <TradeSubSection />
    </>
  );
}
export default Home;
