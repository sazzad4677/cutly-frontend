import React from "react";
import { useForm } from "react-hook-form";
const InputField = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section className="bg-neutral-bg">
      <div className="px-10 mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container flex flex-col lg:flex-row mx-auto h-auto -top-20 md:-top-16 p-8 md:p-12 relative rounded-lg bg-primary-violet bg-no-repeat bg-cover bg-center bg-shorten-desktop"
        >
          <div className="flex flex-col w-full relative font-mono">
            <input
              {...register("link", {
                required: "Please add a link",
                pattern: {
                  value:/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/,
                  message: "Not a valid link",
                },
              })}
              className={`flex-grow rounded-lg lg:mr-2 py-3 px-4 text-xl focus:ring-0 placeholder:text-base placeholder:text-neutral-grayish-violet focus:border-transparent ${
                errors?.link?.type &&
                `border-secondary-red border-2 focus:border-secondary-red `
              }`}
              type="text"
              placeholder="Shorten a link here..."
            />
            <p className="sm:absolute text-secondary-red text-sm mt-16 inline-block font-mono italic tracking-wide">
              {errors.link?.message}
            </p>
          </div>
          <button
            type="submit"
            className="w-full h-full bg-primary-cyan text-white font-bold text-base px-10 py-4 rounded-lg whitespace-nowrap hover:brightness-110 sm:w-auto transition duration-500 ease-in-out"
          >
            Shorten It!
          </button>
        </form>
      </div>
    </section>
  );
};

export default InputField;
