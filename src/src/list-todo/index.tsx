"use client";

import { Clipboard } from "lucide-react";
import ToDoTab from "./components/toDoTab";
import { useState } from "react";
import ModalAdd from "./components/modalAdd";
import { useToDoContext } from "@/src/context/ToDoContext";
import ModalDetail from "./components/modalDetail";

interface ToDoTypes {
  id: string;
  title: string;
  detail: string;
  date: string;
  priority: string;
  status: string;
  name: string;
  position: string;
}

const ToDoList = () => {
  const { listToDo, addToDo, deleteToDo, deleteAllToDo, changeStatus } =
    useToDoContext();
  const [status, setStatus] = useState("all");

  const filteredToDo =
    status === "all"
      ? listToDo
      : listToDo.filter((todo) => todo.priority == status);

  const progressToDo = filteredToDo.filter(
    (todo) => todo.status === "progress",
  );
  const notToDo = filteredToDo.filter((todo) => todo.status === "not");
  const completToDo = filteredToDo.filter(
    (todo) => todo.status === "completed",
  );

  const [selectedToDo, setSelectedToDo] = useState<ToDoTypes | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const handleOpenDetail = (todo: ToDoTypes) => {
    setSelectedToDo(todo);
    setShowDetailModal(true);
  };

  const handleCloseDetail = () => {
    setSelectedToDo(null);
    setShowDetailModal(false);
  };

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
                onClick={deleteAllToDo}
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
                    todo.title.length > 5
                      ? todo.title.slice(0, 6) + "..."
                      : todo.title
                  }
                  date={todo.date}
                  priority={todo.priority}
                  status={todo.status}
                  name={todo.name}
                  position={todo.position}
                  handleChangeStatus={changeStatus}
                  handleDelete={deleteToDo}
                  handleOpenDetail={() => handleOpenDetail(todo)}
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
                    todo.title.length > 5
                      ? todo.title.slice(0, 6) + "..."
                      : todo.title
                  }
                  date={todo.date}
                  priority={todo.priority}
                  status={todo.status}
                  name={todo.name}
                  position={todo.position}
                  handleChangeStatus={changeStatus}
                  handleDelete={deleteToDo}
                  handleOpenDetail={() => handleOpenDetail(todo)}
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
                    todo.title.length > 5
                      ? todo.title.slice(0, 6) + "..."
                      : todo.title
                  }
                  date={todo.date}
                  priority={todo.priority}
                  status={todo.status}
                  name={todo.name}
                  position={todo.position}
                  handleChangeStatus={changeStatus}
                  handleDelete={deleteToDo}
                  handleOpenDetail={() => handleOpenDetail(todo)}
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
        <ModalAdd handleCloseModal={handleCloseModal} handleAddToDo={addToDo} />
      </div>
      {showDetailModal && selectedToDo && (
        <div className="fixed inset-0 z-50 bg-slate-800/50 flex items-center justify-center p-4 overflow-hidden">
          <ModalDetail
            handleCloseModal={handleCloseDetail}
            todo={selectedToDo}
          />
        </div>
      )}
    </>
  );
};

export default ToDoList;
