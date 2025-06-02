<script setup>
import { ref, computed, watch, nextTick } from 'vue';

// Define campus filter options
const campuses = [
  { name: "Todos los Campus", slug: "all" },
  { name: "Casa Central Valparaíso", slug: "casa-central" },
  { name: "Santiago San Joaquín", slug: "san-joaquin" },
  { name: "Santiago Vitacura", slug: "vitacura" },
  { name: "Viña del Mar", slug: "vina-del-mar" },
  { name: "Concepción", slug: "concepcion" }
];

// Definir categorías de carreras
const categories = [
  {
    name: "Ingeniería Civil",
    slug: "ingenieria-civil"
  },
  {
    name: "Licenciaturas",
    slug: "licenciaturas"
  },
  {
    name: "Técnico Universitario",
    slug: "tecnico-universitario"
  },
  {
    name: "Otras Carreras",
    slug: "otras"
  }
];

// Carreras organizadas por categoría y campus
const careers = {
  "ingenieria-civil": [
    { name: "Ingeniería Civil", slug: "ingenieria-civil", code: "15.111", campus: "Casa Central Valparaíso", ponderacion: "600", ultimo_puntaje: "921,80", promedio: "747,35", vacantes: "60" },
    { name: "Ingeniería Civil", slug: "ingenieria-civil-sj", code: "15.311", campus: "Santiago San Joaquín", ponderacion: "600", ultimo_puntaje: "941,95", promedio: "798,45", vacantes: "75" },
    { name: "Ingeniería Civil Ambiental", slug: "ingenieria-civil-ambiental", code: "15.151", campus: "Casa Central Valparaíso", ponderacion: "600", ultimo_puntaje: "932,80", promedio: "690,35", vacantes: "30" },
    { name: "Ingeniería Civil de Minas", slug: "ingenieria-civil-de-minas", code: "15.312", campus: "Santiago San Joaquín", ponderacion: "600", ultimo_puntaje: "907,35", promedio: "799,35", vacantes: "90" },
    { name: "Ingeniería Civil Eléctrica", slug: "ingenieria-civil-electrica-cc", code: "15.130", campus: "Casa Central Valparaíso", ponderacion: "600", ultimo_puntaje: "937,50", promedio: "782,30", vacantes: "60" },
    { name: "Ingeniería Civil Eléctrica", slug: "ingenieria-civil-electrica-sj", code: "15.330", campus: "Santiago San Joaquín", ponderacion: "600", ultimo_puntaje: "972,10", promedio: "803,45", vacantes: "60" },
    { name: "Ingeniería Civil Electrónica", slug: "ingenieria-civil-electronica", code: "15.131", campus: "Casa Central Valparaíso", ponderacion: "600", ultimo_puntaje: "965,55", promedio: "748,95", vacantes: "70" },
    { name: "Ingeniería Civil en Biotecnología", isNew: true, slug: "ingenieria-civil-en-biotecnologia", code: "15.186", campus: "Casa Central Valparaíso", ponderacion: "600", ultimo_puntaje: "934,10", promedio: "756,85", vacantes: "40" },
    { name: "Ingeniería Civil Física", slug: "ingenieria-civil-fisica-cc", code: "15.184", campus: "Casa Central Valparaíso", ponderacion: "600", ultimo_puntaje: "912,70", promedio: "718,50", vacantes: "30" },
    { name: "Ingeniería Civil Física", slug: "ingenieria-civil-fisica-sj", code: "15.384", campus: "Santiago San Joaquín", ponderacion: "600", ultimo_puntaje: "902,10", promedio: "762,05", vacantes: "35" },
    { name: "Ingeniería Civil Industrial", slug: "ingenieria-civil-industrial-cc", code: "15.170", campus: "Casa Central Valparaíso", ponderacion: "600", ultimo_puntaje: "950,90", promedio: "810,65", vacantes: "140" },
    { name: "Ingeniería Civil Industrial", slug: "ingenieria-civil-industrial-vit", code: "15.270", campus: "Santiago Vitacura", ponderacion: "600", ultimo_puntaje: "923,65", promedio: "840,05", vacantes: "140" },
    { name: "Ingeniería Civil Informática", slug: "ingenieria-civil-informatica-cc", code: "15.160", campus: "Casa Central Valparaíso", ponderacion: "600", ultimo_puntaje: "937,35", promedio: "771,15", vacantes: "120" },
    { name: "Ingeniería Civil Informática", slug: "ingenieria-civil-informatica-sj", code: "15.360", campus: "Santiago San Joaquín", ponderacion: "600", ultimo_puntaje: "951,95", promedio: "830,00", vacantes: "120" },
    { name: "Ingeniería Civil Matemática", slug: "ingenieria-civil-matematica-cc", code: "15.101", campus: "Casa Central Valparaíso", ponderacion: "600", ultimo_puntaje: "944,05", promedio: "815,35", vacantes: "25" },
    { name: "Ingeniería Civil Matemática", slug: "ingenieria-civil-matematica-sj", code: "15.301", campus: "Santiago San Joaquín", ponderacion: "600", ultimo_puntaje: "932,75", promedio: "795,95", vacantes: "30" },
    { name: "Ingeniería Civil Mecánica", slug: "ingenieria-civil-mecanica-cc", code: "15.140", campus: "Casa Central Valparaíso", ponderacion: "600", ultimo_puntaje: "946,35", promedio: "758,55", vacantes: "70" },
    { name: "Ingeniería Civil Mecánica", slug: "ingenieria-civil-mecanica-sj", code: "15.340", campus: "Santiago San Joaquín", ponderacion: "600", ultimo_puntaje: "917,70", promedio: "811,35", vacantes: "75" },
    { name: "Ingeniería Civil Metalúrgica", slug: "ingenieria-civil-metalurgica", code: "15.141", campus: "Casa Central Valparaíso", ponderacion: "600", ultimo_puntaje: "908,95", promedio: "730,30", vacantes: "40" },
    { name: "Ingeniería Civil Plan Común", slug: "ingenieria-civil-plan-comun-cc", code: "15.100", campus: "Casa Central Valparaíso", ponderacion: "600", ultimo_puntaje: "941,85", promedio: "745,50", vacantes: "110" },
    { name: "Ingeniería Civil Plan Común", slug: "ingenieria-civil-plan-comun-sj", code: "15.300", campus: "Santiago San Joaquín", ponderacion: "600", ultimo_puntaje: "933,10", promedio: "815,60", vacantes: "130" },
    { name: "Ingeniería Civil Química", slug: "ingenieria-civil-quimica-cc", code: "15.150", campus: "Casa Central Valparaíso", ponderacion: "600", ultimo_puntaje: "935,00", promedio: "769,25", vacantes: "40" },
    { name: "Ingeniería Civil Química", slug: "ingenieria-civil-quimica-sj", code: "15.350", campus: "Santiago San Joaquín", ponderacion: "600", ultimo_puntaje: "953,50", promedio: "806,95", vacantes: "50" },
    { name: "Ingeniería Civil Telemática", slug: "ingenieria-civil-telematica-cc", code: "15.161", campus: "Casa Central Valparaíso", ponderacion: "600", ultimo_puntaje: "927,70", promedio: "685,95", vacantes: "35" },
    { name: "Ingeniería Civil Telemática", slug: "ingenieria-civil-telematica-sj", code: "15.361", campus: "Santiago San Joaquín", ponderacion: "600", ultimo_puntaje: "903,10", promedio: "750,00", vacantes: "50" }
  ],
  "licenciaturas": [
    { name: "Licenciatura en Astrofísica", slug: "licenciatura-en-astrofisica-cc", code: "15.103", campus: "Casa Central Valparaíso", ponderacion: "600", ultimo_puntaje: "886,00", promedio: "706,45", vacantes: "25" },
    { name: "Licenciatura en Astrofísica", slug: "licenciatura-en-astrofisica-sj", code: "15.303", campus: "Santiago San Joaquín", ponderacion: "600", ultimo_puntaje: "881,70", promedio: "738,55", vacantes: "30" },
    { name: "Licenciatura en Ciencias, mención Química", campus: "Casa Central Valparaíso", slug: "licenciatura-en-ciencias-quimica", ponderacion: "600" },
    { name: "Licenciatura en Física", slug: "licenciatura-en-fisica-cc", code: "15.102", campus: "Casa Central Valparaíso", ponderacion: "600", ultimo_puntaje: "895,40", promedio: "694,15", vacantes: "15" },
    { name: "Licenciatura en Física", slug: "licenciatura-en-fisica-sj", code: "15.302", campus: "Santiago San Joaquín", ponderacion: "600", ultimo_puntaje: "933,30", promedio: "721,70", vacantes: "15" },
    { name: "Químico", campus: "Casa Central Valparaíso", slug: "quimico", ponderacion: "600" }
  ],
  "tecnico-universitario": [
    { name: "Técnico Universitario Dibujante Proyectista", campus: "Concepción", slug: "tecnico-universitario-dibujante-proyectista" },
    { name: "Técnico Universitario en Administración de Empresas", campus: "Viña del Mar", slug: "tecnico-universitario-administracion-empresas" },
    { name: "Técnico Universitario en Administración de Empresas", campus: "Concepción", slug: "tecnico-universitario-administracion-empresas" },
    { name: "Técnico Universitario en Administración de Empresas", campus: "Santiago Vitacura", slug: "tecnico-universitario-administracion-empresas" },
    { name: "Técnico Universitario en Alimentos", campus: "Viña del Mar", slug: "tecnico-universitario-alimentos" },
    { name: "Técnico Universitario en Automatización y Control", campus: "Concepción", slug: "tecnico-universitario-automatizacion-control" },
    { name: "Técnico Universitario en Biotecnología", campus: "Viña del Mar", slug: "tecnico-universitario-biotecnologia" },
    { name: "Técnico Universitario en Biotecnología", campus: "Concepción", slug: "tecnico-universitario-biotecnologia" },
    { name: "Técnico Universitario en Ciencia de Datos", campus: "Viña del Mar", slug: "tecnico-universitario-ciencia-datos" },
    { name: "Técnico Universitario en Ciencia de Datos", campus: "Concepción", slug: "tecnico-universitario-ciencia-datos" },
    { name: "Técnico Universitario en Construcción", campus: "Viña del Mar", slug: "tecnico-universitario-construccion" },
    { name: "Técnico Universitario en Construcción", campus: "Concepción", slug: "tecnico-universitario-construccion" },
    { name: "Técnico Universitario en Control del Medio Ambiente", campus: "Viña del Mar", slug: "tecnico-universitario-control-medio-ambiente" },
    { name: "Técnico Universitario en Control del Medio Ambiente", campus: "Concepción", slug: "tecnico-universitario-control-medio-ambiente" },
    { name: "Técnico Universitario en Electricidad", campus: "Viña del Mar", slug: "tecnico-universitario-electricidad" },
    { name: "Técnico Universitario en Electricidad", campus: "Concepción", slug: "tecnico-universitario-electricidad" },
    { name: "Técnico Universitario en Electrónica", campus: "Viña del Mar", slug: "tecnico-universitario-electronica" },
    { name: "Técnico Universitario en Electrónica", campus: "Concepción", slug: "tecnico-universitario-electronica" },
    { name: "Técnico Universitario en Energías Renovables", campus: "Viña del Mar", slug: "tecnico-universitario-energias-renovables" },
    { name: "Técnico Universitario en Informática", campus: "Viña del Mar", slug: "tecnico-universitario-informatica" },
    { name: "Técnico Universitario en Informática", campus: "Concepción", slug: "tecnico-universitario-informatica" },
    { name: "Técnico Universitario en Mantenimiento Aeronáutico", campus: "Santiago San Joaquín", slug: "tecnico-universitario-mantenimiento-aeronautico" },
    { name: "Técnico Universitario en Mantenimiento Industrial", campus: "Viña del Mar", slug: "tecnico-universitario-mantenimiento-industrial" },
    { name: "Técnico Universitario en Mantenimiento Industrial", campus: "Concepción", slug: "tecnico-universitario-mantenimiento-industrial" },
    { name: "Técnico Universitario en Mecánica Automotriz", campus: "Viña del Mar", slug: "tecnico-universitario-mecanica-automotriz" },
    { name: "Técnico Universitario en Mecánica Automotriz", campus: "Concepción", slug: "tecnico-universitario-mecanica-automotriz" },
    { name: "Técnico Universitario en Mecánica Industrial", campus: "Viña del Mar", slug: "tecnico-universitario-mecanica-industrial" },
    { name: "Técnico Universitario en Mecánica Industrial", campus: "Concepción", slug: "tecnico-universitario-mecanica-industrial" },
    { name: "Técnico Universitario en Minería y Metalurgia", campus: "Viña del Mar", slug: "tecnico-universitario-mineria-metalurgia" },
    { name: "Técnico Universitario en Proyectos de Ingeniería", campus: "Viña del Mar", slug: "tecnico-universitario-proyectos-ingenieria" },
    { name: "Técnico Universitario en Química, mención Química Analítica", campus: "Viña del Mar", slug: "tecnico-universitario-quimica-analitica" },
    { name: "Técnico Universitario en Química, mención Química Industrial", campus: "Concepción", slug: "tecnico-universitario-quimica-industrial" },
    { name: "Técnico Universitario en Robótica y Mecatrónica", campus: "Concepción", slug: "tecnico-universitario-robotica-mecatronica" },
    { name: "Técnico Universitario en Telecomunicaciones y Redes", campus: "Viña del Mar", slug: "tecnico-universitario-telecomunicaciones-redes" },
    { name: "Técnico Universitario en Telecomunicaciones y Redes", campus: "Concepción", slug: "tecnico-universitario-telecomunicaciones-redes" }
  ],
  "otras": [
    { name: "Arquitectura", slug: "arquitectura-cc", code: "15.180", campus: "Casa Central Valparaíso", ponderacion: "550", ultimo_puntaje: "934,50", promedio: "737,25", vacantes: "80" },
    { name: "Arquitectura", slug: "arquitectura-sj", code: "15.380", campus: "Santiago San Joaquín", ponderacion: "550", ultimo_puntaje: "920,55", promedio: "759,90", vacantes: "70" },
    { name: "Construcción Civil", slug: "construccion-civil", code: "15.110", campus: "Casa Central Valparaíso", ponderacion: "550", ultimo_puntaje: "811,00", promedio: "625,95", vacantes: "35" },
    { name: "Ingeniería Comercial", slug: "ingenieria-comercial-cc", code: "15.171", campus: "Casa Central Valparaíso", ponderacion: "550", ultimo_puntaje: "926,05", promedio: "724,90", vacantes: "120" },
    { name: "Ingeniería Comercial", slug: "ingenieria-comercial-vit", code: "15.271", campus: "Santiago Vitacura", ponderacion: "550", ultimo_puntaje: "894,65", promedio: "786,45", vacantes: "200" },
    { name: "Ingeniería en Aviación Comercial", slug: "ingenieria-aviacion-comercial", code: "15.220", campus: "Santiago Vitacura", ponderacion: "550", ultimo_puntaje: "874,70", promedio: "709,40", vacantes: "35" },
    { name: "Ingeniería en Biotecnología", slug: "ingenieria-biotecnologia-vina", code: "15.485", campus: "Viña del Mar", ponderacion: "500", ultimo_puntaje: "863,25", promedio: "598,10", vacantes: "30" },
    { name: "Ingeniería en Biotecnología", slug: "ingenieria-biotecnologia-conce", code: "15.585", campus: "Concepción", ponderacion: "500", ultimo_puntaje: "815,30", promedio: "545,05", vacantes: "15" },
    { name: "Ingeniería en Diseño de Productos", slug: "ingenieria-diseno-productos-cc", code: "15.181", campus: "Casa Central Valparaíso", ponderacion: "550", ultimo_puntaje: "920,90", promedio: "624,90", vacantes: "20" },
    { name: "Ingeniería en Diseño de Productos", slug: "ingenieria-diseno-productos-sj", code: "15.381", campus: "Santiago San Joaquín", ponderacion: "550", ultimo_puntaje: "934,45", promedio: "638,50", vacantes: "25" },
    { name: "Ingeniería en Fabricación y Diseño Industrial", slug: "ingenieria-fabricacion-diseno-industrial", code: "15.441", campus: "Viña del Mar", ponderacion: "500", ultimo_puntaje: "836,65", promedio: "583,00", vacantes: "20" },
    { name: "Ingeniería en Informática", slug: "ingenieria-informatica-vina", code: "15.462", campus: "Viña del Mar", ponderacion: "500", ultimo_puntaje: "892,15", promedio: "663,30", vacantes: "70" },
    { name: "Ingeniería en Informática", slug: "ingenieria-informatica-conce", code: "15.562", campus: "Concepcion", ponderacion: "500", ultimo_puntaje: "839,05", promedio: "591,60", vacantes: "50" },
    { name: "Ingeniería en Mantenimiento Industrial", slug: "ingenieria-mantenimiento-industrial-vina", code: "15.440", campus: "Viña del Mar", ponderacion: "500", ultimo_puntaje: "807,75", promedio: "587,90", vacantes: "35" },
    { name: "Ingeniería en Mantenimiento Industrial", slug: "ingenieria-mantenimiento-industrial-conce", code: "15.540", campus: "Concepcion", ponderacion: "500", ultimo_puntaje: "801,15", promedio: "593,05", vacantes: "15" },
    { name: "Ingeniería en Prevención de Riesgos Laborales y Ambientales", slug: "ingenieria-prevencion-riesgos-vina", code: "15.474", campus: "Viña del Mar", ponderacion: "500", ultimo_puntaje: "851,40", promedio: "544,20", vacantes: "15" },
    { name: "Ingeniería en Prevención de Riesgos Laborales y Ambientales", slug: "ingenieria-prevencion-riesgos-conce", code: "15.574", campus: "Concepcion", ponderacion: "500", ultimo_puntaje: "693,55", promedio: "500,70", vacantes: "15" }
  ]
};

