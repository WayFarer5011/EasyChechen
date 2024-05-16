import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

interface FormProps {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}

const Form = ({ firstname, lastname, email, phone }: FormProps) => {
  return (
    <div>
      <form action="">
        <div className="flex flex-col gap-[1rem]">
          <input
            type="text"
            id="name"
            name={firstname}
            placeholder="Имя"
            className="text-2xl border border-primary-green rounded-sm w-[300px] xl:w-[500px] py-[1rem] px-[2rem] outline-none"
          />
          <input
            type="text"
            id="lastname"
            name={lastname}
            placeholder="Фамилия"
            className="text-2xl border border-primary-green rounded-sm w-[300px] xl:w-[500px] py-[1rem] px-[2rem] outline-none"
          />
          <input
            type="text"
            id="email"
            name={email}
            placeholder="Почта"
            className="text-2xl border border-primary-green rounded-sm w-[300px] xl:w-[500px] py-[1rem] px-[2rem] outline-none"
          />
          <input
            type="text"
            id="name"
            name={phone}
            placeholder="Телефон"
            className="text-2xl border border-primary-green rounded-sm w-[300px] xl:w-[500px] py-[1rem] px-[2rem] outline-none"
          />
          <div>
          <input list="courses" id="course-choice" name="course-choice-item" placeholder="Курс" className="text-2xl border border-primary-green rounded-sm w-[300px] xl:w-[500px] py-[1rem] px-[2rem]"/>
            <datalist id="courses" className="bg-white border border-primary-green rounded-sm border-t-0 w-[350px] p-[5px] max-h-[10rem] overflow-y-auto">
              <option value="Начинающий" className="bg-white p-[4px] text-primary-green mb-[1px] text-[18px] cursor-pointer"></option>
              <option value="Продвинутый" className="bg-white p-[4px] text-primary-green mb-[1px] text-[18px] cursor-pointer"></option>
            </datalist>
          </div>
        </div>

        <CustomButton
          title="Записаться"
          containerStyles="bg-primary-green text-white rounded-full mt-10"
        />
      </form>
    </div>
  );
};

export default Form;
