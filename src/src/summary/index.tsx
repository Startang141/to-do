import { CircleCheckBig, ClipboardCheck, LoaderCircle } from "lucide-react";
import TabSummary from "./components/tabSummary";

const Summary = () => {
  return (
    <>
      <div className="px-2 flex flex-col md:flex-row gap-2 md:gap-4  mt-4 container mx-auto">
        <TabSummary title="Progress Task" count={2} icon={LoaderCircle} />
        <TabSummary title="Complete Task" count={8} icon={CircleCheckBig} />
        <TabSummary title="Total Task" count={10} icon={ClipboardCheck} />
      </div>
    </>
  );
};

export default Summary;
