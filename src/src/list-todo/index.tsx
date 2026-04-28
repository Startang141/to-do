"use client";

import { Search } from "lucide-react";
import ToDoTab from "./components/toDoTab";
import { useState } from "react";
import ModalAdd from "./components/modalAdd";

const ToDoList = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="container mx-auto px-2 mt-4">
        <div className="border border-slate-200 rounded-md p-2">
          <div className="flex flex-col md:flex-row md:justify-between gap-2">
            <div className="flex items-center gap-2 border border-slate-200 py-2 px-2 rounded-md focus-within:outline focus-within:border-green-700 focus-within:outline-green-700">
              <Search width={18} className="" />
              <input
                type="text"
                placeholder="cari task"
                className="placeholder:text-slate-300 w-full focus:outline-none rounded-md"
              />
            </div>
            <div className="flex flex-row gap-2 md:w-96">
              <button
                onClick={() => handleModal()}
                className="bg-green-700 font-semibold px-4 py-2 text-white rounded-md flex-1 hover:bg-green-900 cursor-pointer"
              >
                + Add Task
              </button>
              <select
                name=""
                id=""
                className="text-slate-500 font-medium border-slate-700 border px-4 py-2 rounded-md text-md flex-1 focus:border-slate-700 focus:outline focus:outline-slate-700 cursor-pointer"
              >
                <option value="">All</option>
                <option value="">Low</option>
                <option value="">Medium</option>
                <option value="">High</option>
              </select>
              <button className="bg-red-700 font-semibold  hover:bg-red-900 px-4 py-2 text-white rounded-md flex-1 cursor-pointer">
                Delete All
              </button>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 my-4">
              <p className="text-slate-500">Progress</p>
              <div className="h-0.5 w-full bg-slate-200"></div>
            </div>
            <div className="flex flex-col gap-3">
              <ToDoTab />
              <ToDoTab />
              <ToDoTab />
              <ToDoTab />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 my-4">
              <p className="text-slate-500">Completed</p>
              <div className="h-0.5 w-full bg-slate-200"></div>
            </div>
            <div className="flex flex-col gap-3">
              <ToDoTab />
              <ToDoTab />
              <ToDoTab />
              <ToDoTab />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 my-4">
              <p className="text-slate-500 w-25">Not Started</p>
              <div className="h-0.5 w-full bg-slate-200"></div>
            </div>
            <div className="flex flex-col gap-3">
              <ToDoTab />
              <ToDoTab />
              <ToDoTab />
              <ToDoTab />
            </div>
          </div>
        </div>
      </div>
      {/* Call Dialog Add */}
      <div
        className={`${
          showModal ? "fixed" : "hidden"
        } "z-50 top-0 right-0 left-0 h-screen bg-slate-800/50 items-center`}
      >
        <ModalAdd handleCloseModal={handleCloseModal} />
      </div>
    </>
  );
};

export default ToDoList;
