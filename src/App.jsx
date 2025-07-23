import { useState, useRef, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import SeccionAnimada from "./components/SeccionAnimada";
import linkedin_logo from './assets/linkedin_logo.png';
import github_logo from './assets/github_logo.png';
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
import scikit_learn_logo from './assets/scikit_learn_logo.png';
import streamlit_logo from './assets/streamlit_logo.png';
import jupyter_logo from './assets/jupyter_logo.png';

import pandas_logo from './assets/pandas_logo.png';
import numpy_logo from './assets/numpy_logo.png';
import matplotlib_logo from './assets/matplotlib_logo.png';

import background_home from './assets/background_home.mp4';

import simpsons_project from './assets/simpsons.jpg'
import booking_project from './assets/booking.jpg'
import booking_prototipo from './assets/tfg.png'
import gender_project from './assets/recon.jpg'
import nba_project from './assets/nba_project.jpg'
import nba_prototipo from './assets/nba_prototipo.png'

import esiiab from './assets/esiiab.png'
import cidaen from './assets/cidaen.jpg'
import notas_grado from './assets/notas_agrupadas.png'

import teknei from './assets/teknei.png'
import planea from './assets/planea.png'


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


  const proyectos = [
    {
      titulo: "TFG: Uso de GPT para comunicaciones automatizadas en Booking",
      descripcion: "Automatización de respuestas a clientes en Booking.com usando modelos GPT y AWS Serverless.",
      tecnologias: ["GPT-4", "AWS", "Angular", "Serverless", "Python", "Selenium"],
      github: "https://github.com/AlejandroSanchezCorredor/GPT-para-comunicaciones-automatizadas-en-Booking.git",
      prototipo: booking_prototipo,
      imagen: booking_project,
      detalles: "Proyecto que automatiza respuestas en Booking.com usando GPT-4 y AWS. Ideal para propietarios con múltiples alojamientos que buscan ahorrar tiempo y ofrecer atención personalizada a gran escala.",
      calificacion: 10,
      anio: 2024
    },
    {
      titulo: "TFM: Predicción de resultados de partidos en la NBA",
      descripcion: "Predicción de partidos de la NBA con Machine Learning.",
      tecnologias: ["Python", "Scikit-learn", "Pandas", "Streamlit", "Matplotlib/Seaborn"],
      github: "https://github.com/AlejandroSanchezCorredor/TFM-Prediccion-de-resultados-de-partidos-en-la-NBA.git",
      prototipo: nba_prototipo,
      imagen: nba_project,
      detalles: "Sistema de predicción de partidos de la NBA mediante aprendizaje automático. Incluye reconstrucción de estadísticas previas con medias móviles para evitar fuga de datos, validación temporal con TimeSeriesSplit y despliegue de resultados en una app Streamlit.",
      calificacion: 123,
      anio: 2025
    },
    {
      titulo: "Clasificación de personajes de Los Simpsons: Aprendizaje de modelos basados en redes neuronales",
      descripcion: "Red neuronal para clasificar imágenes con más del 90% de precisión.",
      tecnologias: ["Tensorflow", "Python", "Pandas", "NumPy", "Matplotlib/Seaborn", "Scikit-learn"],
      github: "https://github.com/AlejandroSanchezCorredor/Clasificacion-de-personajes-de-Los-Simpsons.git",
      imagen: simpsons_project,
      detalles: "Modelo convolucional CNN entrenado con imágenes de personajes de la serie para clasificación automática.",
      calificacion: 10,
      anio: 2023
    },
    {
      titulo: "Clasificación de género: Aprendizaje de modelos basados en redes neuronales",
      descripcion: "Proyecto de deep learning centrado en la clasificación automática de género a partir de imágenes, utilizando modelos de redes neuronales convolucionales (CNN) con TensorFlow y Keras.",
      tecnologias: ["Tensorflow/Keras", "Python", "Pandas", "NumPy", "Matplotlib/Seaborn", "scikit-learn"],
      github: "https://github.com/AlejandroSanchezCorredor/Clasificacion-de-genero.git",
      imagen: gender_project,
      detalles: "Incluye procesamiento y limpieza de imágenes, entrenamiento de modelos CNN, evaluación del rendimiento y visualización de métricas. El proyecto también abarca técnicas de regularización, uso de modelos preentrenados y análisis exploratorio con Pandas y Matplotlib.",
      calificacion: 8,
      anio: 2024
    }
  ];

  const proyectosPorPagina = 3;
  const [paginaActual, setPaginaActual] = useState(1);

  const proyectosPaginados = proyectos.slice(
    (paginaActual - 1) * proyectosPorPagina,
    paginaActual * proyectosPorPagina
  );

  const totalPaginas = Math.ceil(proyectos.length / proyectosPorPagina);

  const [imagenAmpliada, setImagenAmpliada] = useState(null);

  const [esMovil, setEsMovil] = useState(false);

  useEffect(() => {
    const verificarTamano = () => setEsMovil(window.innerWidth <= 768);
    verificarTamano();
    window.addEventListener("resize", verificarTamano);
    return () => window.removeEventListener("resize", verificarTamano);
  }, []);

  const [giradas, setGiradas] = useState([]);

  const alternarGiro = (index) => {
    setGiradas((prev) => {
      const nuevo = [...prev];
      nuevo[index] = !nuevo[index];
      return nuevo;
    });
  };

  const [formacionesGiradas, setFormacionesGiradas] = useState([]);

  const alternarGiroFormacion = (index) => {
    setFormacionesGiradas((prev) => {
      const nuevo = [...prev];
      nuevo[index] = !nuevo[index];
      return nuevo;
    });
  };

  const formaciones = [
    {
      titulo: "Grado en Ingeniería Informática",
      institucion: "UCLM · 2020 - 2024",
      especialidad: "Especialización en Computación",
      nota: "Nota media: 8.15 / 10",
      imagen: esiiab,
      resumen: "A lo largo del Grado en Ingeniería Informática de la UCLM, he adquirido una sólida formación en algoritmos, estructuras de datos, ingeniería del software, etc. Las asignaturas cursadas se muestran a continuación.",
      prototipo: notas_grado,
    },
    {
      titulo: "Máster en Ciencia e Ingeniería de Datos en la Nube",
      institucion: "UCLM · 2024 - 2025",
      especialidad: "",
      nota: "Nota media: 9.73",
      imagen: cidaen,
      resumen: "Formación especializada en Big Data, almacenamiento en la nube, machine learning e ingeniería de datos. Aplicación práctica con AWS, PySpark, TensorFlow, Scikit-learn, Apache Spark, Docker, Serverless Framework, Prefect, MLflow, Plotly, SQL, NoSQL, y herramientas de ETL y visualización.",
      prototipo: cidaen,
    }
  ];

  const [seccionActiva, setSeccionActiva] = useState('inicio');

  const seccionesRef = {
    'inicio': useRef(null),
    'sobre-mi': useRef(null),
    'proyectos': useRef(null),
    'formacion': useRef(null),
    'experiencia': useRef(null),
    'contacto': useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSeccionActiva(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-100px 0px 0px 0px',
      }
    );

    // Observa secciones manualmente desde refs
    Object.values(seccionesRef).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(seccionesRef).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);


  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 w-full">

      {/* NAVBAR */}
      <nav className="bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-50">
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
            <li>
              <a
                href="#inicio"
                className={`transition-all duration-300 ${seccionActiva === 'inicio'
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-600 to-pink-500'
                  : 'text-white hover:text-pink-400'
                  }`}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#sobre-mi"
                className={`transition-all duration-300 ${seccionActiva === 'sobre-mi'
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-600 to-pink-500'
                  : 'text-white hover:text-pink-400'
                  }`}
              >
                Sobre mí
              </a>
            </li>
            <li>
              <a
                href="#proyectos"
                className={`transition-all duration-300 ${seccionActiva === 'proyectos'
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-600 to-pink-500'
                  : 'text-white hover:text-pink-400'
                  }`}
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#formacion"
                className={`transition-all duration-300 ${seccionActiva === 'formacion'
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-600 to-pink-500'
                  : 'text-white hover:text-pink-400'
                  }`}
              >
                Formación
              </a>
            </li>
            <li>
              <a
                href="#experiencia"
                className={`transition-all duration-300 ${seccionActiva === 'experiencia'
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-600 to-pink-500'
                  : 'text-white hover:text-pink-400'
                  }`}
              >
                Experiencia
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className={`transition-all duration-300 ${seccionActiva === 'contacto'
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-600 to-pink-500'
                  : 'text-white hover:text-pink-400'
                  }`}
              >
                Contacto
              </a>
            </li>
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
          className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden pt-28"
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
            <a
              href="./cv.pdf"
              download
              className="inline-block bg-gradient-to-r from-pink-500 via-fuchsia-600 to-pink-500 hover:brightness-110 text-white font-semibold py-2 px-6 rounded mt-4 shadow-lg transition-all duration-300"
            >
              Descargar CV
            </a>

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
        <SeccionAnimada
          id="sobre-mi"
          esMovil={esMovil}
          ref={seccionesRef['sobre-mi']}
          className="scroll-mt-28 max-w-4xl mx-auto px-6 pt-12 pb-6 bg-gray-800/70 rounded-xl shadow-lg"
        >

          <h2 className="text-3xl font-bold text-center text-blue-400 mb-10">
            Sobre mí
          </h2>

          {[
            {
              categoria: 'Lenguajes', tecnologias: [
                { nombre: 'Python', nivel: 'Avanzado', icono: python_logo },
                { nombre: 'SQL', nivel: 'Intermedio', icono: sql_logo },
                { nombre: 'Java', nivel: 'Intermedio', icono: java_logo },
              ]
            },
            {
              categoria: 'Machine Learning', tecnologias: [
                { nombre: 'Tensorflow', nivel: 'Intermedio', icono: tensorflow_logo },
                { nombre: 'Scikit-learn', nivel: 'Intermedio', icono: scikit_learn_logo },
              ]
            },
            {
              categoria: 'Análisis y Procesamiento de Datos', tecnologias: [
                { nombre: 'Pandas', nivel: 'Intermedio', icono: pandas_logo },
                { nombre: 'NumPy', nivel: 'Intermedio', icono: numpy_logo },
                { nombre: 'Matplotlib/Seaborn', nivel: 'Intermedio', icono: matplotlib_logo },
              ]
            },
            {
              categoria: 'Frontend', tecnologias: [
                { nombre: 'Streamlit', nivel: 'Intermedio', icono: streamlit_logo },
                { nombre: 'Angular', nivel: 'Bajo', icono: angular_logo },
                { nombre: 'HTML/CSS', nivel: 'Intermedio', icono: html_logo },
              ]
            },
            {
              categoria: 'DevOps / Infraestructura', tecnologias: [
                { nombre: 'Serverless Framework', nivel: 'Intermedio', icono: serverless_logo },
                { nombre: 'AWS', nivel: 'Intermedio', icono: aws_logo },
              ]
            },
            {
              categoria: 'Herramientas', tecnologias: [
                { nombre: 'Jupyter Notebook', nivel: 'Intermedio', icono: jupyter_logo },
                { nombre: 'Selenium', nivel: 'Intermedio', icono: selenium_logo },
              ]
            },
          ].map((grupo) => (
            <div key={grupo.categoria} className="mb-6">
              <h3 className="text-xl font-semibold text-blue-300 mb-2">{grupo.categoria}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {grupo.tecnologias.map((tech) => {
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
            </div>
          ))}
        </SeccionAnimada>


        {/* PROYECTOS */}
        <SeccionAnimada
          id="proyectos"
          esMovil={esMovil}
          ref={seccionesRef['proyectos']}
          className="max-w-4xl mx-auto px-6 pt-12 pb-6 bg-gray-800/70 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-10">Proyectos</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectosPaginados.map((proyecto, index) => (
              <div
                key={index}
                className="relative group [perspective:1000px] h-[520px] cursor-pointer"
                onClick={() => esMovil && alternarGiro(index)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${esMovil
                    ? giradas[index]
                      ? "[transform:rotateY(180deg)]"
                      : ""
                    : "group-hover:[transform:rotateY(180deg)]"
                    }`}
                >

                  {/* Frente */}
                  <div className="absolute w-full h-full bg-gray-800 rounded-lg shadow-lg p-4 backface-hidden flex flex-col">
                    <img src={proyecto.imagen} alt={proyecto.titulo} className="w-full h-40 object-cover rounded" />

                    <h3 className="text-lg font-bold text-white mt-4">
                      {proyecto.titulo}
                    </h3>

                    <p className="text-gray-400 text-sm mt-2">
                      {proyecto.descripcion}
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 mt-auto">
                      {proyecto.tecnologias.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-blue-600 text-xs text-white px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Reverso */}
                  <div className="absolute w-full h-full bg-gray-700 text-white rounded-lg p-6 text-center [transform:rotateY(180deg)] backface-hidden flex flex-col">
                    <h4 className="text-lg font-semibold mb-2">Detalles</h4>
                    <p className="text-sm mb-4">{proyecto.detalles}</p>

                    <div className="text-sm text-blue-300 mb-2">
                      <p><span className="font-semibold">Año:</span> {proyecto.anio}</p>
                      <p><span className="font-semibold">Calificación:</span> {proyecto.calificacion} / 10</p>
                    </div>

                    {proyecto.prototipo && (
                      <>
                        <span className="text-xs text-blue-300 font-medium mb-1">Prototipo</span>
                        <div className="bg-gray-800 border border-gray-600 rounded-lg overflow-hidden shadow-md">
                          <div className="bg-gray-700 p-2 flex items-center space-x-2">
                            <span className="w-3 h-3 bg-red-500 rounded-full" />
                            <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                            <span className="w-3 h-3 bg-green-500 rounded-full" />
                          </div>
                          <img
                            src={proyecto.prototipo}
                            alt="Prototipo"
                            onClick={() => setImagenAmpliada(proyecto.prototipo)}
                            className="w-full h-32 object-cover cursor-pointer transition-transform duration-300 transform hover:scale-105"
                          />
                        </div>
                      </>
                    )}

                    {/* Enlace GitHub */}
                    {proyecto.github && (
                      <a
                        href={proyecto.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-400 hover:underline mt-4"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                {/* Indicador táctil solo en móvil */}
                {esMovil && !giradas[index] && (
                  <div className="absolute top-2 right-2 text-xs text-blue-300 bg-gray-700 px-2 py-1 rounded-full z-10">
                    Toca para ver más
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* BOTONES PAGINACION PROYECTOS */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={() => setPaginaActual(p => Math.max(p - 1, 1))}
              disabled={paginaActual === 1}
              className="px-4 py-1 bg-blue-600 text-white rounded disabled:opacity-50 cursor-pointer"
            >
              Anterior
            </button>
            <button
              onClick={() => setPaginaActual(p => Math.min(p + 1, totalPaginas))}
              disabled={paginaActual === totalPaginas}
              className="px-4 py-1 bg-blue-600 text-white rounded disabled:opacity-50 cursor-pointer"
            >
              Siguiente
            </button>
          </div>
        </SeccionAnimada>


        {/* FORMACIÓN */}
        <SeccionAnimada
          id="formacion"
          esMovil={esMovil}
          ref={seccionesRef['formacion']}
          className="scroll-mt-28 max-w-4xl mx-auto px-6 pt-12 pb-6 bg-gray-800/70 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-10">Formación Académica</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {formaciones.map((formacion, i) => (
              <div
                key={i}
                className="relative group [perspective:1000px] h-[400px] cursor-pointer"
                onClick={() => esMovil && alternarGiroFormacion(i)}
              >
                <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${esMovil
                  ? formacionesGiradas[i]
                    ? "[transform:rotateY(180deg)]"
                    : ""
                  : "group-hover:[transform:rotateY(180deg)]"
                  }`}>
                  {/* Frente */}
                  <div className="absolute w-full h-full bg-gray-800 rounded-lg shadow-lg p-4 backface-hidden flex flex-col">
                    <img src={formacion.imagen} alt={formacion.titulo} className="w-full h-40 object-contain bg-white p-2 rounded" />
                    <h3 className="text-lg font-bold text-white text-center mt-2">{formacion.titulo}</h3>
                    <p className="text-gray-400 text-sm text-center mt-1">{formacion.institucion}</p>
                    {formacion.especialidad && (
                      <p className="text-gray-400 text-sm text-center mt-1">{formacion.especialidad}</p>
                    )}
                    <p className="text-blue-400 font-semibold text-sm mt-2">{formacion.nota}</p>
                  </div>

                  {/* Reverso */}
                  <div className="absolute w-full h-full bg-gray-700 text-white rounded-lg p-4 text-center [transform:rotateY(180deg)] backface-hidden flex flex-col">
                    <h4 className="text-lg font-semibold mb-2">Más información</h4>
                    <p className="text-sm mb-2">{formacion.resumen}</p>
                    <h5 className="text-sm font-semibold text-blue-300 mt-3 mb-2">Resumen de calificaciones</h5>
                    <img
                      src={formacion.prototipo}
                      alt="Resumen notas"
                      onClick={() => setImagenAmpliada(formacion.prototipo)}
                      className="w-full h-32 object-contain bg-white p-2 rounded mt-2 transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Indicador táctil */}
                {esMovil && !formacionesGiradas[i] && (
                  <div className="absolute top-2 right-2 text-xs text-blue-300 bg-gray-700 px-2 py-1 rounded-full z-10">
                    Toca para ver más
                  </div>
                )}
              </div>
            ))}
          </div>
        </SeccionAnimada>

        {/* PARTE DE IMAGENES EN PANTALLA COMPLETA CUANDO HACES CLICK */}
        {imagenAmpliada && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50" onClick={() => setImagenAmpliada(null)}>
            <div className="relative max-w-4xl w-full p-4">
              <button
                onClick={() => setImagenAmpliada(null)}
                className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-red-400"
              >
                ✕
              </button>
              <img
                src={imagenAmpliada}
                alt="Imagen ampliada"
                className="w-full max-h-[90vh] object-contain rounded shadow-lg"
              />
            </div>
          </div>
        )}


        {/* EXPERIENCIA */}
        <SeccionAnimada
          id="experiencia"
          esMovil={esMovil}
          ref={seccionesRef['experiencia']}
          className="scroll-mt-28 max-w-4xl mx-auto px-6 pt-12 pb-6 bg-gray-800/70 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-10">Experiencia Laboral</h2>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Tarjeta Teknei */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img src={teknei} alt="Teknei" className="w-full h-32 object-contain bg-white p-2 rounded" />
              <h3 className="text-lg font-bold text-white text-center mt-4">Programa Robles: Desarrollo TFG (Prácticas)</h3>
              <p className="text-gray-400 text-sm text-center">Teknei · 2024 (Febrero - Mayo)</p>
              <ul className="text-gray-300 text-sm list-disc list-inside mt-3 text-left">
                <li>Implementación de soluciones en la nube utilizando AWS y Serverless Framework.</li>
                <li>Desarrollo de APIs REST con Python para procesamiento de datos y automatización.</li>
                <li>Uso de contenedores Docker para despliegue y desarrollo en entornos aislados.</li>
                <li>Diseño de interfaces interactivas con Angular para visualización y control de procesos.</li>
              </ul>
            </div>

            {/* Tarjeta Planea */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img src={planea} alt="Planea" className="w-full h-32 object-contain bg-white p-2 rounded" />
              <h3 className="text-lg font-bold text-white text-center mt-4">Científico de datos</h3>
              <p className="text-gray-400 text-sm text-center">Planea Energía · 2024 (Noviembre) - Actualidad</p>
              <ul className="text-gray-300 text-sm list-disc list-inside mt-3 text-left">
                <li>Desarrollo de modelos de previsión (forecasting) para series temporales utilizando Prophet (Facebook).</li>
                <li>Diseño y mantenimiento de procesos ETL mediante Pentaho (Kettle).</li>
                <li>Gestión de bases de datos relacionales (PostgreSQL) y NoSQL (MongoDB).</li>
                <li>Evaluación y pruebas de modelos de IA: GPT, Julius, Ollama, entre otros.</li>
              </ul>
            </div>

          </div>
        </SeccionAnimada>


        {/* CONTACTO */}
        <SeccionAnimada
          id="contacto"
          esMovil={esMovil}
          ref={seccionesRef['contacto']}
          className="scroll-mt-28 max-w-4xl mx-auto px-6 pt-12 pb-6 bg-gray-800/70 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">Contacto</h2>

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
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded cursor-pointer"> Enviar mensaje </button>
          </form>
        </SeccionAnimada>


        {/* MENSAJE DE GRACIAS (se muestra tras envío) */}
        {enviado && (
          <div ref={graciasRef} className="mt-6 text-center bg-green-700 text-white p-4 rounded shadow">
            ¡Gracias por tu mensaje! Responderé lo antes posible.
          </div>
        )}
      </main>

      {/* BOTÓN VOLVER ARRIBA */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-pink-500 via-fuchsia-600 to-pink-500 hover:brightness-110 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300 cursor-pointer"
        title="Volver arriba"
      >
        ↑
      </button>

    </div>
  );
}

export default App;
