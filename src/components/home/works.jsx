import { motion } from "framer-motion";
import works from "../../data/works";
import { useLanguage } from "../../context/LanguageContext";

export default function Works() {
  const { t } = useLanguage();
  const workKeys = [["organic", "organicText"], ["awareness", "awarenessText"], ["water", "waterText"], ["schemes", "schemesText"]];
  return (
    <section id="works" className="section-programs py-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-green-800">
            {t("worksTitle")}
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            {t("worksText")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {works.map((work, index) => {
            const Icon = work.icon;

            return (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="flex justify-center">
                  <div className="bg-green-700 p-4 rounded-full">
                    <Icon size={40} className="text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-green-800 mt-6">
                  {t(workKeys[index][0])}
                </h3>

                <p className="text-gray-600 mt-4">
                  {t(workKeys[index][1])}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
