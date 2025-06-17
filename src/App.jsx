import { useState, useRef, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import linkedin_logo from './assets/linkedin.png';
import github_logo from './assets/github.svg';
import telefono_logo from './assets/telefono.png';
import email from './assets/email.png';
import home_icon from './assets/home_logo.png';

import python_logo from './assets/python.png';
import serverless_logo from './assets/serverless.png';
import sql_logo from './assets/sql.png';
import java_logo from './assets/java.png';
import tensorflow_logo from './assets/tf.png';
import aws_logo from './assets/aws.png';
import html_logo from './assets/html.png';
import nosql_logo from './assets/nosql.png';
import selenium_logo from './assets/selenium.png';
import angular_logo from './assets/angular.png';
import background_home from './assets/background_home.mp4';


import './App.css';

function App() {
  // Estado para control del menú hamburguesa
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Estado para mostrar mensaje de éxito
  const [enviado, setEnviado] = useState(false);

  // Estado para mensaje de teléfono copiado
  const [copiado, setCopiado] = useState(false);

  // Referencia al mensaje de gracias
  const graciasRef = useRef(null);

  // Copiar número de teléfono
  const copiarTelefono = () => {
    navigator.clipboard.writeText('+34 692 195 848');
    setCopiado(true);
    setTimeout(() => setCopiado(false), 3000);
  };

  // Toggle del menú móvil
  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const frases = [
    'Ingeniero Informático',
    'Apasionado por los datos',
    'Desarrollador de IA',
    'ETLs y automatización',
    'Ciencia de datos',
  ];
  
  const [typedText, setTypedText] = useState('');
  const [fraseIndex, setFraseIndex] = useState(0);
  const [letraIndex, setLetraIndex] = useState(0);

  useEffect(() => {
    const current = frases[fraseIndex];
    if (letraIndex < current.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + current[letraIndex]);
        setLetraIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // Espera 2s y pasa a la siguiente frase
      const pause = setTimeout(() => {
        setFraseIndex((prev) => (prev + 1) % frases.length);
        setTypedText('');
        setLetraIndex(0);
      }, 2000);
      return () => clearTimeout(pause);
    }
  }, [letraIndex, fraseIndex]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 w-full">

      {/* NAVBAR */}
      <nav className="bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 px-6 py-4">

          {/* Logo + texto */}
          <a href="#inicio" className="flex items-center gap-3">
            <img src={home_icon} alt="Logo" className="h-12 w-12 object-contain" />
            <span className="text-sm sm:text-base md:text-lg font-semibold text-white truncate max-w-[200px] sm:max-w-none">
              ¡Portfolio de Alejandro Sánchez Corredor!
            </span>
          </a>

          {/* Botón hamburguesa móvil */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuAbierto ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Enlaces escritorio */}
          <ul className="hidden md:flex gap-4 md:gap-6 text-xs md:text-sm font-semibold uppercase">
            <li><a href="#inicio" className="text-red-400 hover:text-white">Inicio</a></li>
            <li><a href="#sobre-mi" className="text-white hover:text-blue-400">Sobre mí</a></li>
            <li><a href="#proyectos" className="text-white hover:text-blue-400">Proyectos</a></li>
            <li><a href="#formacion" className="text-white hover:text-blue-400">Formación Académica</a></li>
            <li><a href="#experiencia" className="text-white hover:text-blue-400">Experiencia Laboral</a></li>
            <li><a href="#contacto" className="text-white hover:text-blue-400">Contacto</a></li>
          </ul>
        </div>

        {/* Menú móvil desplegable */}
        {menuAbierto && (
          <div className="md:hidden px-6 pb-4">
            <ul className="flex flex-col gap-3 text-sm font-semibold uppercase">
              <li><a onClick={toggleMenu} href="#inicio" className="text-red-400 hover:text-white">Inicio</a></li>
              <li><a onClick={toggleMenu} href="#sobre-mi" className="text-white hover:text-blue-400">Sobre mí</a></li>
              <li><a onClick={toggleMenu} href="#proyectos" className="text-white hover:text-blue-400">Proyectos</a></li>
              <li><a onClick={toggleMenu} href="#formacion" className="text-white hover:text-blue-400">Formación Académica</a></li>
              <li><a onClick={toggleMenu} href="#experiencia" className="text-white hover:text-blue-400">Experiencia Laboral</a></li>
              <li><a onClick={toggleMenu} href="#contacto" className="text-white hover:text-blue-400">Contacto</a></li>
            </ul>
          </div>
        )}
      </nav>

      {/* MAIN */}
      <main className="pt-28 px-4 space-y-20" id="inicio">

        {/* INICIO / HERO */}
        <section
          id="inicio"
          className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden"
        >
          {/* Video de fondo */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
          >
            <source src={background_home} type="video/mp4" />
            Tu navegador no soporta videos.
          </video>

          {/* Contenido sobre el video */}
          <div className="relative z-10 px-4 text-white space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-400 underline">
              ¡Hola! Soy Alejandro
            </h1>

            {/* Efecto máquina de escribir */}
            <p className="text-lg md:text-xl">
              <Typewriter
                words={['Ingeniero Informático', 'Científico de Datos', 'Apasionado por la IA']}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={30}
                delaySpeed={1500}
              />
            </p>

            <p className="italic text-sm md:text-base text-gray-200">
              "Convierto datos en decisiones inteligentes."
            </p>

            <a
              href="#proyectos"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded mt-4"
            >
              Ver proyectos ↓
            </a>
          </div>
        </section>


        {/* SOBRE MÍ */}
        <section id="sobre-mi" className="max-w-5xl mx-auto bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4 text-center">Sobre mí</h2>
          <p className="text-gray-300 leading-relaxed mb-6 text-center">
            Soy una persona autodidacta, proactiva y con muchas ganas de aprender. Me encuentro en constante formación para convertirme en un desarrollador completo.
          </p>

          {/* Grid de tecnologías */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[{ nombre: 'Python', nivel: 'Avanzado', icono: python_logo },
              { nombre: 'Serverless Framework', nivel: 'Intermedio', icono: serverless_logo },
              { nombre: 'SQL', nivel: 'Intermedio', icono: sql_logo },
              { nombre: 'Java', nivel: 'Intermedio', icono: java_logo },
              { nombre: 'Tensorflow', nivel: 'Intermedio', icono: tensorflow_logo },
              { nombre: 'AWS', nivel: 'Intermedio', icono: aws_logo },
              { nombre: 'HTML/CSS', nivel: 'Intermedio', icono: html_logo },
              { nombre: 'NoSQL', nivel: 'Intermedio', icono: nosql_logo },
              { nombre: 'Selenium', nivel: 'Intermedio', icono: selenium_logo },
              { nombre: 'Angular', nivel: 'Bajo', icono: angular_logo }].map((tech) => {

              const nivelColor = {
                'Avanzado': 'bg-green-500',
                'Intermedio': 'bg-blue-500',
                'Bajo': 'bg-red-500',
              }[tech.nivel];

              return (
                <div key={tech.nombre} className="bg-gray-700 rounded-lg p-4 shadow-md flex items-center gap-4 hover:shadow-lg hover:scale-105 transition-transform duration-200">
                  <img src={tech.icono} alt={tech.nombre} className="w-12 h-12 object-contain aspect-square" />
                  <div className="flex flex-col">
                    <span className="text-white font-semibold">{tech.nombre}</span>
                    <span className={`text-xs mt-1 inline-block px-2 py-0.5 rounded-full text-white w-max ${nivelColor}`}>
                      {tech.nivel}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>




        {/* PROYECTOS */}
        <section id="proyectos" className="max-w-5xl mx-auto p-6">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Proyectos</h2>
          <p className="text-gray-300">Aquí puedes incluir tarjetas con tus proyectos destacados, tecnologías utilizadas y enlaces a GitHub o demos.</p>
        </section>

        {/* FORMACIÓN */}
        <section id="formacion" className="max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-400 mb-2">Formación Académica</h2>
          <ul className="text-gray-300 list-disc list-inside space-y-2">
            <li>Nombre del curso o carrera - Institución (año)</li>
            <li>Otro estudio relevante - Institución (año)</li>
          </ul>
        </section>

        {/* EXPERIENCIA */}
        <section id="experiencia" className="max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-400 mb-2">Experiencia Laboral</h2>
          <ul className="text-gray-300 list-disc list-inside space-y-2">
            <li>Nombre del puesto - Empresa (año)</li>
            <li>Responsabilidades principales y logros destacados</li>
          </ul>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4 text-center">Contacto</h2>

          {/* Enlaces de contacto */}
          <div className="flex flex-wrap justify-center gap-6 text-white">
            <a href="https://www.linkedin.com/in/alejandrosanchezcorredor/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400">
              <img src={linkedin_logo} alt="LinkedIn" className="w-6 h-6" /> LinkedIn
            </a>
            <a href="mailto:sanchez.corredor.alejandro@gmail.com" className="flex items-center gap-2 hover:text-blue-400">
              <img src={email} alt="Email" className="w-6 h-6" /> Email
            </a>
            <div onClick={copiarTelefono} className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
              <img src={telefono_logo} alt="Teléfono" className="w-6 h-6" /> Teléfono
            </div>
            <a href="https://github.com/AlejandroSanchezCorredor" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400">
              <img src={github_logo} alt="GitHub" className="w-6 h-6" /> GitHub
            </a>
          </div>

          {copiado && (
            <p className="w-full text-center text-green-400 text-sm mt-2 animate-fade">
              ¡Número copiado al portapapeles!
            </p>
          )}

          {/* Formulario con Formsubmit */}
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const data = new FormData(e.target);
              await fetch("https://formsubmit.co/sanchez.corredor.alejandro@gmail.com", {
                method: "POST",
                body: data,
              });
              setEnviado(true);
              setTimeout(() => {
                graciasRef.current?.scrollIntoView({ behavior: 'smooth' });
              }, 100); // Espera mínima para asegurar render
              e.target.reset();
            }}
            className="mt-8 space-y-4 max-w-2xl mx-auto"
          >
            <input type="text" name="name" required placeholder="Tu nombre" className="w-full p-2 rounded bg-gray-700 text-white" />
            <input type="email" name="email" required placeholder="Tu correo" className="w-full p-2 rounded bg-gray-700 text-white" />
            <textarea name="message" required placeholder="Escribe tu mensaje" className="w-full p-2 rounded bg-gray-700 text-white"></textarea>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded">Enviar mensaje</button>
          </form>
        </section>

        {/* MENSAJE DE GRACIAS (se muestra tras envío) */}
        {enviado && (
          <div ref={graciasRef} className="mt-6 text-center bg-green-700 text-white p-4 rounded shadow">
            ¡Gracias por tu mensaje! Responderé lo antes posible.
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
