var Controller = {
    init: function() {
        Controller.bindEvents();
        var data = Model.getAllData();
        View.displayData(data);
    },
    bindEvents: function() {
        $('#registrationForm').on('submit', function(event) {
            event.preventDefault();
            var formData = {
                fullName: $('#fullName').val(),
                email: $('#email').val(),
                phone: $('#phone').val(),
                country: $('#country').val(),
                age: $('#age').val(),
                gender: $('#gender').val(),
                interests: []
            };
            $('input[type="checkbox"]:checked').each(function() {
                formData.interests.push($(this).val());
            });
            if (formData.fullName && formData.email && formData.phone && formData.country && formData.age && formData.gender) {
                Model.saveData(formData);
                var data = Model.getAllData();
                View.displayData(data);
                View.showSuccess('Registro exitoso!');
            } else {
                View.showError('Por favor, complete todos los campos.');
            }
        });
        $('#registrationTable').on('click', '.delete-btn', function() {
            var index = $(this).data('index');
            Model.deleteData(index);
            var data = Model.getAllData();
            View.displayData(data);
        });
    }
};
