import React from "react";
import { Button } from "@/components/Button/Button";
import Image from "next/image";
import { Counter } from "@/components/Counter/Counter";
import { TodoList } from "@/components/TodoList/TodoList";

export default function HomePage() {
  return (
    <React.Fragment>
      <Button
        content='Click'
        className='border border-black py-2 px-6 ml-2 
      mt-2 cursor-pointer rounded-full active:bg-black active:text-white transition-all'
      />
      <Counter />
      <TodoList />
    </React.Fragment>
  );
}
