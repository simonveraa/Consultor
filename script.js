const buscarForm = document.getElementById("buscarForm")
const resultado = document.getElementById("resultado")
const sinResultado = document.getElementById("sin-resultado")
const resultadoTitulo = document.getElementById("resultado-titulo")
const tabla = document.getElementById("tabla")
const input = document.getElementById("buscar")
const previewList = document.getElementById("preview")
const updatesv = document.getElementById("updatesv")
const separador = document.getElementById("separador")

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
    updatesv.classList.add("asvbot")
    separador.classList.remove("d-none")
    tabla.classList.remove("d-none")
    resultadoTitulo.classList.remove("d-none")
  
    resultadoFiltrados.forEach((r) => {
      const row = document.createElement("tr")
      row.innerHTML = `
        <td style="text-align: center; vertical-align: middle;">${r.tubo ? r.tubo : ''}</td>
        <td style="vertical-align: middle;"><b>${r.examen}</b></td>
        <td style="vertical-align: middle;">${r.establecimiento}</td>
        <td style="vertical-align: middle;">${r.codigo ? r.codigo : ''}</td>
        <td style="vertical-align: middle;">${r.codigoBK ? r.codigoBK : ''}</td>
        <td style="vertical-align: middle;">${r.nota ? r.nota : ''}</td>
        <td style="text-align: center; vertical-align: middle;">${r.img ? r.img : ''}</td>
      `
      resultado.appendChild(row)
    })
  } else {
      sinResultado.innerHTML = `
      <div class="fs-3 text-danger mt-4"><strong>No se encontró el examen:</strong> "${examenBuscado}"</div>
      <div class="fs-4">Busque una variante de <i>"${examenBuscado}"</i>.</div>
      `
  }
}