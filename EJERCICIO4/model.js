var Model = {
    getAllData: function() {
        var data = localStorage.getItem('registrationData');
        if (!data) {
            data = [];
        } else {
            data = JSON.parse(data);
        }
        return data;
    },
    saveData: function(formData) {
        var data = Model.getAllData();
        data.push(formData);
        localStorage.setItem('registrationData', JSON.stringify(data));
    },
    deleteData: function(index) {
        var data = Model.getAllData();
        data.splice(index, 1);
        localStorage.setItem('registrationData', JSON.stringify(data));
    }
};
