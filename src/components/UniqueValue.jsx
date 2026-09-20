import { BadgeCheck, MapPinned, Sprout, Waypoints } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function UniqueValue() {
  const { t } = useLanguage();
  const items = [[Sprout, "schemeMatch", "schemeMatchText"], [MapPinned, "localHelp", "localHelpText"], [Waypoints, "trackStatus", "trackStatusText"]];
  return <section className="bg-amber-50 py-20"><div className="site-shell"><div className="grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr]"><div><p className="text-sm font-bold tracking-wider text-green-700">{t("uspTag")}</p><h2 className="mt-3 text-3xl font-bold leading-tight text-green-950 md:text-4xl">{t("uspTitle")}</h2><p className="mt-5 text-base leading-7 text-gray-700">{t("uspText")}</p><div className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-green-800 px-5 py-4 text-white shadow-lg"><BadgeCheck className="text-yellow-300" /><span><strong className="block">Sanga Seva Card</strong><span className="text-sm text-green-100">One mobile number. One trusted record.</span></span></div></div><div className="grid gap-4 sm:grid-cols-3">{items.map(([Icon, title, text]) => <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-green-100"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-green-800"><Icon size={22} /></span><h3 className="mt-5 text-lg font-bold text-green-900">{t(title)}</h3><p className="mt-3 text-sm leading-6 text-gray-600">{t(text)}</p></div>)}</div></div></div></section>;
}
