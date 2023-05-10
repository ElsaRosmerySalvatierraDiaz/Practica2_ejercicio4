var View = {
    displayData: function(data) {
        var table = '<table class="table">';
        table += '<thead><tr><th>Nombre</th><th>Correo</th><th>Teléfono</th><th>País</th><th>Edad</th><th>Género</th><th>Intereses</th><th></th></tr></thead><tbody>';
        data.forEach(function(item, index) {
            table += '<tr>';
            table += '<td>' + item.fullName + '</td>';
            table += '<td>' + item.email + '</td>';
            table += '<td>' + item.phone + '</td>';
            table += '<td>' + item.country + '</td>';
            table += '<td>' + item.age + '</td>';
            table += '<td>' + item.gender + '</td>';
            table += '<td>' + item.interests.join(', ') + '</td>';
            table += '<td><button class="btn btn-danger delete-btn" data-index="' + index + '">Eliminar</button></td>';
            table += '</tr>';
        });
        table += '</tbody></table>';
        $('#registrationTable').html(table);
    },
    showError: function(message) {
        alert(message);
    },
    showSuccess: function(message) {
        alert(message);
        $('#registrationForm')[0].reset();
    }
};
