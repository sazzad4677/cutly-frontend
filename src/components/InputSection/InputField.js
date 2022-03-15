import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const InputField = ({ link, setLink }) => {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (fieldData) => {
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/shortUrls`, {
        fullUrl: fieldData.link,
      });
      setLink([
        ...link,
        {
          data,
        },
      ]);
      reset();
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (err.response) {
        setServerError(err.response.data?.message);
      }
    }
  };
  return (
    <div className="bg-neutral-bg">
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
              {serverError ? serverError : errors.link?.message}
            </p>
          </div>
          <button
            type="submit"
            className={`h-full w-full whitespace-nowrap rounded-lg bg-primary-cyan px-10 py-4 text-base font-bold text-white transition duration-500 ease-in-out hover:brightness-110 sm:w-auto md:mt-6 lg:mt-0 ${
              loading && `cursor-not-allowed`
            }`}
            disabled={loading ? true : false}
            title="Shorten URL"
          >
            {loading ? (
              <svg
                className="h-5 w-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Shorten It!"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputField;
