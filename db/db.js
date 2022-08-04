export default {
  skills: [
    {
      title: "Frontend",
      skillName: "Debian ",
      color: "1",
      percentage: "80",
    },
    {
      title: "Frameworks/Libraries",
      skillName: "Centos",
      color: "2",
      percentage: "60",
    },
    {
      title: "Backend",
      skillName: "C++, Python, Git, Markdown",
      color: "3",
      percentage: "75",
    },
    {
      title: "Design",
      skillName: "HTML, CSS",
      color: "4",
      percentage: "60",
    },
    {
      title: "Tools",
      skillName: "GitHub, Gitlab",
      color: "5",
      percentage: "75",
    },
    {
      title: "Editor",
      skillName: "VSCode, Atom, NeoVim, Vim",
      color: "6",
      percentage: "80",
    },

    {
      title: "Applications",
      skillName: "Notion, Office, Latex",
      color: "7",
      percentage: "80",
    },

    {
      title: "Systems",
      skillName: "Windows Desktop, GNU/Linux",
      color: "8",
      percentage: "90",
    },
  ],
  projects: {
    web: [
      {
        projectName: "Página Web",
        image: "images/portfolio_arturocode.jpg",
        summary:
          "Página web que he diseñado con varias secciones para recoger mi formación, experiencia y proyectos como desarrollador web.",
        preview: "https://arturocode.github.io/",
        techStack: ["HTML", "Bootstrap", "CSS", "JavaScript"],
      },
      {
        projectName: "Linktree (Arturo's Version)",
        image: "images/portfolio_linktree.png",
        summary:
          "Una One-Page sencilla y adaptada a mis redes y proyectos como desarrollador web. Alternativa a sitios de empresas como Linktree o Carrd.",
        preview: "https://arturocode.github.io/links/",
        techStack: ["HTML", "CSS", "Bootstrap", "Alternative:", "Linktree", "Carrd"],
      },
      {
        projectName: "Galería de Cursos",
        image: "images/portfolio_galeriacursos.png",
        summary:
          "Una portfolio al estilo de una galería de imágenes resonsive para acceder a los cursos que he realizado y sus diplomas.",
        preview: "https://arturocode.github.io/cursos/",
        techStack: ["HTML", "CSS", "Portfolio", "Gallery-Images"],
      },
    ],
    literature: [
      {
        projectName: "Flights of a Dreamer",
        image: "images/portfolio_flightsdreamer.png",
        summary:
          "Blog literario ganador de los Premios Blogger Lit Con 2017 a Mejor Blog, Mejor Diseño y Blog más constante.",
        preview: "http://www.flightsofadreamer.blogspot.com",
        techStack: ["HTML", "CSS", "Blogger", "JavaScript"],
      },
      {
        projectName: "Arturo Urbanos - Wordpress",
        image: "images/portfolio_arturourbanos.png",
        summary:
          "Página web como autor, redactor y lector profesional con información de obras, eventos, actualizaciones y más.",
        preview: "https://arturourbanosv.wordpress.com/",
        techStack: ["Wordpress"],
      },
      {
        projectName: "Arturo Urbanos - Carrd",
        image: "images/portfolio_carrd.png",
        summary:
          "He hecho varias One-Pages sencillas y responsive con la información a un solo click. Esta es la que uso para mi trabajo literario.",
        preview: "https://arturourbanos.carrd.co/",
        techStack: ["Carrd"],
      },
    ],
    freelance: [
      {
        projectName: "Lorem Ipsum",
        image: "",
        summary:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        preview: "",
        techStack: [""],
      },
    ],
  },
    experience: [
    {
      title: "ADUL Asociación de Docentes de la Universidad Nacional del Litoral",
      duration: "Marzo. 2021 - Diciembre. 2021",
      subtitle: "Técnico de soporte de TI",
      details: [
        "Soporte técnico (Administracion GNU/Linux, Administración de Windows) y mantenimiento de los equipos informaticos de los docentes universitarios (https://adul.org.ar/)",
      ],
      tags: [
        "GNU/Linux",
        "Windows",
        "Python",
        "Libre Office",
        "Latex",
        "Anydex",
      ],
    },
    {
      title: "Servicio Tecnico UNL",
      duration: "2016 - 2020",
      subtitle: "Servicio Tecnico - ad honorem",
      details: [
        "Administración GNU/Linux, Administración Windows, instalación y optimización de software, creación de políticas de seguridad, Servicio de Alojamiento de archivos, multimedia, VPN, Instalación de rede informatica",
      ],
      tags: [
        "GNU/Linux",
        "Windows",
        "Backup",
        "VPN",
        "Servidor",
        "Redes",
      ],
    },
  ],
  education: [
   {
      title: "Formación Profesional Armado, Configuración y Mantenimiento de Computadoras ",
      duration: "Marzo 2016 - Diciembre 2016 ",
      subtitle: "UNL - FICH",
      details: [
        "Formación Profecional  en plataformas del ámbito tecnológico.",
      ],
      tags: [
        "Windows", "Antivirtus","Hardware","Software","Redes","Virus",
      ],
    },
    {
      title: "Tecnicatura Mecatronica - Inicio de los estudios",
      duration: "2022 - 2022",
      subtitle: "Universidad Tecnológica Nacional (Facultad regional de Santa Se)",
      details: [
        "Electrónica, Mecánica, Electrotecnia e Informática.",
      ],
    },
    {
      title: "Técnico Universitario en Software Libre",
      duration: "Marzo 2017 - Diciembre 2021 ",
      subtitle: "UNL - FICH",
      details: [
        "Administración de sistemas GNU/Linux y servicios de red en entornos libres. Instalación y configuración de sistemas de bases de datos con Tecnologías de software libre. Participación en equipos de trabajo para análisis, desarrollo e implementación de soluciones de software libre.",
      ],
      tags: [
        "GNU",
        "Linux",
        "Hardware Libre",
        "Software Libre",
        "Redes",
      ],
    },
  ],
};
