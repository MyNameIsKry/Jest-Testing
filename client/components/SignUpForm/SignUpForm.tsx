"use client";

import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

type SignUpFormProps = {
  onSubmit: (data: FormValues) => void;
  defaultValues?: FormValues;
};

export const SignUpForm: React.FC<SignUpFormProps> = ({
  onSubmit,
  defaultValues = { email: "", password: "" }
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues
  });

  const handleFormSubmit = (data: FormValues) => {
    onSubmit(data);
    reset();
  };

  return (
    <form
      className='p-4 flex  justify-evenly items-center gap-2 flex-col border rounded-2xl w-130 m-2'
      onSubmit={handleSubmit(handleFormSubmit)}>
      <div className='w-full flex gap-2'>
        <label>Email:</label>
        <input
          className='flex-1'
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email is not valid"
            }
          })}
          placeholder='Enter email'
        />
        {errors.email && (
          <span style={{ color: "red" }}>{errors.email.message}</span>
        )}
      </div>

      <div className='w-full flex gap-2'>
        <label>Password:</label>
        <input
          className='flex-1'
          type='password'
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters"
            }
          })}
          placeholder='Enter password'
        />
        {errors.password && (
          <span style={{ color: "red" }}> {errors.password.message}</span>
        )}
      </div>

      <button className='mb-2 border px-6 py-2 rounded-full' type='submit'>
        Submit
      </button>
    </form>
  );
};
