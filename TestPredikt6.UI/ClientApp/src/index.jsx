import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
//import registerServiceWorker from './registerServiceWorker';

// const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const root = createRoot(document.getElementById("root"))

// root.render(
//   <BrowserRouter basename={baseUrl}>
//     <App />
//   </BrowserRouter>
// );

root.render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="*" element={ <App /> }>
  //     </Route>
  //   </Routes>
  // </BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>

);


// Uncomment the line above that imports the registerServiceWorker function
// and the line below to register the generated service worker.
// By default create-react-app includes a service worker to improve the
// performance of the application by caching static assets. This service
// worker can interfere with the Identity UI, so it is
// disabled by default when Identity is being used.
//
//registerServiceWorker();