// Función para consolidar carreras con múltiples campus
const consolidateCareersByCampus = () => {
  const uniqueCareers = {};
  
  // Procesar cada categoría
  for (const category in careers) {
    careers[category].forEach(career => {
      const baseNameParts = career.name.split(' - ')[0]; // Nombre base de la carrera
      const baseName = baseNameParts;
      
      // Si la carrera ya existe en nuestro objeto de carreras únicas
      if (uniqueCareers[baseName]) {
        // Añadir este campus a la carrera existente si tiene info de campus
        if (career.campus) {
          if (!uniqueCareers[baseName].campuses) {
            uniqueCareers[baseName].campuses = [];
          }
          
          uniqueCareers[baseName].campuses.push({
            name: career.campus,
            code: career.code,
            ponderacion: career.ponderacion,
            ultimo_puntaje: career.ultimo_puntaje,
            promedio: career.promedio,
            vacantes: career.vacantes
          });
        }
      } else {
        // Crear una nueva entrada para esta carrera
        uniqueCareers[baseName] = {
          name: baseName,
          slug: career.slug.split('-')[0], // Usar la parte base del slug
          category: category,
          isNew: career.isNew || false,
          campuses: career.campus ? [{
            name: career.campus,
            code: career.code,
            ponderacion: career.ponderacion,
            ultimo_puntaje: career.ultimo_puntaje,
            promedio: career.promedio,
            vacantes: career.vacantes
          }] : []
        };
      }
    });
  }
  
  return Object.values(uniqueCareers);
};

