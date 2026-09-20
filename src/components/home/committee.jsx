import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import committee from "../../data/committee";
import { useLanguage } from "../../context/LanguageContext";

export default function Committee() {
  const { t } = useLanguage();
  const memberKeys = [["president", "bengaluru"], ["vicePresident", "mysuru"], ["secretary", "tumakuru"]];
  return (
    <section id="committee" className="section-leadership py-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-green-800">
            {t("leadershipTitle")}
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            {t("leadershipText")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {committee.map((member, index) => (

            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >

              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-green-800">
                  {member.name}
                </h3>

                <p className="text-yellow-600 font-semibold mt-1">
                  {t(memberKeys[index][0])}
                </p>

                <div className="mt-5 space-y-3 text-gray-600">

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t(memberKeys[index][1]))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-green-700 transition"
                  >
                    <MapPin size={18} />
                    {t(memberKeys[index][1])}
                  </a>

                  <a
                    href={`tel:${member.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 hover:text-green-700 transition"
                  >
                    <Phone size={18} />
                    {member.phone}
                  </a>

                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 hover:text-green-700 transition"
                  >
                    <Mail size={18} />
                    {member.email}
                  </a>

                </div>

                <button className="mt-6 w-full bg-green-700 text-white py-3 rounded-xl hover:bg-green-800 transition">
                  {t("viewProfile")}
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
