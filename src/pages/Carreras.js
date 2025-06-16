import { Box, Typography, Grid, Card, CardContent, TextField, CardMedia, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'; // Added Button
import { useNavigate } from 'react-router-dom';
import campus from '../assets/images/campus.jpg';
import Breadcrumb from '../components/Breadcrumb';
import { useState } from 'react';

//Página 2

// Helper for original career data to build the new structure
const originalCarreras = [
  { nombre: 'Arquitectura', id: 'arquitectura', imagen: 'https://usm.cl/wp-content/uploads/2021/01/casa-central-arquitectura.w2000.jpg' },
  { nombre: 'Construcción Civil', id: 'construccion-civil', imagen: 'https://usm.cl/wp-content/uploads/2021/01/casa-central-construccion-civil.w2000.jpg' },
  { nombre: 'Ingeniería Civil', id: 'ingenieria-civil', imagen: 'https://usm.cl/wp-content/uploads/2021/01/casa-central-ingenieria-civil.w2000.jpg' },
  { nombre: 'Ingeniería Civil Ambiental', id: 'ingenieria-civil-ambiental', imagen: 'https://usm.cl/wp-content/uploads/2021/04/casa-central-ingenieria-civil-ambiental.w2000.jpg' },
  { nombre: 'Ingeniería Civil de Minas', id: 'ingenieria-civil-de-minas', imagen: 'https://usm.cl/wp-content/uploads/2022/10/Ing.-CIvil-de-Minas.jpg' },
  { nombre: 'Ingeniería Civil Eléctrica', id: 'ingenieria-civil-electrica', imagen: 'https://usm.cl/wp-content/uploads/2022/09/Ing.-Civil-Ele%CC%81ctrica.jpg' },
  { nombre: 'Ingeniería Civil Electrónica', id: 'ingenieria-civil-electronica', imagen: 'https://usm.cl/wp-content/uploads/2021/04/casa-central-ingenieria-civil-electronica.w2000.jpg' },
  { nombre: 'Ingeniería Civil en Biotecnología', id: 'ingenieria-civil-en-biotecnologia', imagen: 'https://usm.cl/wp-content/uploads/2024/10/ingenieria-en-biotecnologia.jpg' },
  { nombre: 'Ingeniería Civil Física', id: 'ingenieria-civil-fisica', imagen: 'https://usm.cl/wp-content/uploads/2022/10/Ing.-Civil-Fi%CC%81sica.jpg' },
  { nombre: 'Ingeniería Civil Industrial', id: 'ingenieria-civil-industrial', imagen: 'https://usm.cl/wp-content/uploads/2024/06/ing-civil-industrial.jpg' },
  { nombre: 'Ingeniería Civil Informática', id: 'ingenieria-civil-informatica', imagen: 'https://usm.cl/wp-content/uploads/2021/04/san-joaquin-ingenieria-civil-informatica.w2000.jpg' },
  { nombre: 'Ingeniería Civil Matemática', id: 'ingenieria-civil-matematica', imagen: 'https://usm.cl/wp-content/uploads/2021/04/san-joaquin-ingenieria-civil-matematica.w2000.jpg' },
  { nombre: 'Ingeniería Civil Mecánica', id: 'ingenieria-civil-mecanica', imagen: 'https://usm.cl/wp-content/uploads/2021/04/san-joaquin-ingenieria-civil-mecanica.w2000.jpg' },
  { nombre: 'Ingeniería Civil Metalúrgica', id: 'ingenieria-civil-metalurgica', imagen: 'https://usm.cl/wp-content/uploads/2022/09/Ing.-Civil-Metalu%CC%81rgica.jpg' },
  { nombre: 'Ingeniería Civil Plan Común', id: 'ingenieria-civil-plan-comun', imagen: 'https://usm.cl/wp-content/uploads/2022/10/Ing.-Civil-Plan-Comu%CC%81n.jpg' },
  { nombre: 'Ingeniería Civil Química', id: 'ingenieria-civil-quimica', imagen: 'https://usm.cl/wp-content/uploads/2022/10/Ing.-Civil-Qui%CC%81mica.jpg' },
  { nombre: 'Ingeniería Civil Telemática', id: 'ingenieria-civil-telematica', imagen: 'https://usm.cl/wp-content/uploads/2022/10/Ing.-Civil-Telema%CC%81tica.jpg' },
  { nombre: 'Ingeniería Comercial', id: 'ingenieria-comercial', imagen: 'https://usm.cl/wp-content/uploads/2022/10/Ing.-Comercial.jpg' },
  { nombre: 'Ingeniería en Aviación Comercial', id: 'ingenieria-en-aviacion-comercial', imagen: 'https://usm.cl/wp-content/uploads/2022/10/Ing.-en-Aviacio%CC%81n-Comercial.jpg' },
  { nombre: 'Ingeniería en Biotecnología', id: 'ingenieria-en-biotecnologia', imagen: 'https://usm.cl/wp-content/uploads/2022/08/Ing.-biotecnologi%CC%81a-FINAL.jpg' },
  { nombre: 'Ingeniería en Diseño de Productos', id: 'ingenieria-en-diseno-de-productos', imagen: 'https://usm.cl/wp-content/uploads/2023/09/Ing.-en-Disen%CC%83o-de-Productos.jpg' },
  { nombre: 'Ingeniería en Fabricación y Diseño Industrial', id: 'ingenieria-en-fabricacion-y-diseno-industrial', imagen: 'https://usm.cl/wp-content/uploads/2022/10/Ing.-en-Fabricacio%CC%81n-y-Disen%CC%83o-Industrial.jpg' },
  { nombre: 'Ingeniería en Informática', id: 'ingenieria-en-informatica', imagen: 'https://usm.cl/wp-content/uploads/2021/04/concepcion-ingenieria-informatica-pc-01.png' },
  { nombre: 'Ingeniería en Mantenimiento Industrial', id: 'ingenieria-en-mantenimiento-industrial', imagen: 'https://usm.cl/wp-content/uploads/2021/04/vina-del-mar-ingenieria-en-mantenimiento-industrial.w2000.jpg' },
  { nombre: 'Ingeniería en Prevención de Riesgos Laborales y Ambientales', id: 'ingenieria-en-prevencion-de-riesgos-laborales-y-ambientales', imagen: 'https://usm.cl/wp-content/uploads/2022/10/Ing.-en-prevencio%CC%81n-de-riesgos-ambientales-y-labores.jpg' },
  { nombre: 'Licenciatura en Astrofísica', id: 'licenciatura-en-astrofisica', imagen: 'https://usm.cl/wp-content/uploads/2022/10/Licenciatura-en-Astrofi%CC%81sica.jpg' },
  { nombre: 'Licenciatura en Ciencias, mención Química', id: 'licenciatura-en-ciencias-mencion-quimica', imagen: 'https://usm.cl/wp-content/uploads/2021/04/casa-central-licenciatura-en-ciencias-mencion-quimica.w2000.jpg' },
  { nombre: 'Licenciatura en Física', id: 'licenciatura-en-fisica', imagen: 'https://usm.cl/wp-content/uploads/2022/10/Licenciatura-en-Fi%CC%81sica.jpg' },
  { nombre: 'Químico', id: 'quimico', imagen: 'https://usm.cl/wp-content/uploads/2021/04/casa-central-quimico.w2000.jpg' },
  { nombre: 'Técnico Universitario Dibujante Proyectista', id: 'tecnico-universitario-dibujante-proyectista', imagen: 'https://usm.cl/wp-content/uploads/2022/10/TU-Dibujante-Proyectista.jpg' },
  { nombre: 'Técnico Universitario en Administración de Empresas', id: 'tecnico-universitario-en-administracion-de-empresas', imagen: 'https://usm.cl/wp-content/uploads/2023/09/TU-en-administracio%CC%81n-de-empresas.jpg' },
  { nombre: 'Técnico Universitario en Alimentos', id: 'tecnico-universitario-en-alimentos', imagen: 'https://usm.cl/wp-content/uploads/2022/10/TU-en-alimentos.jpg' },
  { nombre: 'Técnico Universitario en Automatización y Control', id: 'tecnico-universitario-en-automatizacion-y-control', imagen: 'https://usm.cl/wp-content/uploads/2022/09/TU-en-automatizacio%CC%81n-y-control.jpg' },
  { nombre: 'Técnico Universitario en Biotecnología', id: 'tecnico-universitario-en-biotecnologia', imagen: 'https://usm.cl/wp-content/uploads/2022/03/tu-biotecnologia-slide.jpg' },
  { nombre: 'Técnico Universitario en Ciencia de Datos', id: 'tecnico-universitario-en-ciencia-de-datos', imagen: 'https://usm.cl/wp-content/uploads/2024/10/tu-en-ciencia-de-datos.png' },
  { nombre: 'Técnico Universitario en Construcción', id: 'tecnico-universitario-en-construccion', imagen: 'https://usm.cl/wp-content/uploads/2021/04/vina-del-mar-tecnico-universitario-en-construccion.w2000.jpg' },
  { nombre: 'Técnico Universitario en Control del Medio Ambiente', id: 'tecnico-universitario-en-control-del-medio-ambiente', imagen: 'https://usm.cl/wp-content/uploads/2024/06/tu-control-medio-ambiente.jpg' },
  { nombre: 'Técnico Universitario en Electricidad', id: 'tecnico-universitario-en-electricidad', imagen: 'https://usm.cl/wp-content/uploads/2022/10/TU-en-electricidad.jpg' },
  { nombre: 'Técnico Universitario en Electrónica', id: 'tecnico-universitario-en-electronica', imagen: 'https://usm.cl/wp-content/uploads/2021/04/vina-del-mar-tecnico-universitario-en-electronica.w2000.jpg' },
  { nombre: 'Técnico Universitario en Energías Renovables', id: 'tecnico-universitario-en-energias-renovables', imagen: 'https://usm.cl/wp-content/uploads/2021/04/vina-del-mar-tecnico-universitario-en-energias-renovables.w2000.jpg' },
  { nombre: 'Técnico Universitario en Informática', id: 'tecnico-universitario-en-informatica', imagen: 'https://usm.cl/wp-content/uploads/2022/10/TU-en-informa%CC%81tica.jpg' },
  { nombre: 'Técnico Universitario en Mantenimiento Aeronáutico', id: 'tecnico-universitario-en-mantenimiento-aeronautico', imagen: 'https://usm.cl/wp-content/uploads/2022/10/Te%CC%81cnico-en-Mantenimiento-Aerona%CC%81utico.jpg' },
  { nombre: 'Técnico Universitario en Mantenimiento Industrial', id: 'tecnico-universitario-en-mantenimiento-industrial', imagen: 'https://usm.cl/wp-content/uploads/2023/09/TU-en-mantenimiento-industrial.jpg' },
  { nombre: 'Técnico Universitario en Mecánica Automotriz', id: 'tecnico-universitario-en-mecanica-automotriz', imagen: 'https://usm.cl/wp-content/uploads/2021/04/vina-del-mar-tecnico-universitario-en-mecanica-automotriz.w2000.jpg' },
  { nombre: 'Técnico Universitario en Mecánica Industrial', id: 'tecnico-universitario-en-mecanica-industrial', imagen: 'https://usm.cl/wp-content/uploads/2021/04/vina-del-mar-tecnico-universitario-en-mecanica-industrial.w2000.jpg' },
  { nombre: 'Técnico Universitario en Minería y Metalurgia', id: 'tecnico-universitario-en-mineria-y-metalurgia', imagen: 'https://usm.cl/wp-content/uploads/2021/04/vina-del-mar-tecnico-universitario-en-mineria-y-metalurgia.w2000.jpg' },
  { nombre: 'Técnico Universitario en Proyectos de Ingeniería', id: 'tecnico-universitario-en-proyectos-de-ingenieria', imagen: 'https://usm.cl/wp-content/uploads/2022/11/TU-en-proyectos-de-ingenieri%CC%81a.jpg' },
  { nombre: 'Técnico Universitario en Química, mención Química Analítica', id: 'tecnico-universitario-en-quimica-mencion-quimica-analitica', imagen: 'https://usm.cl/wp-content/uploads/2021/04/vina-del-mar-tecnico-universitario-en-quimica-mencion-quimica-analitica.w2000.jpg' },
  { nombre: 'Técnico Universitario en Química, mención Química Industrial', id: 'tecnico-universitario-en-quimica-mencion-quimica-industrial', imagen: 'https://usm.cl/wp-content/uploads/2021/04/concepcion-tecnico-universitario-en-quimica-mencion-quimica-industrial.w2000.jpg' },
  { nombre: 'Técnico Universitario en Robótica y Mecatrónica', id: 'tecnico-universitario-en-robotica-y-mecatronica', imagen: 'https://usm.cl/wp-content/uploads/2022/11/TU-robotica-mecatronica.jpg' },
  { nombre: 'Técnico Universitario en Telecomunicaciones y Redes', id: 'tecnico-universitario-en-telecomunicaciones-y-redes', imagen: 'https://usm.cl/wp-content/uploads/2022/09/TU-telecomunicaciones-y-redes-e1733250148370.jpg' }
];

const categorizedCareers = {
  "ingenieria-civil": [],
  "licenciaturas": [],
  "tecnico-universitario": [],
  "otras": []
};

// Detailed career data provided by the user
const newProvidedCareersData = {
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
    { name: "Técnico Universitario en Automatización y Control", campus: "Concepción", slug: "tecnico-universitario-automatizacion-control" }, // Note: Example data has only Concepción, previous logic had VVM too. Following example.
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
    { name: "Ingeniería en Informática", slug: "ingenieria-informatica-conce", code: "15.562", campus: "Concepcion", ponderacion: "500", ultimo_puntaje: "839,05", promedio: "591,60", vacantes: "50" }, // Corrected "Concepcion" to "Concepción" for consistency if map is used, but new data has "Concepcion"
    { name: "Ingeniería en Mantenimiento Industrial", slug: "ingenieria-mantenimiento-industrial-vina", code: "15.440", campus: "Viña del Mar", ponderacion: "500", ultimo_puntaje: "807,75", promedio: "587,90", vacantes: "35" },
    { name: "Ingeniería en Mantenimiento Industrial", slug: "ingenieria-mantenimiento-industrial-conce", code: "15.540", campus: "Concepcion", ponderacion: "500", ultimo_puntaje: "801,15", promedio: "593,05", vacantes: "15" }, // Corrected "Concepcion" to "Concepción"
    { name: "Ingeniería en Prevención de Riesgos Laborales y Ambientales", slug: "ingenieria-prevencion-riesgos-vina", code: "15.474", campus: "Viña del Mar", ponderacion: "500", ultimo_puntaje: "851,40", promedio: "544,20", vacantes: "15" },
    { name: "Ingeniería en Prevención de Riesgos Laborales y Ambientales", slug: "ingenieria-prevencion-riesgos-conce", code: "15.574", campus: "Concepcion", ponderacion: "500", ultimo_puntaje: "693,55", promedio: "500,70", vacantes: "15" } // Corrected "Concepcion" to "Concepción"
  ]
};


