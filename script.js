const buscarForm = document.getElementById("buscarForm")
const resultado = document.getElementById("resultado")
const sinResultado = document.getElementById("sin-resultado")
const resultadoTitulo = document.getElementById("resultado-titulo")
const tabla = document.getElementById("tabla")

buscarForm.addEventListener("submit", function (e) {

  const examenBuscado = document.getElementById("buscar").value.toLowerCase()
  e.preventDefault()
  tabla.classList.add("d-none")
  resultadoTitulo.classList.add("d-none")
  resultado.innerHTML = ""
  sinResultado.innerHTML = ""

  const resultadoFiltrados = datos.filter((d) => d.examen.toLowerCase().includes(examenBuscado))

  const codigosVistos = new Set()
  const codigosYCodigosBKVistos = new Set()
  const elementosFiltrados = []
  
  resultadoFiltrados.forEach((r) => {
    if (!r.codigo || r.comparte) {
      elementosFiltrados.push(r)
      return
    }
  
    if (r.codigoBK) {
      if (!codigosYCodigosBKVistos.has(`${r.codigo}-${r.codigoBK}`)) {
        codigosYCodigosBKVistos.add(`${r.codigo}-${r.codigoBK}`)
        elementosFiltrados.push(r)
      }
    } else {

      if (!codigosVistos.has(r.codigo)) {
        codigosVistos.add(r.codigo)
        elementosFiltrados.push(r)
      }
    }
  })
  
  if (elementosFiltrados.length > 0) {
    tabla.classList.remove("d-none");
    resultadoTitulo.classList.remove("d-none")
  
    elementosFiltrados.forEach((r) => {
      const row = document.createElement("tr")
      row.innerHTML = `
        <td><strong>${r.examen}</strong></td>
        <td>${r.establecimiento}</td>
        <td>${r.codigo ? r.codigo : ''}</td>
        <td>${r.nota ? r.nota : ''}</td>
      `;
      resultado.appendChild(row)
    })
  } else {
      sinResultado.innerHTML = `
      <div class="fs-2 text-danger mt-4"><strong>No se encontró el examen:</strong> "${examenBuscado}"</div>
      <div class="fs-4">Busque una variante de <i>"${examenBuscado}"</i>.</div>
      `
  }
  
  console.log(codigosVistos)
  console.log(codigosYCodigosBKVistos)

})