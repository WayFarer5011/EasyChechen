"use client";

import { TeacherProps } from "@/types";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import React from "react";

interface TeacherDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  name: string;
  age: string;
  experience: string;
  phone: string;
  email: string;
  image: string;
}

const CarDetails = ({
  isOpen,
  closeModal,
  name,
  age,
  experience,
  phone,
  email,
  image,
}: TeacherDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 r2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain mt-3"
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src={image}
                        alt="car model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl"></h2>

                    <div className="mt-3 flex flex-wrap gap-4">
                      <div className="flex flex-col justify-between gap-5 w-full text-left">
                        <h4 className="text-gray">{name}</h4>
                        <div className="h-[1px] bg-black w-full"></div>
                        <h4 className="text-gray">{age}</h4>
                        <div className="h-[1px] bg-black w-full"></div>
                        <h4 className="text-gray">{experience}</h4>
                        <div className="h-[1px] bg-black w-full"></div>
                        <h4 className="text-gray">{email}</h4>
                        <div className="h-[1px] bg-black w-full"></div>
                        <h4 className="text-gray">{phone}</h4>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