// Helper function to get all campuses for a given career name from the new data source
const getCampusesForCareerName = (careerName, dataSource) => {
  const campuses = new Set();
  for (const categoryKey in dataSource) {
    const careersInCategory = dataSource[categoryKey];
    if (careersInCategory) { // Ensure category exists
      for (const careerEntry of careersInCategory) {
        if (careerEntry.name === careerName && careerEntry.campus) { // Ensure campus is defined
          campuses.add(careerEntry.campus);
        }
      }
    }
  }
  return Array.from(campuses);
};

originalCarreras.forEach(c => {
  let category = "otras"; // Default category

  if (c.nombre.startsWith("Ingeniería Civil")) {
    category = "ingenieria-civil";
  } else if (c.nombre.startsWith("Licenciatura") || c.nombre === "Químico") {
    category = "licenciaturas";
  } else if (c.nombre.startsWith("Técnico Universitario")) {
    category = "tecnico-universitario";
  }
  // 'else category = "otras"' is implicitly handled by the default

  const determinedCampusesForC = getCampusesForCareerName(c.nombre, newProvidedCareersData);

  categorizedCareers[category].push({ 
    name: c.nombre, 
    slug: c.id, 
    imagen: c.imagen, 
    campuses: determinedCampusesForC.length > 0 ? determinedCampusesForC : ["Información de campus no disponible"]
  });
});

