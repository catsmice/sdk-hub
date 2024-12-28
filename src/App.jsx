import { useState } from 'react'
import './App.css';
import {NextUIProvider} from "@nextui-org/react";
import Header from './components/Header';
import Footer from './components/Footer';
import SDKDownloadSection from './components/SDKDownloadSection';
import RecentUpdatesSection from './components/RecentUpdatesSection';

function App() {
  return (    
    <NextUIProvider>
      {/* Header outside of the max-width container */}

      {/* This container has the max-width constraint */}
      <div id="root" className="mx-auto max-w-[1280px] px-4">
      <Header />

        <SDKDownloadSection />
        <RecentUpdatesSection />
        <Footer />
      </div>
    </NextUIProvider>
  );
}

export default App
