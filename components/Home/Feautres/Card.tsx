export function Card(props: any) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-[#27272a] px-5 text-center pb-10 my-5">
      <div className="icon bg-[#a16207] relative -top-[2.1rem] p-2 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
          ></path>
        </svg>
      </div>
      <div className="card-title py-3 text-lg font-semibold">{props.title}</div>
      <div className="card-des">{props.des}</div>
    </div>
  );
}