// Lista consolidada de carreras
const consolidatedCareers = consolidateCareersByCampus();

// Estado para el filtro de búsqueda
const searchQuery = ref('');
const activeCategory = ref('all');
const activeCampus = ref('all');

// Estado para controlar animaciones
const isFiltering = ref(false);
const animatingCards = ref(false);

// Función para filtrar carreras según la búsqueda y filtros
const filteredCareers = () => {
  let result = [...consolidatedCareers];
  
  // Filtrar por categoría
  if (activeCategory.value !== 'all') {
    result = result.filter(career => career.category === activeCategory.value);
  }

  // Filtrar por campus
  if (activeCampus.value !== 'all') {
    const campusName = campuses.find(c => c.slug === activeCampus.value)?.name;
    result = result.filter(career => 
      career.campuses && 
      career.campuses.some(campus => campus.name.includes(campusName))
    );
  }
  
  // Aplicar el filtro de búsqueda
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    return result.filter(career => 
      career.name.toLowerCase().includes(query)
    );
  }
  
  return result;
};

// Modificar las funciones de filtrado para incluir animación
const setActiveCategory = async (categorySlug) => {
  if (activeCategory.value === categorySlug) return;
  
  isFiltering.value = true;
  animatingCards.value = true;
  
  // Pequeño delay para mostrar el estado de filtrado
  await new Promise(resolve => setTimeout(resolve, 100));
  
  activeCategory.value = categorySlug;
  
  // Esperar al siguiente ciclo de renderizado para que las cards estén listas
  await nextTick();
  
  // Finalizar la animación después de que todas las cards se hayan mostrado
  setTimeout(() => {
    animatingCards.value = false;
    isFiltering.value = false;
  }, 500);
};

