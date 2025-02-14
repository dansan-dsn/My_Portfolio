import React, { useState } from "react";
import { Link } from "react-router-dom";

const Application = () => {
  const [isName, setIsName] = useState("Ed");
  const toggleName = () => {
    setIsOpen(!isOpen);
  };

  const siblings = [
    { name: "Dansan", age: 21 },
    { name: "Walden", age: 23 },
  ];

  const siblingList = siblings.map((sibling) => (
    <li>
      <Link key={sibling.name}>
        {" "}
        {sibling.name} = {sibling.age}{" "}
      </Link>
    </li>
  ));

  return (
    <div>
      <ul>{siblingList}</ul>
    </div>
  );
};

export default Application;
