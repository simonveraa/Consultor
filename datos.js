const datos = [
    {
        examen: "Ferritina",
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0301026",
        nota: "Resultado en la tarde",
      },
      {
        examen: "Recuento de Leucocitos (Hemograma)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
        {
        examen: "Proteina C Reactiva (PCR)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
        {
        examen: "Inmunoglobulina A Total (IgA)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
    {
        examen: "Inmunoglobulina G Total (IgG)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
          {
        examen: "Inmunoglobulina M Total (IgM)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
          {
        examen: "Inmunoglobulina E Total (IgE)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Recuento de Eritrocitos (Hemograma)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Recuento de Plaquetas (Hemograma)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "VHS (Hemograma)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Hematocrito (Hemograma)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Hemoglobina (Hemograma)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Leucocitos Fecales",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Sangre Oculta en Deposicion (FOB)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Sangre Oculta (FOB)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Antigeno Helicobacter pylori en Deposicion",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Rotavirus / Adenovirus en Deposicion",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Clostridium difficile GDH Toxina A y B",
        establecimiento: "Clinica Adventista Los Angeles",
        nota: "Clostridioides difficile"
      },
      {
        examen: "Clostridioides difficile GDH Toxina A y B",
        establecimiento: "Clinica Adventista Los Angeles",
        nota: "Antes: Clostridium difficile"
      },
      {
        examen: "Panel Viral (8 Virus Respiratorios)",
        establecimiento: "Clinica Adventista Los Angeles",
          nota: "IFI/IFD Para Virus Influenza A+B, VRS, ADV, MPV, Parainfluenza 1, 2 y 3.",
      },
      {
        examen: "Chlamydia trachomatis ",
        establecimiento: "Clinica Adventista Los Angeles",
        nota: "Muestra de flujo vaginal en mujer y orina en hombre",
      }, 
      {
        examen: "Neonatal GSS (TSH Recien Nacido)",
        keywords: ['tiroestimulante', 'TSH', 'tiroidea',],
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0302097",
        codigoBK: "TSHN",
        nota: "",
      },
      {
        examen: "Hormona Estimulante de la Tiroides (TSH)",
        keywords: ['tiroestimulante', 'TSH', 'tiroidea',],
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0303024",
        nota: "Hormona Tiroidea/Tiroestimulate"
      },
      {
        examen: "Orina Completa",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Orina segundo chorro",
        establecimiento: "Clinica Adventista Los Angeles",
        nota: "Orina Completa",
      },
      {
        examen: "Perfil de Aminoácidos y Acilcarnitinas",
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0302098",
        codigoBK: "ACILPLUS",
        nota: "Muestra: Gotas de sangre total sobre papel filtro especial",
      },
      {
        examen: "Perfil Lipidico",
        establecimiento: "Clinica Adventista Los Angeles",
        nota: "Colesterol Total, LDL, HDL y Trigliceridos",
      },
      {
        examen: "Perfil Bioquimico",
        establecimiento: "Clinica Adventista Los Angeles",
        nota: "Bilirrubina Total y Directa, ALP, ALT/GPT, AST/GOT, GGT, Glicemia, Urea/BUN, Calcio, Fosforo, Proteinas Totales, Albumina, Ácido Urico, Creatinina",
      },
      {
        examen: "Perfil Hepático",
        establecimiento: "Clinica Adventista Los Angeles",
        nota: "Bilirrubina Total y Directa, ALP, ALT/GPT, AST/GOT, GGT",
      },
      {
        examen: "Fierro (Hierro)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Capacidad Total de Fijación del Hierro (TIBC)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Saturacion de Fierro, Hierro (TIBC)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Fierro con Saturacion, Hierro (TIBC)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Indice de Saturación de Transferrina (TIBC)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Grupo y RH",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Grupo sanguineo",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Hematocrito",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Hemoglobina glicosilada (HbA1c)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Hemograma",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Reticulocitos",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Test de Coombs Indirecto (TCI)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Test de Coombs Directo (TCD)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Tiempo de Protrombina (TP)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Porcentaje de protrombina (TP)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
            {
        examen: "INR (TP)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Tiempo de sangría",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Tiempo de Tromboplastina Activada (TTPA)",
        establecimiento: "Clinica Adventista Los Angeles",
          nota: "Antiguamente TTPK",
      },
      {
        examen: "Transferrina",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0301082",
        codigoBK: "TRANS",
        nota: "Suero, 1 mL",
      },    
      {
        examen: "Clearence",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Clearence de creatinina",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Clearence de creatinina 24h",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Dimero D",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Dimero-D",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Electrolitos plasmaticos (ELP)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Lactico deshidrogenasa (LDH)(Perfil Bioquímico)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Lactato deshidrogenasa (LDH)(Perfil Bioquímico)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Procalcitonina",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Péptido Natriurético tipo B (NT-proBNP)",
        keywords: ['pro bnp',],
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Troponina",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Vitamina B12 (Cobalamina)",
        keywords: ['vit b12', 'vit12'],
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Vitamina D (25-Hidroxivitamina D)",
        keywords: ['vitd', 'vit d', '25 oh'],
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0302078",
      },
      {
        examen: "Antigeno Prostatico Especifico (APE Total)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Antigeno Prostatico Especifico Libre (APE Libre)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Total Prostatic Specific Antigen (PSA Total)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Free Prostatic Specific Antigen (PSA Libre)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Anticuerpos Antitiroglobulina (ATG)",
        keywords: ['ac antitiroglobulina', 'ac tg'],
        establecimiento: "Clinica Adventista Los Angeles",
      },
          {
        examen: "Anticuerpos Anti-Tiroperoxidasa (ATPO)",
        keywords: ['ac antitiroperoxidasa', 'anti tpo', 'tpo'],
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Antigeno Carcinoembrionario (CEA)",
        keywords: ['ACE','tumoral', 'ag carcino'],
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0305009",
      },
      {
        examen: "Complemento C3 y C4",
        establecimiento: "Clinica Adventista Los Angeles",
      },
          {
        examen: "Complemento C4",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Inmunoglobulinas",
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0305027",
        codigoBK: "",
          Nota: "Inmunoglobulinas Totales IgA, IgG, IgM",
        comparte: true
      },
      {
        examen: "Imunoglobulinas Totales c/u",
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0305027",
        Nota: "IgA, IgG, IgM",
        comparte: true
      },
      {
        examen: "IgA total",
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0305027-1",
        
      },
      {
        examen: "IgG total",
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0305027-2",
      },
      {
        examen: "IgM Total",
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0305027-3",
      },
      {
        examen: "IgE Total",
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0305028",
      },
      {
        examen: "IgA Secretora",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305026"
      },
      {
        examen: "Hantavirus (Hanta Virus IgM)",
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0306121"
      },
      {
        examen: "Virus Hanta (Hanta Virus IgM)",
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0306121"
      },
      {
        examen: "Hanta IgM (Hanta Virus IgM)",
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0306121"
      },
      {
        examen: "Hantavirus IgM (Hanta Virus IgM)",
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0306121"
      },
      {
        examen: "Virus Hanta IgM (Hanta Virus IgM)",
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0306121"
      },
      {
        examen: "Virus Hepatitis B (HBsAg)",
        keywords: ['VHB', 'superficie'],
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0306079",
        nota: "Antigeno de superficie de Hepatitis B",
      },
      {
        examen: "Mycoplasma pneumoniae IgM+IgG",
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0306037",
        nota: "Se cobra por dos determinaciones (IgM e IgG)",
      },
      {
        examen: "Mycoplasma pneumoniae IgM",
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0306037-1",
      },
      {
        examen: "Mycoplasma pneumoniae IgG",
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0306037-2",
      },
      {
        examen: "Virus Inmunodeficiencia Humana (VIH SIDA)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Virus Hepatitis C (VHC)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0306081",
          nota: "Solo si tiene otros exámenes a barnafi, de lo contrario: Lab. Cordillera",
      },
      {
        examen: "Virus Hepatitis A (VHA IgM)",
        establecimiento: "Santiago - Barnafi (1 semana)",
      },
      {
        examen: "Calprotectina",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Gonadotropina Corionica Humana, subunidad beta (BHCG)",
        keywords: ['embarazo', 'B-HCG'],
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Insulina",
        keywords: ['resistencia'],
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Insulina Post Prandial",
        keywords: ['resistencia'],
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Curva de Insulina (3 muestras)",
        keywords: ['resistencia'],
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Estradiol",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Hormona Foliculo Estimulante (FSH)",
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0303015",
      },
      {
        examen: "Hormona Leutinizante (LH)",
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0303016",
      },
      {
        examen: "Prolactina",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Pool de Prolactina",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Pool Prolactina",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Proteinuria",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Proteinuria 24h",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Ratio microalbuminuria (RAC)",
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Microalbuminuria",
        keywords: ['ualb',],
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Microalbuminuria 24h",
        keywords: ['ualb 24',],
        establecimiento: "Clinica Adventista Los Angeles",
      },
      {
        examen: "Ácido Fólico",
        keywords: ['Ac Folico', 'Ac. Folico', 'folatos'],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0301002",
          codigoBK: "FOL", 
        ntoa: "Muestra: Suero o Plasma, 500 ul",
      },
      {
        examen: "Ácido Fólico Eritrocitario",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "s/c",
        codigoBK: "FOLERI",
      },
      {
        examen: "Adenosindeaminasa (ADA)",
        keywords: ['deaminase',],
        establecimiento: "Santiago - Barnafi (1 semana)",
        nota: "Suero o Plasma, 1 ml",
      },
      {
        examen: "Caroteno",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0302017",
        codigoBK: "CARO"
      },
      {
        examen: "Caroteno, Prueba de Sobrecarga",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0302018",
        codigoBK: ""
      },
      {
        examen: "Calcio Ionico",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0302081",
        codigoBK: "CAION"
      },
      {
        examen: "Calculo Urinario",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0309009",
        codigoBK: "CALC"
      },
      {
        examen: "Ceruloplasmina",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0302019",
        codigoBK: "CER",
      },
      {
        examen: "Cobre en sangre",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0302020",
        codigoBK: "CU",
      },
      {
        examen: "Colinesterasa en suero o plasma",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0302021",
        codigoBK: "COLI",
      },
      {
        examen: "Lactato",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigoBK: "LAC",
      },
      {
        examen: "Deshidrogenasa Lactica c/separación isoenzimas",
        establecimiento: "Santiago - Barnafi (1 semana)",
      },
      {
        examen: "Enzima Convertidora De Angiotensina (ECA)",
        establecimiento: "Santiago - Barnafi (1 semana)",
      },
      {
        examen: "Electroforesis de Proteinas",
        establecimiento: "Santiago - Barnafi (1 semana)",
      },
          {
        examen: "Electroforesis de Proteinas en Orina",
        establecimiento: "Santiago - Barnafi (1 semana)",
      },
      {
        examen: "Fenilalanina (LFA)",
        establecimiento: "Santiago - Barnafi (1 semana)",
      },
      {
        examen: "L-Fenilalanina (LFA)",
        establecimiento: "Santiago - Barnafi (1 semana)",
      },
      {
        examen: "Homocisteina",
        establecimiento: "Santiago - Barnafi (1 semana)",
      },
      {
        examen: "Litio",
        establecimiento: "Santiago - Barnafi (1 semana)",
      },
      {
        examen: "Magnesio",
        establecimiento: "Santiago - Barnafi (1 semana)",
      },
      {
        examen: "Nivel de Drogas Terapeuticas (Ácido Valprotico Total)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0302035-1",
        codigoBK: "VALP",
      },
      {
        examen: "Nivel de Drogas Terapeuticas (Fenitoína)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0302035-4",
        codigoBK: "FEN",
      },
      {
        examen: "Nivel de Drogas Terapeuticas (Carbamazepina Total)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0302035-2",
        codigoBK: "CARB",
      },
      {
        examen: "Nivel de Drogas Terapeuticas (Benzodiazepinas en Orina)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0309106",
        codigoBK: "BENZ",
      },
      {
        examen: "Nivel de Drogas Terapeuticas (Oxcarbazepina)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "",
        codigoBK: "OXCAR",
      },
      {
        examen: "Nivel de Drogas Terapeuticas (Fenobarbital)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0302035-5",
        codigoBK: "FEB",
        
      },
      {
        examen: "Fenobarbital Libre",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "",
        codigoBK: "FEBL",
        nota: "Agregar como Examen Barnafi: 0307099 y escribir en notas",
      },
      {
        examen: "Examen Barnafi",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0307099",
        nota: "Se utiliza cuando no hay indexado un examen y este debe ser referido en notas",
      },
      {
        examen: "Plomo",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0302084",
        codigoBK: "PLOMOMASA",
      },
      {
        examen: "Plomo en Orina",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0302084",
        codigoBK: "PLOOA",
      },
      {
        examen: "Prealbumina",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0302085",
        codigoBK: "PREALB",
      },
      {
        examen: "Pre albumina",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0302085",
        codigoBK: "PREALB",
      },
      {
        examen: "Triptasa",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305201",
        codigoBK: "TRIPTASA",
        nota: "",
      },
      {
        examen: "Sirolimus",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "s/c",
        codigoBK: "SIR",
        notas: "Agregar como <i>Examen Barnafi</i>: 0307099 y escribir en notas",
      },
      {
        examen: "Tacrolimus",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "TAC",
        codigoBK: "TAC",
        nota: "",
      },
      {
        examen: "Vitamina A (Retinol)",
        keywords: ['vit a', 'acido retinoico', 'ac retinoico'],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "VITA",
        codigoBK: "VITA",
        nota: "Ácido Retinoico"
      },
      {
        examen: "Vitamina B6 (Piridoxina)",
        keywords: ['vit b6', 'vitb6'],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0302080",
        codigoBK: "VITB6",
      },
      {
        examen: "Zinc",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0302198",
        codigoBK: "ZN",
      },
      {
        examen: "Zinc en Orina",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0302198",
        codigoBK: "ZINCOA",
      },
      {
        examen: "17 Hidroxiprogesterona (17-OHP)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303029",
        codigoBK: "17PR",
      },
      {
        examen: "17-OH Progesterona (17-OHP)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303029",
        codigoBK: "17PR",
      },
      {
        examen: "17 OH Progesterona (17-OHP)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303029",
        codigoBK: "17PR",
      },
  {
        examen: "Anticuerpos Anti-Membrana Basal Glomerular (AAMBG)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305081-2",
        codigoBK: "MEMBRA",
      },
      {
        examen: "Ac Antimembrana Basal Glomerular (AAMBG)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305081-2",
        codigoBK: "MEMBRA",
      },
      {
        examen: "Hormona Adrenocorticotropica (ACTH)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303001",
          codigoBK: "ACTH",
      },
      {
        examen: "Corticotropina , Corticotrofina (ACTH)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303001",
          codigoBK: "ACTH",
      },
      {
        examen: "Catecolaminas Plasmaticas",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303049",
        codigoBK: "CATEP"
      },
      {
        examen: "Catecolaminas Urinarias",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303051",
        codigoBK: "CATEOA"
      },
      {
        examen: "Catecolaminas En Orina",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303051",
        codigoBK: "CATEOA"
      },
      {
        examen: "Catecolaminas En Sangre",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303049",
        codigoBK: "CATEP"
      },
      {
        examen: "Aldosterona",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "303002",
          codigoBK: "ALDO",
      },
      {
        examen: "Aldosterona en orina",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "",
          codigoBK: "ALDOO",
      },
      {
        examen: "Androstenediona (4-androstenediona)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303003",
          codigoBK: "ANDROD",
      },
      {
        examen: "Cortisol AM/PM",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303006",
          codigoBK: "CORT",
      },
      {
        examen: "Cortisol Libre Urinario",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303035",
          codigoBK: "CORTOA",
        comparte: true
      },
      {
        examen: "Cortisol en Orina 24h",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303035",
          codigoBK: "CORTO",
        comparte: true
      },
      {
        examen: "Cortisol en Saliva",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303056",
          codigoBK: "CORTS",
      },
      {
        examen: "Dehidroepiandrosterona (DHEA)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303008",
          codigoBK: "DHEAS",
      },
      {
        examen: "Dehidroepiandrosterona sulfato (DHEA-SO4)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303008",
          codigoBK: "DHEAS",
      },
      {
        examen: "DHEA-S (DHEA-SO4)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303008",
          codigoBK: "DHEAS",
      },
      {
        examen: "DHEAS (DHEA-SO4)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303008",
          codigoBK: "DHEAS",
      },
      {
        examen: "Gastrina",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303012",
          codigoBK: "GAS",
      },
      {
        examen: "Insulin-Like Growth Factor 1 (IGF1)",
        keywords: ['somatomedina', 'crecimiento', 'similar a insulina', 'factor 1 de crecimiento'],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303047",
        codigoBK: "IGF-IQ",
        nota: "Somatomedina, Factor 1 de Crecimiento Similar a Insulina",
      },
      {
        examen: "Insulin-Like Growth Factor Binding Protein-1 (IGFBP1)",
        keywords: ['proteina 1', 'crecimiento', 'similar a insulina', 'factor de crecimiento', 'ligado a',
          'igf binding', 'igf ligado',],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303048",
        codigoBK: "BP1",
        nota: "Proteina 1 de union al Factor de Crecimiento Similar a Insulina, IGF Binding Protein 1",
      },
      {
        examen: "Insulin-Like Growth Factor Binding Protein-3 (IGFBP3)",
        keywords: ['proteina 3', 'crecimiento', 'similar a insulina', 'factor de crecimiento', 'ligado a',
          'igf binding', 'igf ligado',],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303048-1",
        codigoBK: "IGFBP-3Q",
        nota: "Proteina 3 de union al Factor de Crecimiento Similar a Insulina, IGF Binding Protein 1",
      },
      {
        examen: "Metanefrinas Plasmáticas",
        keywords: ['metanefrinas en sangre',],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "s/c",
        codigoBK: "METALIBRE",
        nota: "Agregar como <i>Examen Barnafi</i>: 0307099 y escribir en notas",
      },
      {
        examen: "Metanefrinas Urinarias",
        keywords: ['metanefrinas en orina',],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303050",
        codigoBK: "METANEF",
      },
      {
        examen: "Progesterona",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303019",
        codigoBK: "PRGD",
      },
      {
        examen: "Renina",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303021",
        codigoBK: "RENINA",
      },
      {
        examen: "Sex hormone binding globulin (SHBG)",
        keywords: ['globulina fijadora',],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303046",
        codigoBK: "SHBG",
        nota: "Globulina Fijadora de Hormonas Sexuales",
      },
      {
        examen: "Testosterona Libre",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303023",
        codigoBK: "TESTL",
      },
      {
        examen: "Testosterona Total",
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0303022",
          codigoBK: "",
      },
      {
        examen: "Tiroglobulina",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303025",
        codigoBK: "TIROG",
      },
      {
        examen: "Alfa 1 Antitripsina (AAT)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "305001",
        codigoBK: "AATT",
      },
      {
        examen: "Alfa 2 Macroglobulina (A2M)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305002",
        nota: "Agregar como <i>Examen Barnafi</i>: 0307099 y escribir en notas"
      },
      {
        examen: "Alfa Feto Proteina (AFP)",
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0305003_xx",
        codigoBK: "AFP",
      },
      {
        examen: "Panel ANA 23 Autoanticuerpos IgG",
        keywords: ['ac antinucleares', 'anticuerpos nucleares', 'ac antinucleares'],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305005-5",
        codigoBK: "ANA23",
      },
      {
        examen: "Anticuerpos Antinucleares (ANA)",
        keywords: ['aan', 'ac antinucleares', 'anticuerpos nucleares', 'ac antinucleares', 'anticuerpos anti nucleares'],
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0305005",
        codigoBK: "ANAS",
        nota: "AAN (en inglés), Patrones de Anticuerpos Anti-Nucleo/Citoplasma para detección de autoinmunidad"
      },
      {
        examen: "Anticuerpos Anti DNA",
        keywords: ['ac anti dna', 'ac anti adn', 'ac anti adn',],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305005-3",
        codigoBK: "ADNA",
        nota: "<strong>Código Fonasa:</strong> 0305005<br> Anticuerpos anti ADN nativo de doble cadena (dsDNA)"
      },
      {
        examen: "Anticuerpos Anti Peptido Citrulinado IgG (CCP)",
        keywords: ['anti ccp', 'ac anti ccp', 'anticuerpos anti ccp', 'accp',],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305099",
        codigoBK: "CCPP",
      },
      {
        examen: "Anticuerpos Anti Endomisio IgA (EMA)",
        keywords: ['ac anti endomisio',],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305081-1",
        codigoBK: "EMA",
      },
      {
        examen: "Anticuerpos Anti Peptido Deaminado de Gliadina IgA ",
        keywords: ['ac anti peptido deaminado de gliadina iga',],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305086-1",
        codigoBK: "GLIDA",
      },
      {
        examen: "Anticuerpos Anti Peptido Deaminado de Gliadina IgG ",
        keywords: ['Ac Antifosfolipidos',],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305086-2",
        codigoBK: "GLIDG",
      },
    {
        examen: "Anticuerpos Antifosfolipidos",
        keywords: ['ac anti fosfolipidos',],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305007-4",
        codigoBK: "",
      },
      {
        examen: "Anticuerpos Anti Gliadina IgG",
        keywords: ['ac antigliadina igg', 'ac anti gliadina igg',],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305086",
        codigoBK: "GLIG",
      },
      {
        examen: "Anticuerpos Anti Gliadina IgA",
        keywords: ['ac antigliadina iga', 'ac anti gliadina iga',],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305086",
        codigoBK: "GLIA",
      },
      {
        examen: "Anticuerpos Anti Transglutaminasa IgA",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305181-1",
        codigoBK: "GLUTAS",
        
      },
      {
        examen: "Ac anti transglutaminasa IgA",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305181-1",
        codigoBK: "GLUTAS",
      
      },
      {
        examen: "Anticuerpos Anti Transglutaminasa IgG",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305181-2",
        codigoBK: "GLUTAG",
      },
      {
        examen: "Ac anti transglutaminasa IgG",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305181-2",
        codigoBK: "GLUTAG",
      },
      {
        examen: "Anticuerpos Anti Celulas Parietales (IFI)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "PARI",
        codigoBK: "PARI",
      },
      {
        examen: "Anticuerpos Anti Celulas Parietales IgG",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "PARIELISA",
        codigoBK: "PARIELISA",
      },
      {
        examen: "Anticuerpos Anti Microsomales",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305007-1",
        codigoBK: "AMIC",
      },
      {
        examen: "Ac Antimicrosomales",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305007-1",
        codigoBK: "AMIC",
      },
      {
        examen: "Ac. Antimicrosomales",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305007-1",
        codigoBK: "AMIC",
      },
      {
        examen: "Anticuerpos Anti Cardiolipinas (IgG y/o IgM)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305084",
          codigoBK: "Para IgG: CARG, Para IgM: CARM",
        nota: "Especificar segun corresponda",
      },
      {
        examen: "Ac Anticardiolipinas (IgG y/o IgM)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305084",
          codigoBK: "Para IgG: CARG, Para IgM: CARM",
        nota: "Especificar segun corresponda",
      },
      {
        examen: "Ac. Anticardiolipinas (IgG y/o IgM)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305084",
          codigoBK: "Para IgG: CARG, Para IgM: CARM",
        nota: "Especificar segun corresponda",
      },
      {
        examen: "Anticardiolipinas (IgG y/o IgM)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305084",
          codigoBK: "Para IgG: CARG, Para IgM: CARM",
        nota: "Especificar segun corresponda",
      },
      {
        examen: "Anticoagulante Lupico",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigoBK: "LUPI",
        
      },
      {
        examen: "Anticuerpos Anti Receptor de TSH (TRAB)",
        keywords: ['ac antireceptor', 'antireceptor', 'ac anti receptor', 'anti trab', 'ac anti trab',],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305124",
        codigoBK: "TRABB",
      },
      {
        examen: "Anticuerpos Anti B2 Glicoproteina IgG",
        keywords: ['anti b2', 'ac antiglicoproteina', 'ac anti glicoproteina', 'ac antib2', 'ac anti b2 glicoproteina'],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305105",
        codigoBK: "B2G",
      },
      {
        examen: "Anticuerpos Anti B2 Glicoproteina IgM",
        keywords: ['anti b2', 'ac antiglicoproteina', 'ac anti glicoproteina', 'ac antib2', 'ac anti b2 glicoproteina'],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305105-1",
        codigoBK: "B2M",
      },
      {
        examen: "Anticuerpos Anti Musculo liso (AMLI)",
        keywords: ['ac antimusuclo', 'ac anti musculo', 'antimusculo'],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305005-4",
        codigoBK: "AMLI",
      },
      {
        examen: "Anticuerpos Anti LKM-1 (LKM)",
        keywords: ['ac anti lkm', 'anti lkm',],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305085",
        codigoBK: "LKM",
      },
      {
        examen: "Anticuerpos Anti Mitocondriales (AMIT)",
        keywords: ['ac anti mitocondriales', 'anti mitocondriales', 'antimito',],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305005-2",
        codigoBK: "AMIT",
      },
      {
        examen: "Anticuerpos Anti Mieloperoxidasa (MPO)",
        keywords: ['ac anti mielopero', 'anti mielopero', 'antimielopero', 'antimpo', 'anti mpo',],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305107",
        codigoBK: "MPO",
      },
      {
        examen: "Anticuerpos Anticentromero (ACA)",
        keywords: ['ac anti centromero', 'anti centromero', 'ac anticentromero', 'centromero',],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305005-1",
        codigoBK: "ANTICEN",
      },
      {
        examen: "Anticuerpos Anti Proteinasa 3 (ANTI-PR3)",
        keywords: ['ac proteinasa3', 'antiproteinasa',],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305007-10",
        codigoBK: "PR3",
      },
      {
        examen: "Anticuerpos Anticitoplasma de Neutrofilos (ANCA)",
        keywords: ['ancas'],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305082",
        codigoBK: "ANCA",
      },
      {
        examen: "Anticuerpos Anticitoplasma de Neutrofilos C (ANCA C)",
        keywords: ['ancac'],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305082",
        codigoBK: "ANCAC",
      },
      {
        examen: "Anticuerpos Anticitoplasma de Neutrofilos P (ANCA P)",
        keywords: ['ancap',],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305082",
        codigoBK: "ANCAP",
      },
      {
        examen: "CA 15-3",
        keywords: ['ca15-3','tumoral'],
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0305170",
      },
      {
        examen: "CA 19-9",
        keywords: ['ca19','tumoral'],
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0305170-1",
      },
      {
        examen: "CA 125",
        keywords: ['ca125','tumoral'],
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0305170-2",
      },
      {
        examen: "Anticuerpos Anti-SM, RNP, LA (SS-B), RO (SS-A), SCL-70, JO-1 C/U",
        keywords: ['anti sm', 'anti RO', ' anti RNP', 'anti LA', 'anti SCL', 'anti JO',
                    'smith', 'ena'],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305108",
        codigoBK: "SM, RNP, SB, SA, SCL, JO",
        nota: "La solicitud a BkLab debe ser por c/u de los anticuerpos y su cobro: 0305108 x6 "
      },
      {
        examen: "ENA screening (ENAS)",
        keywords: ['SM', 'RO', 'RNP', 'LA', 'SCL-70', 'JO-1', 'tamizaje'],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305004",
        codigoBK: "ENAS",
        nota: "Tamizaje para complejo de antigenos: SM, LA(SS-B), RO(SS-A), RNP, SCL-70, JO-1"
      },
      {
        examen: "Inmunofijación de Inmunoglobulinas en Sangre",
        establecimiento: "Santiago - Barnafi (1 semana)",
      },
      {
        examen: "IgE Especificas c/u",
        establecimiento: "Santiago - Barnafi (1 semana)",
        nota: "Lacteos y Detergentes No se realizan"
      },
      {
        examen: "Marcadores Inmunologicos en Diabetes",
        keywords: ['tirosin', 'fosfatasa', 'IA2', 'celulas beta', 'ICA', 'IAA', 'descarboxilasa',
            'acido glutamico', 'gad', 'transportador 8', 'znt8',],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305004",
        codigoBK: "APANELDIAS",
        nota: "<strong>Código FONASA: 0305106</strong><ol>Anticuerpos anti:<li> Tirosin Fosfatasa (IA2),<li> Células beta (ICA),<li> Insulina (IAA),<li> Descarboxilasa del ácido glutámico (GAD),<li> Transportador 8 del Zinc (ZNT8) "
      },
      {
        examen: "Anticuerpos Anti Celulas Beta (ICAS)",
        keywords: ['diabetes'],
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "s/c",
        codigoBK: "ICAS",
        nota: "Ingresar <i>Examen BARNAFI</i>"
      },
      {
        examen: "Panel Miositis 16, Auto Anticuerpos Tipo IgG",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305007-8",
        codigoBK: "MIOSITIS16",
        nota: "<ol><li>Anti-Mi-2alpha, <li>Anti-Mi-2beta, <li>Anti-TIF1gamma, <li>Anti-MDA5, <li>Anti-NXP2, <li>Anti-SAE1, <li>Anti-Ku, <li>Anti-PM-Scl100, <li>Anti-PM-Scl75, <li>Anti-Jo-1, <li>Anti-SRP, <li>Anti-PL-7, <li>Anti-PL-12, <li>Anti-EJ, <li>Anti-OJ, <li>Anti-Ro52</ol>",
      },
      {
        examen: "Tipificación HLA-B27",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305118",
        codigoBK: "HLAB27",
      },
      {
        examen: "Tipificación HLA-DQ2 y HLA-DQ8",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305121",
        codigoBK: "DQ",
      },
      {
        examen: "Hormona Anti Mulleriana (AMH)",
        keywords: ['antimulleriana'],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303030-1",
        codigoBK: "MULLE",
      },
      {
        examen: "Adenovirus Anticuerpos IgG, IgM",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "s/c",
        codigoBK: "IgG: ADENG<br>IgM: ADENM",
        nota: "Agregar como <i>Examen Barnafi</i>: 0307099 y escribir en notas",
      },
      {
        examen: "Antigeno Galactomanano de Aspergillus",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "s/c",
        codigoBK: "GALACTO",
        nota: "Agregar como <i>Examen Barnafi</i>: 0307099 y escribir en notas",
      },
      {
        examen: "Bartonella henselae Serologia IgG, IgM",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "BARTH",
        codigoBK: "IgG: <strong>BARG</strong><br> IgM: <strong>BARM</strong>",
        nota: "Especificar si se requiere uno o ambos anticuerpos con sus codigos BK."
      },
      {
        examen: "Chlamydia en Sangre Serologia IgG, IgM ",
        establecimiento: "Santiago - Barnafi (1 semana)",
        
      },
      {
        examen: "Citomegalovirus (CMV) Serologia IgG, IgM ",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0306069-3",
        codigoBK: "IgG: <strong>CIG</strong><br> IgM: <strong>EBM</strong>",
        nota: "Especificar si se requiere uno o ambos anticuerpos con sus codigos BK."
      },
      {
        examen: "Epstein Barr Virus Serologia IgG, IgM ",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0306069-5",
        codigoBK: "IgG: <strong>EBG</strong><br> IgM: <strong>EBM</strong>",
        nota: "Especificar si se requiere uno o ambos anticuerpos con sus codigos BK."
      },
      {
        examen: "Virus Epstein Barr Serologia IgG, IgM ",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0306069-5",
        codigoBK: "IgG: <strong>EBG</strong><br> IgM: <strong>EBM</strong>",
        nota: "Especificar si se requiere uno o ambos anticuerpos con sus codigos BK."
      },
      {
        examen: "FTA-ABS (Sífilis)",
        keywords: ['MHA-TP'],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0306041",
        codigoBK: "FTA",
        nota: "Anticuerpos anti <i>T. pallidum</i> para diagnóstico de sífilis",
      },
      {
        examen: "MHA-TP (Sífilis)",
        establecimiento: "No se realiza, elegir y sugerir: <strong>FTA-ABS</strong>",
        codigo: "s/c",
        codigoBK: "s/c",
        nota: "Anticuerpos confirmatorios para sífilis, MHA-TP y FTA-ABS",
      },
      {
        examen: "Virus Herpes Simple I Serología IgG, IgM",
        keywords: ['herpes 1',],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0306069-1",
        codigoBK: "IgG: <strong>H1G</strong><br> IgM: <strong>H1M</strong>",
        nota: "Especificar si se requiere uno o ambos anticuerpos con sus codigos BK."
      },
      {
        examen: "Virus Herpes Simple II Serología IgG, IgM",
        keywords: ['herpes 2',],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0306069-2",
        codigoBK: "IgG: <strong>H2G</strong><br> IgM: <strong>H2M</strong>",
        nota: "Especificar si se requiere uno o ambos anticuerpos con sus codigos BK."
      },
      {
        examen: "Hepatitis B, Anticuerpos Anti-antigeno de superficie (vacuna)",
        keywords: ['ac anti antigeno', 'anti hepatitis b', 'vhb'],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "ANTIHBS",
        codigoBK: "ANTIHBS",
        nota: "Examen para ver inmunidad con vacuna/exposición",
      },
      {
        examen: "Hepatitis B, Anticuerpos Anti-Core (IgM)",
        keywords: ['anticore', 'ac anticore', 'vhb'],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0306080",
        codigoBK: "HEV",
        nota: "Evaluación etapa aguda VHB",
      },
      {
        examen: "Hepatitis B, Anticuerpos Anti-Core Totales (IgG+IgM)",
        keywords: ['anticore', 'ac anticore', 'vhb'],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0306080",
        codigoBK: "HBC",
        nota: "Evaluación de la memoria inmunológica",
      },
      {
        examen: "Hepatitis B, Antigeno E",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0306078",
        codigoBK: "HBE",
        nota: "Indicador de infección activa y replicación viral",
      },
      {
        examen: "Hepatitis B, Anticuerpos Anti-antigeno E",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0306075",
        codigoBK: "ANTIHBE",
        nota: "Indicador de infección activa y replicación viral",
      },
      {
        examen: "17-Cetosteroides Orina",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303043",
        codigoBK: "",
      },
      {
        examen: "17-Hidroxicorticosteroides, 17-OH Corticosteroides",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303044",
        codigoBK: "",
      },
      {
        examen: "Virus Zika Serologia IgG, IgM",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "sin codigo, ingresar Examen barnafi",
        codigoBK: "IgG: <strong>ZIKAG</strong><br> IgM: <strong>ZIKAM</strong>",
        nota: "Especificar si se requiere uno o ambos anticuerpos con sus codigos BK.",
      },
      {
        examen: "Bordetella pertusis IgG",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "BOG",
        codigoBK: "BOG"
      },
      {
        examen: "Bordetella pertusis IgM",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "BOM",
        codigoBK: "BOM",
      },
      {
        examen: "Panel de Infecciones de Transmision Sexual, 6 Antígenos (PCR-RT)",
        keywords: ['ITS', 'panelits', 'panel its','ETS', 'panel enfermedades de transmision', 'enfermedades de transmision'],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0306097",
        codigoBK: "PANELSTI",
        nota: "Panel ITS por PCR:<ol><li><i>Chlamydia trachomatis</i><li><i>Mycoplasma genitalum</i><li><i>Mycoplasma hominis</i><li><i>Neisseria gonorrhoeae</i><li><i>Ureaplasma spp.</i><li><i>Trichomonas vaginalis</i><br><strong>Mujer:</strong> Tubo rosado, tomado por profesional.<br><strong>Hombre:</strong> Frasco de orina (primer chorro) "
      },
    {
        examen: "Cadenas Livianas Libres, razon kappa/lambda",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305300",
        codigoBK: "CUANTIKALA",
      },
  {
        examen: "Virus Papiloma Humano PCR-RT (VPH 14 subtipos) MUJER",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0306123",
        codigoBK: "HPV",
        nota: "Frasco y Cepillo Citoliq",
      },
  {
        examen: "Virus Papiloma Humano PCR-Microarray (VPH 30 subtipos) Hombre o Mujer",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0306123-1",
        codigoBK: "PCRPAPI",
        nota: "<strong>Se cobra particular.</strong><b> Tubo rosado con torula de dacron",
      },
      {
        examen: "ONCOGEN: Estudio Genetico Oncologico",
        establecimiento: "Santiago - Barnafi",
        codigo: "ONC",
        codigoBK: "",
      },
      {
        examen: "Anticuerpos Anti Receptores de Acetilcolina",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "ACERTILRECE",
        codigoBK: "ACETILRECE",
      },
      {
        examen: "Apolipoproteina A1",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0302070-1",
        codigoBK: "APOA",
      },
      {
        examen: "Apolipoproteina B",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0302070-2",
        codigoBK: "APOB",
      },
      {
        examen: "Arsenico en Orina",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0309034",
        codigoBK: "ARSOA",
      },
      {
        examen: "Arsenico en sangre",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0302134",
        codigoBK: "ARSESANGRE",
      },
      {
        examen: "Beta 2 Microglobulina",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0305010",
        codigoBK: "BETA2",
      },
      {
        examen: "Parathormona (PTH)",
        keywords: ['hormona', 'pth', 'paratiroidea', 'parato'],
        establecimiento: "Clinica Adventista Los Angeles",
        codigo: "0303018",
        codigoBK: "PTHC",
        nota: "Hormona Paratiroidea"
      },
      {
        examen: "Toxocara IgG",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0306061-6",
        codigoBK: "TOXO",
        nota: "Serología IgG para <i>Toxocara canis</i>",
      },
      {
        examen: "Toxoplasmosis Anticuerpos IgG",
        keywords: ['toxoplasma igg'],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0306061-7",
        codigoBK: "TOXOG",
        nota: "Serología IgG para Toxoplasma",
      },
      {
        examen: "Toxoplasmosis Anticuerpos IgM",
        keywords: ['toxoplasma igm'],
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0306061-8",
        codigoBK: "TOXOM",
        nota: "Serología IgM para Toxoplasma",
      },
      {
        examen: "Peptido C",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "303052",
        codigoBK: "PEPC",
        nota: "",
      },
      {
        examen: "Lamotrigina",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "LAMO",
        codigoBK: "LAMO",
        nota: "",
      },
      {
        examen: "Virus Parotiditis IgG",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "PARAG",
        codigoBK: "PARAG",
        nota: "",
      },
      {
        examen: "Virus Parotiditis IgM",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "PARAM",
        codigoBK: "PARAM",
        nota: "",
      },
      {
        examen: "Subclases de IgG (I, II, III, IV)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "SUBIGG",
        codigoBK: "SUBIGG",
        nota: "Incluye Clases IgG1, IgG2, IgG3 e IgG4 (Sin cod. Fonasa)",
      },
      {
        examen: "Subclase de IgG 1",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "IGG1",
        codigoBK: "IGG1",
        nota: "(Sin cod. Fonasa)",
      },
      {
        examen: "Subclase de IgG 2",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "IGG2",
        codigoBK: "IGG2",
        nota: "(Sin cod. Fonasa)",
      },
      {
        examen: "Subclase de IgG 3",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "IGG3",
        codigoBK: "IGG3",
        nota: "(Sin cod. Fonasa)",
      },
      {
        examen: "Subclase de IgG 4",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "IGG4",
        codigoBK: "IGG4",
        nota: "(Sin cod. Fonasa)",
      },
      {
        examen: "Triquinosis, Anticuerpos IgG",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0306061-5",
        codigoBK: "TRIQ",
        nota: "<i>Trichinella spiralis</i>",
      },
      {
        examen: "Test Genético de Intolerancia a la Lactosa (PCR-RT)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "8003687",
        codigoBK: "LACTOGEN",
      },
      {
        examen: "Teofilina",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0302035-7",
        codigoBK: "TEO",
      },
      {
        examen: "Triyodotironina 3 Libre (T3 Libre)",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0303057",
        codigoBK: "T3L",
        nota: "T3 Total se hace en Clinala."
      },
      {
        examen: "Streptococcus Grupo B por PCR-RT",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0306299",
        codigoBK: "PCRSTREP",
        nota: "<i>Streptococcus agalactiae</i> (Grupo B) por PCR - Biología Molecular"
      },
      {
        examen: "Rubeola IgG, IgM",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0306069-4",
        codigoBK: "IgG: <strong>RUG</strong><br> IgM: <strong>RUM</strong>",
        nota: "Especificar si se requiere uno o ambos anticuerpos con sus codigos BK.",
      },
      {
        examen: "Sarampión IgG, IgM",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0306069-6",
        codigoBK: "IgG: <strong>SARG</strong><br> IgM: <strong>SARM</strong>",
        nota: "Especificar si se requiere uno o ambos anticuerpos con sus codigos BK.",
      },
      {
        examen: "Selenio",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0302135",
        codigoBK: "SELESANGRE",
        nota: "Especificar si se requiere uno o ambos anticuerpos con sus codigos BK.",
      },
      {
        examen: "Primidona",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0302035-6",
        codigoBK: "PRI",
        nota: "Farmaco en sangre (suero)",
      },
      {
        examen: "Primidona libre",
        establecimiento: "Santiago - Barnafi (1 semana)",
        codigo: "0302035-6",
        codigoBK: "PRIL",
        nota: "Especificar en notas que es Libre",
      },
]
