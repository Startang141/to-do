"use client";

import { Clipboard, Search } from "lucide-react";
import ToDoTab from "./components/toDoTab";
import { useState } from "react";
import ModalAdd from "./components/modalAdd";
import useToDo from "@/src/lib/useToDo";
import { toast } from "sonner";

interface useToDoType {
  id: string;
  title: string;
  detail: string;
  date: string;
  priority: string;
  status: string;
}

const ToDoList = () => {
  const [listToDo, setListToDo] = useState(useToDo());
  const [status, setStatus] = useState("all");
  const filteredToDo =
    status === "all"
      ? listToDo
      : listToDo.filter((todo) => todo.priority == status);

  console.log("cek filter data", filteredToDo);

  const progressToDo = filteredToDo.filter(
    (todo) => todo.status === "progress"
  );
  const notToDo = filteredToDo.filter((todo) => todo.status === "not");
  const completToDo = filteredToDo.filter(
    (todo) => todo.status === "completed"
  );

  const handleDeleteAll = () => {
    if (listToDo.length > 0) {
      localStorage.removeItem("ListToDo");
      setListToDo([]);
      toast.success("Berhasil Dihapus");
    } else {
      toast.error("Tidak Ada Data");
    }
  };

  const handleAddToDo = (newToDo: useToDoType) => {
    const updatedList = [...listToDo, newToDo];
    setListToDo(updatedList);
    localStorage.setItem("ListToDo", JSON.stringify(updatedList));
  };

  const handleDeleteToDo = (id: string) => {
    const exceptToDo = listToDo.filter((todo) => todo.id !== id);
    setListToDo(exceptToDo);

    localStorage.setItem("ListToDo", JSON.stringify(exceptToDo));

    toast.success("Berhasil Dihapus");
  };

  const handleUpdateChange = (
    id: string,
    newTitle: string,
    newDetail: string,
    newDate: string,
    newPriority: string,
    newStatus: string
  ) => {
    const updateToDo = listToDo.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: newTitle,
          detail: newDetail,
          date: newDate,
          priority: newPriority,
          status: newStatus,
        };
      }
      return todo;
    });
    setListToDo(updateToDo);
    localStorage.setItem("ListToDo", JSON.stringify(updateToDo));
  };

  const handleStatusChange = (id: string, newStatus: string) => {
    console.log(newStatus);
    const updateToDo = listToDo.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: newStatus };
      }
      return todo;
    });

    setListToDo(updateToDo);

    localStorage.setItem("ListToDo", JSON.stringify(updateToDo));
  };

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
            {/* <div className="flex items-center gap-2 border border-slate-200 py-2 px-2 rounded-md focus-within:outline focus-within:border-green-700 focus-within:outline-green-700">
              <Search width={18} className="" />
              <input
                type="text"
                placeholder="cari task"
                className="placeholder:text-slate-300 w-full focus:outline-none rounded-md"
              />
            </div> */}
            <div className="flex flex-row gap-2 md:w-96">
              <button
                onClick={() => handleModal()}
                className="bg-green-700 font-semibold px-4 py-2 text-white rounded-md flex-1 hover:bg-green-900 cursor-pointer"
              >
                + Add Task
              </button>
              <select
                name=""
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="text-slate-500 font-medium border-slate-700 border px-4 py-2 rounded-md text-md flex-1 focus:border-slate-700 focus:outline focus:outline-slate-700 cursor-pointer"
              >
                <option value="all">All</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <button
                onClick={() => handleDeleteAll()}
                className="bg-red-700 font-semibold  hover:bg-red-900 px-4 py-2 text-white rounded-md flex-1 cursor-pointer"
              >
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
              {progressToDo.map((todo) => (
                <ToDoTab
                  key={todo.id}
                  id={todo.id}
                  title={
                    todo.title.length > 10
                      ? todo.title.slice(0, 12) + "..."
                      : todo.title
                  }
                  date={todo.date}
                  priority={todo.priority}
                  status={todo.status}
                  handleChangeStatus={handleStatusChange}
                  handleDelete={handleDeleteToDo}
                />
              ))}
              {progressToDo.length < 1 && (
                <div className="text-slate-300 text-center font-semibold">
                  <Clipboard className="mx-auto" />
                  <p>Kosong</p>
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 my-4">
              <p className="text-slate-500">Done</p>
              <div className="h-0.5 w-full bg-slate-200"></div>
            </div>
            <div className="flex flex-col gap-3">
              {completToDo.map((todo) => (
                <ToDoTab
                  key={todo.id}
                  id={todo.id}
                  title={
                    todo.title.length > 10
                      ? todo.title.slice(0, 12) + "..."
                      : todo.title
                  }
                  date={todo.date}
                  priority={todo.priority}
                  status={todo.status}
                  handleChangeStatus={handleStatusChange}
                  handleDelete={handleDeleteToDo}
                />
              ))}
              {completToDo.length < 1 && (
                <div className="text-slate-300 text-center font-semibold">
                  <Clipboard className="mx-auto" />
                  <p>Kosong</p>
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 my-4">
              <p className="text-slate-500 w-25">Not Started</p>
              <div className="h-0.5 w-full bg-slate-200"></div>
            </div>
            <div className="flex flex-col gap-3">
              {notToDo.map((todo) => (
                <ToDoTab
                  key={todo.id}
                  id={todo.id}
                  title={
                    todo.title.length > 10
                      ? todo.title.slice(0, 12) + "..."
                      : todo.title
                  }
                  date={todo.date}
                  priority={todo.priority}
                  status={todo.status}
                  handleChangeStatus={handleStatusChange}
                  handleDelete={handleDeleteToDo}
                />
              ))}
              {notToDo.length < 1 && (
                <div className="text-slate-300 text-center font-semibold">
                  <Clipboard className="mx-auto" />
                  <p>Kosong</p>
                </div>
              )}
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
        <ModalAdd
          handleCloseModal={handleCloseModal}
          handleAddToDo={handleAddToDo}
        />
      </div>
    </>
  );
};

export default ToDoList;
