"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { TeacherProps } from "@/types";
import CustomButton from "./CustomButton";
import TeacherDetails from "./TeacherDetails";

interface TeacherCardProps {
  teacher: TeacherProps;
}

const TeacherCard = ({name, age, position, image, experience, email, phone}: TeacherProps, {teacher}: TeacherCardProps) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="car-card group">
        <div className="car-card__content">
          <h2 className="car-card__content-title text-white">
            {name}, <br /> {position}
          </h2>
        </div>

        <div className="relative w-full h-40 my-3 object-contain">
          <Image
            src={image}
            alt="car model"
            fill
            priority
            className="object-contain"
          />
        </div>

        <div className="relative flex w-full mt-2">

          <div className="car-card__btn-container">
            <CustomButton
              title="Информация"
              containerStyles="w-full py-[16px] rounded-full bg-primary-green"
              textStyles="text-white text-[14px] leading-[17px] font-bold"
              rightIcon="/right-arrow.svg"
              handleClick={() => setIsOpen(true)}
            />
          </div>
        </div>

        <TeacherDetails 
            isOpen={isOpen}
            closeModal={() => setIsOpen(false)}
            name={name}
            age={age}
            experience={experience}
            phone={phone}
            email={email}
            image={image}
        />
      </div>
    </div>
  );
};

export default TeacherCard;
