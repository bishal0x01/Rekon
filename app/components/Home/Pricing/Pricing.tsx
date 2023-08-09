import { PricingCard } from "./PricingCard";

export function Pricing() {
  return (
    <section className=" lg:px-[15%] px-[5%] py-9 flex flex-col items-center justify-center align-center">
      <div className="top flex flex-col gap-3 w-[60%] pb-12">
        <div className="section-name text-xl text-purple-400 text-center">
          Pricing
        </div>
        <div className="section-heading text-4xl font-bold text-center">
          Simple Pricing for Everyone
        </div>
      </div>
      <div className="flex justify-center flex-col md:flex-row gap-10 h-fit mt-10">
        <PricingCard
          price="$80"
          duration="Semi-Annually"
          border="border-none"
        />
        <PricingCard
          price="$15"
          duration="Monthly"
          border="border-[#ffffff] border-2 scale-[115%]"
        />
        <PricingCard price="$150" duration="Annually" border="border-none" />
      </div>
    </section>
  );
}
