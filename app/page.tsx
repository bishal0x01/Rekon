import { Features } from "./components/Home/Feautres/Features";
import { Hero } from "./components/Home/Hero/Hero";
import { Served } from "./components/Home/Served/Served";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <Served />
      </main>
    </>
  );
}
