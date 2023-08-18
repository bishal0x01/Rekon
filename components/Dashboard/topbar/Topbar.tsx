"use client";

import React, { useState } from "react";
import PopupSearch from "../popupsearch/PopupSearch";

export default function Topbar() {
  const [openPopup, setOpenPopup] = useState(true);

  function togglePopup() {
    setOpenPopup(!openPopup);
  }

  return (
    <div className="pb-5 flex md:justify-between md:w-full flex-col md:flex-row">
      <div className="greet flex flex-col gap-1">
        <div className="summary text-xl font-bold ">Dashboard Summary</div>
        <div className="text hidden md:block">
          <span className="font-bold text-yellow-200">Welcome</span>
          <span>, its great to see you again</span>
        </div>
      </div>
      <div className="cta flex gap-4 flex-col lg:flex-row">
        <div className="search border-2 flex h-fit border-zinc-500 rounded-lg px-5 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            onClick={togglePopup}
            type="text"
            placeholder="rekon.co"
            className="hidden w-1/2 md:w-full md:block ml-5 bg-transparent outline-none "
            name=""
            id=""
          />
        </div>
        <div className="tasks">
          <button className="border border-zinc-600 hover:bg-zinc-600 bg-zinc-800 px-5 py-2 rounded-lg">
            TASKS
          </button>
        </div>
        <div className="options">
          <button className="border border-zinc-600 hover:bg-zinc-600 bg-zinc-800 px-5 py-2 rounded-lg">
            TASKS
          </button>
        </div>
      </div>
      <div className={`${openPopup ? "hidden" : "block"}`}>
        <PopupSearch func={togglePopup} />
      </div>
    </div>
  );
}
