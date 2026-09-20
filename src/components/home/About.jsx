import { motion } from "framer-motion";
import { Leaf, Target, Handshake } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const cards = [
    {
      icon: <Leaf size={45} />,
      title: t("mission"), text: t("missionText"),
    },
    {
      icon: <Target size={45} />,
      title: t("vision"), text: t("visionText"),
    },
    {
      icon: <Handshake size={45} />,
      title: t("values"), text: t("valuesText"),
    },
  ];

  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="site-shell">

        {/* Heading */}

        <motion.div

          initial={{ opacity: 0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: .8 }}

          viewport={{ once: true }}

          className="text-center"

        >

          <h2 className="text-3xl font-bold text-green-800 md:text-4xl">

            {t("aboutTitle")}

          </h2>

          <div className="w-28 h-1 bg-yellow-500 rounded-full mx-auto mt-5"></div>

          <p className="mt-6 text-gray-600 text-base leading-8 max-w-4xl mx-auto md:text-lg">

            {t("aboutText")}

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          {cards.map((card, index) => (

            <motion.div

              key={index}

              whileHover={{
                y: -12,
                scale: 1.03,
              }}

              className="rounded-2xl shadow-lg p-7 border border-green-100 bg-green-50"

            >

              <div className="text-green-700">

                {card.icon}

              </div>

              <h3 className="text-2xl font-bold mt-6">

                {card.title}

              </h3>

              <p className="text-gray-600 leading-8 mt-5">

                {card.text}

              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