const setActiveCampus = async (campusSlug) => {
  if (activeCampus.value === campusSlug) return;
  
  isFiltering.value = true;
  animatingCards.value = true;
  
  await new Promise(resolve => setTimeout(resolve, 100));
  
  activeCampus.value = campusSlug;
  
  await nextTick();
  
  setTimeout(() => {
    animatingCards.value = false;
    isFiltering.value = false;
  }, 500);
};

// Añade función para manejar clicks en las cards
const handleCardClick = (career) => {
  console.log(`Navegando a detalle de: ${career.name}`);
};

// Paginación
const currentPage = ref(1);
const itemsPerPage = 12;

// Calcular el total de páginas basado en los resultados filtrados
const totalPages = computed(() => {
  const totalItems = filteredCareers().length;
  return Math.ceil(totalItems / itemsPerPage);
});

// Obtener los items para la página actual
const paginatedCareers = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return filteredCareers().slice(startIndex, endIndex);
});

// Paginar con animación
const goToPage = async (page) => {
  if (currentPage.value === page) return;
  
  animatingCards.value = true;
  
  await new Promise(resolve => setTimeout(resolve, 100));
  
  currentPage.value = page;
  
  const resultsArea = document.querySelector('.careers-grid');
  if (resultsArea) {
    resultsArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  
  await nextTick();
  
  setTimeout(() => {
    animatingCards.value = false;
  }, 500);
};

const nextPage = async () => {
  if (currentPage.value < totalPages.value) {
    animatingCards.value = true;
    
    await new Promise(resolve => setTimeout(resolve, 100));
    
    currentPage.value++;
    
    const resultsArea = document.querySelector('.careers-grid');
    if (resultsArea) {
      resultsArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    await nextTick();
    
    setTimeout(() => {
      animatingCards.value = false;
    }, 500);
  }
};

const prevPage = async () => {
  if (currentPage.value > 1) {
    animatingCards.value = true;
    
    await new Promise(resolve => setTimeout(resolve, 100));
    
    currentPage.value--;
    
    const resultsArea = document.querySelector('.careers-grid');
    if (resultsArea) {
      resultsArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    await nextTick();
    
    setTimeout(() => {
      animatingCards.value = false;
    }, 500);
  }
};

// También animamos la búsqueda
let searchTimeout;
const handleSearchInput = (event) => {
  clearTimeout(searchTimeout);
  
  searchTimeout = setTimeout(async () => {
    isFiltering.value = true;
    animatingCards.value = true;
    
    searchQuery.value = event.target.value;
    
    await nextTick();
    
    setTimeout(() => {
      animatingCards.value = false;
      isFiltering.value = false;
    }, 500);
  }, 300);
};

// Generar array de páginas a mostrar en la paginación (mostramos 5 como máximo)
const paginationItems = computed(() => {
  const totalPagesNum = totalPages.value;
  const current = currentPage.value;
  
  // Si hay 5 o menos páginas, mostrarlas todas
  if (totalPagesNum <= 5) {
    return Array.from({ length: totalPagesNum }, (_, i) => i + 1);
  }
  
  // Si la página actual está entre las primeras 3
  if (current <= 3) {
    return [1, 2, 3, 4, '...', totalPagesNum];
  }
  
  // Si la página actual está entre las últimas 3
  if (current >= totalPagesNum - 2) {
    return [1, '...', totalPagesNum - 3, totalPagesNum - 2, totalPagesNum - 1, totalPagesNum];
  }
  
  // Si la página actual está en medio
  return [1, '...', current - 1, current, current + 1, '...', totalPagesNum];
});

// Resetear a la primera página cuando cambian los filtros
watch([searchQuery, activeCategory, activeCampus], () => {
  currentPage.value = 1;
});
</script>

<template>
  <div class="careers-page">
    <!-- Hero Banner -->
    <div class="hero-banner">
      <div class="banner-content">
        <h1>Carreras</h1>
      </div>
    </div>
    
    <!-- Breadcrumb -->
    <div class="breadcrumb">
      <a href="/">Inicio</a> > <a href="/">Admisión</a> > Carreras
    </div>

    <div class="careers-intro">
      <h2>Estudia en la USM: Carreras de Pregrado</h2>
      <p>
        Presentes en la Región de Valparaíso, con el Campus Casa Central Valparaíso y Sede Viña del Mar; en la Región Metropolitana con el Campus Vitacura y Campus San Joaquín y en la Región del Bío Bío con el Campus Concepción, el objetivo de la Universidad es formar profesionales que posean herramientas para liderar equipos y desarrollar iniciativas creativas e innovadoras, sensibles a la realidad sociocultural, comprometidos con su excelencia y competencia en sus respectivas disciplinas. Así cada nueva generación está llamada a engrandecer el legado heredado de don Federico Santa María Carrera.
      </p>
      <p>
        En la USM, sus 19 mil estudiantes tienen la posibilidad de formarse integralmente, con un fuerte sello científico tecnológico, que se complementa con un sólido componente humanista. Académicos y docentes de primer nivel, con el mejor apoyo en infraestructura y material de estudio y trabajo, constituyen también pilares de su formación profesional de pregrado, postgrado y postítulo.
      </p>
    </div>

    <!-- Filtros de búsqueda -->
    <div class="search-filters">
      <div class="search-box">
        <input 
          type="text" 
          placeholder="Buscar carrera..." 
          v-model="searchQuery"
          class="search-input"
          @input="handleSearchInput"
        >
      </div>

      <div class="filter-groups">
        <div class="filter-section">
          <h3 class="filter-title">Categoría</h3>
          <div class="categories-filter">
            <button 
              class="filter-btn" 
              :class="{'active': activeCategory === 'all'}"
              @click="setActiveCategory('all')"
            >
              Todas
            </button>
            <button 
              v-for="category in categories" 
              :key="category.slug"
              class="filter-btn" 
              :class="{'active': activeCategory === category.slug}"
              @click="setActiveCategory(category.slug)"
            >
              {{ category.name }}
            </button>
          </div>
        </div>

        <div class="filter-section">
          <h3 class="filter-title">Campus</h3>
          <div class="campus-filter">
            <button 
              v-for="campus in campuses" 
              :key="campus.slug"
              class="filter-btn" 
              :class="{'active': activeCampus === campus.slug}"
              @click="setActiveCampus(campus.slug)"
            >
              {{ campus.name }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Grid de Carreras -->
    <div class="careers-grid">
      <div 
        v-for="(career, index) in paginatedCareers" 
        :key="career.slug" 
        class="career-card"
        :class="{
          'new-career': career.isNew,
          'card-animating': animatingCards,
        }"
        :style="{ 
          '--animation-order': index,
          '--animation-delay': `${index * 50}ms`
        }"
        @click="handleCardClick(career)"
      >
        <div class="career-img" :class="career.slug">
          <div class="career-overlay">
            <h3 class="career-title">{{ career.name }}</h3>
            <div class="career-campuses" v-if="career.campuses && career.campuses.length > 0">
              <div class="campus-chips">
                <span class="campus-chip" v-for="(campus, i) in career.campuses" :key="i">
                  {{ campus.name }}
                </span>
              </div>
            </div>
            <div v-if="career.isNew" class="new-badge">Nueva</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Paginación -->
    <div class="pagination" v-if="totalPages > 1">
      <button 
        class="pagination-btn prev" 
        :disabled="currentPage === 1"
        @click="prevPage"
      >
        &laquo; Anterior
      </button>
      
      <div class="pagination-numbers">
        <button 
          v-for="(page, index) in paginationItems" 
          :key="index"
          class="pagination-num"
          :class="{ 'active': page === currentPage, 'ellipsis': page === '...' }"
          :disabled="page === '...'"
          @click="page !== '...' && goToPage(page)"
        >
          {{ page }}
        </button>
      </div>
      
      <button 
        class="pagination-btn next" 
        :disabled="currentPage === totalPages"
        @click="nextPage"
      >
        Siguiente &raquo;
      </button>
    </div>
    
    <!-- Si no hay resultados -->
    <div v-if="filteredCareers().length === 0" class="no-results">
      <p>No se encontraron carreras que coincidan con tu búsqueda</p>
    </div>
  </div>
</template>

<style scoped>
.careers-page {
  width: 100%;
}

.hero-banner {
  width: 100%;
  height: 200px;
  background-image: url('https://petys.com/wp-content/uploads/2024/10/gatos-se-van-de-la-casa-1920x490pxok.webp');
  background-size: cover;
  background-position: center;
  position: relative;
  margin-bottom: 20px;
}

.hero-banner::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.13);
}

