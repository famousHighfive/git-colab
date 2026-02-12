<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-brand">
        <span class="logo">FamousKenzo</span>
        <p>L'aventure continue, même en bas de page.</p>
      </div>

      <div class="footer-links">
        <router-link v-for="link in menus" :key="link.name" :to="link.path" class="footer-item">
          {{ link.name }}
        </router-link>
      </div>

      <div class="footer-copy">
        &copy; {{ new Date().getFullYear() }} — Propulsé par la passion.
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: auto;
  padding: 4rem 5% 2rem;
  /* Bleu nuit profond et moderne */
  background-color: #0f172a; 
  border-top: 1px solid rgba(59, 130, 246, 0.2);
  font-family: 'Inter', sans-serif;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  text-align: center;
}

.footer-brand .logo {
  font-size: 1.6rem;
  font-weight: 800;
  color: #3b82f6; /* Ton bleu d'accentuation */
  letter-spacing: -1px;
}

.footer-brand p {
  color: #94a3b8; /* Gris bleuté doux pour le texte secondaire */
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.footer-links {
  display: flex;
  gap: 3rem;
}

.footer-item {
  text-decoration: none;
  color: #f8fafc; /* Blanc cassé pour ne pas agresser l'oeil */
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.footer-item:hover {
  color: #3b82f6;
  transform: translateY(-2px);
}

.footer-copy {
  color: #64748b;
  font-size: 0.85rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  width: 100%;
  padding-top: 2rem;
}

@media (max-width: 768px) {
  .footer-links {
    flex-direction: column;
    gap: 1.5rem;
  }
}
</style>
