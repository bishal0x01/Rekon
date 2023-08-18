export default function ProfileItem() {
  return (
    <div className="flex gap-3 px-5 bg-zinc-800 py-3 rounded-lg hover:bg-zinc-700 cursor-pointer items-center">
      <div className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      <div className="text flex-col hidden md:flex">
        <div className="email flex flex-wrap max-w-[50%] text-sm">ankur0X01@gmail...</div>
        <div className="text text-xs text-[#c1c0c0] text-center">View Profile</div>
      </div>
    </div>
  );
}
