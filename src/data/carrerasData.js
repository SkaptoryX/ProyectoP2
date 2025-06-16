const carrerasData = {
  arquitectura: {
    nombre: 'Arquitectura',
    formacion: 'El/La arquitecto/a de la Universidad Técnica Federico Santa María es un/a profesional capaz de diseñar, proyectar y dirigir la construcción de edificaciones y espacios públicos, integrando aspectos técnicos, estéticos y sociales. Su formación abarca el conocimiento de la historia de la arquitectura, teoría del diseño, tecnología de la construcción, y urbanismo, entre otros. Está preparado/a para enfrentar desafíos complejos en el ámbito de la edificación y el ordenamiento territorial, considerando la sustentabilidad y el impacto ambiental de sus proyectos.',
    info: [
      { label: 'Título Profesional', value: 'Arquitecto o Arquitecta' },
      { label: 'Grado Académico', value: 'Licenciatura en Arquitectura' },
      { label: 'Duración de los estudios', value: '10 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Casa Central, Valparaíso' },
      { label: 'Puntaje mínimo de corte', value: '600 pts' },
      { label: 'Puntaje promedio', value: '650 pts' }
    ],
    departamento: {
      url: 'https://www.arq.usm.cl/',
      label: 'Conoce el sitio del Departamento de Arquitectura'
    },
    puntajes: {
      url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/',
      label: 'Ver puntajes oficiales en DEMRE'
    },
    malla: Malla1
  },
  'ingenieria-civil-informatica': {
    nombre: 'Ingeniería Civil Informática',
    formacion: 'El/La Ingeniero/a Civil Informático/a de la Universidad Técnica Federico Santa María es un/a profesional con sólida formación en ciencias de la ingeniería y especialización en el área de la informática. Está capacitado/a para diseñar, implementar y gestionar sistemas computacionales, así como para liderar proyectos de tecnología de la información. Su formación incluye el estudio de algoritmos, estructuras de datos, bases de datos, redes, y seguridad informática, entre otros.',
    info: [
      { label: 'Título Profesional', value: 'Ingeniero Civil Informático o Ingeniera Civil Informática' },
      { label: 'Grado Académico', value: 'Licenciatura en Ciencias de la Ingeniería' },
      { label: 'Duración de los estudios', value: '5 años (10 semestres académicos)' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus San Joaquín, Santiago' },
      { label: 'Puntaje mínimo de corte', value: '650 pts' },
      { label: 'Puntaje promedio', value: '670 pts' }
    ],
    departamento: {
      url: 'https://www.dii.usm.cl/',
      label: 'Conoce el sitio del Departamento de Ingeniería Informática'
    },
    puntajes: {
      url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/',
      label: 'Ver puntajes oficiales en DEMRE'
    },
    malla: Malla2
  },
  'ingenieria-civil-quimica': {
    nombre: 'Ingeniería Civil Química',
    formacion: 'El/La Ingeniero/a Civil Químico/a de la Universidad Técnica Federico Santa María es un/a profesional con sólida formación científico-tecnológica en el área de la ingeniería química. Está capacitado/a para crear y desarrollar soluciones innovadoras y tradicionales, asumismo, procesos de liderazgo en la gestión de empresas. A su vez, podrá diseñar, evaluar y ejecutar proyectos utilizando tecnologías y herramientas de análisis y evaluación de riesgos de proceso, optimizando el uso de los recursos disponibles para asegurar el cumplimiento de la legislación vigente.',
    info: [
      { label: 'Título Profesional', value: 'Ingeniero Civil Químico o Ingeniera Civil Química' },
      { label: 'Grado Académico', value: 'Licenciatura en Ciencias de la Ingeniería' },
      { label: 'Duración de los estudios', value: '5 años (10 semestres académicos)' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Casa Central Valparaíso y Campus San Joaquín' },
      { label: 'Puntaje mínimo de corte', value: '645 pts' },
      { label: 'Puntaje promedio', value: '668 pts' }
    ],
    departamento: {
      url: 'https://www.diq.usm.cl/',
      label: 'Conoce el sitio del Departamento de Ingeniería Química y Ambiental'
    },
    puntajes: {
      url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/',
      label: 'Ver puntajes oficiales en DEMRE'
    },
    malla: Malla3
  },
  'construccion-civil': {
    nombre: 'Construcción Civil',
    formacion: 'Formación integral en Construcción Civil, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Construcción Civil' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '10 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '520 pts' },
      { label: 'Puntaje promedio', value: '575 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'ingenieria-civil': {
    nombre: 'Ingeniería Civil',
    formacion: 'Formación integral en Ingeniería Civil, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Ingeniería Civil' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '10 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '530 pts' },
      { label: 'Puntaje promedio', value: '580 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'ingenieria-civil-ambiental': {
    nombre: 'Ingeniería Civil Ambiental',
    formacion: 'Formación integral en Ingeniería Civil Ambiental, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Ingeniería Civil Ambiental' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '10 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '515 pts' },
      { label: 'Puntaje promedio', value: '565 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'ingenieria-civil-de-minas': {
    nombre: 'Ingeniería Civil de Minas',
    formacion: 'Formación integral en Ingeniería Civil de Minas, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Ingeniería Civil de Minas' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '10 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '540 pts' },
      { label: 'Puntaje promedio', value: '590 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'ingenieria-civil-electrica': {
    nombre: 'Ingeniería Civil Eléctrica',
    formacion: 'Formación integral en Ingeniería Civil Eléctrica, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Ingeniería Civil Eléctrica' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '10 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '535 pts' },
      { label: 'Puntaje promedio', value: '585 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'ingenieria-civil-electronica': {
    nombre: 'Ingeniería Civil Electrónica',
    formacion: 'Formación integral en Ingeniería Civil Electrónica, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Ingeniería Civil Electrónica' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '10 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '545 pts' },
      { label: 'Puntaje promedio', value: '595 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'ingenieria-civil-en-biotecnologia': {
    nombre: 'Ingeniería Civil en Biotecnología',
    formacion: 'Formación integral en Ingeniería Civil en Biotecnología, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Ingeniería Civil en Biotecnología' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '10 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '525 pts' },
      { label: 'Puntaje promedio', value: '570 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'ingenieria-civil-fisica': {
    nombre: 'Ingeniería Civil Física',
    formacion: 'Formación integral en Ingeniería Civil Física, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Ingeniería Civil Física' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '10 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '510 pts' },
      { label: 'Puntaje promedio', value: '560 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'ingenieria-civil-industrial': {
    nombre: 'Ingeniería Civil Industrial',
    formacion: 'Formación integral en Ingeniería Civil Industrial, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Ingeniería Civil Industrial' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '10 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '550 pts' },
      { label: 'Puntaje promedio', value: '600 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'ingenieria-civil-matematica': {
    nombre: 'Ingeniería Civil Matemática',
    formacion: 'Formación integral en Ingeniería Civil Matemática, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Ingeniería Civil Matemática' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '10 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '505 pts' },
      { label: 'Puntaje promedio', value: '555 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'ingenieria-civil-mecanica': {
    nombre: 'Ingeniería Civil Mecánica',
    formacion: 'Formación integral en Ingeniería Civil Mecánica, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Ingeniería Civil Mecánica' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '10 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '528 pts' },
      { label: 'Puntaje promedio', value: '578 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'ingenieria-civil-metalurgica': {
    nombre: 'Ingeniería Civil Metalúrgica',
    formacion: 'Formación integral en Ingeniería Civil Metalúrgica, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Ingeniería Civil Metalúrgica' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '10 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '518 pts' },
      { label: 'Puntaje promedio', value: '568 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'ingenieria-civil-plan-comun': {
    nombre: 'Ingeniería Civil Plan Común',
    formacion: 'Formación integral en Ingeniería Civil Plan Común, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Ingeniería Civil Plan Común' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '10 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '500 pts' },
      { label: 'Puntaje promedio', value: '550 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'ingenieria-civil-telematica': {
    nombre: 'Ingeniería Civil Telemática',
    formacion: 'Formación integral en Ingeniería Civil Telemática, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Ingeniería Civil Telemática' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '10 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '533 pts' },
      { label: 'Puntaje promedio', value: '583 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'ingenieria-comercial': {
    nombre: 'Ingeniería Comercial',
    formacion: 'Formación integral en Ingeniería Comercial, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Ingeniería Comercial' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '10 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '548 pts' },
      { label: 'Puntaje promedio', value: '598 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'ingenieria-en-aviacion-comercial': {
    nombre: 'Ingeniería en Aviación Comercial',
    formacion: 'Formación integral en Ingeniería en Aviación Comercial, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Ingeniería en Aviación Comercial' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '10 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '512 pts' },
      { label: 'Puntaje promedio', value: '562 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'ingenieria-en-biotecnologia': {
    nombre: 'Ingeniería en Biotecnología',
    formacion: 'Formación integral en Ingeniería en Biotecnología, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Ingeniería en Biotecnología' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '10 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '522 pts' },
      { label: 'Puntaje promedio', value: '572 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'ingenieria-en-diseno-de-productos': {
    nombre: 'Ingeniería en Diseño de Productos',
    formacion: 'Formación integral en Ingeniería en Diseño de Productos, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Ingeniería en Diseño de Productos' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '10 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '508 pts' },
      { label: 'Puntaje promedio', value: '558 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'ingenieria-en-fabricacion-y-diseno-industrial': {
    nombre: 'Ingeniería en Fabricación y Diseño Industrial',
    formacion: 'Formación integral en Ingeniería en Fabricación y Diseño Industrial, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Ingeniería en Fabricación y Diseño Industrial' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '10 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '516 pts' },
      { label: 'Puntaje promedio', value: '566 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'ingenieria-en-informatica': {
    nombre: 'Ingeniería en Informática',
    formacion: 'Formación integral en Ingeniería en Informática, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Ingeniería en Informática' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '10 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '542 pts' },
      { label: 'Puntaje promedio', value: '592 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'ingenieria-en-mantenimiento-industrial': {
    nombre: 'Ingeniería en Mantenimiento Industrial',
    formacion: 'Formación integral en Ingeniería en Mantenimiento Industrial, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Ingeniería en Mantenimiento Industrial' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '10 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '503 pts' },
      { label: 'Puntaje promedio', value: '553 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'ingenieria-en-prevencion-de-riesgos-laborales-y-ambientales': {
    nombre: 'Ingeniería en Prevención de Riesgos Laborales y Ambientales',
    formacion: 'Formación integral en Ingeniería en Prevención de Riesgos Laborales y Ambientales, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Ingeniería en Prevención de Riesgos Laborales y Ambientales' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '10 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '507 pts' },
      { label: 'Puntaje promedio', value: '557 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'licenciatura-en-astrofisica': {
    nombre: 'Licenciatura en Astrofísica',
    formacion: 'Formación integral en Licenciatura en Astrofísica, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Licenciatura en Astrofísica' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '10 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '538 pts' },
      { label: 'Puntaje promedio', value: '588 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'licenciatura-en-ciencias-mencion-quimica': {
    nombre: 'Licenciatura en Ciencias, mención Química',
    formacion: 'Formación integral en Licenciatura en Ciencias, mención Química, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Licenciatura en Ciencias, mención Química' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '10 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '513 pts' },
      { label: 'Puntaje promedio', value: '563 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'licenciatura-en-fisica': {
    nombre: 'Licenciatura en Física',
    formacion: 'Formación integral en Licenciatura en Física, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Licenciatura en Física' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '10 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '523 pts' },
      { label: 'Puntaje promedio', value: '573 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'quimico': {
    nombre: 'Químico',
    formacion: 'Formación integral en Químico, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Químico' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '10 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '537 pts' },
      { label: 'Puntaje promedio', value: '587 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'tecnico-universitario-dibujante-proyectista': {
    nombre: 'Técnico Universitario Dibujante Proyectista',
    formacion: 'Formación integral en Técnico Universitario Dibujante Proyectista, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Técnico Universitario Dibujante Proyectista' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '5 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '502 pts' },
      { label: 'Puntaje promedio', value: '552 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'tecnico-universitario-en-administracion-de-empresas': {
    nombre: 'Técnico Universitario en Administración de Empresas',
    formacion: 'Formación integral en Técnico Universitario en Administración de Empresas, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Técnico Universitario en Administración de Empresas' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '5 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '511 pts' },
      { label: 'Puntaje promedio', value: '561 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'tecnico-universitario-en-alimentos': {
    nombre: 'Técnico Universitario en Alimentos',
    formacion: 'Formación integral en Técnico Universitario en Alimentos, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Técnico Universitario en Alimentos' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '5 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '506 pts' },
      { label: 'Puntaje promedio', value: '556 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'tecnico-universitario-en-automatizacion-y-control': {
    nombre: 'Técnico Universitario en Automatización y Control',
    formacion: 'Formación integral en Técnico Universitario en Automatización y Control, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Técnico Universitario en Automatización y Control' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '5 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '521 pts' },
      { label: 'Puntaje promedio', value: '571 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'tecnico-universitario-en-biotecnologia': {
    nombre: 'Técnico Universitario en Biotecnología',
    formacion: 'Formación integral en Técnico Universitario en Biotecnología, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Técnico Universitario en Biotecnología' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '5 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '517 pts' },
      { label: 'Puntaje promedio', value: '567 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'tecnico-universitario-en-ciencia-de-datos': {
    nombre: 'Técnico Universitario en Ciencia de Datos',
    formacion: 'Formación integral en Técnico Universitario en Ciencia de Datos, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Técnico Universitario en Ciencia de Datos' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '5 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '531 pts' },
      { label: 'Puntaje promedio', value: '581 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'tecnico-universitario-en-construccion': {
    nombre: 'Técnico Universitario en Construcción',
    formacion: 'Formación integral en Técnico Universitario en Construcción, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Técnico Universitario en Construcción' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '5 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '501 pts' },
      { label: 'Puntaje promedio', value: '551 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'tecnico-universitario-en-control-del-medio-ambiente': {
    nombre: 'Técnico Universitario en Control del Medio Ambiente',
    formacion: 'Formación integral en Técnico Universitario en Control del Medio Ambiente, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Técnico Universitario en Control del Medio Ambiente' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '5 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '514 pts' },
      { label: 'Puntaje promedio', value: '564 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'tecnico-universitario-en-electricidad': {
    nombre: 'Técnico Universitario en Electricidad',
    formacion: 'Formación integral en Técnico Universitario en Electricidad, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Técnico Universitario en Electricidad' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '5 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '524 pts' },
      { label: 'Puntaje promedio', value: '574 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'tecnico-universitario-en-electronica': {
    nombre: 'Técnico Universitario en Electrónica',
    formacion: 'Formación integral en Técnico Universitario en Electrónica, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Técnico Universitario en Electrónica' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '5 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '529 pts' },
      { label: 'Puntaje promedio', value: '579 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'tecnico-universitario-en-energias-renovables': {
    nombre: 'Técnico Universitario en Energías Renovables',
    formacion: 'Formación integral en Técnico Universitario en Energías Renovables, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Técnico Universitario en Energías Renovables' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '5 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '509 pts' },
      { label: 'Puntaje promedio', value: '559 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'tecnico-universitario-en-informatica': {
    nombre: 'Técnico Universitario en Informática',
    formacion: 'Formación integral en Técnico Universitario en Informática, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Técnico Universitario en Informática' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '5 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '534 pts' },
      { label: 'Puntaje promedio', value: '584 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'tecnico-universitario-en-mantenimiento-aeronautico': {
    nombre: 'Técnico Universitario en Mantenimiento Aeronáutico',
    formacion: 'Formación integral en Técnico Universitario en Mantenimiento Aeronáutico, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Técnico Universitario en Mantenimiento Aeronáutico' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '5 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '519 pts' },
      { label: 'Puntaje promedio', value: '569 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'tecnico-universitario-en-mantenimiento-industrial': {
    nombre: 'Técnico Universitario en Mantenimiento Industrial',
    formacion: 'Formación integral en Técnico Universitario en Mantenimiento Industrial, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Técnico Universitario en Mantenimiento Industrial' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '5 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '504 pts' },
      { label: 'Puntaje promedio', value: '554 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'tecnico-universitario-en-mecanica-automotriz': {
    nombre: 'Técnico Universitario en Mecánica Automotriz',
    formacion: 'Formación integral en Técnico Universitario en Mecánica Automotriz, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Técnico Universitario en Mecánica Automotriz' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '5 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '526 pts' },
      { label: 'Puntaje promedio', value: '576 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'tecnico-universitario-en-mecanica-industrial': {
    nombre: 'Técnico Universitario en Mecánica Industrial',
    formacion: 'Formación integral en Técnico Universitario en Mecánica Industrial, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Técnico Universitario en Mecánica Industrial' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '5 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '527 pts' },
      { label: 'Puntaje promedio', value: '577 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'tecnico-universitario-en-mineria-y-metalurgia': {
    nombre: 'Técnico Universitario en Minería y Metalurgia',
    formacion: 'Formación integral en Técnico Universitario en Minería y Metalurgia, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Técnico Universitario en Minería y Metalurgia' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '5 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '532 pts' },
      { label: 'Puntaje promedio', value: '582 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'tecnico-universitario-en-proyectos-de-ingenieria': {
    nombre: 'Técnico Universitario en Proyectos de Ingeniería',
    formacion: 'Formación integral en Técnico Universitario en Proyectos de Ingeniería, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Técnico Universitario en Proyectos de Ingeniería' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '5 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '536 pts' },
      { label: 'Puntaje promedio', value: '586 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'tecnico-universitario-en-quimica-mencion-quimica-analitica': {
    nombre: 'Técnico Universitario en Química, mención Química Analítica',
    formacion: 'Formación integral en Técnico Universitario en Química, mención Química Analítica, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Técnico Universitario en Química, mención Química Analítica' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '5 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '539 pts' },
      { label: 'Puntaje promedio', value: '589 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'tecnico-universitario-en-quimica-mencion-quimica-industrial': {
    nombre: 'Técnico Universitario en Química, mención Química Industrial',
    formacion: 'Formación integral en Técnico Universitario en Química, mención Química Industrial, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Técnico Universitario en Química, mención Química Industrial' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '5 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '541 pts' },
      { label: 'Puntaje promedio', value: '591 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'tecnico-universitario-en-robotica-y-mecatronica': {
    nombre: 'Técnico Universitario en Robótica y Mecatrónica',
    formacion: 'Formación integral en Técnico Universitario en Robótica y Mecatrónica, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Técnico Universitario en Robótica y Mecatrónica' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '5 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '543 pts' },
      { label: 'Puntaje promedio', value: '593 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  },
  'tecnico-universitario-en-telecomunicaciones-y-redes': {
    nombre: 'Técnico Universitario en Telecomunicaciones y Redes',
    formacion: 'Formación integral en Técnico Universitario en Telecomunicaciones y Redes, preparando profesionales competentes para el mercado laboral actual y futuro, con énfasis en la innovación y el desarrollo tecnológico.',
    info: [
      { label: 'Título Profesional', value: 'Profesional en Técnico Universitario en Telecomunicaciones y Redes' },
      { label: 'Grado Académico', value: 'Licenciatura Genérica en Ciencias y Tecnología' },
      { label: 'Duración de los estudios', value: '5 semestres' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Valparaíso / San Joaquín / Sedes' },
      { label: 'Puntaje mínimo de corte', value: '544 pts' },
      { label: 'Puntaje promedio', value: '594 pts' }
    ],
    departamento: { url: '#', label: 'Sitio web del Departamento' },
    puntajes: { url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/', label: 'Ver puntajes oficiales en DEMRE' },
    malla: 'Malla no disponible'
  }
};