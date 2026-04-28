import { Calendar, Pen, Trash } from "lucide-react";
import { FC } from "react";

interface toDoProps {
  id: string;
  title: string;
  date: string;
  priority: string;
  status: string;
  handleChangeStatus: (id: string, status: string) => void;
}

const ToDoTab: FC<toDoProps> = ({
  id,
  title,
  date,
  priority,
  status,
  handleChangeStatus,
}) => {
  return (
    <>
      <div className="border border-slate-200 p-2 rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-green-700"
              onChange={(e) => {
                const newStatus = e.target.checked ? "Completed" : "Progress";
                handleChangeStatus(id, newStatus);
              }}
            />
            <div>
              <h3
                className={`${status === "completed" ? "line-through" : ""}text-xl font-semibold`}
              >
                {title}
              </h3>
              <div className="flex items-center gap-2 text-slate-500">
                <Calendar className="" width={16} />
                <p className="text-sm">{date}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center md:gap-8">
            {priority === "low" && (
              <div className="bg-emerald-100 text-emerald-700 inline-block text-xs px-3 py-1 rounded-sm font-semibold">
                {priority}
              </div>
            )}
            {priority === "medium" && (
              <div className="bg-yellow-100 text-yellow-700 inline-block text-xs px-3 py-1 rounded-sm font-semibold">
                {priority}
              </div>
            )}
            {priority === "high" && (
              <div className="bg-red-100 text-red-700 inline-block text-xs px-3 py-1 rounded-sm font-semibold">
                {priority}
              </div>
            )}
            <div className="flex gap-2 flex-row justify-end">
              <div className="bg-blue-100 p-1 rounded-md inline-block">
                <Pen className="text-blue-700 p-1" />
              </div>
              <div className="bg-red-100 p-1 rounded-md inline-block">
                <Trash className="text-red-700 p-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoTab;
