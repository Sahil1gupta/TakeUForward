import React from "react";

const Banner = () => {
    function convertSeconds(seconds) {
        const days=Math.floor()
    }

    const [bannerData, setBannerData] = useState({});

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between p-4 bg-black">
        <div className="text-red-600 text-3xl font-bold">TUF</div>
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded">
          Login
        </button>
      </header>

      <main className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto p-8">
      <div className="text-left md:w-1/2">
      <h2 className="text-pink-500 font-bold text-lg">YOUR PATH TO MASTERY</h2>
      <h1 className="text-4xl md:text-6xl font-bold my-4">
        Elevate Your Learning Journey with TUF+ Course
      </h1>
      <p className="text-lg text-gray-300 mb-6">
        {bannerData.description}
      </p>
      
      <div className="text-white text-lg">
        <div>{timeLeft.days} DAYS</div>
        <div>{timeLeft.hours} HOURS</div>
        <div>{timeLeft.minutes} MINS</div>
        <div>{timeLeft.secs} SECS</div>
      </div>

      <button className="text-pink-500 border-2 border-pink-500 hover:bg-pink-500 hover:text-white font-semibold py-2 px-6 rounded-full">
        Explore Course &darr;
      </button>
    </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <iframe
            className="w-full h-64 md:h-80"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </div>
  );
};

export default Banner;