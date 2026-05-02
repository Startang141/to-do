import { Calendar, Eye, Trash, UserCircle } from "lucide-react";
import { FC } from "react";

interface toDoProps {
  id: string;
  title: string;
  date: string;
  priority: string;
  status: string;
  name: string;
  position: string;
  handleChangeStatus: (id: string, status: string) => void;
  handleDelete: (id: string) => void;
  handleOpenDetail: () => void;
}

const ToDoTab: FC<toDoProps> = ({
  id,
  title,
  date,
  priority,
  status,
  name,
  position,
  handleChangeStatus,
  handleDelete,
  handleOpenDetail,
}) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const DeadlineDate = new Date(date);
  DeadlineDate.setHours(0, 0, 0, 0);

  const isDeadline =
    DeadlineDate.getTime() > today.getTime()
      ? "DueDate"
      : DeadlineDate.getTime() === today.getTime()
        ? "Today"
        : "OnTrack";

  const handleCheckBoxChange = () => {
    const newStatus = status === "completed" ? "progress" : "completed";
    handleChangeStatus(id, newStatus);
  };
  return (
    <>
      <div className="border border-slate-200 p-2 rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-green-700"
              checked={status == "completed"}
              onChange={handleCheckBoxChange}
            />
            <div>
              <div className="flex flex-row gap-2">
                <h3
                  className={`${
                    status === "completed" ? "line-through" : ""
                  } text-xl font-semibold`}
                >
                  {title}
                </h3>
                <div>
                  <div
                    className={
                      priority === "low"
                        ? "bg-emerald-100 text-emerald-700 inline-block text-md px-3 rounded-sm font-semibold"
                        : priority === "medium"
                          ? "bg-yellow-100 text-yellow-700 inline-block text-md px-3 rounded-sm font-semibold"
                          : "bg-red-100 text-red-700 inline-block text-md px-3 rounded-sm font-semibold"
                    }
                  >
                    {priority}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <UserCircle className="" width={16} />
                <p className="text-sm">
                  {name} | {position}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 text-slate-500">
              <Calendar width={16} />
              <p className="text-sm">{date}</p>
            </div>
            <div
              className={
                isDeadline === "DueDate"
                  ? "bg-red-100 text-red-700 text-center rounded-md font-semibold tracking-wider"
                  : isDeadline === "Today"
                    ? "bg-yellow-100 text-yellow-700 text-center rounded-md font-semibold tracking-wider"
                    : "bg-green-100 text-green-700 text-center rounded-md font-semibold tracking-wider"
              }
            >
              {isDeadline}
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center md:gap-8">
            <div className="flex gap-2 flex-row justify-end">
              <div className="bg-blue-100 p-1  rounded-md inline-flex flex-col justify-center cursor-pointer">
                <button onClick={handleOpenDetail}>
                  <Eye className="text-blue-700 p-1" />
                </button>
              </div>
              <div className="bg-red-100 p-1 rounded-md inline-flex flex-col justify-center cursor-pointer">
                <button onClick={() => handleDelete(id)}>
                  <Trash className="text-red-700 p-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoTab;
