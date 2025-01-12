import React, { useState } from "react";
import "./APIDocIOS.css";
import { Navbar, NavbarBrand, Link, Snippet, Spacer } from "@nextui-org/react";
import logo from "./assets/logo.png";

const APIDocIOS = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* HEADER */}
      <header>
        <Navbar variant="floating" isBordered className="justify-between px-4">
          <NavbarBrand className="flex items-center">
            <img src={logo} alt="SDK Hub Logo" className="h-4 object-contain" />
            <p className="text-lg md:text-xl text-gray-900  ml-4">
              iOS SDK Documentation
            </p>
          </NavbarBrand>
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="relative z-10 md:hidden w-10 h-10 flex flex-col justify-center items-center bg-[#ffffff]/15 hover:bg-[#ffffff]/15 focus:bg-[#ffffff]/15 rounded-lg hover:bg-gray-200 focus:ring-0 focus:border-none focus:outline-none "
            aria-label="Toggle Menu"
          >
            {/* Top Line */}
            <span
              className={`block w-6 h-0.5 bg-gray-800 rounded-sm transition-all duration-300 transform ${
                showSidebar ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            {/* Middle Line */}
            <span
              className={`block w-6 h-0.5 bg-gray-800 rounded-sm transition-all duration-300 my-1 ${
                showSidebar ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            {/* Bottom Line */}
            <span
              className={`block w-6 h-0.5 bg-gray-800 rounded-sm transition-all duration-300 transform ${
                showSidebar ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </Navbar>
      </header>

      {/* MAIN CONTENT */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* LEFT NAVIGATION (Collapsible on Mobile with Expanding Animation) */}
        <div
          className={`overflow-hidden transition-[max-height] duration-300 ease-in-out bg-gray-100 border-b ${
            showSidebar ? "max-h-96" : "max-h-0"
          } md:hidden`}
        >
          <aside className="p-4">
            <h4 className="text-lg font-semibold mb-2">Documentation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" color="text">
                  Overview
                </Link>
              </li>
              <li>
                <span className="font-bold">Guides</span>
                <ul className="pl-4 space-y-1 mt-1">
                  <li>
                    <Link href="#" color="text">
                      Banner Ads
                    </Link>
                  </li>
                  <li>
                    <Link href="#" color="text">
                      Native Ads
                    </Link>
                  </li>
                  <li>
                    <Link href="#" color="text">
                      Rewarded Ads
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#" color="text">
                  Reference
                </Link>
              </li>
            </ul>
          </aside>
        </div>

        {/* LEFT NAVIGATION (Always Visible on Larger Screens) */}
        <aside className="hidden md:block w-60 border-r border-gray-300 p-4">
          <h4 className="text-lg font-semibold mb-2">Documentation</h4>
          <Spacer y={0.5} />
          <ul className="space-y-2">
            <li>
              <Link href="#" color="text">
                Overview
              </Link>
            </li>
            <li>
              <span className="font-bold">Guides</span>
              <ul className="pl-4 space-y-1 mt-1 list-none">
                <li>
                  <Link href="#" color="text">
                    Banner Ads
                  </Link>
                </li>
                <li>
                  <Link href="#" color="text">
                    Native Ads
                  </Link>
                </li>
                <li>
                  <Link href="#" color="text">
                    Rewarded Ads
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#" color="text">
                Reference
              </Link>
            </li>
          </ul>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-6 overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4">Banner Ads</h2>
          <p className="mb-6">
            Banner ads are rectangular image or text ads that occupy a spot within an app’s
            layout. They stay on screen while users interact with the app, and can refresh
            automatically after a certain period.
          </p>

          <section className="mb-8">
            <h3 id="prerequisites" className="text-xl font-semibold mb-2">Prerequisites</h3>
            <ul className="list-disc list-inside pl-4 mt-2 space-y-2">
              <li>Google AdMob account</li>
              <li>Android Studio / Gradle setup</li>
              <li>Play services Ads SDK dependency</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 id="configure" className="text-xl font-semibold mb-2">
              Configure Your App
            </h3>
            <p className="mb-3">
              In your <code>build.gradle</code> file, ensure you have the
              dependencies properly set:
            </p>
            <Snippet copy>
              {`dependencies {
    implementation 'com.google.android.gms:play-services-ads:21.2.0'
}`}
            </Snippet>
          </section>

          <section className="mb-8">
            <h3 id="create-adview" className="text-xl font-semibold mb-2">
              Create an AdView Object
            </h3>
            <p className="mb-3">
              In your Activity, define an <code>AdView</code> and set your Ad
              Unit ID:
            </p>
            <Snippet copy>
              {`// Kotlin or Java code snippet
val adView = AdView(this)
adView.adUnitId = "ca-app-pub-XXXXXXXXXXXXXXXX/NNNNNNNNNN"
adView.adSize = AdSize.BANNER
`}
            </Snippet>
          </section>

          <section className="mb-8">
            <h3 id="load-ad" className="text-xl font-semibold mb-2">
              Load an Ad
            </h3>
            <p className="mb-3">
              Request an ad using <code>AdRequest</code>:
            </p>
            <Snippet copy>
              {`val adRequest = AdRequest.Builder().build()
adView.loadAd(adRequest)`}
            </Snippet>
          </section>

        </main>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-gray-300 p-4 flex justify-center">
        <small>© 2025 SDK Documentation – All rights reserved.</small>
      </footer>
    </div>
  );
};

export default APIDocIOS;