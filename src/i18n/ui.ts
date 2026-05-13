export const defaultLang = 'es';

export const ui = {
  es: {
    /*  Hero Section   */
    // HeroCard
    'hero.title': '!Hola, soy Marco Montiel¡',
    'hero.description': 'Desarrollador full stack con mentalidad frontend. Construyo experiencias atractivas e intuitivas con React, Next.js y Tailwind. En constante aprendizaje y mejora.',
    'hero.cv': 'CV',
    'hero.email': 'Correo!',
    'carousel.experience': 'Experiencia Laboral',
    'carousel.projects': 'Proyectos / Aportaciones',
    //Intro Card
    'intro.degree': 'Ingeniería en Tecnologías de la Información',
    'intro.status': 'Estudiante de la',
    'intro.location': 'Puebla, México.',
    'availability.open': 'Disponible para trabajar',
    'availability.closed': 'Sin disponibilidad',
    /*  Contact Section   */
    'contact.title': 'Tech Stack',
    'contact.description': 'Contáctame',
    'contact.button': 'Enviar',
    'contact.rightTitle': 'Otras Actividades',
    'contact.rightDesign': 'Diseño ',
    'contact.rightServer': 'Administración de servidores ',
    /*  Navbar   */
    'nav.home': 'Principal',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    /*  Projects  */
    'project.page': 'Visitar',
  },
  en: {
    /*  Hero Section   */
    // HeroCard
    'hero.title': "Hi, I'm Marco Montiel!",
    'hero.description': 'Full stack developer with a frontend mindset. I made attractive and intuitive experiences with React, Next.js, and Tailwind. Constantly learning and improving.',
    'hero.cv': 'Resume',
    'hero.email': 'Email Me!',
    'carousel.experience': 'Work Experience',
    'carousel.projects': 'Projects / Contributions',
    //Intro Card
    'intro.degree': 'Information Technology Engineering',
    'intro.status': 'Student at',
    'intro.location': 'Puebla, Mexico.',
    'availability.open': 'Available for work',
    'availability.closed': 'Currently unavailable',
    /*  Contact Section   */
    'contact.title': 'Tech Stack',
    'contact.description': 'Contact Me',
    'contact.button': 'Send',
    'contact.rightTitle': 'Other activities',
    'contact.rightDesign': 'Design ',
    'contact.rightServer': 'Server administration ',
    /*  Navbar   */
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    /*  Projects  */
    'project.page': 'View',
  },
} as const;


export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}