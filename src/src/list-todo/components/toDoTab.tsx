import { Calendar, Pen, Trash } from "lucide-react";

const ToDoTab = () => {
  return (
    <>
      <div className="border border-slate-200 p-2 rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="accent-green-700" />
            <div>
              <h3 className="text-xl font-semibold">Sholat 5 Waktu</h3>
              <div className="flex items-center gap-2 text-slate-500">
                <Calendar className="" width={16} />
                <p className="text-sm">19 Mei 2025</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center gap-8">
            <div className="bg-emerald-100 text-emerald-700 inline-block text-xs px-3 py-1 rounded-sm">
              Low
            </div>
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
