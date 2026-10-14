import { useState } from "react";
import "./App.css";
import Navbar from "./components/servicePagecomponent/navbar";
import Footer from "./components/servicePagecomponent/footer";
import Landing from "./pages/landing";
import ServicePage from "./pages/service.Page";
import AboutPage from "./pages/aboutPage";
import ContactPage from "./pages/contactPage";

export default function App() {
  const [page, setPage] = useState("home");

  const go = (p) => {
    setPage(p);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F14] text-[#E8ECEF]">
      <Navbar page={page} go={go} />
      <main className="flex-1">
        {page === "home" && <Landing go={go} />}
        {page === "service" && <ServicePage go={go} />}
        {page === "contact" && <ContactPage />}
        {page === "about" && <AboutPage go={go} />}
      </main>
      <Footer go={go} />
    </div>
  );
}