.banner-content {
  position: absolute;
  bottom: 20px;
  left: 0;
  padding: 0 20px;
  width: 100%;
  color: white;
}

.banner-content h1 {
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
  border-left: 5px solid #f0b428;
  padding-left: 15px;
}

.breadcrumb {
  margin-bottom: 25px;
  font-size: 14px;
  color: #555;
}

.breadcrumb a {
  color: #14496d;
  text-decoration: none;
}

.careers-intro {
  margin-bottom: 30px;
}

.careers-intro h2 {
  color: #14496d;
  font-size: 1.8rem;
  margin-bottom: 20px;
  border-left: 5px solid #f0b428;
  padding-left: 15px;
}

.careers-intro p {
  color: #333;
  line-height: 1.6;
  margin-bottom: 15px;
}

.search-filters {
  margin-bottom: 30px;
}

.search-box {
  margin-bottom: 20px;
}

.search-input {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
}

.search-input:focus {
  border-color: #14496d;
}

.filter-groups {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.filter-section {
  margin-bottom: 15px;
}

.filter-title {
  font-size: 1rem;
  color: #14496d;
  margin-bottom: 8px;
  font-weight: 600;
}

.categories-filter,
.campus-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-btn {
  padding: 6px 12px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 30px;
  color: #333;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 400;
  font-size: 0.9rem;
  position: relative;
  overflow: hidden;
}

.filter-btn:hover {
  background-color: #ddd;
}

.filter-btn.active {
  background-color: #14496d;
  color: white;
}

.filter-btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: rgba(20, 73, 109, 0.3);
  opacity: 0;
  border-radius: 100%;
  transform: scale(1, 1) translate(-50%, -50%);
  transform-origin: 50% 50%;
}

