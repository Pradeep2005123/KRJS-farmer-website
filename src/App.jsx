import { useState } from "react";
import initialEvents from "./data/events";
import Navbar from "./components/layout/Navbar"; import Hero from "./components/home/Hero"; import About from "./components/home/About"; import Stats from "./components/home/Stats"; import Committee from "./components/home/committee"; import Works from "./components/home/works"; import Events from "./components/home/Events"; import Contact from "./components/Contact"; import Portal from "./components/Portal"; import Footer from "./components/Footer"; import Dashboard from "./components/Dashboard"; import UniqueValue from "./components/UniqueValue"; import { LanguageProvider } from "./context/LanguageContext";
function App() {
  const [portalMode, setPortalMode] = useState(null);
  const [dashboardRole, setDashboardRole] = useState(null);
  const [events, setEvents] = useState(initialEvents);
  const addEvent = (event) => setEvents((current) => [{ ...event, id: Date.now() }, ...current]);

  return <LanguageProvider>{dashboardRole ? <Dashboard role={dashboardRole} events={events} onAddEvent={addEvent} onExit={() => setDashboardRole(null)} /> : <><Navbar onOpenPortal={setPortalMode} /><Hero onOpenPortal={setPortalMode} /><UniqueValue /><About /><Stats /><Committee /><Events events={events} /><Works /><Contact /><Footer />{portalMode && <Portal initialMode={portalMode} onClose={() => setPortalMode(null)} onEnterDashboard={(role) => { setPortalMode(null); setDashboardRole(role); }} />}</>}</LanguageProvider>;
}
export default App;
