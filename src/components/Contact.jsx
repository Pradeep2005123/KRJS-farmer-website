import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="bg-green-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
        <div>
          <p className="font-bold tracking-wider text-yellow-300">{t("helpTag")}</p>
          <h2 className="mt-3 text-4xl font-bold">{t("helpTitle")}</h2>
          <p className="mt-5 max-w-xl leading-7 text-green-100">{t("helpText")}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <a href="tel:+919876543210" className="rounded-xl bg-white/10 p-4 hover:bg-white/15 transition">
            <Phone className="text-yellow-300" />
            <strong className="mt-3 block">{t("call")}</strong>
            <span className="text-sm text-green-100">+91 98765 43210</span>
          </a>
          <a href="mailto:help@krjs.org" className="rounded-xl bg-white/10 p-4 hover:bg-white/15 transition">
            <Mail className="text-yellow-300" />
            <strong className="mt-3 block">{t("email")}</strong>
            <span className="text-sm text-green-100">help@krjs.org</span>
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white/10 p-4 hover:bg-white/15 transition block"
          >
            <MessageCircle className="text-yellow-300" />
            <strong className="mt-3 block">{t("whatsapp")}</strong>
            <span className="text-sm text-green-100">+91 98765 43210</span>
          </a>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Karunada Raitha Jana Abiruddhi Sanga centres Karnataka")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white/10 p-4 hover:bg-white/15 transition block"
          >
            <MapPin className="text-yellow-300" />
            <strong className="mt-3 block">{t("karnataka")}</strong>
            <span className="text-sm text-green-100">{t("centres")}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
