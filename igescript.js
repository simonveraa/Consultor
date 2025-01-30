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

}); //cerrando buscarForm

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
        if (r.tubo || r.alergenos || r.individual || r.panel || r.nota || r.img) {
            const row = document.createElement("div")
            row.classList.add("table")
            let thHTML = ''
            let tdHTML = ''

            if (r.tubo) {
                thHTML += '<th>Head1</th>'
                tdHTML += `<td>${r.tubo}</td>`
            }
            if (r.alergenos) {
                thHTML += '<th>Alérgenos</th>'
                tdHTML += `<td>${r.alergenos}</td>`
            }
            if (r.individual) {
                thHTML += '<th>IgE específica c/u</th>'
                tdHTML += `<td>${r.individual}</td>`
            }
            if (r.panel) {
                thHTML += '<th>Mezcla/Panel</th>'
                tdHTML += `<td>${r.panel}</td>`
            }
            if (r.nota) {
                thHTML += '<th>Head5</th>'
                tdHTML += `<td>${r.nota}</td>`
            }
            if (r.img) {
                thHTML += '<th>Head6</th>'
                tdHTML += `<td>${r.img}</td>`
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