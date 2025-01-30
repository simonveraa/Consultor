const datos = [

      
      {
        examen: "Mezcla de Alimentos",
        keywords: ['CLARA DE HUEVO',  'harina de trigo', 'leche de vaca',  'SOYA', 'MANI'],
        alergenos: `<ol>
                    <li>Clara de huevo</li>
                    <li>Leche de vaca</li>
                    <li>Harina de trigo</li>
                    <li>Mani</li>
                    <li>Soya</li>
                    </ol>`,
      },
      {
        examen: "Mezcla de Alimentos Calidos",
        keywords: ['Avellana',  'Coco', 'Almendra', 'Mani'],
        alergenos: `<ol>
                    <li>Avellana</li>
                    <li>Coco</li>
                    <li>Almendra</li>
                    <li>Maní</li>
                    </ol>`,
      },
      {
        examen: "Mezcla de Árboles",
        keywords: ['Arce',  'Abedul', 'Plátano oriental', 'alamo'],
        alergenos: `<ol>
                    <li>Arce</li>
                    <li>Abedul</li>
                    <li>Plátano oriental</li>
                    <li>Alamo</li>
                    </ol>`,
      },
      {
        examen: "Mezcla de Carnes",
        keywords: ['Cerdo',  'Vacuno', 'Cordero', ],
        alergenos: `<ol>
                    <li>Cerdo</li>
                    <li>Vacuno</li>
                    <li>Cordero</li>
                    </ol>`,
      },
      {
        examen: "Mezcla de Caspa Animal",
        keywords: ['gato',  'perro', 'caballo', 'vaca'],
        alergenos: `<ol>
                    <li>Caspa de Gato</li>
                    <li>Caspa de Perro</li>
                    <li>Caspa de Caballo</li>
                    <li>Caspa de Vaca</li>
                    </ol>`,
      },
      {
        examen: "Mezcla de Cereales",
        keywords: ['Harina de Trigo',  'Avena', 'Gluten',],
        alergenos: `<ol>
                    <li>Harina de Trigo</li>
                    <li>Avena</li>
                    <li>Gluten</li>
                   </ol>`,
      },
      {
        examen: "Mezcla de Epitelio Animal",
        keywords: ['gato',  'perro', 'caballo', 'vaca', 'cobayo'],
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
        keywords: ['Platano',  'Naranja', 'Manzana', 'Durazno',],
        alergenos: `<ol>
                    <li>Platano</li>
                    <li>Naranja</li>
                    <li>Manzana</li>
                    <li>Durazno</li>
                    </ol>`,
      },
      {
        examen: "Mezcla de Hongos",
        keywords: ['Penicillium',  'Cladosporium', 'Aspergillus', 'Candida',],
        alergenos: `<ol>
                    <li><i>Penicillium notatum</li>
                    <li><i>Cladosporium herbarum</li>
                    <li><i>Aspergillus fumigatus</li>
                    <li><i>Candida spp.</li>
                    </ol>`,
      },
      {
        examen: "Mezcla de Inhalantes",
        keywords: ['Bermuda',  'Festuca Elatior', 'Ballico', 'Pasto Tymothy', 'Poa Pratensis', 'Espiguilla', 'Pasto Azul', 'Chenopodium'],
        alergenos: `<ol>
                    <li>Bermuda</li>
                    <li>Festuca Elatior</li>
                    <li>Ballico</li>
                    <li>Pasto Tymothy</li>
                    <li>Poa Pratensis (Espiguilla, Pasto Azul)</li>
                    <li>Chenopodium</li>
                    </ol>`,
      },
      {
        examen: "Mezcla de Mariscos",
        keywords: ['Chorito',  'Centolla', 'Ostra',],
        alergenos: `<ol>
                    <li>Chorito</li>
                    <li>Centolla</li>
                    <li>Ostra</li>
                    </ol>`,
      },
      {
        examen: "Mezcla de Pastos",
        keywords: ['Graminea',  'Ballico', 'Chepica',],
        alergenos: `<ol>
                    <li>Graminea</li>
                    <li>Ballico</li>
                    <li>Chepica</li>
                    </ol>`,
      },
      {
        examen: "Mezcla de Pescado",
        keywords: ['Camaron',  'Atun', 'Salmon', 'Centolla'],
        alergenos: `<ol>
                    <li>Camaron</li>
                    <li>Atun</li>
                    <li>Salmon</li>
                    <li>Centolla</li>
                    </ol>`,
      },
      {
        examen: "Mezcla de Plumas",
        keywords: ['Ganso',  'Gallina', 'Pato', ],
        alergenos: `<ol>
                    <li>Pluma de Ganso</li>
                    <li>Pluma de Gallina</li>
                    <li>Pluma de Pato</li>
                    </ol>`,
      },
      {
        examen: "Mezcla de Polen",
        keywords: ['Festuca Elatior', 'Ballico', 'Pasto Tymothy', 'Poa Pratensis', 'Espiguilla', 'Pasto Azul', ],
        alergenos: `<ol>
                    <li>Festuca Elatior</li>
                    <li>Ballico</li>
                    <li>Pasto Tymothy</li>
                    <li>Poa Pratensis (Espiguilla, Pasto Azul)</li>
                    </ol>`,
      },
      {
        examen: "Mezcla de Vegetales",
        keywords: ['Espinaca',  'Lechuga', 'Poroto verde', 'Apio', 'Zanahoria'],
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
        keywords: ['Avellana',  'Coco', 'Almendra', 'Mani'],
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
        panel: "Mezcla de Árboles",
      },
      {
        examen: "Acacia",
        individual: "Alérgeno Invidual",
        panel: "Panel Chile 35",
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
        panel: "<ul><li>Panel Chile 35</li><li>Panel 22 Alérgenos</li></ul>",
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
        panel: "<ul><li>Panel Chile 35</li><li>Panel 22 Alérgenos</li><li>Mezcla de Árboles</ul>",
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
        panel: "<ul><li>Mezcla de Frutos Secos</li></ul>",
      },
      {
        examen: "Alternaria tenius",
        individual: "Alérgeno Invidual",
        panel: "<ul><li>Panel Chile 35</li></ul>",
      },
      {
        examen: "Ambrosia común",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Amoxicilina",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Ampicilina",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Apio",
        individual: "Alérgeno Invidual",
      },
      {
        examen: "Panel 22 Alérgenos",
        keywords: ['Platano oriental', 'Chocolate', 'alamo', 'clara de huevo', 'acedera', 'atun', 'aspergillus', 'mariscos', 'cladosporium', 'plumas', 
          'maiz', 'dermatoph. farinae', 'darmatoph. pterony', 'pastos', 'trigo', 'polen', 'leche', 'hongos', 'caspa de pelo de gato', 
          'CASPA, PELO DE PERRO', 'TOMATE'
         ],
        tubo: "Columna 1",
        alergenos: `<ol>
                    <li>Platano oriental</li>
                    <li>Chocolate</li>
                    <li>Alamo</li>
                    <li>Clara de Huevo</li>
                    <li>Acedera</li>
                    <li>Atún</li>
                    <li>Trigo</li>
                    <li>Maíz</li>
                    <li>Dermatoph. farinae</li>
                    <li>Dermatoph. pterony</li>
                    <li>Cladosporium</li>
                    <li>Aspergillus</li>
                    <li>Mezcla de Mariscos</li>
                    <li>Mezcla de Plumas de Ave</li>
                    <li>Mezcla de Hongos</li>
                    <li>Mezcla de pastos</li>
                    <li>Mezcla de Polen</li>
                    <li>Leche</li>
                    <li>Caspa, Pelo de Gato</li>
                    <li>CASPA, Pelo de Perro</li>
                    <li>Plátano</li>
                    <li>Tomate</li>
                  </ol>`,
        codigo: "Columna 3",
        codigoBK: "Columna 4",
        nota: "Columna 5",
      },
      {
        examen: "IgE Especificas c/u",
        tubo: "Columna 1",
        alergenos: "Columna 2",
        codigoBK: "Columna 4",
        nota: "Columna 5"
      },
      {
        
        examen: "Panel Chile, 35 Alérgenos",
        keywords: ['ACACIA', 'FRESNO', 'Platano oriental', 'Chocolate', 'ALAMO', 'CLARA DE HUEVO', 'YEMA DE HUEVO', 'ACEDERA', 'ATUN', 'ASPERGILLUS', 'MEZCLA DE MARISCOS', 'CLADOSPORIUM', 
          'MEZCLA PLUMAS DE AVE', 'MAIZ', 'DERMATOPH. FARINAE', 'DERMATOPH. PTERONY', 'TRIGO', 'LECHE', 'CASPA, PELO DE GATO', 'CASPA, PELO DE PERRO', 'TOMATE', 'BALLICA', 'BERMUDA',
          'FESTUCA', 'LLANTEN', 'ALTERNARIA', 'MANZANA', 'NARANJA', 'PALTA', 'ARROZ', 'SOYA', 'MANI', 'CASEINA', 'SALMON', 'POLLO'],
        alergenos: `<ol>
                    <li>Acacia</li>
                    <li>Fresno</li>
                    <li>Platano oriental</li>
                    <li>Chocolate</li>
                    <li>Alamo</li>
                    <li>Clara de Huevo</li>
                    <li>Yema de Huevo</li>
                    <li>Acedera</li>
                    <li>Atún</li>
                    <li>Aspergillus</li>
                    <li>Mezcla de Mariscos</li>
                    <li>Cladosporium</li>
                    <li>Mezcla de Plumas de Ave</li>
                    <li>Maíz</li>
                    <li>Dermatoph. farinae</li>
                    <li>Dermatoph. pterony</li>
                    <li>Trigo</li>
                    <li>Leche</li>
                    <li>Caspa, Pelo de Gato</li>
                    <li>Caspa, Pelo de Perro</li>
                    <li>Plátano</li>
                    <li>Tomate</li>
                    <li>Ballica</li>
                    <li>Bermuda</li>
                    <li>Festuca</li>
                    <li>Llantén</li>
                    <li>Alternaria</li>
                    <li>Manzana</li>
                    <li>Naranja</li>
                    <li>Palta</li>
                    <li>Arroz</li>
                    <li>Soya</li>
                    <li>Maní</li>
                    <li>Caseína</li>
                    <li>Salmón</li>
                    <li>Pollo</li>
                  </ol>`,
        codigo: "PANEL35"
      },
]
