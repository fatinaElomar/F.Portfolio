import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { data } from "../../data";

const selectedProjects = data.projects.slice(0, 8);

// Split into two rows
const row1 = selectedProjects.slice(0, Math.ceil(selectedProjects.length / 2));
const row2 = selectedProjects.slice(Math.ceil(selectedProjects.length / 2));

// Pastel background colors
const pastelColors = [
  "#FFD8A9", // peach
  "#FFC1C1", // light pink
  "#c5d7c5", //  green
  "#c9aff6", //  purple
  "#c5d7c5", // green
  "#FBCFFB", // light magenta
  "#FFE4B5", // moccasin
  "#E0CFFF"  // lavender
];
export default function ShowcaseSticky() {
  const [widthRow1, setWidthRow1] = useState(0);
  const [widthRow2, setWidthRow2] = useState(0);

  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const updateWidths = () => {
      if (row1Ref.current) setWidthRow1(row1Ref.current.scrollWidth / 2);
      if (row2Ref.current) setWidthRow2(row2Ref.current.scrollWidth / 2);
    };

    // Call initially after render
    setTimeout(updateWidths, 100);

    // Update on resize
    window.addEventListener("resize", updateWidths);
    return () => window.removeEventListener("resize", updateWidths);
  }, []);

  const speed = 100; // slower movement

  const Card = ({ project, color }) => (
    <div
      className="min-w-[250px] md:min-w-[300px] lg:min-w-[350px] h-[200px] rounded-2xl p-4 flex flex-col justify-between shadow-md"
      style={{ backgroundColor: color }}
    >
      {project.logo && (
        <img src={project.logo} alt="logo" className="w-8 h-8 mb-1 object-contain" />
      )}

      {project.number && (
        <h2 className="text-2xl md:text-3xl font-bold mb-1">{project.number}</h2>
      )}

      {project.title && (
        <h3 className="text-lg md:text-xl font-semibold mb-1">{project.title}</h3>
      )}

      {project.summary && <p className="text-sm md:text-base mb-1">{project.summary}</p>}

      {project.tags && (
        <div className="flex flex-wrap gap-1 mt-1">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="text-xs px-2 py-1 rounded-full bg-white/30">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  return (
<section id="showcase" className="w-screen py-16 overflow-hidden">
      {/* Section title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Projects We’re Proud Of</h2>
        
      </div>

      {/* Row 1 */}
      <div className="relative w-full overflow-hidden h-[200px] mb-8">
        <motion.div
          ref={row1Ref}
          className="flex gap-4 absolute"
          animate={{ x: [-widthRow1, 0, -widthRow1] }}
          transition={{ repeat: Infinity, ease: "linear", duration: speed }}
        >
          {[...row1, ...row1].map((p, i) => (
            <Card
              key={`${p.title}-${i}`}
              project={p}
              color={pastelColors[i % pastelColors.length]}
            />
          ))}
        </motion.div>
      </div>

      {/* Row 2 */}
      <div className="relative w-full overflow-hidden h-[200px]">
        <motion.div
          ref={row2Ref}
          className="flex gap-4 absolute"
          animate={{ x: [0, -widthRow2, 0] }}
          transition={{ repeat: Infinity, ease: "linear", duration: speed }}
        >
          {[...row2, ...row2].map((p, i) => (
            <Card
              key={`${p.title}-${i}-row2`}
              project={p}
              color={pastelColors[(i + 3) % pastelColors.length]}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
