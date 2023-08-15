"use client";

import clsx from "clsx";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";

import Input from "@/shared-components/inputs/Input";
import Textarea from "@/shared-components/inputs/Textarea";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export default function LeaveAComment({ id, setComments }) {
  const [formState, setFormState] = useState(initialState);
  const [formLoading, setFormLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setFormLoading(true);

    try {
      const response = await fetch("/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...formState, id })
      });

      if(response.ok) {
        toast.success("Comment posted successfully.");

        const data = await response.json();

        setComments((prev) => [data, ...prev]);
      }
    } catch(err) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setFormLoading(false);
      setFormState(initialState);
    }
  }

  return (
    <div className="mb-6 w-full rounded-lg bg-white p-4 pb-6 shadow-md">
      <p className="text-base font-bold">
        Leave a comment
      </p>

      <div className="my-4 h-[1px] w-full bg-gray-300"/>

      <form onSubmit={onSubmit} className="w-full">
        <Textarea
          placeholder="Comment"
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          required
        />

        <div className="mt-3 flex w-full items-center gap-x-3">
          <Input
            type="text"
            placeholder="Name"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            required
          />

          <Input
            type="email"
            placeholder="Email"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            required
          />
        </div>

        <button 
          className={clsx(
            "mt-6 flex w-fit items-center gap-x-3 rounded-lg bg-sky-500 px-4 py-2 text-[15px] font-semibold text-white transition",
            formLoading && "opacity-50"
          )}
          disabled={formLoading}
          type="submit"
        >
          Post comment

          {formLoading && (
            <RotatingLines
              strokeColor="black"
              width={20}
            />
          )}
        </button>
      </form>
    </div>
  );
}