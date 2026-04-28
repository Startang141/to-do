"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storedData = localStorage.getItem("user");
    const dataUser = storedData ? JSON.parse(storedData) : [];

    const addUser = {
      name: name,
      position: position,
    };

    const updateUser = [addUser];

    localStorage.setItem("user", JSON.stringify(updateUser));

    router.push("/");
  };
  return (
    <div className="bg-green-100 h-screen flex flex-row items-center">
      <div className="bg-white border border-slate-200 rounded-md p-4 w-3/4 md:w-1/4 mx-auto">
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
    </div>
  );
};

export default Login;
