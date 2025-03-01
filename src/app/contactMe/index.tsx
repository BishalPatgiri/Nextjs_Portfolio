import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactMeOption } from "../../constants";

interface IFormData {
  name: string;
  email: string;
  subject: string;
  comment: string;
}

interface ICustomAlert {
  showAlert: boolean;
  alertText?: string;
}

const ContactMePage = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    subject: "",
    comment: "",
  });
  const [customAlert, setCustomAlert] = useState<ICustomAlert>({
    showAlert: false,
    alertText: "",
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // console.log("Incoming Data",formData)

    const { name, email, subject, comment } = formData;
    if (name.length == 0 || email.length == 0 || subject.length == 0) {
      setCustomAlert({
        showAlert: true,
        alertText: "Please Fill all the required fields !",
      });
      setTimeout(() => setCustomAlert({showAlert:false}), 3000);
    } else {
      setCustomAlert({
        showAlert: true,
        alertText: "Form Submitted Successfully !",
      });
      setTimeout(() => setCustomAlert({ showAlert: false }), 3000);
    }
  };

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
          <form action="" onSubmit={handleSubmit}>
            <div className="sm:col-span-4">
              <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                Name <span className="text-red-800">*</span>
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="block flex-1 border-0 bg-transparent h-11 py-1.5 pl-3 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="John Barfi"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4  mt-4">
              <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                Email <span className="text-red-800">*</span>
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="block flex-1 border-0 bg-transparent h-11 py-1.5 pl-3 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="johmbarfi@gmail.com"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4  mt-4">
              <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                Subject <span className="text-red-800">*</span>
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="block flex-1 border-0 bg-transparent h-11 py-1.5 pl-3 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Project Discussion"
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
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
                  className="block w-full rounded-md border-0 p-3 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) =>
                    setFormData({ ...formData, comment: e.target.value })
                  }
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
              {customAlert.showAlert && customAlert?.alertText?.toLowerCase().includes('successfull') && (
                <div className="p-4 text-green-800 bg-green-100 rounded-lg border border-green-200">
                  <p className="text-sm">{customAlert.alertText}</p>
                </div>
              )}
              {customAlert.showAlert && !customAlert?.alertText?.toLowerCase().includes('successfull') && (
                <div className="p-4 text-red-800 bg-red-100 rounded-lg border border-red-200">
                  <p className="text-sm">{customAlert.alertText}</p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMePage;
