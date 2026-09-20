import { motion } from "framer-motion";
import { Users, MapPinned, Sprout, CalendarDays } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function Stats() {
  const { t } = useLanguage();
  const stats = [
    {
      icon: <Users size={45} />,
      number: "25,000+",
      title: t("farmers"),
    },
    {
      icon: <MapPinned size={45} />,
      number: "31",
      title: t("districts"),
    },
    {
      icon: <Sprout size={45} />,
      number: "150+",
      title: t("programsConducted"),
    },
    {
      icon: <CalendarDays size={45} />,
      number: "500+",
      title: t("eventsOrganized"),
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-green-700 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="text-center text-3xl font-bold md:text-4xl">
            {t("impact")}
          </h2>

          <p className="text-center mt-5 text-green-100 text-lg">
            {t("impactText")}
          </p>

        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
              }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center"
            >

              <div className="flex justify-center text-yellow-400">
                {item.icon}
              </div>

              <h3 className="text-5xl font-bold mt-6">
                {item.number}
              </h3>

              <p className="mt-4 text-lg text-green-100">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
