<script setup>
// console.log("welcome");
</script>

<template>
  <div class="game-container">
    <nav class="game-nav">
      <!-- exact-active-class empêche "/games" d'être actif quand on est sur "/games/jeux-capital" -->
      <router-link to="/games" class="nav-item" exact-active-class="is-active">
        <span class="icon">🌍</span> Jeux Pays
      </router-link>
      
      <router-link to="/games/jeux-capital" class="nav-item" active-class="is-active">
        <span class="icon">🏛️</span> Jeux Capital
      </router-link>
      
      <router-link to="/games/jeux-drapeau" class="nav-item" active-class="is-active">
        <span class="icon">🚩</span> Jeux Drapeau
      </router-link>
    </nav>
    
    <main class="game-content">
      <router-view/>
    </main>
  </div>
</template>

<style scoped>
.game-container {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.game-nav {
  display: flex;
  justify-content: center;
  gap: 12px;
  background: #2c3e50;
  padding: 15px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  margin-bottom: 30px;
}

.nav-item {
  position: relative;
  text-decoration: none;
  color: #bdc3c7;
  padding: 12px 24px;
  border-radius: 10px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 2px solid transparent;
  outline: none;
}

.nav-item:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-2px);
}

/* État Focus/Actif ultra visible */
.is-active {
  background: #3498db !important;
  color: white !important;
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
}

/* Petit indicateur lumineux sous l'élément actif */
.is-active::after {
  content: '';
  position: absolute;
  bottom: 6px;
  left: 20%;
  right: 20%;
  height: 3px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
}

/* Accessibilité clavier */
.nav-item:focus-visible {
  border-color: #3498db;
  box-shadow: 0 0 0 4px rgba(52, 152, 219, 0.3);
}

.icon {
  font-size: 1.3rem;
}

.game-content {
  background: #ffffff;
  border-radius: 20px;
  padding: 30px;
  min-height: 400px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  border: 1px solid #eef2f3;
}
</style>
