angular
  .module('io.dennis.ui-select-activate-on', [])
  .directive('uiSelectActivateOn', uiSelectActivateOnDirective);

function uiSelectActivateOnDirective() {
  return {
    require: 'uiSelect',
    link: function(scope, element, attrs, $select) {
      if (attrs.uiSelectActivateOn) {
        scope.$on(attrs.uiSelectActivateOn, () => {
          $select.activate();
        });
      }
    }
  };
}
