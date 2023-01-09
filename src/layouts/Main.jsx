import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const links = [
  {
    text: "User",
    to: "/user",
  },
  {
    text: "Comments",
    to: "/comments",
  },
  {
    text: "Modify User",
    to: "/modify-user",
  },
];

const imgUrl =
  "https://tkdodo.eu/blog/static/e34c9bdb709f49c90b76af647160ca18/73f08/react-query.png";

export default function MainLayout() {
  return (
    <main className="flex flex-col h-full">
      <header className="flex flex-row justify-start items-center px-4 shrink-0 h-14 bg-slate-900">
        <div className="w-[10%]">
          <img src={imgUrl} alt="Reactquery" className="h-[50px]" />
        </div>
        <p className="text-center text-white font-[700] text-[23px] w-[90%]">
          React Query
        </p>
      </header>
      <div className="flex grow">
        <aside className="flex flex-col w-56 gap-2 p-4  bg-slate-900 shrink-0">
          {links.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                `px-2 py-1 rounded text-white ${
                  isActive
                    ? "font-semibold bg-orange-400"
                    : "font-normal hover:bg-orange-300"
                }`
              }
            >
              {item.text}
            </NavLink>
          ))}
        </aside>
        <section className="p-4 overflow-scroll grow">
          <Outlet />
        </section>
      </div>
    </main>
  );
}
