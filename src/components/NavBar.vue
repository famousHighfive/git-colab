<script setup>
import { useRouter } from 'vue-router';


const router = useRouter()
const menus = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/about' },
  { name: 'Jeux', path: '/games' },
  { name: 'Contact', path: 'contact' }
]
</script>

<template>
  <nav class="navbar">
    <div class="logo">FamousKenzo</div>
    
    <div class="links">
      <router-link v-for="link in menus" :key="link.name" :to="link.path" class="nav-item">
        {{ link.name }}
      </router-link>
    </div>

    <!-- Bouton d'action optionnel -->
    <button @click="router.push('/games')" class="btn-cta">Jouer</button>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px); /* Effet flou moderne */
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
  font-family: 'Inter', sans-serif;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: #3b82f6; /* Bleu moderne */
  letter-spacing: -1px;
}

.links {
  display: flex;
  gap: 2rem;
}

.nav-item {
  text-decoration: none;
  color: #4b5563;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

/* Animation de soulignement au survol */
.nav-item::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: #3b82f6;
  transition: width 0.3s ease;
}

.nav-item:hover {
  color: #3b82f6;
}

.nav-item:hover::after {
  width: 100%;
}

.btn-cta {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.btn-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

/* Responsive : simple pile verticale sur mobile */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 1rem;
  }
  .links {
    gap: 1rem;
  }
}
</style>
