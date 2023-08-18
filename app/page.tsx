import { Features } from "../components/Home/Feautres/Features";
import { Hero } from "../components/Home/Hero/Hero";
import { Served } from "../components/Home/Served/Served";
import { Pricing } from "../components/Home/Pricing/Pricing";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Served />
      <Footer />
    </main>
  );
}
