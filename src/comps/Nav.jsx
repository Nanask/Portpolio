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
      <li className="p-3 space-x-3 hover: cursor-pointer text-black">
        <NavLink className={({ isActive }) => (isActive ? "p-3 bg-bg-nav rounded-md text-gray-50 transition-all" : "")} to={item.link}>
          {item.title}
        </NavLink>
      </li>
    );
  });

  return (
    <section className="bg-black">
      <ul className="flex space-x-5 p-4 text-lg justify-end bg-white ">{navList}</ul>
    </section>
  );
};
