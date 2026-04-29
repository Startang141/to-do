"useClient";

import { useAuth } from "@/src/context/AuthContext";
import { X } from "lucide-react";
import { FC, useState } from "react";
import { toast } from "sonner";

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
  handleCloseModal: () => void;
  handleAddToDo: (add: useToDoType) => void;
}

const ModalAdd: FC<ModalAddProps> = ({ handleCloseModal, handleAddToDo }) => {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("low");
  const [status, setStatus] = useState("not");

  const alertSuccess = () => {
    toast.success("Berhasil Ditambahkan");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const addToDo = {
      id: new Date().toISOString(),
      title: title,
      detail: detail,
      date: date,
      priority: priority,
      status: status,
      name: user?.name ?? "Guest",
      position: user?.position ?? "Impostor",
    };

    handleAddToDo(addToDo);

    setTitle("");
    setDetail("");
    setDate("");
    setPriority("low");
    setStatus("not");

    handleCloseModal();

    alertSuccess();
  };

  return (
    <>
      <div>
        <div className="bg-white border border-slate-200 rounded-md p-4 w-3/4 md:w-1/4 mx-auto mt-16">
          <div className="flex flex-row justify-between items-center mb-4">
            <h2 className="font-bold text-2xl">Create Task</h2>
            <button onClick={handleCloseModal} className="cursor-pointer">
              <X className="text-slate-400" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="title">Title Task</label>
              <input
                required
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="border py-2 px-2 border-slate-200 focus:outline-green-700 rounded-md"
                placeholder="Title..."
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Detail</label>
              <textarea
                required
                name="detail"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                className="border py-2 px-2 border-slate-200 focus:outline-green-700 rounded-md"
                placeholder="Detail Task.."
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label htmlFor="date">Date</label>
              <input
                required
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
                className="border py-2 px-2 border-slate-200 focus:outline-green-700 rounded-md"
                placeholder="Title..."
              />
            </div>
            <div className="flex items-center flex-row gap-2">
              <div className="flex-1">
                <label htmlFor="" className="block">
                  Priority
                </label>
                <select
                  required
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  name="priority"
                  className="border py-2 px-2 border-slate-200 w-full focus:outline-green-700 rounded-md"
                >
                  <option value="#" disabled>
                    Choose Priority
                  </option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className="flex-1">
                <label htmlFor="status" className="block">
                  Status
                </label>
                <select
                  required
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="border py-2 px-2 w-full border-slate-200 focus:outline-green-700 rounded-md"
                >
                  <option value="#" disabled>
                    Choose Status
                  </option>
                  <option value="not">Not Started</option>
                  <option value="progress">Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="bg-green-700 text-white w-full py-2 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalAdd;
