<script setup></script>

<template>
    <div class="page-banner">
        <h1>Admisión</h1>
    </div>
    
    <div class="breadcrumb">
        <a href="/">Inicio</a> > Admisión
    </div>
    
    <div class="campus-visit">
        <a href="#" class="campus-link">Recorre nuestros campus o solicita una visita en tu colegio aquí</a>
    </div>
    
    <div class="admission-cards">
        <div class="card-row">
            <div class="admission-card">
                <div class="card-image pregrado-diurno">
                    <div class="card-label">Pregrado Diurno</div>
                </div>
                <div class="card-links">
                    <router-link to="/pregrado-diurno/carreras">Carreras</router-link>
                    <a href="#">Aranceles</a>
                    <a href="#">Admisión Centralizada - PAES</a>
                    <a href="#">Admisión Ingreso Directo a Carreras Técnicas Universitarias</a>
                    <a href="#">Admisión Especial</a>
                    <a href="#">Programas de Apoyo USM</a>
                    <a href="#">Becas de Admisión</a>
                    <a href="#">Beneficios Ministeriales</a>
                    <a href="#">Calendario Oficial Proceso Admisión <span class="external-link">↗</span></a>
                </div>
            </div>
            
            <div class="admission-card">
                <div class="card-image pregrado-vespertino">
                    <div class="card-label">Pregrado Vespertino</div>
                </div>
                <div class="card-links">
                    <a href="#">Carreras</a>
                    <a href="#">Aranceles</a>
                    <a href="#">Beneficios Ministeriales</a>
                </div>
            </div>
            
            <div class="admission-card">
                <div class="card-image magister">
                    <div class="card-label">Magister</div>
                </div>
                <div class="card-links">
                    <a href="#">Dirección de Postgrado y Programas <span class="external-link">↗</span></a>
                    <a href="#">Magister Científicos - Tecnológicos <span class="external-link">↗</span></a>
                    <a href="#">Magister Profesional <span class="external-link">↗</span></a>
                    <a href="#">Becas y Beneficios <span class="external-link">↗</span></a>
                </div>
            </div>
        </div>
        
        <div class="card-row">
            <div class="admission-card">
                <div class="card-image doctorado">
                    <div class="card-label">Doctorado</div>
                </div>
                <div class="card-links">
                    <a href="#">Dirección de Postgrado y Programas <span class="external-link">↗</span></a>
                    <a href="#">Programas de Doctorados <span class="external-link">↗</span></a>
                    <a href="#">Becas y Beneficios <span class="external-link">↗</span></a>
                </div>
            </div>
            
            <div class="admission-card">
                <div class="card-image formacion-continua">
                    <div class="card-label">Formación Continua</div>
                </div>
                <div class="card-links">
                    <a href="#">Dirección General de Asistencia Técnica <span class="external-link">↗</span></a>
                    <a href="#">Diplomas y Cursos <span class="external-link">↗</span></a>
                    <a href="#">Evaluación y Certificación <span class="external-link">↗</span></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.page-banner {
    background-color: #14496d;
    color: white;
    padding: 40px 20px;
    margin-bottom: 20px;
}

.page-banner h1 {
    color: white;
    margin: 0;
}

.breadcrumb {
    margin-bottom: 20px;
    font-size: 14px;
    color: #555;
}

.breadcrumb a {
    color: #14496d;
    text-decoration: none;
}

.campus-visit {
    background-color: #14496d;
    padding: 15px;
    margin-bottom: 30px;
    border-radius: 0;
    text-align: center;
}

.campus-link {
    color: white;
    text-decoration: none;
    font-size: 16px;
}

.admission-cards {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.card-row {
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
}

.admission-card {
    flex: 1;
    min-width: 300px;
    border: 1px solid #e0e0e0;
    border-radius: 0;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.card-image {
    height: 180px;
    position: relative;
    background-size: cover;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: flex-end;
}

.pregrado-diurno {
    background-image: url('https://petys.com/wp-content/uploads/2024/10/gatos-se-van-de-la-casa-1920x490pxok.webp');
}

.pregrado-vespertino {
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhtel-QHmBW69uMx0qNJoH4YlbdmF0_b1wIA&s');
}

.magister {
    background-image: url('https://purina.com.pe/sites/default/files/2022-10/purina-gatos-negros-mitos-y-realidades.jpg');
}

.doctorado {
    background-image: url('https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1900&h=1267');
}

.formacion-continua {
    background-image: url('https://i.ytimg.com/vi/cBg8nu8jYp0/hqdefault.jpg');
}

.card-label {
    padding: 10px 15px;
    background-color: #14496d79;
    color: white;
    font-weight: 500;
    font-size: 18px;
    width: 100%;
    position: relative;
    padding-left: 20px;
    border-left: 5px solid #f0b428;
}

.card-label::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 5px;
    background-color: #f0b428;
}

.card-links {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
}

.card-links a {
    padding: 12px 15px;
    text-decoration: none;
    color: #333;
    border-bottom: 1px solid #eeeeee;
    transition: background-color 0.2s;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-links a:hover {
    background-color: #f5f5f5;
    color: #14496d;
}

.external-link {
    color: #888;
    font-size: 14px;
}

@media (max-width: 992px) {
    .card-row {
        flex-direction: column;
    }
    
    .admission-card {
        width: 100%;
    }
}
</style>