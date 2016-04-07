
function spivDirective() {
    return {
    restrict: 'E',
        link: function (scope, element) {
            element.addClass('spiv');
        }
    }
}

export default spivDirective;
