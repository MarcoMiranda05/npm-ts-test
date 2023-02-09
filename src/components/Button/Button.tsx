import React from "react";
import "./Button.css";
import Swal from "sweetalert2";

interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  function alertSwal() {
    console.log("alert swal");

    Swal.fire("Good job!", "You clicked the button!", "success");
  }

  return <button onClick={() => alertSwal()}>{props.label}</button>;
};

export default Button;
