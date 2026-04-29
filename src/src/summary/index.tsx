"use client";

import {
  CircleCheckBig,
  ClipboardCheck,
  ClipboardList,
  LoaderCircle,
} from "lucide-react";
import TabSummary from "./components/tabSummary";
import { useToDoContext } from "@/src/context/ToDoContext";

const Summary = () => {
  const { listToDo } = useToDoContext();
  const notStarted = listToDo.filter((todo) => todo.status == "not");
  const progress = listToDo.filter((todo) => todo.status == "progress");
  const complete = listToDo.filter((todo) => todo.status == "completed");
  return (
    <>
      <div className="px-2 flex flex-col md:flex-row gap-2 md:gap-4  mt-4 container mx-auto">
        <TabSummary
          title="Not Started"
          count={notStarted.length}
          icon={ClipboardList}
        />
        <TabSummary
          title="Progress Task"
          count={progress.length}
          icon={LoaderCircle}
        />
        <TabSummary
          title="Complete Task"
          count={complete.length}
          icon={CircleCheckBig}
        />
        <TabSummary
          title="Total Task"
          count={notStarted.length + progress.length + complete.length}
          icon={ClipboardCheck}
        />
      </div>
    </>
  );
};

export default Summary;