.filter-btn:active::after {
  opacity: 1;
  animation: ripple 0.4s ease-out;
}

@keyframes ripple {
  0% {
    transform: scale(0, 0) translate(-50%, -50%);
    opacity: 0.5;
  }
  100% {
    transform: scale(30, 30) translate(-50%, -50%);
    opacity: 0;
  }
}

.careers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.career-card {
  background-color: white;
  border-radius: 0;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s, opacity 0.3s;
  height: 200px;
  position: relative;
  cursor: pointer;
  opacity: 1;
  transform: translateY(0);
}

.card-animating {
  opacity: 0;
  transform: translateY(20px);
  animation: cardAppear 0.5s forwards;
  animation-delay: var(--animation-delay, 0ms);
}

@keyframes cardAppear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.career-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
}

.new-career {
  border: 2px solid #f0b428;
}

.career-img {
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: #14496d;
}

/* Estilos para imágenes de muestra - en producción se reemplazarían por imágenes reales */
.arquitectura { background-image: url('https://petys.com/wp-content/uploads/2024/10/gatos-se-van-de-la-casa-1920x490pxok.webp'); }
.construccion-civil { background-image: url('https://www.usm.cl/assets/img/admision/carreras/construccion-civil.jpg'); }
.ingenieria-civil { background-image: url('https://www.usm.cl/assets/img/admision/carreras/ing-civil.jpg'); }
.ingenieria-civil-ambiental { background-image: url('https://www.usm.cl/assets/img/admision/carreras/ing-civil-ambiental.jpg'); }
.nueva-carrera { background-image: url('https://www.usm.cl/assets/img/admision/carreras/nueva-carrera.jpg'); }

