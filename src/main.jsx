 
import { createRoot } from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./ShopContextProvider.jsx";

createRoot(document.getElementById("root")).render(
 
  
     <ShopContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
     </ShopContextProvider>
      


);
