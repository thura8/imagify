import React from "react";
import { assets } from "../assets/assets";

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Create AI Images
      </h1>
      <p className="text-gray-500 mb-8">Turn your imagination into visuals</p>

      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img
          src={assets.sample_img_1}
          alt=""
          className="w-80 xl:w-96 rounded-lg"
        />
        <div>
          <h2 className="text-3xl font-medium max-w-lg mb-4">
            Introducing the AI-Powered Text to Image Generator
          </h2>
          <p className="text-gray-600 mb-4">
            Turn your imagination into stunning visuals in seconds. Our free AI
            image generator lets you create unique, eye-catching images from
            just a few words. No design skills needed — just describe what you
            envision, and watch your ideas come to life instantly
          </p>
          <p className="text-gray-600">
            Just type in a prompt, and our powerful AI brings it to life with
            high-quality images in seconds. Whether it’s product mockups,
            character designs, portraits, or even ideas that don’t exist yet —
            if you can imagine it, you can see it. Fueled by cutting-edge AI,
            your creativity has no limits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
