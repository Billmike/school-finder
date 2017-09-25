var React = require('react');
var ReactDOM = require('react-dom');
var SchoolsList = require('../components/SchoolsList.jsx');
var SchoolStore = require('../stores/SchoolStores');
var _schools = SchoolStore.getSchools();

SchoolStore.onChange(function(schools) {
    _schools = schools;
    render();
});
function render() {
    ReactDOM.render(<SchoolsList schools = { _schools } />, document.getElementById('container'));
}
render();
