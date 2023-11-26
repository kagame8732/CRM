import React from "react";
import InputField from "./form/InputField";
import Button from "./form/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { PostFormSchema } from "./validation/InputValidation";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const PostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(PostFormSchema) });
  const getErrorMsg = (error) => {
    if (error.response) {
      return error.response.data.message;
    }
  };
  const product = async (data) => {
    try {
      const response = await toast.promise(
        axios.post(`${import.meta.env.VITE_BASE_URL}/addProduct`, data),
        {
          loading: "create a product...",
          success: <b>Product created successfully</b>,
          error: (error) => <b>{getErrorMsg(error)}</b>,
        }
      );
      return response;
    } catch (error) {
      console.log("Errorr ======>", error);
    }
  };
  return (
    <div className=" bg-zinc-200 w-[500px] h-[500px] m-auto mt-10 rounded-sm shadow-md">
      <h1 className=" text-center p-5 text-green-700 text-2xl font-serif font-bold">
        Poduct Form
      </h1>
      <form
        className="flex justify-center items-center flex-col"
        onSubmit={(e) => {
          handleSubmit(product)(e);
        }}
      >
        <InputField
          label="Product Name"
          type="text"
          placeholder="Product Name"
          className="border text-sm pl-3 border-gray-400 w-[400px] h-[40px] rounded-sm outline-none mt-2 placeholder:text-slate-300 xs:w-full"
          {...register("prodName")}
          error={errors?.prodName}
        />
        <InputField
          label="Description"
          type="text"
          placeholder="Description"
          className="border text-sm pl-3 border-gray-400 w-[400px] h-[40px] rounded-sm outline-none mt-2 placeholder:text-slate-300 xs:w-full"
          {...register("description")}
          error={errors?.description}
        />
        <Button label="Button" type="submit" className="" />
      </form>
      <Toaster />
    </div>
  );
};

export default PostForm;
