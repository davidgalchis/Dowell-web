import "./App.css";
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/home";
import RootLayout from "./layout/layout/RootLayout";
import Aboutus from "./pages/company/aboutUs/about_us";
import MarineSupport from "./pages/services/marine_support/marine_support";
import CompanyLayout from "./layout/company/companyLayout";
import ContactUs from "./pages/contact_us/contact_us";
import Careers from "./pages/careers/careers";
import Maintenance from "./pages/services/maintenance/maintenance";
import RotatingEquipment from "./pages/products/rotating-equipment/rotatingEquipment";
import DrillingEquipment from "./pages/products/drilling-equipment/drillingEquipment";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="company" element={<CompanyLayout />}>
        <Route path="about-us" element={<Aboutus />} />
      </Route>
      <Route path="services" element={<CompanyLayout />}>
        <Route
          path="onshore-and-offshore-maintenance"
          element={<Maintenance />}
        />
        <Route path="marine-support" element={<MarineSupport />} />
      </Route>
      <Route path="products" element={<CompanyLayout />}>
        <Route path="drilling-equipment" element={<DrillingEquipment />} />
        <Route path="rotating-equipment" element={<RotatingEquipment />} />
      </Route>
      <Route path="careers" element={<CompanyLayout />}>
        <Route path="" element={<Careers />} />
      </Route>
      <Route path="contact-us" element={<ContactUs />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
