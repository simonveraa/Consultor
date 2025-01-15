const buscarForm = document.getElementById("buscarForm")
const resultado = document.getElementById("resultado")
const sinResultado = document.getElementById("sin-resultado")
const resultadoTitulo = document.getElementById("resultado-titulo")
const tabla = document.getElementById("tabla")
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
      previewList.appendChild(option)
    })
  } else {
    previewList.classList.add('d-none')
  }
})

buscarForm.addEventListener("submit", function (event) {
  event.preventDefault()

  const examenBuscado = normalizarTexto(input.value)

  tabla.classList.add("d-none")
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
    tabla.classList.remove("d-none")
    resultadoTitulo.classList.remove("d-none")
  
    resultadoFiltrados.forEach((r) => {
      const row = document.createElement("tr")
      row.innerHTML = `
        <td><strong>${r.examen}</strong></td>
        <td>${r.establecimiento}</td>
        <td>${r.codigo ? r.codigo : ''}</td>
        <td>${r.codigoBK ? r.codigoBK : ''}</td>
        <td>${r.nota ? r.nota : ''}</td>
      `
      resultado.appendChild(row)
    })
  } else {
      sinResultado.innerHTML = `
      <div class="fs-3 text-danger mt-4"><strong>No se encontró el examen:</strong> "${examenBuscado}"</div>
      <div class="fs-4">Busque una variante de <i>"${examenBuscado}"</i>.</div>
      `
  }
})