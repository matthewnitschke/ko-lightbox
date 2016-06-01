ko.components.register("popup", {
  viewModel: function(params){
    var self = this;

    self.visible = params.visible;

  },
  template: "<div class='popup' data-bind='visible: visible'><div class='popup-content'><!-- ko template: { nodes: $componentTemplateNodes } --><!-- /ko --></div></div>"
});
