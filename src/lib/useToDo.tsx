"use client";
interface useToDo {
  id: string;
  title: string;
  detail: string;
  date: string;
  priority: string;
  status: string;
}

function useToDo(): useToDo[] {
  const fetchToDo = global?.window?.localStorage?.getItem("ListToDo");
  const ListToDo = JSON.parse(fetchToDo || "[]");
  return ListToDo;
}

export default useToDo;
