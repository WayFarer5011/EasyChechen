import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface TeacherProps {
  name: string;
  age: string;
  position: string;
  experience: string;
  phone: string;
  email: string;
  image: string;
}

export interface FormProps {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}
