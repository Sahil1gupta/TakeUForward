import React, { useEffect, useState } from "react";

const Banner = () => {
  const [bannerData, setBannerData] = useState({});
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, secs: 0 });

  // Function to calculate time difference
  const calculateTimeLeft = (endTime) => {
    const endDate = new Date(endTime);
    const now = new Date();
    const difference = endDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, secs });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, secs: 0 });
    }
  };

  // Fetch banner data and set up interval
  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/banner/");
        const data = await response.json();
        setBannerData(data);
        calculateTimeLeft(data.endTime);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    fetchBannerData();

    const intervalId = setInterval(() => {
      if (bannerData.endTime) {
        calculateTimeLeft(bannerData.endTime);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [bannerData.endTime]);

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
          
          <div className="text-white text-lg mb-6">
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
