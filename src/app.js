import React from "react";
import ReactDOM from "react-dom";
import StarTrekTNSApp from "./components/StarTrekTNSApp.js";
import 'normalize.css/normalize.css';
import './styles/styles.scss';



ReactDOM.render(<StarTrekTNSApp subreddit="TNG" />, document.getElementById("app")
);
