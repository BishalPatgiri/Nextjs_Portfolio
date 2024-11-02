import { contactMeOption } from "@/constants";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactMePage = () => {
  return (
    <div className="h-full pt-4 pb-10">
      <div>
        <p className="font-bold text-2xl max-sm:ml-4">CONTACT ME</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-10 justify-between max-sm:gap-4 max-sm:mt-2 max-sm:justify-between">
        <div className="w-5/12 max-sm:w-4/5">
          {contactMeOption.map((ele, index) => (
            <div key={index}>
              <FontAwesomeIcon icon={ele.icon} className="h-4" />
              <span className="ml-4">{ele.detail}</span>
            </div>
          ))}

          <div className="mt-8">
            Feel free to reach out with any questions, project ideas, or just to
            say hello. You can contact me through the form, email, or phone.
            I'll respond promptly.
          </div>
        </div>
        <div className="w-5/12 max-sm:w-4/5">
          <form action="">
            <div className="sm:col-span-4">
              <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="block flex-1 border-0 bg-transparent h-11 py-1.5 pl-3 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="John Barfi"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4  mt-4">
              <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                Email
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="block flex-1 border-0 bg-transparent h-11 py-1.5 pl-3 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="johmbarfi@gmail.com"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4  mt-4">
              <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                Subject
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="block flex-1 border-0 bg-transparent h-11 py-1.5 pl-3 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Project Discussion"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-full  mt-4">
              <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                Any Comments
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Describe about the requirements.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-start gap-x-6">
              <button
                type="submit"
                className="rounded-md bg-theme-color-200 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-theme-color-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMePage;
