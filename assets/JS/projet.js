document.addEventListener('DOMContentLoaded', function() {
  // Gestion des onglets
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Retirer active de tous les boutons et contenus
      tabBtns.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Ajouter active au bouton cliqué
      btn.classList.add('active');
      
      // Afficher le contenu correspondant
      const tabId = btn.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
});