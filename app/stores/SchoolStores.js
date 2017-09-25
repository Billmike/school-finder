var dispatcher = require('../dist/dispatcher');

function SchoolStore() {
    var listeners = [];
    var schools = [{ name: 'Lovedale', tagline: 'A really nice school'},
                   { name: 'Bishop', tagline: 'Another top-notch school'},
                   { name: 'Daffodills', tagline: 'Sounds like a schoo for dogs' }];
    
    function getSchools() {
        return schools;
    }

    function onChange(listen) {
        listeners.push(listen);
    }

    function addSchool(school) {
        schools.push(school);
        triggerListeners();
    }

    function deleteSchool(school) {
        var _index;
        schools.map(function(s, index) {
            if(s.name === school.name) {
                _index = index;
            }
        });
        schools.splice(_index, 1);
        triggerListeners();
    }

    function triggerListeners() {
        listeners.forEach(function(listener) {
            listener(schools);
        });
    }

    dispatcher.register(function(payload) {
        var split = payload.type.split(':');
        if(split[0] === 'school') {
            switch(split[1]) {
                case "addSchool":
                    addSchool(payload.school);
                    break;
                case "deleteSchool":
                    deleteSchool(payload.school);
                    break;
            }
        }
    });

    return {
        getSchools: getSchools,
        onChange: onChange
    }
}

module.exports = SchoolStore();