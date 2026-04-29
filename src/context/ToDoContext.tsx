"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "sonner";

interface ToDoTypes {
  id: string;
  title: string;
  detail: string;
  date: string;
  priority: string;
  status: string;
  name: string;
  position: string;
}

interface ToDoContextType {
  listToDo: ToDoTypes[];
  addToDo: (newToDo: ToDoTypes) => void;
  deleteToDo: (id: string) => void;
  deleteAllToDo: () => void;
  changeStatus: (id: string, newStatus: string) => void;
}

const getInitialToDo = (): ToDoTypes[] => {
  if (typeof window === "undefined") {
    return [];
  }

  const storedData = localStorage.getItem("ListToDo");

  if (!storedData) {
    return [];
  }

  try {
    return JSON.parse(storedData) as ToDoTypes[];
  } catch {
    localStorage.removeItem("ListToDo");
    return [];
  }
};

const ToDoContext = createContext<ToDoContextType | undefined>(undefined);

export const ToDoProvider = ({ children }: { children: ReactNode }) => {
  const [listToDo, setListToDo] = useState<ToDoTypes[]>(() => getInitialToDo());

  const saveLocalStorage = (data: ToDoTypes[]) => {
    setListToDo(data);
    localStorage.setItem("ListToDo", JSON.stringify(data));
  };

  const addToDo = (newToDo: ToDoTypes) => {
    const updateToDoList = [...listToDo, newToDo];
    saveLocalStorage(updateToDoList);
    toast.success("Berhasil ditambahkan");
  };

  const deleteToDo = (id: string) => {
    const updateToDo = listToDo.filter((todo) => todo.id !== id);
    saveLocalStorage(updateToDo);
    toast.success("Berhasil dihapus");
  };

  const deleteAllToDo = () => {
    if (listToDo.length > 0) {
      setListToDo([]);
      localStorage.removeItem("ListToDo");
      toast.success("Berhasil dihapus");
    } else {
      toast.error("Tidak ada data");
    }
  };

  const changeStatus = (id: string, newStatus: string) => {
    const updatedList = listToDo.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: newStatus,
        };
      }

      return todo;
    });

    saveLocalStorage(updatedList);
  };

  return (
    <ToDoContext.Provider
      value={{ listToDo, addToDo, deleteToDo, deleteAllToDo, changeStatus }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export const useToDoContext = (): ToDoContextType => {
  const context = useContext(ToDoContext);

  if (!context) {
    throw new Error("useToDoContext harus digunakan di dalam ToDoProvider");
  }

  return context;
};
