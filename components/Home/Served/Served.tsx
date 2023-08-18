import { ServedCard } from "./ServedCard";

export function Served() {
  return (
    <section className="flex flex-col items-center gap-5 pt-16 lg:px-[15%] px-[5%] py-9">
      <div className="title text-4xl font-semibold text-center">
        Hundreds of Scans Served Every Day
      </div>
      <div className="des max-w-[80%] text-center md:pb-16">
        We actively scan and maintain internet-wide web & network assets for
        known vulnerabilities. Which helps companies & security researchers to
        stay ahead of malicious actor by mitigating potential attacks.
      </div>
      <div className="cards align-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        <ServedCard number="627427" des="Total Scans" />
        <ServedCard number="9788" des="Scans in the past 30 days" />
        <ServedCard number="316" des="Scans in the past 24 hours" />
      </div>
    </section>
  );
}
