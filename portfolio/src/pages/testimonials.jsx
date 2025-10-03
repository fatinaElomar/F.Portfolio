import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

// Lebanese-flavored testimonials
const testimonials = [
  {
    name: "Rami El Khoury",
    quote:
      "Fatina’s code runs smoother than traffic on a holiday—yes, it’s possible in Lebanon.",
  },
  {
    name: "Nour Haddad",
    quote:
      "Her designs convinced my clients faster than free baklava at a meeting.",
  },
  {
    name: "Karim Abou Saleh",
    quote:
      "My Shopify store loads faster than saj bread. People can’t believe it’s Lebanese made.",
  },
  {
    name: "Layla Chami",
    quote:
      "Working with her was like listening to Fairouz in the morning—smooth and inspiring.",
  },
  {
    name: "Jad Hobeika",
    quote:
      "I asked for a website. She gave me an empire. Okay, a small empire—but still!",
  },
  {
    name: "Maya Saadeh",
    quote:
      "Her work turned our chaos into elegance. Even my teta was impressed.",
  },
];

// Pick a random testimonial different from the current one
function getRandomTestimonial(exclude) {
  let choice;
  do {
    choice = testimonials[Math.floor(Math.random() * testimonials.length)];
  } while (choice.name === exclude); // avoid same person back-to-back
  return choice;
}

export default function Testimonials() {
  const [cards, setCards] = useState([
    testimonials[0],
    testimonials[1],
    testimonials[2],
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const i = Math.floor(Math.random() * cards.length); // pick random card
      setCards((prev) => {
        const newCards = [...prev];
        newCards[i] = getRandomTestimonial(prev[i].name);
        return newCards;
      });
    }, 4000); // shuffle every 4s
    return () => clearInterval(interval);
  }, [cards]);

  return (
    <section className="py-32">
      <div className="container-responsive text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold"
        >
        Yup, They Said That
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 mb-16">
        {cards.map((card, i) => (
          <AnimatePresence key={i} mode="wait">
            <motion.div
              key={card.name} // re-render when content changes
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 0.9, y: 0 }} // lower opacity for pastel feel
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="px-6 py-8 rounded-2xl relative bg-purple-200/40"
            >
              <Quote className="absolute -top-5 -left-5 w-10 h-10 text-purple-300" />
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                “{card.quote}”
              </p>
              <h4 className="font-semibold text-gray-900">{card.name}</h4>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>

    
    </section>
  );
}
