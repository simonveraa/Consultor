const buscarForm = document.getElementById("buscarForm")
const resultado = document.getElementById("resultado")
const resultadoTitulo = document.getElementById("resultado-titulo")

      

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
              <td>${r.codigoBK ? r.codigoBK : ''}</td>
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