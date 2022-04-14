import convertLayerAtRulesToControlComments from "@tailwindcss/postcss7-compat/lib/lib/convertLayerAtRulesToControlComments";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  // console.log("ref", ref);
  const [scrollY, setScrollY] = useState(0);
  const [style, setStyle] = useState({
    transition: `all 300ms ease-in-out`,
  });

  const navItem = [
    {
      id: ".header",
      title: "Home",
      link: "/",
    },
    {
      id: ".intro",
      title: "About",
      link: "/about",
    },
    {
      id: ".project",
      title: "Project",
      link: "/project",
    },
    {
      id: ".skill",
      title: "Skill",
      link: "/skill",
    },
    {
      id: ".footer",
      title: "Content",
      link: "/content",
    },
  ];
  // const homeRef = useRef(null);
  // const introRef = useRef(null);

  const component = (e) => {
    const id = e.target.dataset.id;
    console.log("id", id);
    const header = document.querySelector(".header");
    const intro = document.querySelector(".intro");
    // console.log("header", header);
    // console.log("intro", intro);
    const introScroll = intro.getBoundingClientRect().top;
    // console.log("introScroll", introScroll);
    const scrollView = document.querySelector(id);
    console.log("scrollView", scrollView);
    scrollView.scrollIntoView({ behavior: "smooth", top: introScroll });
    // setStyle();
    // if (id === "3") {
    // console.log("여기는 1번");
    // id.current.scrollIntoView();
    // }
  };

  // scroll에 따른 네비게이션 색변화하기
  const scrollHandler = () => {
    const navbar = document.querySelector(".nav_bar");
    const navbarHeight = navbar.getBoundingClientRect().height;
    window.addEventListener("scroll", () => setScrollY(window.scrollY));
    if (scrollY > navbarHeight) {
      navbar.classList.add("bg-red-500");
    } else {
      navbar.classList.remove("bg-red-500");
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
        <NavLink
          // key={item.id}
          data-id={item.id}
          onClick={component}
          // ref={homeRef}
          style={style}
          className={({ isActive }) => (isActive ? "p-3 hover: cursor-pointer bg-bg-nav rounded-md text-gray-50 transition-all" : "")}
          to={item.link}
        >
          {item.title}
        </NavLink>
      </li>
    );
  });

  return (
    <section className="fixed top-0 left-0 w-full z-10 bg-transparent nav_bar transition duration-300">
      <ul className="flex space-x-5 p-4 text-lg  justify-end">{navList}</ul>
    </section>
  );
};
