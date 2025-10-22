import hero from "../assets/hero.png";
import { Link } from "react-router";
import playStoreIcon from "../assets/icons/playStore.png";
import appStoreIcon from "../assets/icons/appStore.png";

const Banner = () => {
  return (
   <div className="max-w-6xl mx-auto text-center py-16 px-4 space-y-8">
  {/* Heading */}
  <div className="space-y-4">
    <h1 className="text-5xl font-extrabold leading-tight">
      We Build <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500">
        Productive Apps
      </span>
    </h1>
    <p className="text-gray-600 text-lg md:max-w-2xl mx-auto">
      At <span className="font-semibold text-violet-600">HERO.IO</span>, we design
      smart and creative apps that make life simpler, faster, and more enjoyable.
      Our goal is to turn your ideas into beautiful digital experiences that make
      a difference.
    </p>
  </div>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-4">
    <Link
      to="https://play.google.com/store/apps?hl=en"
      target="_blank"
      className="btn bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white px-6 py-4 text-lg font-semibold shadow-md hover:scale-105 transition-transform duration-300"
    >
      <img src={playStoreIcon} alt="Play Store" className="w-6" />
      Google Play
    </Link>
    <Link
      to="https://www.apple.com/app-store/"
      target="_blank"
      className="btn bg-white border border-violet-300 text-violet-600 px-6 py-4 text-lg font-semibold shadow-sm hover:bg-violet-50 hover:scale-105 transition-transform duration-300"
    >
      <img src={appStoreIcon} alt="App Store" className="w-6" />
      App Store
    </Link>
  </div>

  {/* Hero Image */}
  <figure className="flex justify-center items-center pt-10">
    <img
      src={hero}
      alt="Hero Illustration"
      className="w-full max-w-3xl hover:scale-105 transition-transform duration-700"
    />
  </figure>
</div>

  );
};

export default Banner;
Banner;
