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
    <section className="bg-neutral-bg ">
      <div className="mx-auto px-10 md:container md:px-16">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-shorten-desktop container relative -top-20 mx-auto flex h-auto flex-col rounded-lg bg-primary-violet bg-cover bg-center bg-no-repeat p-8 md:-top-16 md:p-12 lg:flex-row"
        >
          <div className="relative flex w-full flex-col font-mono">
            <input
              {...register("link", {
                required: "Please add a link",
                pattern: {
                  value:
                    /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/,
                  message: "Not a valid link",
                },
              })}
              className={`flex-grow rounded-lg py-3 px-4 text-xl placeholder:text-base placeholder:text-neutral-grayish-violet focus:border-transparent focus:ring-0 lg:mr-2 ${
                errors?.link?.type &&
                `border-2 border-secondary-red focus:border-secondary-red `
              }`}
              type="text"
              placeholder="Shorten a link here..."
            />
            <p className="mt-1 mb-3 inline-block font-mono text-sm italic tracking-wide text-secondary-red sm:absolute lg:mb-0 lg:mt-16">
              {errors.link?.message}
            </p>
          </div>
          <button
            type="submit"
            className="h-full w-full whitespace-nowrap rounded-lg bg-primary-cyan px-10 py-4 text-base font-bold text-white transition duration-500 ease-in-out hover:brightness-110 sm:w-auto md:mt-6 lg:mt-0"
          >
            Shorten It!
          </button>
        </form>
      </div>
    </section>
  );
};

export default InputField;
