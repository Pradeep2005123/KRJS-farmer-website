import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function Events({ events }) {
  const { t } = useLanguage();
  return (
    <section id="events" className="py-24 bg-[#f8faf5]">
      <div className="container mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-green-800">
            {t("eventsTitle")}
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            {t("eventsText")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-[#f8faf5] rounded-2xl shadow-lg p-6 border border-green-100"
            >
              <div className="flex items-center gap-2 text-green-700 font-semibold">
                <CalendarDays size={20} />
                <span>{event.date}</span>
              </div>

              <h3 className="text-2xl font-bold mt-4 text-green-800">{event.titleKey ? t(event.titleKey) : event.title}</h3>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mt-3 text-gray-600 hover:text-green-700 transition"
              >
                <MapPin size={18} />
                <span>{event.location}</span>
              </a>

              <p className="mt-4 text-gray-600">{event.descriptionKey ? t(event.descriptionKey) : event.description}</p>

              <button className="mt-6 btn-primary">
                {t("register")}
              </button>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
