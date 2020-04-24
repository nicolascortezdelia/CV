import React from "react";
import "../src/app.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Picture from "./Components/Aside/Picture/Picture";
import OrangeBox from "./Components/Aside/OrangeBox/OrangeBox";
import Contact from "./Components/Aside/Contact/Contact";
import Experience from "./Components/Body/Experience/Experience";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container row">
        <div className="col s12 m5 l5 xl4 grey darken-3 column-aside">
          <Picture />
          <div className="box-position">
            <OrangeBox />
          </div>
          <Contact />
        </div>
        <div className="col s12 m7 l7 xl8 sections">
          <Experience />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
