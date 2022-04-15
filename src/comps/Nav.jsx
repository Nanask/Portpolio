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

  const component = (e) => {
    const id = e.target.dataset.id;
    // console.log("id", id);
    // const header = document.querySelector(".header");
    const intro = document.querySelector(".intro");
    // console.log("header", header);
    // console.log("intro", intro);
    const navbar = document.querySelector(".nav_bar");
    const navbarHeight = navbar.getBoundingClientRect().height;
    const introScroll = intro.getBoundingClientRect().top;
    console.log("introScroll", introScroll);
    // const scrollView = document.querySelector(id);
    const scrollView = document.querySelector(id).offsetTop - navbarHeight;
    console.log("scrollView", scrollView);
    // const scrolledY = window.scrollY;
    // const position = scrolledY - navbarHeight;
    // scrollView.scrollIntoView({ behavior: "smooth", block: "center" });
    // scrollView.scrollIntoView({ behavior: "smooth" }, true);
    // scrollView.scrollIntoView(true);
    // if (scrolledY) {
    // window.scrollTo({ top: position, behavior: "smooth" });
    window.scrollTo({ top: scrollView, behavior: "smooth" });
    // }
    // scrollView.scrollTo({ top: introScroll - navbarHeight });
  };

  // scroll에 따른 네비게이션 색변화하기
  const scrollHandler = () => {
    const navbar = document.querySelector(".nav_bar");
    const navbarHeight = navbar.getBoundingClientRect().height;
    window.addEventListener("scroll", () => setScrollY(window.scrollY));
    if (scrollY > navbarHeight) {
      navbar.classList.add("navbar_scroll");
      // tailwind로 클래스 이름 넣기
      // navbar.classList.add("bg-red-500")
    } else {
      navbar.classList.remove("navbar_scroll");
      // navbar.classList.remove("bg-red-500")
    }
  };

  // useEffect(() => {
  //   arrowButton();
  // });

  const arrowButton = () => {
    const root = document.querySelector("#root");
    console.log("root", root);
    const arrowBtn = document.createElement("div");
    console.log("arrowBtn", arrowBtn);
    // return (
    //   <div className="bg-red-600">
    //     <div>버튼</div>
    //   </div>
    // );
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
    <section className=" fixed top-0 left-0 w-full z-10 bg-transparent nav_bar transition duration-300">
      <ul className="flex space-x-5 p-2 text-lg  justify-end">{navList}</ul>
    </section>
  );
};
