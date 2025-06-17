import { useState } from 'react';
import logo from './assets/logo.png';
import linkedin_logo from './assets/linkedin.png';
import github_logo from './assets/github.svg';
import telefono_logo from './assets/telefono.png';
import email from './assets/email.png';
import './App.css';

function App() {

  const [copiado, setCopiado] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);


  const copiarTelefono = () => {
    navigator.clipboard.writeText('+34 692 195 848');
    setCopiado(true);
    setTimeout(() => setCopiado(false), 3000);
  };

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };
  

  return (
    // CONTENEDOR PRINCIPAL - fondo oscuro en toda la pantalla
    <div className="min-h-screen bg-gray-900 text-gray-100 w-full">

      {/* BARRA DE NAVEGACIÓN SUPERIOR */}
      <nav className="bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 px-6 py-4">

          {/* Logo + mensaje */}
          <a href="#inicio" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
            <span className="text-sm sm:text-base md:text-lg font-semibold text-white truncate max-w-[200px] sm:max-w-none">
              ¡Portfolio de Alejandro Sánchez Corredor!
            </span>
          </a>

          {/* Botón hamburguesa - visible solo en móvil */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuAbierto ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Lista de enlaces - escritorio */}
          <ul className="hidden md:flex gap-4 md:gap-6 text-xs md:text-sm font-semibold uppercase">
            <li><a href="#inicio" className="text-red-400 hover:text-white">Inicio</a></li>
            <li><a href="#sobre-mi" className="text-white hover:text-blue-400">Sobre mí</a></li>
            <li><a href="#proyectos" className="text-white hover:text-blue-400">Proyectos</a></li>
            <li><a href="#formacion" className="text-white hover:text-blue-400">Formación Académica</a></li>
            <li><a href="#experiencia" className="text-white hover:text-blue-400">Experiencia Laboral</a></li>
            <li><a href="#contacto" className="text-white hover:text-blue-400">Contacto</a></li>
          </ul>
        </div>

        {/* Menú desplegable - solo móvil */}
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


      {/* CONTENIDO PRINCIPAL */}
      <main className="pt-28 px-4 space-y-20" id="inicio">

        {/* SECCIÓN: INICIO / HERO */}
        <section id="inicio" className="text-center py-16">
          <h1 className="text-4xl font-bold text-blue-400 mb-4">¡Hola! Soy Alejandro</h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Desarrollador web en formación. Apasionado por la tecnología, la programación y la creación de experiencias digitales efectivas.
          </p>
        </section>

        {/* SECCIÓN: SOBRE MÍ */}
        <section id="sobre-mi" className="max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-400 mb-2">Sobre mí</h2>
          <p className="text-gray-300 leading-relaxed">
            Soy una persona autodidacta, proactiva y con muchas ganas de aprender. Me encuentro en constante formación para convertirme en un desarrollador completo.
          </p>
        </section>

        {/* SECCIÓN: PROYECTOS */}
        <section id="proyectos" className="max-w-5xl mx-auto p-6">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Proyectos</h2>
          <p className="text-gray-300">Aquí puedes incluir tarjetas con tus proyectos destacados, tecnologías utilizadas y enlaces a GitHub o demos.</p>
        </section>

        {/* SECCIÓN: FORMACIÓN ACADÉMICA */}
        <section id="formacion" className="max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-400 mb-2">Formación Académica</h2>
          <ul className="text-gray-300 list-disc list-inside space-y-2">
            <li>Nombre del curso o carrera - Institución (año)</li>
            <li>Otro estudio relevante - Institución (año)</li>
          </ul>
        </section>

        {/* SECCIÓN: EXPERIENCIA LABORAL */}
        <section id="experiencia" className="max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-400 mb-2">Experiencia Laboral</h2>
          <ul className="text-gray-300 list-disc list-inside space-y-2">
            <li>Nombre del puesto - Empresa (año)</li>
            <li>Responsabilidades principales y logros destacados</li>
          </ul>
        </section>

        {/* SECCIÓN: CONTACTO */}
        <section id="contacto" className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4 text-center">Contacto</h2>

          <div className="flex flex-wrap justify-center gap-6 text-white">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/alejandrosanchezcorredor/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400">
              <img src={linkedin_logo} alt="LinkedIn" className="w-6 h-6" />
              LinkedIn
            </a>

            {/* Email */}
            <a href="mailto:sanchez.corredor.alejandro@gmail.com" className="flex items-center gap-2 hover:text-blue-400">
              <img src={email} alt="Email" className="w-6 h-6" />
              Email
            </a>

            {/* Teléfono */}
            <div onClick={copiarTelefono} className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
              <img src={telefono_logo} alt="Teléfono" className="w-6 h-6" />
              Teléfono
            </div>

            {copiado && (
              <p className="w-full text-center text-green-400 text-sm mt-2 animate-fade">
                ¡Número copiado al portapapeles!
              </p>
            )}


            {/* GitHub */}
            <a href="https://github.com/AlejandroSanchezCorredor" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400">
              <img src={github_logo} alt="GitHub" className="w-6 h-6" />
              GitHub
            </a>
          </div>
        </section>


      </main>
    </div>
  );
}

export default App;
