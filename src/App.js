import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Shop } from "./Pages/Shop";
import { ShopCategory } from "./Pages/ShopCategory";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { LoginSignup } from "./Pages/LoginSignup";
import { Footer } from "./Components/Footer/Footer";
import Men_Banner from "./Components/Assets/banner_men.png";
import Women_Banner from "./Components/Assets/banner_women.png";
import Kids_Banner from "./Components/Assets/banner_kids.png";
import { ShopContextProvider } from "./Context/ShopContext";


function App() {
  return (
    <div>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory
            category="men"
            banner={Men_Banner}
          />} />
          <Route path="/women" element={<ShopCategory
            category="women"
            banner={Women_Banner}
          />} />
          <Route path="/kids" element={<ShopCategory
            category="kid"
            banner={Kids_Banner}
          />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </div>

  );
}

export default App;
