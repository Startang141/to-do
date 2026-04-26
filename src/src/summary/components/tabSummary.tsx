import { LucideIcon } from "lucide-react";
import { FC } from "react";

interface SummaryProps {
  title: string;
  count: number;
  icon: LucideIcon;
}

const TabSummary: FC<SummaryProps> = ({ title, count, icon: Icon }) => {
  return (
    <>
      <div className="border rounded-md border-slate-200 p-4 flex-1">
        <div className="border-l-3 pl-3 border-green-700">
          <div className="flex items-center justify-between">
            <p className="font-medium text-slate-500">{title}</p>
            <div className="bg-green-100 p-1 rounded-full">
              <Icon className="text-green-700 p-1" />
            </div>
          </div>
          <h3 className="text-4xl font-semibold">{count}</h3>
        </div>
      </div>
    </>
  );
};

export default TabSummary;
