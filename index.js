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

  const codigosVistos = new Set(); // <-- para registrar los códigos únicos. El Set es una estructura de datos que no permite repeticiones.

  if (resultadoFiltrados.length > 0) {
      tabla.classList.remove("d-none")
      resultadoTitulo.classList.remove("d-none")
      resultadoFiltrados.forEach((r) => {
        if (!r.codigo || !codigosVistos.has(r.codigo)) { // <-- si no tiene código o en el Set ya está el código
          const row = document.createElement("tr")
          row.innerHTML = `
            <td><strong>${r.examen}</strong></td>
            <td>${r.establecimiento}</td>
            <td>${r.codigo ? r.codigo : ''}</td>
            <td>${r.nota ? r.nota : ''}</td>
          `
          resultado.appendChild(row)

          if (r.codigo) {
            codigosVistos.add(r.codigo) // <-- para agregar los elementos que tengan código al Set
            console.log(codigosVistos)
        }
      }  
      })
    } else {
      sinResultado.innerHTML = `
      <div class="fs-2 text-danger mt-4"><strong>No se encontró el examen:</strong> "${examenBuscado}"</div>
      <div class="fs-4">Busque una variante de <i>"${examenBuscado}"</i>.</div>
      `
    }
  }
)