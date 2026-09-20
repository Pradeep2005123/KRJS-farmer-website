import { useState } from "react";
import { CheckCircle2, ChevronLeft, LockKeyhole, ShieldCheck, Smartphone, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Portal({ initialMode, onClose, onEnterDashboard }) {
  const [mode, setMode] = useState(initialMode);
  const [step, setStep] = useState("start");
  const { t } = useLanguage();
  const isFarmer = mode === "farmer";
  const submit = (event) => { event.preventDefault(); setStep(isFarmer ? "farmerDone" : "mfa"); };
  const select = (value) => { setMode(value); setStep("start"); };
  const input = "mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-base outline-none focus:border-green-700";

  return <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-green-950/65 p-4" role="dialog" aria-modal="true" aria-labelledby="portal-title">
    <div className="relative my-5 w-full max-w-lg rounded-3xl bg-white p-7 shadow-2xl sm:p-9">
      <button onClick={onClose} className="absolute right-5 top-5 rounded-full p-2 text-gray-500 hover:bg-gray-100" aria-label={t("close")}><X size={21} /></button>
      <div className="mb-7 flex rounded-xl bg-green-50 p-1.5"><button onClick={() => select("farmer")} className={`min-h-11 flex-1 rounded-lg px-3 py-2 text-base font-bold ${isFarmer ? "bg-green-700 text-white" : "text-green-800"}`}>{t("farmer")}</button><button onClick={() => select("admin")} className={`min-h-11 flex-1 rounded-lg px-3 py-2 text-base font-bold ${!isFarmer ? "bg-green-700 text-white" : "text-green-800"}`}>{t("admin")}</button></div>
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-800">{isFarmer ? <Smartphone /> : <LockKeyhole />}</div>
      <h2 id="portal-title" className="pr-8 text-2xl font-bold text-green-950">{isFarmer ? t("farmerServicesLogin") : t("administration")}</h2>
      {step === "start" && <form onSubmit={submit} className="mt-6 space-y-5">{isFarmer ? <><p className="text-base leading-7 text-gray-600">{t("farmerLoginInfo")}</p><label className="block text-base font-bold text-gray-700">{t("mobile")}<input required inputMode="numeric" placeholder={t("mobilePlaceholder")} className={input} /></label><button className="min-h-12 w-full rounded-xl bg-green-700 px-4 py-3 text-base font-bold text-white hover:bg-green-800">{t("sendOtp")}</button><button type="button" onClick={() => setStep("farmerDone")} className="min-h-12 w-full rounded-xl border border-gray-300 px-4 py-3 text-base font-bold text-gray-700">{t("google")}</button></> : <><p className="text-base leading-7 text-gray-600">{t("adminInfo")}</p><label className="block text-base font-bold text-gray-700">{t("workEmail")}<input required type="email" placeholder="name@krjs.org" className={input} /></label><label className="block text-base font-bold text-gray-700">{t("password")}<input required type="password" placeholder={t("passwordPlaceholder")} className={input} /></label><button className="min-h-12 w-full rounded-xl bg-green-700 px-4 py-3 text-base font-bold text-white hover:bg-green-800">{t("continueMfa")}</button></>}</form>}
      {step === "mfa" && <form onSubmit={(event) => { event.preventDefault(); setStep("adminDone"); }} className="mt-6 space-y-5"><button type="button" onClick={() => setStep("start")} className="flex items-center gap-1 text-base font-semibold text-green-800"><ChevronLeft size={18} /> {t("back")}</button><p className="text-base leading-7 text-gray-600">{t("mfaInfo")}</p><label className="block text-base font-bold text-gray-700">{t("authCode")}<input required inputMode="numeric" maxLength="6" placeholder="000000" className={`${input} text-center text-xl tracking-[.4em]`} /></label><button className="min-h-12 w-full rounded-xl bg-green-700 px-4 py-3 text-base font-bold text-white hover:bg-green-800">{t("verify")}</button><p className="text-center text-sm text-gray-500">{t("recovery")}</p></form>}
      {(step === "farmerDone" || step === "adminDone") && <div className="mt-6 text-center"><CheckCircle2 className="mx-auto text-green-700" size={48} /><h3 className="mt-4 text-xl font-bold text-green-950">{t("demoReady")}</h3><p className="mt-2 text-base leading-7 text-gray-600">{t("demoText")}</p><div className="mt-5 rounded-xl bg-green-50 p-4 text-left text-base leading-7 text-green-900"><ShieldCheck className="mb-2" size={20} /><strong>{isFarmer ? t("farmerDashboard") : t("adminDashboard")}</strong> {isFarmer ? t("farmerDashboardText") : t("adminDashboardText")}</div><button onClick={() => onEnterDashboard(isFarmer ? "farmer" : "admin")} className="mt-5 min-h-12 w-full rounded-xl bg-green-700 px-4 py-3 text-base font-bold text-white">{t("openDashboard")}</button><button onClick={onClose} className="mt-3 w-full py-2 text-sm font-bold text-green-800">{t("close")}</button></div>}
    </div>
  </div>;
}
