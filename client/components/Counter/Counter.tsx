"use client";

import React from "react";
import { Button } from "@/components/Button/Button";

export const Counter: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const buttonStyle = "w-8 h-8 cursor-pointer border rounded-full";

  return (
    <div className='flex items-center gap-2 p-2'>
      <Button
        content='+'
        className={buttonStyle}
        onClick={() => setValue((v) => v + 1)}
      />
      <p>Count: {value}</p>
      <Button
        content='-'
        className={buttonStyle}
        onClick={() => setValue((v) => Math.max(0, v - 1))}
      />
    </div>
  );
};
