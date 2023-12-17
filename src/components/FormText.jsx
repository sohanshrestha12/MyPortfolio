import React from "react";

const FormText = ({
  type = "text",
  name = "",
  placeholder = "",
}) => {
  return (
    <>
      <input type={type} name={name} placeholder={placeholder} required />
    </>
  );
};

export default FormText;
