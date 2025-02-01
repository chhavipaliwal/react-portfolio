import { motion } from "framer-motion";
import { useInView } from "react-hook-inview";

type SpecializeProps = {
  services: {
    id: number;
    title: string;
    image: string;
    description: string;
    color: string;
    background: string;
  }[];
};

function Specilize({ services }: SpecializeProps) {
  const [ref, isInView] = useInView();
  const displayServices = services.slice(0, 3);
  const itemAnimations = [
    {
      initial: { opacity: 0, x: -120 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0 },
    },
    {
      initial: { opacity: 0, y: 120 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0, delay: 0.2 },
    },
    {
      initial: { opacity: 0, x: 120 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0, delay: 0.4 },
    },
  ];
  return (
    <div ref={ref} className="section specilize" id="specilize">
      <h2 className="topic-heading specilize-heading">Specilizing in</h2>

      <div className="specilize-content">
        {displayServices.map((service, index) => (
          <motion.div
            // initial={itemAnimations[index].initial}
            // animate={isInView ? itemAnimations[index].animate : {}}
            // transition={itemAnimations[index].transition}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0 }}
            viewport={{
              once: true,
            }}
            className="specilize-card animation-transition"
            key={index}
          >
            <i
              className={service.image}
              style={{
                color: service.color,
                backgroundColor: service.background,
              }}
            ></i>
            <div className="specilize-card-content">
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Specilize;
