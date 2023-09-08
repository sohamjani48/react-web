import React from "react";

const ContactUs = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold m-2 p-2">Contact Us</h1>
      <form>
        <div>
          <input
            type="text"
            className="border border-black rounded-md px-2 py-1 m-4"
            placeholder="name"
          />
        </div>
        <div>
          <input
            type="text"
            className="border border-black rounded-md px-2 py-1 m-4"
            placeholder="message"
          />
        </div>

        <button className="mx-4 my-2 p-2 bg-orange-200 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
