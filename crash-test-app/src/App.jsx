import "./App.css";

import axios from "axios";

import Header from "./components/Header";

import Content from "./components/Content";

import Footer from "./components/Footer";

export default function App({ box }) {
  // get data fromn server
  async function getStuff({ box }) {
    try {
      const url = "http://192.168.0.213:8000";

      const response = await axios.get(url);

      console.log(response.data);

      let box = response.data;
    } catch (error) {
      console.log(error);
    }
  }

  getStuff();

  // ./ get data from server

  return (
    <div className="app">
      <Header />

      <Content />

      <Footer />
    </div>
  );
}
