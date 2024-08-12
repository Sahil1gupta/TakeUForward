import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css';
import './App.css';
import BannerForm from './components/BannerForm';
import Seawave from './components/seawave';
import Banner from './components/Banner';

function App() {
  return (
    <>
      <Banner />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  );
}

export default App;