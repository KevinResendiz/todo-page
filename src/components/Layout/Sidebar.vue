<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <h3>Barra lateral</h3>
    </div>
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link to="/" class="nav-link">
          <i class="bi bi-house"></i> Inicio
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link">
          <i class="bi bi-person"></i> Acerca
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/services" class="nav-link">
          <i class="bi bi-tools"></i> Servicios
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contact" class="nav-link">
          <i class="bi bi-envelope"></i> Contacto
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .sidebar {
    background-color: #f8f9fa;
    border-right: 1px solid #dee2e6;
    height: 75%;
    position: absolute;
    left: 0;
    width: 250px;
    z-index: 0;
  }

  .sidebar-header {
    background-color: #343a40;
    color: #fff;
    padding: 20px;
    text-align: center;
  }

  .nav-link {
    color: #6c757d;
  }

  .nav-link:hover {
    color: #343a40;
  }

  @media (max-width: 767.98px) {
    .sidebar {
      display: none; /* Ocultar el sidebar en dispositivos extra pequeños */
    }
  }
</style>