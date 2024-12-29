import { useState } from 'react'
import './App.css';
import {NextUIProvider} from "@nextui-org/react";
import Header from './components/Header';
import Footer from './components/Footer';
import SDKDownloadSection from './components/SDKDownloadSection';
import RecentUpdatesSection from './components/RecentUpdatesSection';
import FeaturesSection from './components/FeaturesSection';
import APIDocIOS from './APIDocIOS';
import { BrowserRouter, Routes, Route } from "react-router";

const Home = () => {
  return (
    <div id="root" className="mx-auto max-w-[1280px] px-4">
      <Header />
      <SDKDownloadSection />
      <RecentUpdatesSection />
      <FeaturesSection />
      <Footer />
    </div>
  )
}

function App() {
  return (    
    <NextUIProvider>
      <BrowserRouter>    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apidoc_ios" element={<APIDocIOS />} />
        </Routes>
      </BrowserRouter>      
    </NextUIProvider>
  );
}

export default App
