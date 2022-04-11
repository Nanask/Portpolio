import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  const navItem = [
    {
      id: 0,
      title: "Home",
      link: "/",
    },
    {
      id: 1,
      title: "About",
      link: "/about",
    },
    {
      id: 2,
      title: "Project",
      link: "/project",
    },
    {
      id: 3,
      title: "Skill",
      link: "/skill",
    },
    {
      id: 4,
      title: "Content",
      link: "/content",
    },
  ];

  const navList = navItem.map((item) => {
    return (
      <li className="space-x-2 hover:bg-yellow-200 p-3 rounded-md cursor-pointer important tw-text-black">
        <NavLink className={({ isActive }) => (isActive ? "p-3 border-2 border-yellow-200 border-solid rounded-md" : "")} to={item.link}>
          {item.title}
        </NavLink>
      </li>
    );
  });

  return (
    <section className="bg-black">
      <ul className="flex space-x-4 pl-3 py-4 text-lg justify-end bg-white border-bg-basic ">{navList}</ul>
    </section>
  );
};
