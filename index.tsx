/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from './App';
import { BrowserRouter, NavLink, Route, Routes } from "react-router";
import Login from "./Login.tsx";
import Header from './Header.tsx';
import GalleryGrid from '@/components/GalleryGrid.tsx';
import Pricing from '@/components/sections/pricing/default.tsx';
import ContactUs from '@/components/ContactUs.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="39653576151-7uhenern5kk8d9gchsveh2vtg4bno65c.apps.googleusercontent.com">
      <BrowserRouter basename={"/imodel"}>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/disco" element={<GalleryGrid />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
