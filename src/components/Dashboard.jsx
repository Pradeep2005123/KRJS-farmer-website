import { CalendarDays, ClipboardList, FileText, HandHelping, LayoutDashboard, MapPin, Plus, Sprout, Users } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const Card = ({ icon: Icon, title, value, note, color = "bg-green-700" }) => (
  <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
    <div className="flex items-start justify-between">
      <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${color} text-white`}>
        <Icon size={21} />
      </span>
      {value && <strong className="text-2xl text-green-950">{value}</strong>}
    </div>
    <h3 className="mt-5 font-bold text-green-950">{title}</h3>
    {note && <p className="mt-2 text-sm text-gray-600">{note}</p>}
  </div>
);

export default function Dashboard({ role, events, onAddEvent, onExit }) {
  const { t, toggle, language } = useLanguage();
  const [helpType, setHelpType] = useState("");
  const [sent, setSent] = useState(false);
  const [eventForm, setEventForm] = useState({ title: "", date: "", location: "", description: "" });
  const [eventSaved, setEventSaved] = useState(false);
  const farmer = role === "farmer";
  
  const status = farmer 
    ? [[t("matchedSchemes"), "3", Sprout, "bg-green-700"], [t("nextTraining"), "15 Aug", CalendarDays, "bg-amber-500"], [t("activeRequests"), "1", ClipboardList, "bg-blue-600"]] 
    : [[t("members"), "25,000", Users, "bg-green-700"], [t("registrations"), "126", ClipboardList, "bg-amber-500"], [t("activeRequests"), "38", HandHelping, "bg-blue-600"]];
  
  const submitEvent = (event) => {
    event.preventDefault();
    onAddEvent(eventForm);
    setEventForm({ title: "", date: "", location: "", description: "" });
    setEventSaved(true);
  };

  return (
    <main className="min-h-screen bg-[#f6f8f5]">
      <header className="border-b border-green-100 bg-white">
        <div className="site-shell flex min-h-20 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-700 text-white">
              <LayoutDashboard />
            </span>
            <div>
              <h1 className="text-lg font-bold text-green-950">{farmer ? t("welcomeFarmer") : t("welcomeAdmin")}</h1>
              <p className="text-xs text-gray-500">KRJS · Sanga Seva Card</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={toggle} className="rounded-lg border border-green-700 px-3 py-2 text-sm font-bold text-green-800">
              {language === "en" ? "ಕನ್ನಡ" : "English"}
            </button>
            <button onClick={onExit} className="rounded-lg bg-green-700 px-3 py-2 text-sm font-bold text-white">
              {t("logout")}
            </button>
          </div>
        </div>
      </header>

      <div className="site-shell py-8">
        <div className="rounded-2xl bg-gradient-to-r from-green-900 to-green-700 p-6 text-white md:p-8">
          <p className="text-sm font-bold text-yellow-300">{farmer ? "SANGA SEVA CARD" : "KRJS ADMIN"}</p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">{farmer ? t("farmerSubtitle") : t("adminSubtitle")}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-green-100">
            {farmer 
              ? "Your profile, scheme guidance and local Sanga support are linked to one secure mobile number." 
              : "Use this workspace to keep farmer support accountable and visible across Karnataka."}
          </p>
        </div>

        <section className="mt-7 grid gap-4 md:grid-cols-3">
          {status.map(([title, value, icon, color]) => (
            <Card key={title} title={title} value={value} icon={icon} color={color} />
          ))}
        </section>

        {farmer ? (
          <section className="mt-7 grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <h2 className="text-xl font-bold text-green-950">{t("myServices")}</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[[Sprout, "findSchemes"], [HandHelping, "requestHelp"], [CalendarDays, "myEvents"], [Users, "myProfile"]].map(([Icon, label]) => (
                  <button key={label} className="flex items-center gap-3 rounded-xl border border-green-100 p-4 text-left font-bold text-green-900 transition hover:bg-green-50">
                    <Icon className="text-green-700" size={22} />
                    {t(label)}
                  </button>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-green-50 p-4">
                <strong className="text-green-950">{t("localCoordinator")}</strong>
                <p className="mt-1 text-sm text-gray-600 flex items-center flex-wrap gap-1">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Bengaluru Rural")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-700 hover:underline font-semibold"
                  >
                    <MapPin className="mr-1 inline text-green-700" size={16} />
                    Bengaluru Rural
                  </a>
                  <span>· Smt. Lakshmi Devi · </span>
                  <a
                    href="tel:+919876543211"
                    className="text-green-700 hover:underline font-semibold"
                  >
                    +91 98765 43211
                  </a>
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <h2 className="text-xl font-bold text-green-950">{t("quickHelp")}</h2>
              {sent ? (
                <p className="mt-5 rounded-xl bg-green-50 p-4 text-sm text-green-900">
                  Your support request has been saved. A coordinator will contact you.
                </p>
              ) : (
                <>
                  <p className="mt-3 text-sm text-gray-600">{t("helpQuestion")}</p>
                  <select value={helpType} onChange={(event) => setHelpType(event.target.value)} className="mt-4 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm">
                    <option value="">Select a service</option>
                    {["cropInsurance", "irrigation", "subsidy", "training"].map((key) => (
                      <option key={key}>{t(key)}</option>
                    ))}
                  </select>
                  <button disabled={!helpType} onClick={() => setSent(true)} className="mt-4 w-full rounded-xl bg-green-700 px-4 py-3 font-bold text-white disabled:cursor-not-allowed disabled:bg-gray-300">
                    {t("submitRequest")}
                  </button>
                </>
              )}
            </div>
          </section>
        ) : (
          <section className="mt-7 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
            <form onSubmit={submitEvent} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-green-700 p-2 text-white">
                  <Plus size={20} />
                </span>
                <div>
                  <h2 className="text-xl font-bold text-green-950">{t("addEventTitle")}</h2>
                  <p className="text-sm text-gray-600">{t("addEventSubtitle")}</p>
                </div>
              </div>
              <div className="mt-5 grid gap-4">
                <label className="text-sm font-semibold text-green-950">
                  {t("eventName")}
                  <input required value={eventForm.title} onChange={(event) => setEventForm({ ...eventForm, title: event.target.value })} placeholder={t("eventNamePlaceholder")} className="mt-1.5 w-full rounded-xl border border-gray-300 px-4 py-3 font-normal" />
                </label>
                <label className="text-sm font-semibold text-green-950">
                  {t("eventDate")}
                  <input required type="date" value={eventForm.date} onChange={(event) => setEventForm({ ...eventForm, date: event.target.value })} className="mt-1.5 w-full rounded-xl border border-gray-300 px-4 py-3 font-normal" />
                </label>
                <label className="text-sm font-semibold text-green-950">
                  {t("eventLocation")}
                  <input required value={eventForm.location} onChange={(event) => setEventForm({ ...eventForm, location: event.target.value })} placeholder={t("eventLocationPlaceholder")} className="mt-1.5 w-full rounded-xl border border-gray-300 px-4 py-3 font-normal" />
                </label>
                <label className="text-sm font-semibold text-green-950">
                  {t("descriptionLabel")}
                  <textarea required value={eventForm.description} onChange={(event) => setEventForm({ ...eventForm, description: event.target.value })} placeholder={t("descriptionPlaceholder")} rows="3" className="mt-1.5 w-full rounded-xl border border-gray-300 px-4 py-3 font-normal" />
                </label>
              </div>
              <button className="mt-5 w-full rounded-xl bg-green-700 px-4 py-3 font-bold text-white hover:bg-green-800">{t("publishEventBtn")}</button>
              {eventSaved && <p className="mt-3 rounded-lg bg-green-50 p-3 text-sm text-green-900">{t("eventPublishedMsg")}</p>}
            </form>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <h2 className="text-xl font-bold text-green-950">{t("publishedEventsTitle")}</h2>
              <p className="mt-1 text-sm text-gray-600">{events.length} {t("eventsVisibleText")}</p>
              <div className="mt-5 space-y-3">
                {events.slice(0, 4).map((event) => (
                  <div key={event.id} className="rounded-xl border border-green-100 p-4">
                    <strong className="block text-green-950">{event.title || t(event.titleKey)}</strong>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 flex items-center gap-1 text-sm text-gray-600 hover:text-green-700 transition"
                    >
                      <MapPin size={15} className="text-green-700" />
                      <span>{event.location}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
