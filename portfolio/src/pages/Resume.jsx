import { motion } from "framer-motion";
import { data } from "../data";
import { Phone, Mail, MapPin } from "lucide-react"; // ✅ icons

export default function Resume() {
  const { hero, experience, education, skills, references, contacts } = data;

  return (
    <section className="section pt-28">
      <div className="container-responsive lg:max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-8">
          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-6 bg-blue-50 border border-blue-200"
          >
            <h2 className="text-base font-bold mb-4">😊 Who am I? </h2>
            {/* <h1 className="text-xl sm:text-3xl mb-2">{hero.name}</h1>
            <h2 className="text-xl text-ink/70 mb-4">{hero.title}</h2> */}
            <p className="text-ink/80">{hero.subtitle}</p>
          </motion.div>

          {/* Experience */}
          <div>
            <h1 className="text-base font-bold mb-4">Experience</h1>
            <div className="space-y-6">
              {experience.map((e, i) => (
                <motion.div
                  key={e.role}
                  initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="card p-6 bg-purple-50 border border-purple-200"
                >
                  {/* Role */}
                  <p className="text-sm font-semibold">{e.role}</p>

                  {/* Company + Period in one line */}
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-ink/70">{e.company}</p>
                    <p className="text-[12px] text-[#a678f6]">{e.period}</p>
                  </div>

                  {/* Details */}
                  <ul className="list-disc list-outside text-sm mt-2 space-y-1 text-ink/70">
                    {e.details?.map((d, idx) => (
                      <li key={idx} className="text-sm">
                        {d}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* References moved here */}
          <div className="card p-4 bg-orange-50 border">
            <h2 className="text-base font-bold mb-4">References</h2>
            <div className="space-y-3">
              {references.map((r) => (
                <div key={r.name} className="text-sm space-y-1">
                  {/* Name + Company */}
                  <p className="font-semibold text-base">{r.name}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-ink/70">{r.company}</p>
                    {r.phone && (
                      <p className="text-sm text-ink/60">{r.phone}</p>
                    )}
                  </div>

                  {/* Email if exists */}
                  {r.email && <p className="text-sm text-ink/60">{r.email}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-8">
          {/* Education */}
          <div className="card p-4 bg-yellow-100 border">
            <h2 className="text-base font-bold mb-4">Education</h2>
            <div className="space-y-4">
              {education.map((ed, i) => (
                <motion.div
                  key={ed.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="space-y-1 px-6 py-3"
                >
                  <p className="text-sm font-semibold">{ed.degree}</p>

                  {/* Institution + Period on same line */}
                  <div className="flex justify-between items-center pb-4">
                    <p className="text-sm text-ink/70 font-semibold">
                      {ed.institution}
                    </p>
                    <p className="text-[12px] text-[#a678f6]">{ed.period}</p>
                  </div>

                  {ed.details && (
                    <ul className="list-disc list-outside text-sm mt-1 text-ink/70 space-y-1">
                      {ed.details.map((d, idx) => (
                        <li key={idx} className="text-sm">
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="card p-4 bg-indigo-100 border">
            <h2 className="text-base font-bold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section (New, full-width) */}
      <div className="container-responsive lg:max-w-7xl mx-auto mt-12">
  <h2 className="text-base font-bold mb-6">Contact</h2>
  <div className="grid md:grid-cols-3 gap-6 text-center">
    {/* Phone */}
    <motion.a
      href={`tel:${contacts.phone}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card p-6 border flex flex-col items-center justify-center gap-2 cursor-pointer"
      style={{ backgroundColor: "#d1fae5", borderColor: "#a7f3d0" }}
    >
      <Phone size={30} className="text-green-700" />
      <span className="text-sm">{contacts.phone}</span>
    </motion.a>

    {/* Email */}
    <motion.a
      href={`mailto:${contacts.email}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="card p-6 border flex flex-col items-center justify-center gap-2 cursor-pointer"
      style={{ backgroundColor: "#dbeafe", borderColor: "#bfdbfe" }}
    >
      <Mail size={30} className="text-blue-700" />
      <span className="text-sm">{contacts.email}</span>
    </motion.a>

    {/* Location */}
    <motion.a
      href={`https://www.google.com/maps/search/${encodeURIComponent(
        contacts.location
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="card p-6 border flex flex-col items-center justify-center gap-2 cursor-pointer"
      style={{ backgroundColor: "#fef3c7", borderColor: "#fde68a" }}
    >
      <MapPin size={30} className="text-yellow-700" />
      <span className="text-sm">{contacts.location}</span>
    </motion.a>
  </div>
</div>

    </section>
  );
}