const categoryDisplayNames = {
  "ingenieria-civil": "Ingenierías Civiles",
  "licenciaturas": "Licenciaturas",
  "tecnico-universitario": "Carreras Técnico Universitarias",
  "otras": "Otras Carreras"
};

const categoryOptions = ["Todas", ...Object.values(categoryDisplayNames)];
const campusOptions = ["Todos los Campus", "Casa Central Valparaíso", "Santiago San Joaquín", "Santiago Vitacura", "Viña del Mar", "Concepción"];

// Helper function to remove accents and convert to lowercase
const removeAccentsAndLowercase = (str) => {
  if (!str) return "";
  return str
    .normalize("NFD") // Separate base characters and diacritics
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .toLowerCase();
};


function Carreras() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [selectedCampus, setSelectedCampus] = useState("Todos los Campus");

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', p: 0 }}>
      <Box sx={{ position: 'relative', height: 180, mb: 2 }}>
        <img
          src={campus}
          alt="Banner Carreras"
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }}
        />
        <Typography
          variant="h4"
          sx={{
            position: 'absolute',
            left: 32,
            bottom: 24,
            color: 'white',
            fontWeight: 700
          }}
        >
          Carreras
        </Typography>
      </Box>

      <Box sx={{ maxWidth: 1920, mx: 'auto', px: 2 }}> {/* Changed maxWidth to 1400 */}
        <Breadcrumb 
          items={[
            { label: 'Inicio', path: '/' },
            { label: 'Admisión', path: '/' },
            { label: 'Carreras' }
          ]}
        />
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          Estudia en la USM: Carreras de Pregrado
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Presentes en la Región de Valparaíso, con el Campus Casa Central Valparaíso y Sede Viña del Mar; en la Región Metropolitana con el Campus Vitacura y Campus San Joaquín y en la Región del Biobío con la Sede Concepción, el objetivo de la Universidad es formar profesionales que posean herramientas para liderar equipos y desarrollar iniciativas creativas e innovadoras, sensibles a su entorno sociocultural, complementando su excelencia y competencia en sus respectivas disciplinas. Así, cada nueva generación está llamada a engrandecer el legado heredado de don Federico Santa María Carrera.
        </Typography>
        <Box sx={{ clear: 'both', mb: 2 }} />
        <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
          <TextField
            label="Buscar carrera por nombre"
            variant="outlined"
            size="small"
            sx={{ minWidth: 250, flexGrow: 1 }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FormControl size="small" sx={{ minWidth: 200, flexGrow: 1 }}>
            <InputLabel>Categoría</InputLabel>
            <Select
              value={selectedCategory}
              label="Categoría"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categoryOptions.map(option => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 200, flexGrow: 1 }}>
            <InputLabel>Campus</InputLabel>
            <Select
              value={selectedCampus}
              label="Campus"
              onChange={(e) => setSelectedCampus(e.target.value)}
            >
              {campusOptions.map(option => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        
        {Object.entries(categorizedCareers)
          .filter(([categoryKey, _]) => {
            if (selectedCategory === "Todas") return true;
            return categoryDisplayNames[categoryKey] === selectedCategory;
          })
          .map(([categoryKey, careersInCategory]) => {
            
            const filteredByName = careersInCategory.filter(carrera =>
              removeAccentsAndLowercase(carrera.name).includes(removeAccentsAndLowercase(searchTerm))
            );

            const filteredByCampus = selectedCampus === "Todos los Campus"
              ? filteredByName
              : filteredByName.filter(carrera => carrera.campuses.includes(selectedCampus));
            
            const finalFilteredCareers = filteredByCampus;

            if (finalFilteredCareers.length === 0 && selectedCategory !== "Todas" && categoryDisplayNames[categoryKey] !== selectedCategory) {
              // If a specific category is selected and it has no results after other filters, don't render this category block.
              // This is already handled by the outer .filter on Object.entries.
              // This specific check might be redundant if the outer filter works as intended.
              // However, if the intention is to hide the category title itself if empty after filtering, this is where it would go.
              // For now, let's assume the outer filter is enough to show only relevant categories.
            }

            // Only render the category box if it's the selected one (or "Todas" is selected)
            // and it has careers after filtering, or if no specific category filter is active.
            // This logic is now primarily handled by the .filter on Object.entries.
            // We should render the Box if the category is supposed to be shown.
            // The decision to show "no results" is made based on finalFilteredCareers.length.

            return (
              <Box key={categoryKey} sx={{ mb: 4 }}>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 2, borderBottom: '2px solid #004a87', pb: 1 }}>
                  {categoryDisplayNames[categoryKey] || categoryKey}
                </Typography>
                {finalFilteredCareers.length > 0 ? (
                  <Grid container spacing={2}>
                    {finalFilteredCareers.map((carrera, idx) => (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={`${carrera.slug}-${idx}-${carrera.campuses.join('-')}`}> {/* Ensure unique key */}
                        <Card 
                          sx={{ 
                            height: '100%', 
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid #e0e0e0',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            boxShadow: '0 6px 16px rgba(0,74,135,0.12)',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                              backgroundColor: '#f5f9ff', 
                              transform: 'translateY(-4px)',
                              boxShadow: '0 12px 24px rgba(0,74,135,0.2)',
                              borderColor: '#b3d7ff'
                            }
                          }} 
                          onClick={() => navigate(`/carreras/${carrera.slug}`)}
                        >
                          <CardMedia
                            component="img"
                            height="140" // Consider 16:9 aspect ratio here too if desired
                            image={carrera.imagen}
                            alt={carrera.name}
                            sx={{ objectFit: 'cover' }} // Ensure image covers the area
                          />
                          <CardContent sx={{ 
                            flexGrow: 1, 
                            display: 'flex', 
                            flexDirection: 'column', 
                            justifyContent: 'space-between',
                            borderTop: '1px solid #f0f0f0'
                          }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
                              {carrera.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Campus: {carrera.campuses.join(', ')} {/* Display list of campuses */}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                ) : (
                  <Typography sx={{ml:1}}>
                    No se encontraron carreras que cumplan con los filtros seleccionados en esta categoría.
                  </Typography>
                )}
              </Box>
            );
        })}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4, mb: 4 }}>
          <Button 
            variant="contained" 
            size="large" 
            sx={{ px: 5, py: 2, fontSize: '1.2rem' }}
            onClick={() => navigate('/')}
          >
            Volver al Inicio
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Carreras;
