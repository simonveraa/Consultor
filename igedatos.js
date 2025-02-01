const datos = [

      
      {
        examen: "Mezcla de Alimentos",
        alergenos: `<ol>
                    <li>Clara de huevo</li>
                    <li>Leche de vaca</li>
                    <li>Harina de trigo</li>
                    <li>Mani</li>
                    <li>Soya</li>
                    </ol>`,
      },
      {
        examen: "Alimentos Calidos",
       
        alergenos: `<ol>
                    <li>Avellana</li>
                    <li>Coco</li>
                    <li>Almendra</li>
                    <li>Maní</li>
                    </ol>`,
      },
      {
        examen: "Mezcla de Árboles",
       
        alergenos: `<ol>
                    <li>Arce</li>
                    <li>Abedul</li>
                    <li>Plátano oriental</li>
                    <li>Alamo</li>
                    </ol>`,
      },
      {
        examen: "Mezcla de Carnes",
       
        alergenos: `<ol>
                    <li>Cerdo</li>
                    <li>Vacuno</li>
                    <li>Cordero</li>
                    </ol>`,
      },
      {
        examen: "Mezcla de Caspa Animal",
       
        alergenos: `<ol>
                    <li>Caspa de Gato</li>
                    <li>Caspa de Perro</li>
                    <li>Caspa de Caballo</li>
                    <li>Caspa de Vaca</li>
                    </ol>`,
      },
      {
        examen: "Mezcla de Cereales",
        
        alergenos: `<ol>
                    <li>Harina de Trigo</li>
                    <li>Avena</li>
                    <li>Gluten</li>
                   </ol>`,
      },
      {
        examen: "Mezcla de Epitelio Animal",
       
        alergenos: `<ol>
                    <li>Epitelio de Gato</li>
                    <li>Epitelio de Perro</li>
                    <li>Epitelio de Caballo</li>
                    <li>Epitelio de Vaca</li>
                    <li>Epitelio de Cobayo</li>
                    </ol>`,
      },
      {
        examen: "Mezcla de Frutas",
        
        alergenos: `<ol>
                    <li>Plátano</li>
                    <li>Naranja</li>
                    <li>Manzana</li>
                    <li>Durazno</li>
                    </ol>`,
      },
      {
        examen: "Mezcla de Hongos",
        
        alergenos: `<ol>
                    <li><i>Penicillium notatum</li>
                    <li><i>Cladosporium herbarum</li>
                    <li><i>Aspergillus fumigatus</li>
                    <li><i>Candida spp.</li>
                    </ol>`,
      },
      {
        examen: "Mezcla de Inhalantes",
        
        alergenos: `<ol>
                    <li>Bermuda</li>
                    <li>Festuca elatior</li>
                    <li>Ballico</li>
                    <li>Pasto Tymothy</li>
                    <li>Poa Pratensis (Espiguilla, Pasto Azul)</li>
                    <li>Chenopodium</li>
                    </ol>`,
      },
      {
        examen: "Mezcla de Mariscos",
        
        alergenos: `<ol>
                    <li>Chorito</li>
                    <li>Centolla</li>
                    <li>Ostra</li>
                    </ol>`,
                           
        panel: `<ul>
                   <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'panel 22'); var inputValue = localStorage.getItem('inputValue'); 
                   if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel 22 Alérgenos
                   </li>
                   <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'chile, 35'); var inputValue = localStorage.getItem('inputValue'); 
                   if (inputValue) { input.value = inputValue; handleSearch(); 
                   localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                   </li>
                  <ul>`,
                    
      },
      {
        examen: "Mezcla de Pastos",
        
        alergenos: `<ol>
                    <li>Graminea</li>
                    <li>Ballico</li>
                    <li>Chepica</li>
                    </ol>`,
      },
      {
        examen: "Mezcla de Pescados",
        
        alergenos: `<ol>
                    <li>Camarón</li>
                    <li>Atun</li>
                    <li>Salmon</li>
                    <li>Centolla</li>
                    </ol>`,
      },
      {
        examen: "Mezcla de Plumas",
       
        alergenos: `<ol>
                    <li>Pluma de Ganso</li>
                    <li>Pluma de Gallina</li>
                    <li>Pluma de Pato</li>
                    </ol>`,
      },
      {
        examen: "Mezcla de Polen",
        
        alergenos: `<ol>
                    <li>Festuca elatior</li>
                    <li>Ballico</li>
                    <li>Pasto Tymothy</li>
                    <li>Poa Pratensis (Espiguilla, Pasto Azul)</li>
                    </ol>`,
      },
      {
        examen: "Mezcla de Vegetales",
       
        alergenos: `<ol>
                    <li>Espinaca</li>
                    <li>Lechuga</li>
                    <li>Poroto verde</li>
                    <li>Apio</li>
                    <li>Zanahoria</li>
                    </ol>`,
      },
      {
        examen: "Mezcla de Frutos Secos",
        
        alergenos: `<ol>
                    <li>Avellana</li>
                    <li>Coco</li>
                    <li>Almendra</li>
                    <li>Maní</li>
                    </ol>`,
      },
      {
        examen: "Abedul",
        individual: "Alérgeno Invidual",
        panel:  `<ul><li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Mezcla de Árboles'); var inputValue = localStorage.getItem('inputValue'); 
        if (inputValue) { input.value = inputValue; handleSearch(); 
        localStorage.removeItem('inputValue'); };">Mezcla de Árboles</li><ul>`
   },
      {
        examen: "Acacia",
        individual: "Alérgeno Invidual",
        panel: `<ul><li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Panel Chile, 35 Alérgenos'); var inputValue = localStorage.getItem('inputValue'); 
                        if (inputValue) { input.value = inputValue; handleSearch(); 
                        localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos</li><ul>`
      },
           
      {
        examen: "Acaros",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Acaro Siro",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Acedera",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Panel Chile, 35 Alérgenos'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Panel 22 Alérgenos'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel 22 Alérgenos
                    </li>
                <ul>`
      },
      {
        examen: "Acelga",
        individual: "Alérgeno Invidual",
        
      },
      {
        examen: "Ajo",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Alamo",
        individual: "Alérgeno Invidual",
        panel: `<ul><li class='panelpoint' onclick="localStorage.setItem('inputValue', 'mezcla de arboles'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Mezcla de Árboles
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Panel Chile, 35 Alérgenos'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Panel 22 Alérgenos'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel 22 Alérgenos
                    </li>
                <ul>`
      },
      {
        examen: "Alfalfa",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Almeja",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Almendra",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'frutos secos'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Mezcla de Frutos Secos
                    </li>
                </ul>`,
      },
      {
        examen: "Alternaria tenius",
        individual: "Alérgeno Invidual",
        panel: `<ul><li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Panel Chile, 35 Alérgenos'); var inputValue = localStorage.getItem('inputValue'); 
                        if (inputValue) { input.value = inputValue; handleSearch(); 
                        localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos</li><ul>`,
      },
      {
        examen: "Ambrosia común",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Amoxicilina",
        keywords: ['antibioticos'],
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Ampicilina",
        keywords: ['antibioticos'],
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Apio",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Acer Negundo Arce",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Arroz",
        individual: "Alérgeno Invidual",
        panel: `<ul>
        <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Panel Chile, 35 Alérgenos'); var inputValue = localStorage.getItem('inputValue'); 
        if (inputValue) { input.value = inputValue; handleSearch(); 
        localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
        </li>
        </ul>`
      },
      {
        examen: "Arvejas",
        individual: "Alérgeno Invidual",
        
      },
      {
        examen: "Aspergillus spp.",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Panel Chile, 35 Alérgenos'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Panel 22 Alérgenos'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel 22 Alérgenos
                    </li>
                <ul>`,
      },
      {
        examen: "Aspergillus flavus",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Aspergillus fumigatus",
        individual: "Alérgeno Invidual",
        panel: "Mezcla de Hongos",
      },
      {
        examen: "Aspirina",
        keywords: ['medicamentos'],
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Atún",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Panel Chile, 35 Alérgenos'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Panel 22 Alérgenos'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel 22 Alérgenos
                    </li>
                <ul>`,
      },
      {
        examen: "Avellana",
        individual: "Alérgeno Invidual",
        panel: "Mezcla de Alimentos Calidos",
      },
      {
        examen: "Avena",
        individual: "Alérgeno Invidual",
        panel: "Mezcla de Cereales",
      },
      {
        examen: "Ballico (Lolium perenne)",
        individual: "Alérgeno Invidual",
        panel:  `<ul><li class='panelpoint' onclick="localStorage.setItem('inputValue', 'mezcla de polen'); var inputValue = localStorage.getItem('inputValue'); 
                  if (inputValue) { input.value = inputValue; handleSearch(); 
                  localStorage.removeItem('inputValue'); };">Mezcla de Polen
                  </li>
                  <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'mezcla de pastos'); var inputValue = localStorage.getItem('inputValue'); 
                  if (inputValue) { input.value = inputValue; handleSearch(); 
                  localStorage.removeItem('inputValue'); };">Mezcla de Pastos
                  </li>
                  <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'inhalantes'); var inputValue = localStorage.getItem('inputValue'); 
                  if (inputValue) { input.value = inputValue; handleSearch(); 
                  localStorage.removeItem('inputValue'); };">Mezcla de Inhalantes
                  </li>
              <ul>`
      },
      {
        examen: "Bermuda (Pasto)",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Panel Chile, 35 Alérgenos'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'inhalantes'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Mezcla de Inhalantes
                    </li>
                <ul>`,
      },
      {
        examen: "Alpha-Lactoalbúmina",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Brócoli",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Beta-Lactoglobulina (Bovina)",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Cacao",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Café",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Cafeína",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Camarón",
        individual: "Alérgeno Invidual",
        panel: "Mezcla de Pescados",
      },
      {
        examen: "Candida albicans",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Canuela (Festuca elatior)",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Polen'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Mezcla de Polen
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'inhalantes'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Mezcla de Inhalantes
                    </li>
                <ul>`,
      },
      {
        examen: "Caseína",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'panel 22'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel 22 Alérgenos
                    </li>
                <ul>`,
      },
      {
        examen: "Caspa de Caballo",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'caspa animal'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Mezcla de Caspa Animal
                    </li>
                <ul>`,
      },
      {
        examen: "Caspa de Gato",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'caspa animal'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Mezcla de Caspa Animal
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'panel 22'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel 22 Alérgenos
                    </li>
                     <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Panel Chile, 35 Alérgenos'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                    </li>
                <ul>`,
      },
      {
        examen: "Caspa de Perro",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'caspa animal'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Mezcla de Caspa Animal
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'panel 22'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel 22 Alérgenos
                    </li>
                     <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Panel Chile, 35 Alérgenos'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                    </li>
                <ul>`,
      },
      {
        examen: "Caspa de Vaca",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'caspa animal'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Mezcla de Caspa Animal
                    </li>
                <ul>`,
      },
      {
        examen: "Carne de Cerdo",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'mezcla de carnes'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Mezcla de Carnes
                    </li>
                <ul>`,
      },
      {
        examen: "Carne de Ganso",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Carne de Pato",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Carne de Pavo",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Carne de Pollo",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Panel Chile, 35 Alérgenos'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                    </li>
                <ul>`,
      },
      {
        examen: "Carne de Ternera",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Carne de Vacuno",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                  <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'mezcla de carnes'); var inputValue = localStorage.getItem('inputValue'); 
                  if (inputValue) { input.value = inputValue; handleSearch(); 
                  localStorage.removeItem('inputValue'); };">Mezcla de Carnes
                  </li>
              <ul>`,
          },
          {
            examen: "Cebada",
            individual: "Alérgeno Invidual",
          },
          {
            examen: "Cebolla",
            individual: "Alérgeno Invidual",
          },
          {
            examen: "Cedro Japonés",
            individual: "Alérgeno Invidual",
          },
          {
            examen: "Cefalosporina",
            keywords: ['antibioticos'],
            individual: "Alérgeno Invidual",
          },
          {
            examen: "Centeno Cultivado",
            individual: "Alérgeno Invidual",
          },
      {
        examen: "Centeno Salvaje",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Centolla (Lobster)",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'pescados'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Mezcla de Pescados
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'mariscos'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Mezcla de Mariscos
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'chile, 35'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Panel 22 Alérgenos'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel 22 Alérgenos
                    </li>
                <ul>`,
      },
      {
        examen: "Chepica Alemana",
        keywords: ['pasto'],
        individual: "Alérgeno Invidual",
        panel: ` <ul><li class='panelpoint' onclick="localStorage.setItem('inputValue', 'mezcla de pasto'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Mezcla de Pastos
                    </li>
                <ul>`,
      },
      {
        examen: "Chocolate",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'panel 22'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel 22 Alérgenos
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'chile, 35'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                    </li>
                <ul>`,
      },
      {
        examen: "Chorito (Mytilus chilensis)",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'mariscos'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Mezcla de Mariscos
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'panel 22'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel 22 Alérgenos
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'chile, 35'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                    </li>
                <ul>`,
      },
      {
        examen: "Citricos",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Cladosporium herbarum",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'mezcla de hongos'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Mezcla de Hongos
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'panel 22'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel 22 Alérgenos
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'chile, 35'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                    </li>
                <ul>`,
      },
      {
        examen: "Clara de Huevo",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'mezcla de alimentos'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Mezcla de Alimentos
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'panel 22'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel 22 Alérgenos
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'chile, 35'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                    </li>
                <ul>`,
      },
      {
        examen: "Coco",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'alimentos calidos'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Mezcla de Alimentos Calidos
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Frutos Secos'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Mezcla de Frutos Secos
                    </li>
                <ul>`,
      },
      {
        examen: "Cordero",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Mezcla de Carnes'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Mezcla de Carnes
                    </li>
                 <ul>`,
      },
      {
        examen: "Carne de Res Cocida",
        individual: "Alérgeno Invidual",
       
      },
      {
        examen: "Cucaracha",
        individual: "Alérgeno Invidual",
        },
      {
          examen: "Dermatofagoides",
          individual: "Alérgeno Invidual",
          panel: `<ul>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'panel 22'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel 22 Alérgenos
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'chile, 35'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                    </li>
                <ul>`,
      },
      {
        examen: "Dermatophagoides farinae",
        keywords: ['dermatofagoides farinae'],
        individual: "Alérgeno Invidual",
        panel: `<ul>
                  <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'panel 22'); var inputValue = localStorage.getItem('inputValue'); 
                  if (inputValue) { input.value = inputValue; handleSearch(); 
                  localStorage.removeItem('inputValue'); };">Panel 22 Alérgenos
                  </li>
                  <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'chile, 35'); var inputValue = localStorage.getItem('inputValue'); 
                  if (inputValue) { input.value = inputValue; handleSearch(); 
                  localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                  </li>
              <ul>`,
    },
    {
      examen: "Dermatofagoides pteronyssinus",
      keywords: ['dermatofagoides pteronyssinus', 'dermatofagoides pteronissinus'],
      individual: "Alérgeno Invidual",
      panel: `<ul>
                <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'panel 22'); var inputValue = localStorage.getItem('inputValue'); 
                if (inputValue) { input.value = inputValue; handleSearch(); 
                localStorage.removeItem('inputValue'); };">Panel 22 Alérgenos
                </li>
                <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'chile, 35'); var inputValue = localStorage.getItem('inputValue'); 
                if (inputValue) { input.value = inputValue; handleSearch(); 
                localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                </li>
            <ul>`,
      },
      {
        examen: "Diclofenaco",
        keywords: ['medicamentos'],
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Diente de León",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Durazno",
        keywords: ['melocoton'],
        individual: "Alérgeno Invidual",
        panel: `<ul>
        <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Mezcla de frutas'); var inputValue = localStorage.getItem('inputValue'); 
        if (inputValue) { input.value = inputValue; handleSearch(); 
        localStorage.removeItem('inputValue'); };">Mezcla de Frutas
        </li></ul>`
      },
      {
        examen: "Encina (Roble)",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Epitelio de Caballo",
        individual: "Alérgeno Invidual",
        panel: `<ul>
        <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Mezcla de Epitelio Animal'); var inputValue = localStorage.getItem('inputValue'); 
        if (inputValue) { input.value = inputValue; handleSearch(); 
        localStorage.removeItem('inputValue'); };">Mezcla de Epitelio Animal
        </li></ul>`
      },
      {
        examen: "Epitelio de Gato",
        individual: "Alérgeno Invidual",
        panel: `<ul>
        <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Mezcla de Epitelio Animal'); var inputValue = localStorage.getItem('inputValue'); 
        if (inputValue) { input.value = inputValue; handleSearch(); 
        localStorage.removeItem('inputValue'); };">Mezcla de Epitelio Animal
        </li></ul>`
      },
      {
        examen: "Epitelio de Perro",
        individual: "Alérgeno Invidual",
        panel: `<ul>
        <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Mezcla de Epitelio Animal'); var inputValue = localStorage.getItem('inputValue'); 
        if (inputValue) { input.value = inputValue; handleSearch(); 
        localStorage.removeItem('inputValue'); };">Mezcla de Epitelio Animal
        </li></ul>`
      },
      {
        examen: "Epitelio de Vaca",
        individual: "Alérgeno Invidual",
        panel: `<ul>
        <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Mezcla de Epitelio Animal'); var inputValue = localStorage.getItem('inputValue'); 
        if (inputValue) { input.value = inputValue; handleSearch(); 
        localStorage.removeItem('inputValue'); };">Mezcla de Epitelio Animal
        </li></ul>`
      },
      {
        examen: "Espinaca",
        individual: "Alérgeno Invidual",
        panel: `<ul>
        <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Mezcla de Vegetales'); var inputValue = localStorage.getItem('inputValue'); 
        if (inputValue) { input.value = inputValue; handleSearch(); 
        localStorage.removeItem('inputValue'); };">Mezcla de Vegetales
        </li></ul>`
      },
      {
        examen: "Eucaliptus",
        individual: "Alérgeno Invidual",
        
      },
      {
        examen: "Feca de Paloma",
        keywords: ['heces de paloma', 'deposicion de paloma'],
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Formaldehido - HSA",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Frambuesa",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Fresno",
        individual: "Alérgeno Invidual",
        panel: `<ul>
        <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Panel Chile, 35 Alérgenos'); var inputValue = localStorage.getItem('inputValue'); 
        if (inputValue) { input.value = inputValue; handleSearch(); 
        localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
        </li></ul>`
      },
      {
        examen: "Frutillas",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Gamba (Camarón)",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Garbanzo",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Gentamicina",
        keywords: ['antibioticos'],
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Gluten / Gliadin",
        individual: "Alérgeno Invidual",
        panel: `<ul>
        <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Mezcla de cereales'); var inputValue = localStorage.getItem('inputValue'); 
        if (inputValue) { input.value = inputValue; handleSearch(); 
        localStorage.removeItem('inputValue'); };">Mezcla de Cereales
        </li></ul>`
      },
      {
        examen: "Grama de olor (Gramineas-Cynodon)",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Graminea",
        individual: "Alérgeno Invidual",
        panel: `<ul>
        <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Mezcla de Pastos'); var inputValue = localStorage.getItem('inputValue'); 
        if (inputValue) { input.value = inputValue; handleSearch(); 
        localStorage.removeItem('inputValue'); };">Mezcla de Pastos
        </li></ul>`
      },
      {
        examen: "Harina de Trigo",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                  <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Mezcla de cereales'); var inputValue = localStorage.getItem('inputValue'); 
                  if (inputValue) { input.value = inputValue; handleSearch(); 
                  localStorage.removeItem('inputValue'); };">Mezcla de Cereales
                  </li>
                  <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Mezcla de alimentos'); var inputValue = localStorage.getItem('inputValue'); 
                  if (inputValue) { input.value = inputValue; handleSearch(); 
                  localStorage.removeItem('inputValue'); };">Mezcla de Alimentos
                  </li>
              </ul>`
      },
      {
        examen: "HDI Isocianato - HSA",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Hierba Timotea (Phleum pratense)",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Hormiga Roja",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Huevo",
        individual: "Alérgeno Invidual",
        panel: `<ul>
        <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Panel Chile, 35 Alérgenos'); var inputValue = localStorage.getItem('inputValue'); 
        if (inputValue) { input.value = inputValue; handleSearch(); 
        localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
        </li><ul>`
      },
      {
        examen: "Ibuprofeno",
        keywords: ['medicamentos'],
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Jaiba",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Kiwi",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Lana",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Langosta",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Látex",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Leche de Soya",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Leche de Vaca",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Mezcla de Alimentos'); var inputValue = localStorage.getItem('inputValue'); 
                if (inputValue) { input.value = inputValue; handleSearch(); 
                localStorage.removeItem('inputValue'); };">Mezcla de Alimentos
                </li><ul>`
      },
      {
        examen: "Lechuga",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Mezcla de Vegetales'); var inputValue = localStorage.getItem('inputValue'); 
                if (inputValue) { input.value = inputValue; handleSearch(); 
                localStorage.removeItem('inputValue'); };">Mezcla de Vegetales
                </li><ul>`
      },
      {
        examen: "Lentejas (Legumbres)",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Levadura",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Lidocaína",
        keywords: ['farmaco'],
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Limón",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Llantén (Plantago inglés)",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Maíz",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'panel 22'); var inputValue = localStorage.getItem('inputValue'); 
                if (inputValue) { input.value = inputValue; handleSearch(); 
                localStorage.removeItem('inputValue'); };">Panel 22 Alérgenos
                </li>
                <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'chile, 35'); var inputValue = localStorage.getItem('inputValue'); 
                if (inputValue) { input.value = inputValue; handleSearch(); 
                localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                </li>
            <ul>`,
      },
      {
        examen: "Malezas",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Mango",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Maní",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'frutos secos'); var inputValue = localStorage.getItem('inputValue'); 
                if (inputValue) { input.value = inputValue; handleSearch(); 
                localStorage.removeItem('inputValue'); };">Mezcla de Frutos Secos
                </li>
                <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'chile, 35'); var inputValue = localStorage.getItem('inputValue'); 
                if (inputValue) { input.value = inputValue; handleSearch(); 
                localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                </li>
            <ul>`,
      },
      {
        examen: "Manzana",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'mezcla de frutas'); var inputValue = localStorage.getItem('inputValue'); 
                if (inputValue) { input.value = inputValue; handleSearch(); 
                localStorage.removeItem('inputValue'); };">Mezcla de Frutas
                </li>
                <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'chile, 35'); var inputValue = localStorage.getItem('inputValue'); 
                if (inputValue) { input.value = inputValue; handleSearch(); 
                localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                </li>
            <ul>`,
      },
      {
        examen: "MDI Isocianato - HSA",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Melon",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Merluza",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Metamizol",
        keywords: ['Metamizole', 'medicamentos'],
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Pimiento Morrón",
        keywords: ['Pimenton'],
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Mostaza",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Naproxeno",
        keywords: ['medicamento'],
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Naranja",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'mezcla de frutas'); var inputValue = localStorage.getItem('inputValue'); 
                if (inputValue) { input.value = inputValue; handleSearch(); 
                localStorage.removeItem('inputValue'); };">Mezcla de Frutas
                </li>
                <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'chile, 35'); var inputValue = localStorage.getItem('inputValue'); 
                if (inputValue) { input.value = inputValue; handleSearch(); 
                localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                </li>
            <ul>`,
      },
      {
        examen: "Nogal",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Nuez",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Olivo",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Ostión",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Ostra",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'mariscos'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Mezcla de Mariscos
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'chile, 35'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Panel 22 Alérgenos'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel 22 Alérgenos
                    </li>
                <ul>`,
      },
      {
        examen: "Ovoalbúmina",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Ovomucoide",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Palta",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                  <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'chile, 35'); var inputValue = localStorage.getItem('inputValue'); 
                  if (inputValue) { input.value = inputValue; handleSearch(); 
                  localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                  </li><ul>`,
      },
      {
        examen: "Papa (Solanum tuberosum)",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Pimiento Paprika (Ají de Color)",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Paracetamol",
        keywords: ['medicamento'],
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Parietaria officinalis",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Pasto Tymothy",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                  <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'mezcla de inhalantes'); var inputValue = localStorage.getItem('inputValue'); 
                  if (inputValue) { input.value = inputValue; handleSearch(); 
                  localStorage.removeItem('inputValue'); };">Mezcla de Inhalantes
                  </li>
                  <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'mezcla de polen'); var inputValue = localStorage.getItem('inputValue'); 
                  if (inputValue) { input.value = inputValue; handleSearch(); 
                  localStorage.removeItem('inputValue'); };">Mezcla de Polen
                  </li>
                <ul>`,
      },
      {
        examen: "Penicilina G-HSA",
        keywords: ['antibioticos'],
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Penicilina V-HSA",
        keywords: ['antibioticos'],
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Penicilina",
        keywords: ['antibioticos'],
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Penicillium notatum",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                  <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'mezcla de hongos'); var inputValue = localStorage.getItem('inputValue'); 
                  if (inputValue) { input.value = inputValue; handleSearch(); 
                  localStorage.removeItem('inputValue'); };">Mezcla de Hongos
                  </li><ul>`,
      },
      {
        examen: "Pera",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Picada de Mosquito",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Piña",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Plantago",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Plátano",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'mezcla de frutas'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Mezcla de Frutas
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'chile, 35'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Panel 22 Alérgenos'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel 22 Alérgenos
                    </li>
                <ul>`,
      },
      {
        examen: "Plátano Oriental",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'mezcla de arboles'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Mezcla de Árboles
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'chile, 35'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Panel 22 Alérgenos'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel 22 Alérgenos
                    </li>
                <ul>`,
      },
      {
        examen: "Pluma de Ganso",
        individual: "Alérgeno Invidual",
        panel: `<ul>
        <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'mezcla de plumas'); var inputValue = localStorage.getItem('inputValue'); 
        if (inputValue) { input.value = inputValue; handleSearch(); 
        localStorage.removeItem('inputValue'); };">Mezcla de Plumas
        </li><ul>`,
      },
      {
        examen: "Poa pratensis (Espiguilla, Pasto Azul)",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                  <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'mezcla de inhalantes'); var inputValue = localStorage.getItem('inputValue'); 
                  if (inputValue) { input.value = inputValue; handleSearch(); 
                  localStorage.removeItem('inputValue'); };">Mezcla de Inhalantes
                  </li>
                  <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'mezcla de polen'); var inputValue = localStorage.getItem('inputValue'); 
                  if (inputValue) { input.value = inputValue; handleSearch(); 
                  localStorage.removeItem('inputValue'); };">Mezcla de Polen
                  </li>
                <ul>`,
      },
      {
        examen: "Polvo de Habitación",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Poroto Burro",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Poroto Verde",
        individual: "Alérgeno Invidual",
        panel: `<ul>
        <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'mezcla de vegetales'); var inputValue = localStorage.getItem('inputValue'); 
        if (inputValue) { input.value = inputValue; handleSearch(); 
        localStorage.removeItem('inputValue'); };">Mezcla de Vegetales
        </li><ul>`,
      },
      {
        examen: "Proteína Leche de Vaca",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Quéso Cheddar",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Rabano",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Rye Grass-Centeno Salvaje",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Salmón",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                  <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'mezcla de pescados'); var inputValue = localStorage.getItem('inputValue'); 
                  if (inputValue) { input.value = inputValue; handleSearch(); 
                  localStorage.removeItem('inputValue'); };">Mezcla de Pescados
                  </li>
                  <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'mezcla de polen'); var inputValue = localStorage.getItem('inputValue'); 
                  if (inputValue) { input.value = inputValue; handleSearch(); 
                  localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                  </li>
                <ul>`,
      },
      {
        examen: "Sandía",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Sauce",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Soya",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                  <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'mezcla de alimentos'); var inputValue = localStorage.getItem('inputValue'); 
                  if (inputValue) { input.value = inputValue; handleSearch(); 
                  localStorage.removeItem('inputValue'); };">Mezcla de Alimentos
                  </li>
                  <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'mezcla de polen'); var inputValue = localStorage.getItem('inputValue'); 
                  if (inputValue) { input.value = inputValue; handleSearch(); 
                  localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                  </li>
                <ul>`,
      },
      {
        examen: "Stemphylium botryosum",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Cenizas de Tabaco",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Tabano",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Tamarugo",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Tartrazina-HSA",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "TDI Isocianato - HSA",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Tomate (Lycopersicon esculentum)",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Tricophyton mentagrophytes",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Trigo",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'mezcla de alimentos'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Mezcla de Alimentos
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'panel 22'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel 22 Alérgenos
                    </li>
                    <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'chile, 35'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                    </li>
                <ul>`,
      },
      {
        examen: "Grano Molido de Trigo",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Uva",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Veneno de Abeja",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Veneno de Avispa",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Yema de Huevo",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'chile, 35'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Panel Chile, 35 Alérgenos
                    </li>
                <ul>`,
      },
      {
        examen: "Zanahoria",
        individual: "Alérgeno Invidual",
        panel: `<ul>
                <li class='panelpoint' onclick="localStorage.setItem('inputValue', 'Mezcla de Vegetales'); var inputValue = localStorage.getItem('inputValue'); 
                    if (inputValue) { input.value = inputValue; handleSearch(); 
                    localStorage.removeItem('inputValue'); };">Mezcla de Vegetales
                    </li>
                <ul>`,
      },
      {
        examen: "Zapallo",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Panel 22 Alérgenos",
        micro: `<ul>
                    <li>Dermatophagoides farinae</li>
                    <li>Dermatophagoides pteronyssinus</li>
                    <li>Cladosporium</li>
                    <li>Aspergillus</li>
                    <li>Mezcla de Hongos</li>
                  </ul>`,
        arbol: `  <ul>
                    <li>Plátano oriental</li>
                    <li>Alamo</li>
                  </ul>`,
        animal: ` <ul>
                    <li>Leche</li>
                    <li>Clara de Huevo</li>
                    <li>Mezcla de Mariscos</li>
                    <li>Atún</li>
                    <li>Caspa, Pelo de Gato</li>
                    <li>Caspa, Pelo de Perro</li>
                    <li>Mezcla de Plumas de Ave</li>
                  </ul>
                          `,
        veg:      `<ul>
                    <li>Mezcla de Pastos</li>
                    <li>Mezcla de Polen</li>
                    <li>Chocolate</li>
                    <li>Plátano</li>
                    <li>Tomate</li>
                    <li>Trigo</li>
                    <li>Maíz</li>
                    <li>Acedera</li>
                  </ul>
                `,
       },
      {
        
        examen: "Panel Chile, 35 Alérgenos",
        arbol: `  <ul>
                    <li>Acacia</li>
                    <li>Fresno</li>
                    <li>Plátano oriental</li>
                    <li>Alamo</li>  
                  </ul>`,
        animal: ` <ul>
                    <li>Leche</li>
                    <li>Clara de Huevo</li>
                    <li>Yema de Huevo</li>
                    <li>Salmón</li>
                    <li>Pollo</li>
                    <li>Mezcla de Mariscos</li>
                    <li>Atún</li>
                    <li>Caseína</li>
                    <li>Caspa, Pelo de Gato</li>
                    <li>Caspa, Pelo de Perro</li>
                    <li>Mezcla de Plumas de Ave</li>
                    <li>Ballica</li>
                  </ul>
                `,
        veg: `<ul>
                    <li>Bermuda</li>
                    <li>Festuca</li>
                    <li>Llantén</li>
                    <li>Manzana</li>
                    <li>Naranja</li>
                    <li>Palta</li>
                    <li>Arroz</li>
                    <li>Soya</li>
                    <li>Maní</li>
                    <li>Chocolate</li>
                    <li>Plátano</li>
                    <li>Tomate</li>
                    <li>Trigo</li>
                    <li>Maíz</li>
                    <li>Acedera</li>
                </ul>
                `,
        micro: `<ul>
                    <li>Aspergillus</li>
                    <li>Cladosporium</li>
                    <li>Dermatophagoides farinae</li>
                    <li>Dermatophagoides pteronyssinus</li>
                    <li>Alternaria</li>
                    </ul>
                    `,
        codigo: "0305029-1"
      },
]
