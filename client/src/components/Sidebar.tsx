import { useState } from "react";

import { useAppContext } from "../context/AppContext";
import moment from "moment";
import { useNavigate } from "react-router";

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  // const navigate = useNavigate();
  const { user, chats, selectedChat } = useAppContext();
  const [search, setSearch] = useState("");

  const navItems = [
    { name: "Community Images", icon: "", onclick: () => {} },
    {
      name: `Credits: ${user?.credits}`,
      placeholder: "Buy more credits",
      icon: "",
      onclick: () => {},
    },
    { name: "Dark mode", icon: "", onclick: () => {} },
    { name: user?.name ? user.name : "Login", icon: "", onclick: () => {} },
  ];

  return (
    <div className="flex flex-col h-screen min-w-72 p-5 dark:bg-gradient-to-b from-[#242124] to-[#000000]/30 border-r border-[#80609F]/30 backdrop-blur-3xl transition-all duration-500 max-md:absolute left-0 z-1">
      {/* TODO: check this logo, it change if it's dark */}
      <img src={undefined} alt="app logo" className="w-full max-w-48" />

      <button className="flex justify-center items-center w-full py-2 mt-10 text-white bg-gradient-to-r from-[#A456F7] to-[#3D81F6] text-sm rounded-md cursor-pointer">
        <span className="mr-2 text-xl">+</span> New Chat
      </button>

      <div className="">
        {/* TODO: add search icon */}
        <img src={undefined} alt="" />
        <input
          className="text-xs placeholder:text-gray-400 outline-none"
          type="text"
          placeholder="Search conversations"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {chats?.length > 0 && <p className="mt-4 text-sm">Recent chats</p>}
      <div className="flex-1 overflow-y-scroll mt-3 text-sm space-y-3">
        {chats?.length > 0 &&
          chats
            .filter((chat) =>
              chat.messages[0]
                ? chat.messages[0].content
                    .toLowerCase()
                    .includes(search.toLowerCase())
                : chat.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((chat) => (
              <div
                key={chat.id}
                className={`p-2 px-4 dark:bg-[#57317C]/10 border border-gray-300 dark:border-[#80609F]/15 rounded-md cursor-pointer flex justify-between group`}
              >
                <div>
                  <p className="truncate w-full">
                    {chat.messages.length > 0
                      ? chat.messages[0]?.content.slice(0, 32)
                      : chat.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-[#B1A6C0]">
                    {moment(chat.createdAt).fromNow()}
                  </p>
                </div>
                {/* TODO: add delete icon */}
                <img className="" src={undefined} alt="" />
              </div>
            ))}
      </div>

      {/* Community images */}
      {navItems.map((item) => (
        <div
          key={item.name}
          className="flex items-center gap-2 p-3 mt-4 border border-gray-300 dark:border-white/15 rounded-md cursor-pointer hover:scale-103 transition-all"
          onClick={item.onclick}
        >
          <div className="">
            {/* TODO: fix this thing with the icon */}
            <img src={item.icon} alt="" />
            <div className="flex flex-col text-sm">
              <p>{item.name}</p>
              {item.placeholder && <p className="">{item.placeholder}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
