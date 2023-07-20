import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFontAwesome,
  faTumblr,
} from "@fortawesome/free-brands-svg-icons";
library.add(faQuoteLeft, faTwitter, faTumblr, faFontAwesome);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
