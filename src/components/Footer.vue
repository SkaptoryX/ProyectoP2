<script setup>
// No additional imports needed
</script>

<template>
  <footer>
    <div class="footer-main">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>UNIVERSIDAD</h3>
            <ul>
              <li><a href="#">Nuestra Historia</a></li>
              <li><a href="#">Federico Santa María</a></li>
              <li><a href="#">Definiciones Estratégicas</a></li>
              <li><a href="#">Modelo Educativo</a></li>
              <li><a href="#">Organización</a></li>
            </ul>

            <h3>CAMPUS Y SEDES</h3>
            <ul>
              <li><a href="#">Información Campus y Sedes</a></li>
              <li><a href="#">Tour Virtual</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>EXTENSIÓN Y CULTURA</h3>
            <ul>
              <li><a href="#">Dirección de Comunicaciones Estratégicas y Extensión Cultural</a></li>
              <li><a href="#">Dirección General de Vinculación con el Medio</a></li>
              <li><a href="#">Oficina de Asuntos Internacionales</a></li>
              <li><a href="#">Red de Ex-Alumnos</a></li>
              <li><a href="#">Noticias USM</a></li>
              <li><a href="#">Eventos USM</a></li>
              <li><a href="#">Radio USM</a></li>
              <li><a href="#">Cultura USM</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>SERVICIOS</h3>
            <ul>
              <li><a href="#">Aula USM</a></li>
              <li><a href="#">Biblioteca USM</a></li>
              <li><a href="#">Portal de Autoservicio Institucional</a></li>
              <li><a href="#">Dirección de Tecnologías de la Información</a></li>
              <li><a href="#">Sistema de Información de Gestión Académica</a></li>
              <li><a href="#">Sistema Integrado de Información Argos ERP</a></li>
              <li><a href="#">Sistema de Remuneraciones Históricas</a></li>
              <li><a href="#">Directorio USM</a></li>
              <li><a href="#">Trabaja con nosotros</a></li>
            </ul>
          </div>

          <div class="footer-accreditation">
            <div class="accreditation-badge">
              <img src="https://www.usm.cl/assets/img/cna-badge.png" alt="Acreditación CNA Chile" class="cna-logo">
              <div class="accreditation-text">
                <h4>UNIVERSIDAD ACREDITADA</h4>
                <p class="accreditation-level">NIVEL DE EXCELENCIA</p>
                <ul class="accreditation-areas">
                  <li>Gestión Institucional</li>
                  <li>Docencia de Pregrado</li>
                  <li>Investigación</li>
                  <li>Docencia de Postgrado</li>
                  <li>Vinculación con el Medio</li>
                </ul>
                <p class="accreditation-period">Próxima acreditación<br/>30/12/2028</p>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-legal">
            <a href="#" class="privacy-policy">
              <img src="https://www.usm.cl/assets/img/policy-icon.svg" alt="Política de Privacidad" class="policy-icon">
              Política de Privacidad
            </a>
          </div>

          <div class="footer-domain">
            <a href="https://www.usm.cl" class="domain-link">usm.cl</a>
            <div class="social-links">
              <a href="#" aria-label="Facebook"><i class="social-icon facebook">FB</i></a>
              <a href="#" aria-label="Twitter"><i class="social-icon twitter">TW</i></a>
              <a href="#" aria-label="YouTube"><i class="social-icon youtube">YT</i></a>
              <a href="#" aria-label="Instagram"><i class="social-icon instagram">IG</i></a>
              <a href="#" aria-label="LinkedIn"><i class="social-icon linkedin">LI</i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-partners">
      <div class="container">
        <div class="partners-logos">
          <a href="#"><img src="https://www.usm.cl/assets/img/partners/acceso.png" alt="Acceso Educación Superior"></a>
          <a href="#"><img src="https://www.usm.cl/assets/img/partners/cruch.png" alt="CRUCH"></a>
          <a href="#"><img src="https://www.usm.cl/assets/img/partners/g9.png" alt="G9 Universidades"></a>
          <a href="#"><img src="https://www.usm.cl/assets/img/partners/aur.png" alt="AUR"></a>
          <a href="#"><img src="https://www.usm.cl/assets/img/partners/cruv.png" alt="CRUV"></a>
          <a href="#"><img src="https://www.usm.cl/assets/img/partners/reuna.png" alt="REUNA"></a>
          <a href="#"><img src="https://www.usm.cl/assets/img/partners/universia.png" alt="Universia"></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  margin-top: 50px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.footer-main {
  background-color: #005685;
  color: white;
  padding: 40px 0 20px;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-section {
  flex: 1;
  min-width: 250px;
}

.footer-section h3 {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 15px;
  margin-top: 20px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section li {
  margin-bottom: 10px;
}

.footer-section a {
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 300;
  transition: opacity 0.3s;
}

.footer-section a:hover {
  opacity: 0.8;
}

.footer-accreditation {
  flex: 1.5;
  min-width: 280px;
}

.accreditation-badge {
  border: 1px solid white;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  background-color: white;
  color: #333;
}

.cna-logo {
  width: 80px;
  height: auto;
  margin-right: 15px;
}

.accreditation-text {
  flex: 1;
}

.accreditation-text h4 {
  font-weight: 700;
  margin: 0 0 5px;
  font-size: 1rem;
  color: #005685;
}

.accreditation-level {
  font-weight: 700;
  margin: 0 0 10px;
  font-size: 0.9rem;
  color: #005685;
}

.accreditation-areas {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.8rem;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

.accreditation-areas li {
  margin-bottom: 3px;
}

.accreditation-period {
  font-size: 0.8rem;
  font-weight: 600;
  margin: 10px 0 0;
  text-align: center;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.privacy-policy {
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
}

.policy-icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.footer-domain {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.domain-link {
  color: white;
  font-size: 2rem;
  font-weight: 700;
  text-decoration: none;
  margin-bottom: 10px;
}

.social-links {
  display: flex;
  gap: 10px;
}

.social-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  color: #005685;
  font-style: normal;
  font-size: 0.7rem;
  font-weight: bold;
}

.footer-partners {
  background-color: #333;
  padding: 20px 0;
}

.partners-logos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.partners-logos a {
  display: block;
  filter: grayscale(100%);
  opacity: 0.8;
  transition: all 0.3s;
}

.partners-logos a:hover {
  filter: grayscale(0);
  opacity: 1;
}

.partners-logos img {
  height: 40px;
  width: auto;
  object-fit: contain;
}

@media (max-width: 992px) {
  .footer-content {
    flex-direction: column;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 20px;
  }
  
  .footer-domain {
    align-items: center;
  }
  
  .partners-logos {
    justify-content: center;
  }
}
</style>
