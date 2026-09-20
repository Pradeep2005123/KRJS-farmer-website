import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import emblem from "../../assets/krjs-emblem.jpg";

const links = [["Home", "#home"], ["About", "#about"], ["Leadership", "#committee"], ["Programs", "#works"], ["Events", "#events"], ["Contact", "#contact"]];

export default function Navbar({ onOpenPortal }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, toggle } = useLanguage();
  const closeMenu = () => setMenuOpen(false);
  return <nav className="sticky top-0 z-50 border-b border-green-100 bg-white/95 shadow-sm backdrop-blur"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-6"><a href="#home" className="flex items-center gap-3" aria-label="KRJS home"><img src={emblem} alt="KRJS emblem" className="h-12 w-12 rounded-full border border-green-100 object-cover" /><span><strong className="block text-lg leading-tight text-green-800">KRJS</strong><span className="hidden text-xs text-gray-500 sm:block">Karunada Raitha Jana Abiruddhi Sanga</span></span></a><ul className="hidden items-center gap-6 text-sm font-semibold text-gray-700 lg:flex">{links.map(([label, href]) => <li key={href}><a className="hover:text-green-700" href={href}>{t(label.toLowerCase())}</a></li>)}</ul><div className="flex items-center gap-2"><button onClick={() => onOpenPortal("farmer")} className="hidden rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-800 md:block">{t("farmerLogin")}</button><button onClick={toggle} className="rounded-lg border border-green-700 px-3 py-2 text-sm font-semibold text-green-800 transition hover:bg-green-50">{t("language")}</button><button className="p-2 text-green-800 lg:hidden" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div></div>{menuOpen && <div className="border-t bg-white px-5 py-4 lg:hidden"><ul className="space-y-3 font-semibold text-gray-700">{links.map(([label, href]) => <li key={href}><a href={href} onClick={closeMenu}>{t(label.toLowerCase())}</a></li>)}<li><button onClick={() => { closeMenu(); onOpenPortal("farmer"); }} className="w-full rounded-lg bg-green-700 px-4 py-3 text-left text-white">{t("farmerLogin")}</button></li></ul></div>}</nav>;
}
