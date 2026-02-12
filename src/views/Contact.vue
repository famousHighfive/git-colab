<template>
  <section class="section-contact">
    <div class="contact-card">
      <div class="card-header">
        <h2>Contacte-moi</h2>
        <p>Une question ou un projet ? Dis-moi tout.</p>
      </div>

      <form @submit.prevent class="form-grid">
        <div class="field">
          <label>Nom</label>
          <input type="text" placeholder="Ton nom complet" />
        </div>

        <div class="field">
          <label>Email</label>
          <input type="email" placeholder="adresse@email.com" />
        </div>

        <div class="field full">
          <label>Message</label>
          <textarea rows="4" placeholder="Comment puis-je t'aider ?"></textarea>
        </div>

        <button type="submit" class="btn-send">
          Envoyer le message
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.section-contact {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 5%;
  background-color: #ffffff; /* Fond de page blanc */
  min-height: 80vh;
  font-family: 'Inter', sans-serif;
}

.contact-card {
  width: 100%;
  max-width: 550px;
  background-color: #0f172a; /* Bleu nuit profond */
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15); /* Ombre portée douce */
}

.card-header {
  margin-bottom: 2rem;
  text-align: left;
}

h2 {
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

p {
  color: #94a3b8;
  font-size: 0.95rem;
}

.form-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.field label {
  color: #f8fafc;
  font-size: 0.85rem;
  font-weight: 500;
  margin-left: 4px;
}

input, textarea {
  width: 100%;
  padding: 0.8rem 1.2rem;
  background: rgba(255, 255, 255, 0.05); /* Fond input très discret */
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 12px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #3b82f6;
  background: rgba(59, 130, 246, 0.05);
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
}

.btn-send {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.btn-send:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}

@media (max-width: 640px) {
  .contact-card {
    padding: 2rem;
    border-radius: 0; /* Plein écran sur mobile pour plus de confort */
  }
}
</style>
