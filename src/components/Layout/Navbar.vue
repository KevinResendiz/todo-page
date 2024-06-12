<template>
    <nav class="navbar navbar-expand-lg  sticky-top">
        <div class="container-fluid">
            <img src="/src/assets/pastel.png" alt="" class="logo" >
            
            <router-link class="navbar-brand "  :to="{path: '/inicio'}">Sueño pastelero</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                    
                    <ul class="dropdown-menu">
                        <li><router-link class="dropdown-item" >Productos</router-link></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><router-link class="dropdown-item">Categorias</router-link></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link " :to="{name:'Productos'}">Productos</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link " :to="{name:'Servicios'}">Servicios</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link " :to="{name:'Galeria'}">Galeria</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link " :to="{name:'Contactanos'}">Contacto</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link " :to="{name:'AcercaDe'}">Acerca de</router-link>
                </li> 
                <li class="nav-item">
                    <router-link class="nav-link " :to="{name:'Registro'}">Registro</router-link>
                </li> 

                <li class="nav-item">
                    <router-link class="nav-link " :to="{name:'Evaluacion'}">Evaluacion</router-link>
                </li> 
                <li class="nav-item">
                    <router-link class="nav-link " :to="{name:'Todo'}">Todo</router-link>
                </li> 
            </ul>
            <form class="d-flex" role="search" @submit.prevent="submitForm"> <!-- div class="gcse-search"></div> -->
<input class="form-control me-2" type="search" placeholder="Buscar en el sitio..."
aria-label="Search">
<div class="btn btn-primary">Buscar</div>
</form>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    nav {
    color:black;
    background:pink;
    }


    .logo {
      max-width: 100px; /* Ancho máximo del logotipo */
      display: inline-block; /* Hacer que el logotipo sea un elemento en línea */
    }
</style>
<script>

</script>
