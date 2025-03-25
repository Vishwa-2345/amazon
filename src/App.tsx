// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AppNavbar from "./components/NavbarComponent";
// import Home from "./pages/Home";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <AppNavbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/NavbarComponent";
import Home from "./pages/Home";  // ✅ List Page
import ProductDetails from "./components/ProductDetails"; // ✅ Details Page

const App = () => {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

