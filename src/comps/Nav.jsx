import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <section>
      <ul className="flex ">
        <li>
          <Link to="/"></Link>Home
        </li>
        <li>About</li>
        <li>Project</li>
        <li>Skill</li>
        <li>Contact</li>
      </ul>
    </section>
  );
};
