<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const showUniversidadDropdown = ref(false);
const showAdmisionDropdown = ref(false);
const showInvestigacionDropdown = ref(false);
const showExtensionDropdown = ref(false);

const toggleDropdown = (dropdown) => {
  if (dropdown === 'universidad') {
    showUniversidadDropdown.value = !showUniversidadDropdown.value;
  } else if (dropdown === 'admision') {
    showAdmisionDropdown.value = !showAdmisionDropdown.value;
  } else if (dropdown === 'investigacion') {
    showInvestigacionDropdown.value = !showInvestigacionDropdown.value;
  } else if (dropdown === 'extension') {
    showExtensionDropdown.value = !showExtensionDropdown.value;
  }
};
</script>

<template>
  <header>
    <div class="top-bar">
      <div class="container">
        <div class="top-links">
          <div class="left-links">
            <a href="#" class="accessibility">Accesibilidad</a>
            <a href="#" class="lang">EN</a>
            <a href="#" class="lang">ES</a>
          </div>
          <div class="right-links">
            <a href="#">Sitios de Interés</a>
            <a href="#">Información para</a>
            <a href="#">Servicios</a>
            <a href="#" class="usm-tv">USM TV</a>
            <a href="#" class="connect">Conecta USM</a>
            <a href="#" class="portal">Portal SIGA</a>
          </div>
        </div>
      </div>
    </div>
    <div class="main-nav">
      <div class="container">
        <div class="nav-wrapper">
          <a href="/" class="logo">USM</a>
          <nav class="navigation">
            <ul>
              <li><a href="/">Inicio</a></li>
              <li class="dropdown">
                <a href="#" @click.prevent="toggleDropdown('universidad')">Universidad <span class="arrow">▼</span></a>
                <div class="dropdown-menu" v-if="showUniversidadDropdown">
                  <a href="#">Historia</a>
                  <a href="#">Misión y Visión</a>
                  <a href="#">Autoridades</a>
                </div>
              </li>
              <li class="dropdown">
                <a href="#" @click.prevent="toggleDropdown('admision')">Admisión <span class="arrow">▼</span></a>
                <div class="dropdown-menu" v-if="showAdmisionDropdown">
                  <a href="#">Pregrado Diurno</a>
                  <a href="#">Pregrado Vespertino</a>
                  <a href="#">Magíster</a>
                </div>
              </li>
              <li class="dropdown">
                <a href="#" @click.prevent="toggleDropdown('investigacion')">Investigación <span class="arrow">▼</span></a>
                <div class="dropdown-menu" v-if="showInvestigacionDropdown">
                  <a href="#">Centros de Investigación</a>
                  <a href="#">Proyectos</a>
                  <a href="#">Publicaciones</a>
                </div>
              </li>
              <li class="dropdown">
                <a href="#" @click.prevent="toggleDropdown('extension')">Extensión y Cultura <span class="arrow">▼</span></a>
                <div class="dropdown-menu" v-if="showExtensionDropdown">
                  <a href="#">Eventos</a>
                  <a href="#">Actividades Culturales</a>
                </div>
              </li>
            </ul>
          </nav>
          <div class="search-icon">
            <a href="#"><span>🔍</span></a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.top-bar {
  background-color: #14496d;
  color: white;
  padding: 8px 0;
}

.top-links {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

.left-links, .right-links {
  display: flex;
  gap: 15px;
}

.top-links a {
  color: white;
  text-decoration: none;
}

.accessibility {
  position: relative;
  padding-left: 20px;
}

.accessibility::before {
  content: "♿";
  position: absolute;
  left: 0;
}

.lang {
  font-weight: bold;
}

.usm-tv {
  background-color: #ff0000;
  padding: 2px 8px;
  border-radius: 4px;
}

.connect {
  background-color: #0056b3;
  padding: 2px 8px;
  border-radius: 4px;
}

.portal {
  background-color: #ffc107;
  color: #333 !important;
  padding: 2px 8px;
  border-radius: 4px;
}

.main-nav {
  background-color: #ffffff;
  border-bottom: 1px solid #e7e7e7;
  padding: 15px 0;
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #14496d;
  text-decoration: none;
}

.navigation ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navigation li {
  margin-left: 25px;
  position: relative;
}

.navigation a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.navigation a:hover {
  color: #14496d;
}

.arrow {
  font-size: 10px;
  margin-left: 3px;
}

.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  min-width: 180px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
}

.dropdown-menu a {
  padding: 8px 15px;
  color: #333;
}

.dropdown-menu a:hover {
  background-color: #f8f9fa;
}

.search-icon {
  font-size: 18px;
  color: #333;
}

.search-icon a {
  color: #333;
  text-decoration: none;
}

@media (max-width: 768px) {
  .top-links, .navigation ul {
    flex-direction: column;
    gap: 5px;
  }
  
  .top-links {
    align-items: center;
  }
  
  .left-links, .right-links {
    flex-direction: column;
    align-items: center;
  }
  
  .nav-wrapper {
    flex-direction: column;
    gap: 15px;
  }
  
  .navigation li {
    margin: 5px 0;
  }
  
  .dropdown-menu {
    position: static;
    box-shadow: none;
    padding-left: 15px;
  }
}
</style>
