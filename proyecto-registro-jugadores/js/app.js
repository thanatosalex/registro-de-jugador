const form = document.getElementById('newPlayer');
const contenedor = document.getElementById("playerList");

// Refrescar lista de jugadores
initList();

// añadir una funcion  al evento click del boton 
form.addEventListener("submit", function (event) {
    //Evita la recarga de pagina.
    event.preventDefault();
    // Comprobar si el formulario es correcto
    let error = errorForm();
    if (!error) {
        // Añade un nuevo objecto cliente al array de datos
        newPlayer();
    } else {
        alert(error);
    }
});

function errorForm() {

    // recoger los valores
    let phone = document.getElementById("phone").value;

    // Comprobar que el numero de telefono sea valido
    if (phone < 100000000 || phone > 999999999) {
        return 'Numero de telefono no valido.';
    }

    return false;
}


function newPlayer() {

    // recoger los valores
    let dni = document.getElementById('dni').value;
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById("lastname").value;
    let birthDate = document.getElementById("birthDate").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let iban = document.getElementById("iban").value;
    let type = document.getElementById("type").value;

    // nuevo objeto jugador
    let player = {
        "dni": dni,
        "firstname": firstname,
        "lastname": lastname,
        "birthDate": birthDate,
        "phone": phone,
        "email": email,
        "iban": iban,
        "type": type
    };

    // añadir  el objecto al array de clientes
    // push es metodo de la array, es para añadir y meter la informacion de la array
    playerList.push(player);
    // Refrescar lista de jugadores
    initList();
}

    // gettypetext llamamos al id type donde esta, dentro de value 
function initList() {
    contenedor.innerHTML = "";
    for (let player of playerList) {
        contenedor.innerHTML += `
            <div class="flex-container">
                <div>
                    <img class="player-img" src="https://iupac.org/wp-content/uploads/2018/05/default-avatar-300x300.png">
                </div>
                <ul class="player-data">
                    <li>${player.dni}</li>
                    <li>${player.firstname} ${player.lastname}</li>
                    <li>${player.birthDate}</li>
                    <li>${player.phone}</li>
                    <li>${player.email}</li>
                    <li>${player.iban}</li>
                    <li>${getTypeText(player.type)}</li>
                </ul>
            </div>
        `;
    }
}



function getTypeText(type) {
    switch (type) {
        case 'del':
            return 'Delantero';
        case 'cen':
            return 'Centrocampista';
        case 'def':
            return 'Defensa';
        case 'por':
            return 'Portero';

    // sirve para que no recargue la pagina, y cuando le damos añadir jugador no tenga que recagar la pagina 
        default:
            return 'Error';
    }
}