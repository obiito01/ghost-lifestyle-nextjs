import React from "react";

const NewsletterSection = () => {
  return (
    <section className="overflow-hidden h-[600px] bg-white flex flex-col items-center justify-center gap-7">
      <img
        src="https://cdn.shopify.com/s/files/1/2060/6331/files/footer_logo.png?v=1512024413"
        alt="Ghost Lifestyle Logo"
        className="w-[180px] h-[180px]"
      />
      <h1 className="font-[900] text-[52px] text-neutral-800">
        BE A LEGEND. JOIN GHOST
      </h1>
      <p className="text-neutral-400">
        Subscribe for latest news, events and promotions.
      </p>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Enter your Email here"
          className="ring-1 ring-inset ring-neutral-200 h-full text-lg p-4 outline-none bg-neutral-100"
        />
        <button className="bg-red-500 text-white h-full px-6">Sign Up</button>
      </div>
    </section>
  );
};

export default NewsletterSection;
