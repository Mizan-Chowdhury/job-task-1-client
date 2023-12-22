import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="lg:px-16 flex items-center max-w-screen-2xl mx-auto">
      <div className="flex items-center flex-col lg:flex-row-reverse justify-between gap-10">
        <div className="text-center lg:text-left px-2 md:px-0">
          <h1 className="text-3xl md:text-5xl md:leading-[60px]">
            <span className="banner-title font-bold text-4xl md:text-6xl">
              Task Flow Hub:
            </span>{" "}
            Master Your Daily Hustle
          </h1>
          <p className="py-4 text-sm md:text-base">
            Elevate your productivity with Task Flow Hub —a sleek task
            management solution that simplifies organization and boosts
            efficiency. Stay in control of your tasks effortlessly.
          </p>
          <Link to={'dashboard'}>
            <button className="btn border-none p-4 text-[#ffff] font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Let’s Explore
            </button>
          </Link>
        </div>
        <img
          className="lg:max-w-3xl"
          src="https://i.ibb.co/FgcxXH5/pexels-breakingpic-3243.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
