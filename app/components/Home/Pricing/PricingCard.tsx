export function PricingCard(props: any) {
  return (
      <div
        className={`flex flex-col gap-3 px-8 py-10 rounded-xl ${props.border}`}
      >
        <div className="title-price text-4xl">{props.price}</div>
        <div className="duration text-lg pt-2 font-light">{props.duration}</div>
        <button className="flex justify-center my-5 w-inherit">
          <div className="cta w-[70%] text-center border-[#b8b4b4] hover:bg-[#ffffff] hover:text-black transition duration-500 rounded-xl py-2 border-2">
            Get Started
          </div>
        </button>
        <ul className="flex flex-col gap-3">
          <li className="flex gap-4">
            <svg
              aria-hidden="true"
              className="h-6 w-6 flex-none fill-current stroke-current text-[#a16207]"
            >
              <path
                d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                stroke-width="0"
              ></path>
              <circle
                cx="12"
                cy="12"
                r="8.25"
                fill="none"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></circle>
            </svg>
            Access To Tools
          </li>
          <li className="flex gap-4">
            <svg
              aria-hidden="true"
              className="h-6 w-6 flex-none fill-current stroke-current text-[#a16207]"
            >
              <path
                d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                stroke-width="0"
              ></path>
              <circle
                cx="12"
                cy="12"
                r="8.25"
                fill="none"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></circle>
            </svg>
            Single Device
          </li>
          <li className="flex gap-4">
            <svg
              aria-hidden="true"
              className="h-6 w-6 flex-none fill-current stroke-current text-[#a16207]"
            >
              <path
                d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                stroke-width="0"
              ></path>
              <circle
                cx="12"
                cy="12"
                r="8.25"
                fill="none"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></circle>
            </svg>
            Schedule Unlimited Tasks
          </li>
        </ul>
      </div>
  );
}
