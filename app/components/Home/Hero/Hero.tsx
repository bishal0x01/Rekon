export function Hero() {
  return (
    <section className="h-[80vh] lg:h-[80vh] flex flex-col items-center justify-center gap-5 lg:px-[15%] px-[5%] py-9">
      <div className="name text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Rekon
      </div>
      <div className="des text-xl">For External Security Assessment</div>
      <div className="cta w-fit border-2 border-[#d8d4d4] hover:border-white cursor-pointer rounded-lg px-4 py-2">
        <a>Get Started</a>
      </div>
    </section>
  );
}
