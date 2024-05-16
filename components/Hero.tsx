"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Научитесь говорить на чеченском с нами!</h1>

        <p className="hero__subtitle">
          Лучшая онлайн-школа по изучению чеченского языка
        </p>

        <a href="#form">
          <CustomButton
            title="Записаться"
            containerStyles="bg-primary-green text-white rounded-full mt-10"
          />
        </a>
      </div>

      <div className="hero__image-container">
        <div className="hero__image-text">
          <div className="tracking-widest">
            <h2 className="hero__image-title text-4xl text-center">1,000</h2>
            <p className="hero__image-subtitle text-center">ВЫПУСКНИКОВ</p>
          </div>
          <div className="tracking-widest">
            <h2 className="hero__image-title text-4xl text-center">40</h2>
            <p className="hero__image-subtitle text-center">ЛЕТ ОПЫТА</p>
          </div>
          <div className="tracking-widest">
            <h2 className="hero__image-title text-4xl text-center">9/10</h2>
            <p className="hero__image-subtitle text-center">ОЦЕНКА УЧИТЕЛЕЙ</p>
          </div>
          <div className="tracking-widest">
            <h2 className="hero__image-title text-4xl text-center">100,000</h2>
            <p className="hero__image-subtitle text-center">УРОКОВ В ГОД</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
