"use client";

import { useAuth } from "../context/AuthContext";
import ToDoList from "../src/list-todo";
import Login from "../src/login";
import Navbar from "../src/navbar";
import Summary from "../src/summary";

export default function Home() {
  const { user } = useAuth();
  return (
    <div>
      <main>
        <Navbar />
        <Summary />
        <ToDoList />

        {!user && (
          <div className="fixed inset-0 z-50 bg-slate-800/50 flex items-center justify-center p-4">
            <Login />
          </div>
        )}
      </main>
    </div>
  );
}
