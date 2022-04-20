import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  // console.log("ref", ref);
  const [scrollY, setScrollY] = useState(0);

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
    const navbar = document.querySelector(".nav_bar");
    const navbarHeight = navbar.getBoundingClientRect().height;
    const scrollView = document.querySelector(id).offsetTop - navbarHeight;
    window.scrollTo({ top: scrollView, behavior: "smooth" });
  };

  // scroll에 따른 네비게이션 색변화하기
  // const

  useEffect(() => {
    (() => {
      window.addEventListener("scroll", () => setScrollY(window.scrollY));
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
      scrollHandler();
    })();
    return () => {
      window.removeEventListener("scroll", () => setScrollY(window.scrollY));
    };
  }, [scrollY]);

  const navList = navItem.map((item) => {
    return (
      <li className="p-3 space-x-3 text-black nav_li" key={item.id}>
        <Link data-id={item.id} onClick={component} className="hover: cursor-pointer hover:bg-bg-nav p-3 rounded-md hover:text-gray-50 transition-all" to={item.link}>
          {item.title}
        </Link>
      </li>
    );
  });

  return (
    <section className=" fixed top-0 left-0 w-full z-10 bg-transparent nav_bar transition duration-300">
      <ul className="flex space-x-5 p-2 text-lg  justify-end">{navList}</ul>
    </section>
  );
};
