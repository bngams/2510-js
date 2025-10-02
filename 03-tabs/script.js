// sélectionner et stocker dans une variable les éléments tabs (reconnaissables par la classe "tab")
const tabs = document.querySelectorAll('.tab');
// sélectionner et stocker dans une variable les blocs de contenu associés au tabs
const contents = document.querySelectorAll('.tab-content');


// ajouter un événement click pour chaque tab
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // cacher tous les blocs de contenus
    contents.forEach(content => content.style.display = 'none');

    // Get the corresponding content block ID from the     data-content-id attribute 
    const contentId = tab.getAttribute('data-content-id'); 
    const contentToShow = document.getElementById(contentId); 
    // Show the corresponding content block 
    if (contentToShow) { 
      contentToShow.style.display = 'block'; 
    }
  });
});