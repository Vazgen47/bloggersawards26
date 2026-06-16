import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Nominees from "./components/Nominees";
import Footer from "./components/Footer";

import Vote from "./pages/Vote";
import CategoryPage from "./pages/CategoryPage";
import Winners from "./pages/Winners";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Categories />
              <Nominees />
            </>
          }
        />

        <Route path="/vote" element={<Vote />} />

        <Route path="/category/:slug" element={<CategoryPage />} />

        <Route path="/winners" element={<Winners />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;