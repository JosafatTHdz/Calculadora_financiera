document.addEventListener("DOMContentLoaded", () => {
    const monto = document.getElementById("monto") as HTMLInputElement;
    const desc = document.getElementById("desc") as HTMLInputElement;
    const table_body = document.getElementById("table-body") as HTMLTableSectionElement;
    const ingreso = document.getElementById("ingreso");
    const egreso = document.getElementById("egreso");
    const balanceElement = document.getElementById("balance") as HTMLSpanElement;

    if (!monto || !desc || !table_body || !ingreso || !egreso) {
        console.error("No se pudieron encontrar todos los elementos necesarios en el DOM.");
        return;
    }

    let balance = 0;

    function Ingresar() {
        const montoValue = parseFloat(monto.value);
        if (isNaN(montoValue) || montoValue <= 0) {
            alert("Por favor ingresa un monto válido mayor a 0.");
            return;
        }

        const descripcion = desc.value || "Sin descripción";

        // Agregar nueva fila
        table_body.innerHTML += `
        <tr>
            <td>${montoValue.toFixed(2)}</td>
            <td>${descripcion}</td>
            <td>Ingreso</td>
        </tr>
        `;

        // Actualizar balance
        balance += montoValue;
        balanceElement.textContent = `$${balance.toFixed(2)}`;

        // Limpiar inputs
        monto.value = "";
        desc.value = "";
    }

    function Egresar() {
        const montoValue = parseFloat(monto.value);
        if (isNaN(montoValue) || montoValue <= 0) {
            alert("Por favor ingresa un monto válido mayor a 0.");
            return;
        }

        const descripcion = desc.value || "Sin descripción";

        // Agregar nueva fila
        table_body.innerHTML += `
        <tr>
            <td>${montoValue.toFixed(2)}</td>
            <td>${descripcion}</td>
            <td>Egreso</td>
        </tr>
        `;

        // Actualizar balance
        balance -= montoValue;
        balanceElement.textContent = `$${balance.toFixed(2)}`;

        // Limpiar inputs
        monto.value = "";
        desc.value = "";
    }

    ingreso.addEventListener("click", Ingresar);
    egreso.addEventListener("click", Egresar);
});
