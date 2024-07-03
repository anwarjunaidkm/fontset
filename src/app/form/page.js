"use client";
import React, { useState } from "react";

function Form() {
  const [input, setinput] = useState({
    name: "",
    age: "",
  });
  const handle = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };
  console.log(input, "input");
  return (
    <div>
      <h1>NAME :{input.name}</h1>
      <p className="text-white w-72 font-poppins">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before the final copy is available{" "}
      </p>
      <p className="text-white w-72 font-montserrat">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before the final copy is available{" "}
      </p>
      <p className="text-white w-72 font-optima">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before the final copy is available{" "}
      </p>
      <h1>age :{input.age}</h1>
      <div>
        name{" "}
        <input
          type="text"
          className="text-red-500"
          name="name"
          onChange={handle}
        />
        agw{" "}
        <input
          type="text"
          className="text-red-500"
          name="age"
          onChange={handle}
        />
      </div>
    </div>
  );
}

export default Form;
