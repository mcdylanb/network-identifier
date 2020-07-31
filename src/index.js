import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let data = [
  {
    network: "globe-postpaid",
    numbers: [
      "09173",
      "09175",
      "09176",
      "09178",
      "09253",
      "09255",
      "09256",
      "09257",
      "09258"
    ]
  },
  {
    network: "globe",
    numbers: ["0817"]
  },
  {
    network: "sun",
    numbers: [
      "0922",
      "0923",
      "0924",
      "0925",
      "0931",
      "0932",
      "0933",
      "0934",
      "0940",
      "0941",
      "0942",
      "0943",
      "0973",
      "0974"
    ]
  },
  {
    network: "tnt",
    numbers: ["0907", "0909", "0910", "0912", "0930", "0938"]
  },
  {
    network: "smart",
    numbers: [
      "0908",
      "0918",
      "0919",
      "0920",
      "0921",
      "0928",
      "0946",
      "0948",
      "0950",
      "0929",
      "0939",
      "0946",
      "0947",
      "0949",
      "0998",
      "0999"
    ]
  },
  {
    network: "globe tm",
    numbers: [
      "0905",
      "0906",
      "0915",
      "0916",
      "0917",
      "0926",
      "0927",
      "0935",
      "0936",
      "0937",
      "0945",
      "0955",
      "0956",
      "0965",
      "0966",
      "0967",
      "0975",
      "0977",
      "0978",
      "0979",
      "0995",
      "0996",
      "0997"
    ]
  }
];
ReactDOM.render(<App data={data} />, document.getElementById("root"));
