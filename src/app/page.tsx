import ToDoList from "../src/list-todo";
import Navbar from "../src/navbar";
import Summary from "../src/summary";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <Summary />
        <ToDoList />
      </main>
    </div>
  );
}
