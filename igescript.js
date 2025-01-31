const buscarForm = document.getElementById("buscarForm")
const resultado = document.getElementById("resultado")
const sinResultado = document.getElementById("sin-resultado")
const resultadoTitulo = document.getElementById("resultado-titulo")
const input = document.getElementById("buscar")
const previewList = document.getElementById("preview")

function normalizarTexto(texto) {
  texto = texto.toLowerCase()
  texto = texto.replace(/-/g, ' ')
  texto = texto.replace(/\./g, '')
  texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, '')
  
  return texto
}

input.addEventListener('input', (event) => {
  const textoBuscado = normalizarTexto(event.target.value)

  previewList.innerHTML = ""

  if (textoBuscado.length === 0) {
    previewList.classList.add('d-none')
    return
  }

  const previews = []

  datos.forEach((dato) => {
    if (normalizarTexto(dato.examen).includes(textoBuscado) || 
        (dato.keywords && dato.keywords.some(keyword => normalizarTexto(keyword).includes(textoBuscado)))) {
      if (!previews.includes(normalizarTexto(dato.examen))) {
        previews.push(dato.examen)
      }
    }
  })

  if (previews.length > 0) {
    previewList.classList.remove('d-none')
    previewList.size = Math.min(previews.length, 5)

    previews.forEach((preview) => {
      const option = document.createElement('option')
      option.textContent = preview

      option.addEventListener('click', () => { //agregando una escucha al click del preview
        input.value = preview; //meter al input el valor del preview clickeado
        handleSearch();
      });

      previewList.appendChild(option)
    })
  } else {
    previewList.classList.add('d-none')
  }
})

buscarForm.addEventListener("submit", function (event) {
  event.preventDefault()

  handleSearch()

}); 

function handleSearch() { //función de handleSearch añadir resultados a y crear tabla
  const examenBuscado = normalizarTexto(input.value)

  resultadoTitulo.classList.add("d-none")
  resultado.innerHTML = ""
  sinResultado.innerHTML = ""

  const resultadoFiltrados = datos.filter((dato) => {
    return (
      normalizarTexto(dato.examen).includes(examenBuscado) ||
      dato.keywords?.some(keyword => normalizarTexto(keyword).includes(examenBuscado))
    )
  })
  
  if (resultadoFiltrados.length > 0) {
    resultadoTitulo.classList.remove("d-none")

    resultadoFiltrados.forEach((r) => {
        if (r.alergenos || r.panel || r.individual || r.comida || r.animal || r.arbol) {
            const row = document.createElement("div")
            row.classList.add("table")
            let thHTML = ''
            let tdHTML = ''

            if (r.alergenos) {
                thHTML += '<th>Alérgenos</th>'
                tdHTML += `<td>${r.alergenos}</td>`
            }
            if (r.panel) {
              thHTML += '<th>Mezcla/Panel</th>'
              tdHTML += `<td><a href="#" class="panel-link" data-panel="${r.panel}">${r.panel}</a></td>`
            }
            if (r.individual) {
              thHTML += '<th>IgE específica c/u</th>'
              tdHTML += `<td>${r.individual}</td>`
            }
            if (r.veg) {
                thHTML += '<th>Vegetal</th>'
                tdHTML += `<td>${r.veg}</td>`
            }
            if (r.animal) {
                thHTML += '<th>Alérgeno Animal</th>'
                tdHTML += `<td>${r.animal}</td>`
            }
            if (r.arbol) {
                thHTML += '<th>Árboles</th>'
                tdHTML += `<td>${r.arbol}</td>`
            }
            if (r.micro) {
              thHTML += '<th>Microorganismos</th>'
              tdHTML += `<td>${r.micro}</td>`
          }

            row.innerHTML = `
                <h4 class="igeresultado">${r.examen}</h4><br>
                <table class="table">
                    <tr>
                        ${thHTML}
                    </tr>
                    <tr>
                        ${tdHTML}
                    </tr>
                </table>
            `
            resultado.appendChild(row)
        }
    })

    

  } else {
      sinResultado.innerHTML = `
      <div class="fs-3 text-danger mt-4"><strong>No se realiza el alergeno:</strong> "${examenBuscado}"</div>
      `
  }
}
//intentando hacer dinámica la propiedad de panel, que sea insertada y buscada.
document.querySelectorAll('.panel-link').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    input.value = event.target.dataset.panel
    handleSearch()
  })
})
// función para insertar y buscar paneles desde el index.html (Panel Chile)
window.onload = function() {
  var inputValue = localStorage.getItem('inputValue');
  console.log("Recuperado de localStorage", inputValue)
  if (inputValue) {
    input.value = inputValue;
    handleSearch()
    localStorage.removeItem('inputValue');  
  }
};
