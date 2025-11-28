import { motion } from "motion/react";

const Card = ({
  className,
  children
}: React.ComponentProps<"div">) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      viewport={{ once: true }}
      data-slot="card"
      className={`bg-card text-card-foreground flex flex-col gap-6 rounded-xl border ${className} border-neutral-300`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
