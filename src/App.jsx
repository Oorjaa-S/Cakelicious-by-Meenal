import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Admin from "./pages/Admin";
import CategoryPage from "./pages/CategoryPage";
import CakeDetails from "./pages/CakeDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Main />} />

        <Route path="/admin" element={<Admin />} />

        <Route
          path="/category/:categoryName"
          element={<CategoryPage />}
        />

        <Route
          path="/cake/:id"
          element={<CakeDetails />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;