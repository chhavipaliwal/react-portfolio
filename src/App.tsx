import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import Projects from "./screens/Projects";
import Services from "./ServicesData";
import SCE from "./screens/SCE";
import Links from "./Links";
import ScrollTop from "./components/overlays/ScrollTop";
import { Helmet } from "react-helmet";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Helmet>
        <title>Chhavi Paliwal : The Proficient Web Developer</title>
      </Helmet>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <HomeScreen />
                <ScrollTop />
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <Header />
                <Projects projects={Services.projects} />
              </>
            }
          />
          <Route
            path="/sce"
            element={
              <>
                <Header />
                <SCE />
              </>
            }
          />
          <Route
            path="/links"
            element={
              <>
                <Header />
                <Links links={Services.links} />
                <ScrollTop />
              </>
            }
          />
        </Routes>
      </Router>
      <Analytics />
    </>
  );
}

export default App;
