import { Card } from "./Card";

export function Features() {
  return (
    <section className="flex flex-col items-center lg:px-[15%] px-[5%] py-9">
      <div className="top flex flex-col items-center lg:w-[50%] gap-3">
        <div className="section-name text-xl text-purple-400">Features</div>
        <div className="section-heading text-4xl font-bold text-center">
          Powerful Pentesting Tools
        </div>
        <div className="section-des text-center text-lg">
          Rekon combines all tools & lets you analyse the results using
          various awesome filters. Optimised, our computation engine gives you
          faster & accurate results which can be used for further analysis.
        </div>
      </div>

      <div className="cards grid xl:grid-cols-3 md:grid-cols-2 gap-8 py-10">
        <Card
          title="Automated Asset Discovery & Management"
          des="We are using advanced reconnaissance techniques to find hidden web assets. Prettyrecon continuously checking out targets external attack surface. Most of organization of hundreds of internet facing assets, which are constantly growing. Prettyrecon makes it easy to keep track on this data & Its management."
        />
        <Card
          title="Continuous Subdomain Monitoring"
          des="Prettyrecon have a fully automated subdomains monitoring service that keep you up to date with new subdomains discovered,IP,Status code,Open Ports,CNAME records and more. All your data is securely stored in our database so you can download it at any time."
        />
        <Card
          title="Custom Subdomain Scanner"
          des="With prettyrecon you can provide your own list of web assets & run scans for vulnerabilities like sensitive data exposure, known CVE, server side misconfiguration, subdomain takeovers, exposed internal web services."
        />
        <Card
          title="Automated Vulnerability Scanning"
          des="Prettyrecon analyzes hidden & surface web assets for security weaknesses using our powerful web vulnerability scanner which tested & proven with many bug bounty targets."
        />
        <Card
          title="Client Side Vulnerability Scanning Tools"
          des="Prettyrecon have multiple client side vulnerabilty finding tools to find reflected XSS , DOM XSS with integration of hidden paramter finder & web crawlers."
        />
        <Card
          title="Collection of useful tools"
          des="We have multiple tools which comes handy while doing penetration testing. Tools like subnet finder, directory brute forcer, CSRF POC generator , hidden link finder , TYPO3 CMS vulnerability scanner makes life easy for penetration tester."
        />
      </div>
    </section>
  );
}
