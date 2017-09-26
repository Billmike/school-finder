var React = require('react');
var ReactDOM = require('react-dom');
var SchoolsList = require('../components/SchoolsList.jsx');
var SchoolStore = require('../stores/SchoolStores');
var _schools = [];

var getSchoolsCallback = function(schools) {
    _schools = schools;
    render();
};
SchoolStore.onChange(getSchoolsCallback);

function render() {
    ReactDOM.render(<SchoolsList schools = { _schools } />, document.getElementById('container'));
}
render();
