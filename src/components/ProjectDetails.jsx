import React from "react";


import CloseIcon from "@mui/icons-material/Close";
import { Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";



const ProjectDetails = ({
  isOpen,
  Project,
  data,
}) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={Project}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
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
                leave="ease-out duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative bg-zinc-700 w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    className="absolute top-2 text-white right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                    onClick={Project}
                  >
                    <CloseIcon />
                  </button>

                  <div className="flex-1 flex flex-col gap-2">
                    <img
                      src={data.image}
                      alt="detailimg"
                      className="w-96 ml-auto mr-auto  rounded-3xl"
                    />
                    <div className="my-5">
                      <h2 className="font-bold text-2xl text-[#923AE4] capitalize">
                        {data.name}
                      </h2>
                      <p className="text-white text-xs">
                        Date Completed: {data.date}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-4 text-gray-300">
                        {data.description}
                      </div>
                    </div>
                    <a
                      href={data.urlto}
                      className="ml-auto mr-auto"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-[#923AE4] my-3 p-2 px-4 rounded-full text-white font-medium text-lg">
                        Visit {data.name}
                      </button>
                    </a>
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

export default ProjectDetails;
