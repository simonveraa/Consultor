const buscarForm = document.getElementById("buscarForm")
const resultado = document.getElementById("resultado")
const resultadoTitulo = document.getElementById("resultado-titulo")

      let datos = [
        {
          examen: "Ferritina",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Recuento de Leucocitos (Hemograma)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
	      {
          examen: "Proteina C Reactiva",
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
          examen: "Clostridium difficile GDH Toxina A y B (Clostridioides difficile)",
          establecimiento: "Clinica Adventista Los Angeles",
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
          examen: "Hormona Tiroidea (TSH)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Hormona Tiroestimulante (TSH)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Hormona Tiro-Estimulante (TSH)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Hormona Estimulante de la Tiroides (TSH)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Orina Completa",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Orina segundo chorro",
          establecimiento: "Clinica Adventista Los Angeles, (Orina Completa)",
        },
		{
          examen: "Colesterol Total (Perfil Lipidico)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Colesterol HDL (Perfil Lipidico)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Colesterol LDL (Perfil Lipidico)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Trigliceridos (Perfil Lipidico)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Bilirrubina Directa (Perfil Bioquimico)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Bilirrubina Total (Perfil Bioquimico)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Fosfatasas Alcalinas (ALP)(Perfil Bioquimico)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Fosfatasa Alcalina (ALP)(Perfil Bioquimico)",
          establecimiento: "Clinica Adventista Los Angeles (Correción: Fosfatasas Alcalinas)",
        },
		{
          examen: "Alanino Aminotransferasa (ALT, GPT)(Perfil Bioquimico)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Aspartato Aminotransferasa (AST, GOT)(Perfil Bioquimico)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Gamma Glutamil Transferasa (Gamma GT, GGT, Gamma-GT)(Perfil Bioquimico)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Glicemia (Perfil Bioquimico)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Glucosa (Perfil Bioquimico)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Nitrogeno Ureico, Urea, (BUN)(Perfil Bioquimico)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Calcio (Perfil Bioquimico)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Fosforo (Perfil Bioquimico)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Proteinas totales(Perfil Bioquimico)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Albumina (Perfil Bioquimico)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Fraccion Albumina/Globulinas (Perfil Bioquimico)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Acido Urico (Perfil Bioquimico)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Creatinina (Perfil Bioquimico)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Fosfatasas Alcalinas (ALP)(Perfil Hepatico)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Fosfatasa Alcalina (ALP)(Perfil Hepatico)",
          establecimiento: "Clinica Adventista Los Angeles (Correción: Fosfatasas Alcalinas)",
        },
		{
          examen: "Alanino Aminotransferasa (ALT, GPT)(Perfil Hepatico)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Aspartato Aminotransferasa (AST, GOT)(Perfil Hepatico)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Gamma Glutamil Transferasa (Gamma GT, GGT, Gamma-GT)(Perfil Hepatico)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Bilirrubina Directa (Perfil Hepatico)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Bilirrubina Total (Perfil Hepatico)",
          establecimiento: "Clinica Adventista Los Angeles",
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
          examen: "Probnp",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Pro-bnp",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Pro BNP",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "bnp",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Troponina",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Cobalamina (Vitamina B12)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "B12 (Vitamina B12)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Vit. B12 (Vitamina B12)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Vit B12 (Vitamina B12)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "25-Hidroxivitamina D (Vitamina D)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "25 Hidroxivitamina D (Vitamina D)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Vit. D (Vitamina D)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "25-OH, 25(OH)D (Vitamina D)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "25 OH (Vitamina D)",
          establecimiento: "Clinica Adventista Los Angeles",
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
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Ac. Antitiroglobulina (ATG)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Ac. Anti-tiroglobulina (ATG)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Ac TG",
          establecimiento: "Clinica Adventista Los Angeles",
	  nota: "Anticuerpos Anti-Tiroglobulina (ATG)",
        },
		{
          examen: "Anticuerpo Antitiroglobulina (ATG)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Anticuerpo Anti-tiroglobulina (ATG)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
	        {
          examen: "Anticuerpos Anti-Tiroperoxidasa (ATPO)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Ac. TPO",
          establecimiento: "Clinica Adventista Los Angeles",
	  nota: "Anticuerpos Anti-Tiroperoxidasa (ATPO)",
        },
		{
          examen: "ac tpo",
          establecimiento: "Clinica Adventista Los Angeles",
	  nota: "Anticuerpos Anti-Tiroperoxidasa (ATPO)",
        },
		{
          examen: "Ac. Anti Tiroperoxidasa",
          establecimiento: "Clinica Adventista Los Angeles",
	  nota: "Anticuerpos Anti-Tiroperoxidasa (ATPO)",
        },
		{
          examen: "Ac. Antitiroperoxidasa",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Anticuerpo Antitiroperoxidasa",
          establecimiento: "Clinica Adventista Los Angeles",
	  nota: "Anticuerpos Anti-Tiroperoxidasa (ATPO)",
        },
		{
          examen: "anticuerpo anti-tiroperoxidasa",
          establecimiento: "Clinica Adventista Los Angeles",
	  nota: "Anticuerpos Anti-Tiroperoxidasa (ATPO)",
        },
		{
          examen: "ACE",
          establecimiento: "Clinica Adventista Los Angeles",
	  nota: "Antigeno Carcino Embrionario (CEA)",
        },
		{
          examen: "Antigeno Carcino Embrionario (CEA)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Antigeno Carcinoembrionario",
          establecimiento: "Clinica Adventista Los Angeles",
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
	  nota: "Inmunoglobulinas Totales IgA, IgG, IgM",
        },
		{
          examen: "Imunoglobulinas Totales",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "IgA total",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "IgG total",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "IgM Total",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "IgE Total",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "IgA Secretora",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Hantavirus (Hanta Virus IgM)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Virus Hanta (Hanta Virus IgM)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Hanta IgM (Hanta Virus IgM)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Hantavirus IgM (Hanta Virus IgM)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Virus Hanta IgM (Hanta Virus IgM)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Virus Hepatitis B (HBsAg)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "VHB (HBsAg)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Antigeno de superficie Hepatitis B (HBsAg)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: " Mycoplasma pneumoniae Serologia IgM+IgG",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Mycoplasma pneumoniae",
          establecimiento: "Clinica Adventista Los Angeles",
	  nota: "Serología M. pneumoniae IgG + IgM",
        },
		{
          examen: "Virus Inmunodeficiencia Humana (VIH SIDA)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Virus Hepatitis C (VHC)",
          establecimiento: "Santiago - Barnafi (1 semana)",
	  nota: "Solo si tiene otros exámenes a barnafi, de lo contrario: Lab. Cordillera",
        },
		{
          examen: "Hepatitis C (VHC)",
          establecimiento: "Santiago - Barnafi (1 semana)",
	  nota: "Solo si tiene otros exámenes a barnafi, de lo contrario: Lab. Cordillera",
        },
		{
          examen: "Hepatitis A (VHA IgM)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Virus Hepatitis A (VHA IgM)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Virus Hepatitis A IgM (VHA IgM)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Calprotectina",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "BHCG",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "B-HCG",
          establecimiento: "Clinica Adventista Los Angeles (BHCG)",
        },
		{
          examen: "Gonadotropina Corionica Humana subunidad beta (BHCG)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Insulina",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Insulina Post Prandial",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Curva de Insulina (3 muestras)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Estradiol",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Hormona Foliculo Estimulante (FSH)",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Hormona Leutinizante (LH)",
          establecimiento: "Clinica Adventista Los Angeles",
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
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Microalbiminuria 24h",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Acido Folico",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0301002",
	        nota: "Codigo BK: FOL, Muestra: Suero o Plasma, 500 ul",
        },
		{
          examen: "Ac Folico",
          establecimiento: "Santiago - Barnafi (1 semana)",
	        codigo: "0301002",
	        nota: "Codigo BK: FOL, Muestra: Suero o Plasma, 500 ul",
        },
		{
          examen: "Ac. Folico",
          establecimiento: "Santiago - Barnafi (1 semana)",
	        codigo: "0301002",
	        nota: "Codigo BK: FOL, Muestra: Suero o Plasma, 500 ul",
        },
		{
          examen: "Acido Folico Eritrocitario",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "",
	        nota: "Codigo BK: FOLERI",
        },
		{
          examen: "Ac Folico Eritrocitario",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "",
	        nota: "Codigo BK: FOLERI",
        },
		{
          examen: "Ac. Folico Eritrocitario",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "",
	        nota: "Codigo BK: FOLERI",
        },
		{
          examen: "Adenosin Deaminasa (ADA)",
          establecimiento: "Santiago - Barnafi (1 semana)",
	  nota: "Suero o Plasma, 1 ml",
        },
		{
          examen: "Adenosindeaminasa (ADA)",
          establecimiento: "Santiago - Barnafi (1 semana)",
	  nota: "Suero o Plasma, 1 ml",
        },
		{
          examen: "Adenosine Deaminase (ADA)",
          establecimiento: "Santiago - Barnafi (1 semana)",
	  nota: "Suero o Plasma, 1 ml",
        },
		{
          examen: "Caroteno Prueba de Sobrecarga",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0302018",
          nota: ""
        },
		{
          examen: "Calcio ionico",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0302081",
          nota: "Código BK: CAION"
        },
        {
          examen: "Calculo Urinario",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0309009",
          nota: "Código BK: CALC"
        },
		{
          examen: "Caroteno",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0302017",
          nota: "Código BK: CARO"
        },
		{
          examen: "Ceruloplasmina",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0302019",
          nota: "Código BK: CER"
        },
		{
          examen: "Cobre",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Colinesterasa",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Lactato",
          establecimiento: "Santiago - Barnafi (1 semana)",
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
          examen: "Nivel de Drogas Terapeuticas (Acido Valprotico Total)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0302035-1",
          nota: "Codigo BK: VALP",
        },
		{
          examen: "Nivel de Drogas Terapeuticas (Fenitoína)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Nivel de Drogas Terapeuticas (Carbamazepina Total)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0302035-2",
          nota: "Codigo BK: CARB",
        },
        {
          examen: "Nivel de Drogas Terapeuticas (Benzodiazepinas en Orina)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0309106",
          nota: "Codigo BK: BENZ",
        },
        {
          examen: "Nivel de Drogas Terapeuticas (Oxcarbazepina)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "",
          nota: "Codigo BK: OXCAR",
        },
		{
          examen: "Nivel de Drogas Terapeuticas (Fenobarbital)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Examen Barnafi",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0307099",
          nota: "Se utiliza cuando no hay indexado un examen y este debe ser referido en notas",
        },
		{
          examen: "Ac. Valproico (Acido Valprotico)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Plomo",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Prealbumina",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Pre-albumina",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Pre albumina",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Triptasa",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Sirolimus",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Tacrolimus",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Retinol (Vitamina A)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Vit A (Vitamina A)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Vit. A (Vitamina A)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Acido Retinoico (Vitamina A)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Ac Retinoico (Vitamina A)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Ac. Retinoico (Vitamina A)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Piridoxina (Vitamina B6)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Vit. B6 (Vitamina B6)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Vit B6 (Vitamina B6)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Zinc",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "17 Hidroxiprogesterona (17-OHP)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0303029",
          nota: "",
        },
		{
          examen: "17-OH Progesterona (17-OHP)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0303029",
          nota: "",
        },
		{
          examen: "17 OH Progesterona (17-OHP)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0303029",
          nota: "",
        },
    {
          examen: "Anticuerpos Anti-Membrana Basal Glomerular (AAMBG)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305081-2",
          nota: "Codigo BK: MEMBRA",
        },
        {
          examen: "Ac Antimembrana Basal Glomerular (AAMBG)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305081-2",
          nota: "Codigo BK: MEMBRA",
        },
		{
          examen: "Hormona Adrenocorticotropica (ACTH)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0303001",
	        nota: "Codigo BK: ACTH",
        },
		{
          examen: "Corticotropina , Corticotrofina (ACTH)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0303001",
	        nota: "Codigo BK: ACTH",
        },
		{
          examen: "Catecolaminas Plasmaticas",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0303049",
          nota: "Código BK: CATEP"
        },
		{
          examen: "Catecolaminas Urinarias",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0303051",
          nota: "Código BK: CATEOA"
        },
		{
          examen: "Catecolaminas En Orina",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0303051",
          nota: "Código BK: CATEOA"
        },
		{
          examen: "Catecolaminas En Sangre",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0303049",
          nota: "Código BK: CATEP"
        },
		{
          examen: "Aldosterona",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "303002",
	        nota: "Codigo BK: ALDO",
        },
        {
          examen: "Aldosterona en orina",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "",
	        nota: "Codigo BK: ALDOO",
        },
		{
          examen: "Androstenediona (4-androstenediona)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0303003",
	        nota: "Codigo BK: ANDROD",
        },
		{
          examen: "Cortisol AM/PM",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Dehidroepiandrosterona (DHEA)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Dehidroepiandrosterona sulfato (DHEA-SO4)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "DHEA-S (DHEA-SO4)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "DHEAS (DHEA-SO4)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Gastrina",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Somatomedina (IGF1)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Insulin-Like Growth Factor Binding Protein-1 (IGFBP1)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Insulin-Like Growth Factor Binding Protein-3 (IGFBP3)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "IGF Binding Protein 1 (IGFBP1)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "IGF Binding Protein 3 (IGFBP3)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "IGF Binding Protein-1 (IGFBP1)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "IGF Binding Protein-3 (IGFBP3)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Proteina 1 de union al Factor de Crecimiento Similar a Insulina (IGFBP1)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Proteina 3 de union al Factor de Crecimiento Similar a Insulina (IGFBP3)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Metanefrinas Plasmaticas",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Metanefrinas Urinarias",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Metanefrinas en Orina",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Metanefrinas en Sangre",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Parathormona (PTH)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Progesterona",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Renina",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Globulina Fijadora de Hormonas Sexuales (SHBG)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Sex hormone binding globulin (SHBG)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Testosterona Libre",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Testosterona Total",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Testosterona",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "Tiroglobulina",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Alfa 1 Antitripsina (AAT)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "305001",
          nota: "Codigo BK: AATT",
        },
		{
          examen: "Alfa-1 Antitripsina (AAT)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "305001",
          nota: "Codigo BK: AATT",
        },
		{
          examen: "Alfa 2 Macroglobulina (A2M)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Alfa-2 Macroglobulina (A2M)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Alfa Feto Proteina (AFP)",
          establecimiento: "Clinica Adventista Los Angeles",
          codigo: "0305003_xx",
          nota: "Codigo BK: AFP",
        },
		{
          examen: "Anticuerpos Antinucleares (ANA)",
          establecimiento: "Clinica Adventista Los Angeles",
          codigo: "0305005",
          nota: "Codigo BK: ANAS",
        },
		{
          examen: "Anticuerpos Anti-Nucleares (ANA)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305005",
          nota: "Codigo BK: ANAS",
        },
		{
          examen: "Anticuerpos Anti-Nucleo/Citoplasma (ANA)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305005",
          nota: "Codigo BK: ANAS",
        },
		{
          examen: "Anticuerpos Antinucleo/Citoplasma (ANA)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305005",
          nota: "Codigo BK: ANAS",
        },
		{
          examen: "Anticuerpos Anti nucleares-citoplasmaticos (ANA)",
          establecimiento: "Clinica Adventista Los Angeles",
          codigo: "0305005",
          nota: "Codigo BK: ANAS",
        },
		{
          examen: "Anticuerpos Anti Nucleares/Citoplamaticos (ANA)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305005",
          nota: "Codigo BK: ANAS",
        },
		{
          examen: "Anticuerpos Anti-Nucleo/Citoplasma (ANA)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305005",
          nota: "Codigo BK: ANAS",
        },
		{
          examen: "Anticuerpos AntiNucleoCitoplasma (ANA)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305005",
          nota: "Codigo BK: ANAS",
        },
		{
          examen: "AAN (ANA)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305005",
          nota: "Codigo BK: ANAS",
        },
		{
          examen: "Anticuerpos Anti DNA",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305005-3",
          nota: "Codigo BK: ADNA",
        },
		{
          examen: "Ac Anti-DNA",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305005-3",
          nota: "Codigo BK: ADNA",
        },
		{
          examen: "Ac. Anti DNA",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305005-3",
          nota: "Codigo BK: ADNA",
        },
		{
          examen: "Anticuerpos Anti Peptido Citrulinado(CCP, IgG)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305099",
          nota: "Codigo BK: CCPP",
        },
		{
          examen: "Anti-CCP (CCP, IgG)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305099",
          nota: "Codigo BK: CCPP",
        },
		{
          examen: "Ac. Anti-CCP (CCP, IgG)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305099",
          nota: "Codigo BK: CCPP",
        },
		{
          examen: "Ac. Anti CCP (CCP, IgG)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305099",
          nota: "Codigo BK: CCPP",
        },
		{
          examen: "Anticuerpos Anti-CCP (CCP, IgG)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "ACCP (CCP, IgG)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305099",
          nota: "Codigo BK: CCPP",
        },
		{
          examen: "Anticuerpos Anti Endomisio (EMA, IgA)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305081-1",
          nota: "Codigo BK: EMA",
        },
		{
          examen: "Ac. Antiendomisio (EMA, IgA)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305081-1",
          nota: "Codigo BK: EMA",
        },
		{
          examen: "Ac. Anti Endomisio (EMA, IgA)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305081-1",
          nota: "Codigo BK: EMA",
        },
        {
          examen: "Anticuerpos Anti peptido deaminado de gliadina IgA ",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305086-1",
          nota: "Codigo BK: GLIDA",
        },
        {
          examen: "Ac Anti peptido deaminado de gliadina IgA ",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305086-1",
          nota: "Codigo BK: GLIDA",
        },
        {
          examen: "Anticuerpos Anti peptido deaminado de gliadina IgG ",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305086-1",
          nota: "Codigo BK: GLIDG",
        },
        {
          examen: "Ac Anti peptido deaminado de gliadina IgG ",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305086-2",
          nota: "Codigo BK: GLIDG",
        },
      {
          examen: "Anticuerpos Antifosfolipidos",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305007-4",
          nota: "",
        },
        {
          examen: "Anticuerpos Anti-fosfolipidos",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305007-4",
          nota: "",
        },
        {
          examen: "Ac Antifosfolipidos",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305007-4",
          nota: "",
        },
		{
          examen: "Anticuerpos Anti Gliadina IgG",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305086",
          nota: "Codigo BK: GLIG",
        },
		{
          examen: "Antigliadina IgG",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305086",
          nota: "Codigo BK: GLIG",
        },
		{
          examen: "Ac Antigliadina IgG",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305086",
          nota: "Codigo BK: GLIG",
        },
		{
          examen: "Ac. Anti Gliadina IgG",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305086",
          nota: "Codigo BK: GLIG",
        },
		{
          examen: "Anticuerpos Anti Gliadina IgA",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305086",
          nota: "Codigo BK: GLIA",
        },
		{
          examen: "Antigliadina IgA",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305086",
          nota: "Codigo BK: GLIA",
        },
		{
          examen: "Ac Antigliadina IgA",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305086",
          nota: "Codigo BK: GLIA",
        },
		{
          examen: "Ac. Anti Gliadina IgA",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305086",
          nota: "Codigo BK: GLIA",
        },
		{
          examen: "Anticuerpos Antigliadina (IgG, IgA)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305086",
          nota: "Codigo BK: GLIA + GLIG",
        },
		{
          examen: "Anticuerpos Anti Transglutaminasa IgA",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305181-1",
          nota: "Codigo BK: GLUTAS",
        },
		{
          examen: "Ac anti transglutaminasa IgA",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305181-1",
          nota: "Codigo BK: GLUTAS",
        },
        {
          examen: "Anticuerpos Anti Transglutaminasa IgG",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305181-1",
          nota: "Codigo BK: GLUTAG",
        },
		{
          examen: "Ac anti transglutaminasa IgG",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305181-1",
          nota: "Codigo BK: GLUTAG",
        },
        {
          examen: "Anticuerpos Anti Celulas Parietales (IFI)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "PARI",
          nota: "Codigo BK: PARI",
        },
        {
          examen: "Anticuerpos Anti Celulas Parietales IgG",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "PARIELISA",
          nota: "Codigo BK: PARIELISA",
        },
		{
          examen: "Anticuerpos Anti Microsomales",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305086",
          nota: "Codigo BK: AMIC",
        },
		{
          examen: "Ac Antimicrosomales",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305086",
          nota: "Codigo BK: AMIC",
        },
		{
          examen: "Ac. Antimicrosomales",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305086",
          nota: "Codigo BK: AMIC",
        },
		{
          examen: "Auto Anticuerpos",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "autoanticuerpos",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Anticuerpos Anti Cardiolipinas (IgG y/o IgM)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305084",
	        nota: "Codigo BK: CARG, CARM (Esepcificar segun corresponda)",
        },
		{
          examen: "Ac Anticardiolipinas (IgG y/o IgM)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305084",
	        nota: "Codigo BK: CARG, CARM (Esepcificar segun corresponda)",
        },
		{
          examen: "Ac. Anticardiolipinas (IgG y/o IgM)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305084",
	        nota: "Codigo BK: CARG, CARM (Esepcificar segun corresponda)",
        },
		{
          examen: "Anticardiolipinas (IgG y/o IgM)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305084",
	        nota: "Codigo BK: CARG, CARM (Esepcificar segun corresponda)",
        },
		{
          examen: "Anticoagulante Lupico",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Anticuerpos Anti Receptor TSH (TRAB)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305124",
          nota: "Codigo BK: TRABB",
        },
		{
          examen: "Ac Anti Receptor TSH (TRAB)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305124",
          nota: "Codigo BK: TRABB",
        },
		{
          examen: "TRABS",
          establecimiento: "Barnafi (Correción: Ac Anti Receptor TSH - TRAB)",
          codigo: "0305124",
          nota: "Codigo BK: TRABB",
        },
		{
          examen: "Ac. antireceptor TSH (TRAB) ",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305124",
          nota: "Codigo BK: TRABB",
        },
		{
          examen: "Ac antireceptor TSH (TRAB)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305124",
          nota: "Codigo BK: TRABB",
        },
		{
          examen: "Ac. anti trab (TRAB)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305124",
          nota: "Codigo BK: TRABB",
        },
		{
          examen: "anti trab (TRAB)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305124",
          nota: "Codigo BK: TRABB",
        },
		{
          examen: "Anti B2 Glicoproteina IgG, IgM",
          establecimiento: "Santiago - Santiago - Barnafi (1 semana)",
          codigo: "0305105 (IgG) 0305105-1 (IgM)",
          nota: "Codigo BK: B2G (IgG), B2M (IgM)",
        },
		{
          examen: "Glicoproteina (Anti B2 Glicoproteina IgG, IgM)",
          establecimiento: "Santiago - Barnafi (1 semana) ",
          codigo: "0305105 (IgG) 0305105-1 (IgM)",
          nota: "Codigo BK: B2G (IgG), B2M (IgM)",
        },
		{
          examen: "Ac. Anti B2 Glicoproteina IgG, IgM (Anti B2 Glicoproteina IgG, IgM)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305105 (IgG) 0305105-1 (IgM)",
          nota: "Codigo BK: B2G (IgG), B2M (IgM)",
        },
		{
          examen: "Anticuerpos Anti B2 Glicoproteina (Anti B2 Glicoproteina IgG, IgM)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305105 (IgG) 0305105-1 (IgM)",
          nota: "Codigo BK: B2G (IgG), B2M (IgM)",
        },
		{
          examen: "Ac Anti B2 Glicoproteina IgG, IgM (Anti B2 Glicoproteina IgG, IgM)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305105 (IgG) 0305105-1 (IgM)",
          nota: "Codigo BK: B2G (IgG), B2M (IgM)",
        },
		{
          examen: "Anticuerpos Anti Musculo liso (ASMA)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305005-4",
          nota: "Codigo BK: ASMA",
        },
		{
          examen: "Anticuerpos Antimusculo liso (ASMA)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305005-4",
          nota: "Codigo BK: ASMA",
        },
		{
          examen: "ac anti Musculo liso (ASMA)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305005-4",
          nota: "Codigo BK: ASMA",
        },
		{
          examen: "ac. antimusculo liso (ASMA)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305005-4",
          nota: "Codigo BK: ASMA",
        },
		{
          examen: "Ac. anti musculo liso (ASMA)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305005-4",
          nota: "Codigo BK: ASMA",
        },
		{
          examen: "Anticuerpos Anti LKM-1 (LKM)",
          establecimiento: "Santiago - Barnafi (1 semana) Ac. Anti LKM-1",
        },
		{
          examen: "Ac Anti LKM-1 (LKM)",
          establecimiento: "Santiago - Barnafi (1 semana) Ac. Anti LKM-1",
        },
		{
          examen: "Ac LKM (LKM)",
          establecimiento: "Santiago - Barnafi (1 semana) Ac. Anti LKM-1",
        },
		{
          examen: "Anticuerpos Anti Mitocondriales (AMIT)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305005-2",
          nota: "Codigo BK: AMIT",
        },
		{
          examen: "Ac Anti Mitocondriales (AMIT)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305005-2",
          nota: "Codigo BK: AMIT",
        },
		{
          examen: "Ac. Anti mitocondrial (AMIT)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305005-2",
          nota: "Codigo BK: AMIT",
        },
		{
          examen: "Anticuerpos Anti Mieloperoxidasa (MPO)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305107",
          nota: "Codigo BK: MPO",
        },
		{
          examen: "Anticuerpos AntiMieloperoxidasa (MPO)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305107",
          nota: "Codigo BK: MPO",
        },
		{
          examen: "Ac Anti Mieloperoxidasa (MPO)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305107",
          nota: "Codigo BK: MPO",
        },
		{
          examen: "Ac. antimieloperoxidasa (MPO)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305107",
          nota: "Codigo BK: MPO",
        },
		{
          examen: "Ac anti-mieloperoxidasa (A-MPO)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305107",
          nota: "Codigo BK: MPO",
        },
		{
          examen: "Ac anti-MPO (MPO)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305107",
          nota: "Codigo BK: MPO",
        },
		{
          examen: "Anticuerpos Anticentromero (ACA)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305005-1",
          nota: "Codigo BK: ANTICEN",
        },
		{
          examen: "Ac Anticentromero (ACA)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305005-1",
          nota: "Codigo BK: ANTICEN",
        },
		{
          examen: "Ac. Anti Centromero (ACA)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305005-1",
          nota: "Codigo BK: ANTICEN",
        },
		{
          examen: "Anticuerpos Anticentromero (ACA)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305005-1",
          nota: "Codigo BK: ANTICEN",
        },
		{
          examen: "Anticuerpos Anti Proteinasa 3 (ANTI-PR3)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305007-10",
          nota: "Codigo BK: PR3",
        },
		{
          examen: "Ac Proteinasa 3 (ANTI-PR3)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305007-10",
          nota: "Codigo BK: PR3",
        },
		{
          examen: "Ac. Proteinasa 3 (ANTI-PR3)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305007-10",
          nota: "Codigo BK: PR3",
        },
		{
          examen: "Anticuerpos Anticitoplasma de Neutrofilos (ANCA C y/o P)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305082",
          nota: "Codigo BK: ANCA, ANCAC, ANCAP (segun corresponda)",
        },
		{
          examen: "ANCAS C y/o P",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305082",
          nota: "Codigo BK: ANCA, ANCAC, ANCAP (segun corresponda)",
        },
		{
          examen: "CA 15-3",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "CA15",
          establecimiento: "Clinica Adventista Los Angeles, CA 15-3",
        },
		{
          examen: "CA 19-9",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "CA19",
          establecimiento: "Clinica Adventista Los Angeles, CA 19-9",
        },
		{
          examen: "CA19-9",
          establecimiento: "Clinica Adventista Los Angeles, CA 19-9",
        },
		{
          examen: "CA125",
          establecimiento: "Clinica Adventista Los Angeles, CA 125",
        },
		{
          examen: "CA 125",
          establecimiento: "Clinica Adventista Los Angeles",
        },
		{
          examen: "SM, RO, RNP, LA, SCL-70, JO-1, ENA",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "ENA screening",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "ENA tamizaje",
          establecimiento: "Santiago - Barnafi (1 semana)",
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
          examen: "Marcadores Inmunologicos Diabetes: Anticuerpos anti tirosin fosfatasa (IA2)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Marcadores Inmunologicos Diabetes: Anticuerpos anti células beta (ICA)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Marcadores Inmunologicos Diabetes: Anticuerpos anti insulina (IAA)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Marcadores Inmunologicos Diabetes: Anticuerpos anti descarboxilasa del ácido glutámico (GAD)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Marcadores Inmunologicos Diabetes: Anticuerpos Anti Transportador 8 del Zinc (ZNT8)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Panel Miositis 16, Auto Anticuerpos Tipo IgG",
          establecimiento: "Santiago - Barnafi (1 semana)",
	        nota: "Anti-Mi-2alpha, Anti-Mi-2beta, Anti-TIF1gamma, Anti-MDA5, Anti-NXP2, Anti-SAE1, Anti-Ku, Anti-PM-Scl100, Anti-PM-Scl75, Anti-Jo-1, Anti-SRP, Anti-PL-7, Anti-PL-12, Anti-EJ, Anti-OJ, Anti-Ro52",
        },
		{
          examen: "Tipificación HLA-B27",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Anticuerpos Anti Hormona Mulleriana (AMH)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Ac Antihormona Mulleriana (AMH)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Ac. Antihormona Mulleriana (AMH)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Adenovirus Serologia IgG, IgM",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Antigeno Galactomanano",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Bartonella henselae Serologia IgG, IgM",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "BARTH",
          nota: "Codigo BK, IgG: BARG, IgM: BARM (Especificar segun corresponda)",
        },
		{
          examen: "Chlamydia en Sangre Serologia IgG, IgM ",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Citomegalovirus (CMV) Serologia IgG, IgM ",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Epstein Barr Virus Serologia IgG, IgM ",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Virus Epstein Barr Serologia IgG, IgM ",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "FTA-ABS (Sifilis)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "FT-ABS (Sifilis)",
          establecimiento: "Santiago - Barnafi (Correción: FTA-ABS)",
        },
		{
          examen: "FTABS (Sifilis)",
          establecimiento: "Santiago - Barnafi (Correción: FTA-ABS)",
        },
		{
          examen: "FTA ABS (Sifilis)",
          establecimiento: "Santiago - Barnafi (Correción: FTA-ABS)",
        },
		{
          examen: "Virus Herpes Simple I Serología IgG, IgM",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Virus Herpes Simple II Serología IgG, IgM",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Anticuerpos Anti Antigeno de superficie Hepatitis B (Anti-HBsAG, Anti HbsAG)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "ANTIHBS",
          nota: "Codigo BK: ANTIHBS",
        },
		{
          examen: "Anticuerpos Anti-Antigeno de superficie Hepatitis B (Anti-HBsAG, Anti HbsAG)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "ANTIHBS",
          nota: "Codigo BK: ANTIHBS",
        },
		{
          examen: "Ac Anti-Antigeno de superficie Hepatitis B (Anti-HBsAG, Anti HbsAG)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "ANTIHBS",
          nota: "Codigo BK: ANTIHBS",
        },
		{
          examen: "Ac Anti Antigeno de superficie Hepatitis B (Anti-HBsAG, Anti HbsAG)",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "ANTIHBS",
          nota: "Codigo BK: ANTIHBS",
        },
		{
          examen: "Anticuerpos Anti Core Hepatitis B (Anticore HB IgM)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Antigeno E, Hepatitis B",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Anticuerpos Anti Antigeno E, Hepatitis B",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Anticuerpos Anti-Antigeno E, Hepatitis B",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Ac Anti Antigeno E, Hepatitis B",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "17-Cetosteroides, 17 Cetosteroides Orina",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0303043",
          nota: "",
        },
		{
          examen: "17-Hidroxicorticosteroides, 17-OH Corticosteroides",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0303044",
          nota: "",
        },
		{
          examen: "Virus Zika Serologia IgG, IgM",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
		{
          examen: "Bordetella pertusis IgG",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "BOG",
          nota: "Código BK: BOG"
        },
        {
          examen: "Bordetella pertusis IgM",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "BOM",
          nota: "Código BK: BOM"
        },
		{
          examen: "Panel de Infecciones de Transmision Sexual (Panel ITS (ETS) - PCR-RT)",
          establecimiento: "Santiago - Barnafi (1 semana)",
        },
	  {
          examen: "Cadenas Livianas Libres, razon kappa/lambda",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "0305300",
          nota: "Código BK: CUANTIKALA"
        },
    {
          examen: "Virus Papiloma Humano PCR-RT (VPH 14 subtipos) MUJER",
          establecimiento: "Santiago - Barnafi (1 semana)",
          nota: "Frasco y Cepillo Citoliq",
        },
    {
          examen: "Virus Papiloma Humano PCR-Microarray (VPH 30 subtipos) Hombre o Mujer",
          establecimiento: "Santiago - Barnafi (1 semana)",
          codigo: "",
          nota: "Tubo rosado con torula de dacron",
        },
        {
          examen: "ONCOGEN: Estudio Genetico Oncologico",
          establecimiento: "Santiago - Barnafi",
          codigo: "ONC",
          nota: "",
        },
        {
          examen: "Anticuerpos anti receptores de acetilcolina",
          establecimiento: "Santiago - Barnafi",
          codigo: "ACERTILRECE",
          nota: "Código BK: ACETILRECE",
        },
        {
          examen: "Apolipoproteina A1",
          establecimiento: "Santiago - Barnafi",
          codigo: "0302070-1",
          nota: "Código BK: APOA",
        },
        {
          examen: "Apolipoproteina B",
          establecimiento: "Santiago - Barnafi",
          codigo: "0302070-2",
          nota: "Código BK: APOB",
        },
        {
          examen: "Arsenico en Orina",
          establecimiento: "Santiago - Barnafi",
          codigo: "0309034",
          nota: "Código BK: ARSOA",
        },
        {
          examen: "Arsenico en sangre",
          establecimiento: "Santiago - Barnafi",
          codigo: "0302134",
          nota: "Código BK: ARSESANGRE",
        },
        {
          examen: "Beta 2 Microglobulina",
          establecimiento: "Santiago - Barnafi",
          codigo: "0305010",
          nota: "Código BK: BETA2",
        },
      ]

      buscarForm.addEventListener("submit", function (e) {
        e.preventDefault()
        resultadoTitulo.classList.remove("d-none")
        const examenBuscado = document
          .getElementById("buscar")
          .value.toLowerCase()
        resultado.innerHTML = ""

        const resultadoFiltrados = datos.filter((d) =>
          d.examen.toLowerCase().includes(examenBuscado)
        )

        if (resultadoFiltrados.length > 0) {
          resultadoFiltrados.forEach((r) => {
            const row = document.createElement("tr")
            row.innerHTML = `
              <td><strong>${r.examen}</strong></td>
              <td>${r.establecimiento}</td>
              <td>${r.codigo ? r.codigo : ''}</td>
              <td>${r.nota ? r.nota : ''}</td>
            `
            resultado.appendChild(row)
          })
        } else {
          resultado.innerHTML = `
            <tr>
              <td colspan="3"><strong>No se encontró el examen:</strong> 
                ${document.getElementById("buscar").value}</td>
            </tr>
            <tr>    
              <td colspan="3">Busque una variable del nombre: 
                ${document.getElementById("buscar").value}</td>
            </tr>
          `
        }
      })