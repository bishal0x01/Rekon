"use: client";

export function Footer() {
  return (
    <footer className="flex justify-between pt-16 pb-10 flex-col px-5 md:px-10">
      <div className="first flex justify-between px-8 md:px-16 pb-20 flex-col md:flex-row gap-10">
        <div className="left flex flex-col gap-3">
          <div className="company flex gap-5 items-center">
            <div className="logo">
              <img
                className="h-8"
                src="https://prettyrecon.com/static/assets/img/logo.svg"
              />
            </div>
            <span className="name">Rekon</span>
          </div>
          <div className="des text-[#9ca3af]">Pretty-fy your reconnaissance</div>
        </div>
        <div className="right flex flex-col gap-3 lg:pr-[7rem]">
          <span className="">Company</span>
          <ul className="text-[#9ca3af]">
            <li className="hover:text-[#fff] cursor-pointer">Privacy Policy</li>
            <li className="hover:text-[#fff] cursor-pointer">Shipping Policy</li>
            <li className="hover:text-[#fff] cursor-pointer">Terms and Condition</li>
            <li className="hover:text-[#fff] cursor-pointer">Refund / Cancellation</li>
          </ul>
        </div>
      </div>
      <div className="second flex flex-col md:flex-row justify-between py-3 px-5 md:px-12 text-[#9ca3af] rounded-lg bg-[#27272a] gap-5 items-center">
        <div className="left">
          <span className="text-sm">© 2023 Rekon — All Rights Reserved</span>
        </div>
        <div className="right">
          <ul className="flex gap-4">
            <a>
              <li>
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </li>
            </a>
            <a>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path>
                  <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path>
                </svg>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}