/* Overlay genérico para las carreras que no tienen imagen específica */
.career-img:not(.arquitectura):not(.construccion-civil):not(.ingenieria-civil):not(.ingenieria-civil-ambiental):not(.nueva-carrera) {
  background-color: rgba(20, 73, 109, 0.8);
  background-image: url('https://www.usm.cl/assets/img/admision/carreras/generica.jpg');
}

.career-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 15px 12px 15px 15px;
  background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 75%, transparent);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
}

.career-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  transition: color 0.3s;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 2.8em;
  width: 100%;
  box-sizing: border-box;
  padding-right: 8px;
  word-wrap: break-word;
  word-break: break-word;
}

.career-campus {
  font-size: 0.85rem;
  color: #f0b428;
  margin-top: 5px;
  font-weight: 500;
}

.career-card:hover .career-overlay h3,
.career-card:hover .career-title {
  color: #f0b428;
}

.career-campuses {
  margin-top: 8px;
}

.campus-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.campus-chip {
  display: inline-block;
  background-color: rgba(240, 180, 40, 0.2);
  border: 1px solid #f0b428;
  color: #f0b428;
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 30px;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.new-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: #f0b428;
  color: #333;
  padding: 5px 10px;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: bold;
  z-index: 2;
}

.no-results {
  text-align: center;
  padding: 40px 0;
}

.no-results p {
  font-size: 1.2rem;
  color: #555;
}

/* Estilos para paginación */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 40px;
  gap: 15px;
}

.pagination-btn {
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 8px 15px;
  cursor: pointer;
  transition: all 0.3s;
  color: #333;
  font-weight: 500;
}

.pagination-btn:hover:not(:disabled) {
  background-color: #14496d;
  color: white;
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-numbers {
  display: flex;
  gap: 5px;
}

.pagination-num {
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
}

.pagination-num:hover:not(.active):not(.ellipsis) {
  background-color: #f0f0f0;
}

.pagination-num.active {
  background-color: #14496d;
  color: white;
  border-color: #14496d;
}

.pagination-num.ellipsis {
  border: none;
  cursor: default;
}

@media (max-width: 768px) {
  .careers-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  .banner-content h1 {
    font-size: 2rem;
  }
  
  .filter-groups {
    flex-direction: column;
  }
  
  .campus-filter {
    flex-direction: column;
    align-items: stretch;
  }
  
  .filter-btn {
    width: 100%;
    text-align: center;
  }
  
  .pagination {
    flex-direction: column;
    gap: 10px;
  }
  
  .pagination-btn {
    width: 100%;
  }
}
</style>
