// Captura a geolocalização do usuário
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("status").innerHTML = "Geolocalização não é suportada por este navegador.";
    }
}

// Mostra a posição do usuário no campo de localização
function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    document.getElementById("location").value = `Latitude: ${latitude}, Longitude: ${longitude}`;
    document.getElementById("status").innerHTML = "Localização obtida com sucesso!";
}

// Mostra uma mensagem de erro se a geolocalização falhar
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("status").innerHTML = "Usuário negou a solicitação de Geolocalização.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("status").innerHTML = "Informação de localização indisponível.";
            break;
        case error.TIMEOUT:
            document.getElementById("status").innerHTML = "A solicitação de localização expirou.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("status").innerHTML = "Ocorreu um erro desconhecido.";
            break;
    }
}

// Lógica do envio do formulário
document.getElementById('reportForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const photo = document.getElementById('photo').files[0];
    const location = document.getElementById('location').value;

    if (!name || !contact || !photo || !location) {
        document.getElementById("status").innerHTML = "Por favor, preencha todos os campos.";
        return;
    }

    // Aqui você pode adicionar a lógica para enviar os dados para o servidor via AJAX ou usar um backend
    console.log("Nome: ", name);
    console.log("Contato: ", contact);
    console.log("Foto: ", photo.name);
    console.log("Localização: ", location);
    
    document.getElementById("status").innerHTML = "Relatório enviado com sucesso!";
});