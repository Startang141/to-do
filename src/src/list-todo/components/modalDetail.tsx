"useClient";

import { X } from "lucide-react";
import { FC } from "react";

interface useToDoType {
  id: string;
  title: string;
  detail: string;
  date: string;
  priority: string;
  status: string;
  name: string;
  position: string;
}

interface ModalAddProps {
  todo: useToDoType;
  handleCloseModal: () => void;
}

const ModalDetail: FC<ModalAddProps> = ({ handleCloseModal, todo }) => {
  return (
    <>
      <div>
        <div className="bg-white border border-slate-200 rounded-md p-4 w-96 max-h-[85vh] flex flex-col overflow-hidden">
          <div className="flex flex-row justify-between items-center mb-4">
            <h2 className="font-bold text-2xl">Detail Task</h2>
            <button onClick={handleCloseModal} className="cursor-pointer">
              <X className="text-slate-400" />
            </button>
          </div>
          <div className="flex flex-col gap-4 overflow-y-auto">
            <div className="flex flex-col">
              <label htmlFor="title" className="font-semibold">
                Title Task
              </label>
              <p className="border py-2 px-2 border-green-700 rounded-md">
                {todo.title}
              </p>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Detail
              </label>
              <p className="border py-2 px-2 border-green-700 rounded-md break-all">
                {todo.detail}
              </p>
            </div>
            <div className="flex flex-col">
              <label htmlFor="date" className="font-semibold">
                Date
              </label>
              <p className="border py-2 px-2 border-green-700 rounded-md">
                {todo.date}
              </p>
            </div>
            <div className="flex items-center flex-row gap-2">
              <div className="flex-1">
                <label htmlFor="" className="font-semibold">
                  Priority
                </label>
                <p className="border py-2 px-2 border-green-700 rounded-md">
                  {todo.priority}
                </p>
              </div>
              <div className="flex-1">
                <label htmlFor="status" className="font-semibold">
                  Status
                </label>
                <p className="border py-2 px-2 border-green-700 rounded-md">
                  {todo.status}
                </p>
              </div>
            </div>
            <div className="flex items-center flex-row gap-2">
              <div className="flex-1">
                <label htmlFor="" className="font-semibold">
                  Name
                </label>
                <p className="border py-2 px-2 border-green-700 rounded-md">
                  {todo.name}
                </p>
              </div>
              <div className="flex-1">
                <label htmlFor="status" className="font-semibold">
                  Position
                </label>
                <p className="border py-2 px-2 border-green-700 rounded-md">
                  {todo.position}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDetail;
