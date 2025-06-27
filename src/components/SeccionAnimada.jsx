// components/SeccionAnimada.jsx
import { motion } from "framer-motion";
import { forwardRef } from "react";

/**
 * Sección animada condicional: si es móvil, se renderiza como <section> sin animaciones.
 * Si no es móvil, se aplica animación de entrada con Framer Motion.
 * También reenvía correctamente el ref para IntersectionObserver.
 */
const SeccionAnimada = forwardRef(function SeccionAnimada(
  { esMovil, id, className = '', children },
  ref
) {
  const Tag = esMovil ? 'section' : motion.section;

  return (
    <Tag
      id={id}
      ref={ref}
      className={className}
      {...(!esMovil && {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        viewport: { once: false, amount: 0.4 },
      })}
    >
      {children}
    </Tag>
  );
});

export default SeccionAnimada;
