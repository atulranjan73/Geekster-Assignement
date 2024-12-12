import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Categories from "./components/Categories";
import VideoList from "./components/VideoList";
import "./App.css";

function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      <main>
        <Header />
        <Categories />
        <VideoList />
      </main>
    </div>
  );
}

export default App;
