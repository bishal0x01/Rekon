import { Features } from "./components/Home/Feautres/Features";
import { Hero } from "./components/Home/Hero/Hero";
import { Served } from "./components/Home/Served/Served";
import { Pricing } from "./components/Home/Pricing/Pricing";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Pricing />
      <Served />
    </main>
  );
}
