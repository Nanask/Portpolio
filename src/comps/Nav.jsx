import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  const [scrollY, setScrollY] = useState(0);
  const [style, setStyle] = useState({});

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

  // scroll에 따른 네비게이션 색변화하기
  const scrollHandler = () => {
    const navbar = document.querySelector(".nav_bar");
    const navbarHeight = navbar.getBoundingClientRect().height;
    window.addEventListener("scroll", () => setScrollY(window.scrollY));
    if (scrollY > navbarHeight) {
      navbar.classList.add("navbar_scroll");
    } else {
      navbar.classList.remove("navbar_scroll");
    }
  };
  useEffect(() => {
    (() => {
      window.addEventListener("scroll", () => setScrollY(window.scrollY));
      scrollHandler();
    })();
    return () => {
      window.removeEventListener("scroll", () => setScrollY(window.scrollY));
    };
  }, [scrollHandler]);

  const navList = navItem.map((item) => {
    return (
      <li className="p-3 space-x-3 text-black nav_li">
        <NavLink className={({ isActive }) => (isActive ? "p-3 hover: cursor-pointer bg-bg-nav rounded-md text-gray-50 transition-all" : "")} to={item.link}>
          {item.title}
        </NavLink>
      </li>
    );
  });

  return (
    <section className="fixed top-0 left-0 w-full z-10 bg-transparent nav_bar transition duration-300" style={style}>
      <ul className="flex space-x-5 p-4 text-lg  justify-end">{navList}</ul>
    </section>
  );
};
