"use client";
import { useAuth } from "@/src/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(name, position);

    router.push("/");
  };
  return (
    <div className="bg-white border border-slate-200 rounded-md p-4 w-96 max-h-[85vh] flex flex-col overflow-hidden">
      <h2 className="font-bold text-2xl">Login</h2>
      <form
        onSubmit={handleLogin}
        method="post"
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col">
          <label htmlFor="name">Nama</label>
          <input
            required
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="border py-2 px-2 border-slate-200 focus:outline-green-700 rounded-md"
            placeholder="Name..."
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="position">Position</label>
          <input
            required
            name="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="border py-2 px-2 border-slate-200 focus:outline-green-700 rounded-md"
            placeholder="Position..."
          />
        </div>
        <button
          type="submit"
          className="bg-green-700 text-white w-full py-2 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
