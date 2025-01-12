import React, { useState } from "react";
import "./APIDocIOS.css";
import { 
  Navbar,
  NavbarBrand,
  NavbarContent,
  Link,
  Snippet,
  Spacer } from "@nextui-org/react";
import logo from "./assets/logo.png"; // Replace with actual logo path

const APIDocIOS = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* ========== HEADER (Top Bar) ========== */}
      <header>
        <Navbar variant="floating" isBordered>
          <NavbarBrand>
            <span className="font-bold text-inherit">
              Clickforce Developers iOS SDK
            </span>
          </NavbarBrand>
          <NavbarContent variant="highlight">
            <Link href="#">Documentation</Link>
            <Link href="#">Sign in</Link>
          </NavbarContent>
        </Navbar>
      </header>

      {/* ========== MAIN CONTENT WRAPPER ========== */}
      <div className="flex flex-1">
        {/* ---- LEFT SIDE NAVIGATION ---- */}
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

        {/* ---- MAIN CONTENT AREA ---- */}
        <main className="flex-1 p-6 overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4">Banner Ads</h2>

          <p className="mb-6">
            Banner ads are rectangular image or text ads that occupy a spot
            within an app’s layout. They stay on screen while users interact
            with the app, and can refresh automatically after a certain period.
          </p>

          <section className="mb-8">
            <h3 id="prerequisites" className="text-xl font-semibold mb-2">
              Prerequisites
            </h3>
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

        {/* ---- RIGHT SIDE (OPTIONAL) ---- */}
        <aside className="hidden xl:block w-64 border-l border-gray-300 p-4">
          <h5 className="text-md font-semibold mb-2">On This Page</h5>
          <ul className="list-none pl-0 mt-2 space-y-2">
            <li>
              <Link href="#prerequisites">Prerequisites</Link>
            </li>
            <li>
              <Link href="#configure">Configure Your App</Link>
            </li>
            <li>
              <Link href="#create-adview">Create an AdView</Link>
            </li>
            <li>
              <Link href="#load-ad">Load an Ad</Link>
            </li>
          </ul>
        </aside>
      </div>

      {/* ========== FOOTER ========== */}
      <footer className="border-t border-gray-300 p-4 flex justify-center">
        <small>© 2025 Google – All rights reserved.</small>
      </footer>
    </div>
  );
};

export default APIDocIOS;