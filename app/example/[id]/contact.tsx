"use client";

import React from "react"
import { useState } from "react";
import { toast } from "sonner";
import { useForm, SubmitHandler } from "react-hook-form";
import {sendEmail} from "app/actions";

//define the interface for the props
type Input = {
  email: string;
  username: string;
  input: { name: string; id: React.Key; dummy: string}[];
  team: {title: string};
  title: string;
  message: string;
};

export default function Contact({ input, team }: Input)  {
    const [data, setData] = useState<Input>();

    //Define the formstate and readys the form for submission
    const {
      register,
      handleSubmit,
      watch,
      control,
      getValues,
      reset,
      formState: { errors, isSubmitting },
    } = useForm<Input>({
      defaultValues: {
        email: "",
        username: "",
        input: input,
        title: team.title,
      },
    });

    //Define the uses the sendEmail function to send an email on submit and resets the form on success
    const processForm: SubmitHandler<Input> = async data => {
      const result = await sendEmail(data);
      setData(data);

      if(result?.success){
        console.log({data: result.data});
        toast.success("Email sent");
        reset();
        window.location.href = "/recruitment";
        return;
      }

      console.log(result?.error)
      toast.error("Error sending email");

      
    }
    
    return (
        <div className="mt-10 sm:mt-0">
          <form
            autoComplete="off"
            onSubmit={handleSubmit(processForm)}
            className="space-y-8 divide-y divide-gray-200 mx-auto max-w-2xl"
          >
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
          <input 
                    type="disabled"
                    id="title"
                    value={team.title}
                    autoComplete="off"
                    className="hidden block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    {...register("team.title")} />
          <label htmlFor="username" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
            Email
          </label>
          <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input 
                    type="text"
                    id="Email"
                    autoComplete="off"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Email"
                    {...register("email", {required: "You need a vaild email"})} />
          </div>
          {errors.email?.message && (
                    <p className="text-sm text-red-400">{errors.email.message}</p>
                  )}
          </div>
          <label htmlFor="username" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
            Discord Username
          </label>
          <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input 
                    type="text"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="username"
                    {...register("username", {required: "You need to write your gamer tag here"})} />
          </div>
          {errors.username?.message && (
                    <p className="text-sm text-red-400">{errors.username.message}</p>
                  )}
          </div>
          {/* Maps passed down prop to create input based on how many entries there are in the database, dummy can be anything it's just a way to get the message */}
          {input.map((inputs: { name: string ; id: React.Key }, index) => (
            <div key={inputs.id}>
              <label htmlFor="username" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                {inputs.name}
              </label>
              <div className="mt-2">
                  <textarea
                    key={inputs.id}
                    
                    id="username"
                    className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder={inputs.name}
                    {...register(`input.${index}.dummy`, { required: "Must have txt" })}
                  />
                  
              </div>
              {errors.input?.[index]?.dummy?.message && (
                    <p className="text-sm text-red-400">{errors.input?.[index]?.dummy?.message}</p>
                  )}
            </div>
            ))}
          </div>
        </div>

              <div className="mt-6 flex flex-col items-center justify-end gap-x-6">
                <div className="flex-row">
                <button type="button" className="mt-6 mx-1 text-sm font-semibold leading-6 text-gray-900">
                  Cancel
                </button>

                <button
                  className="mt-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                </div>
              </div>
      </form>
    </div>
    )
}