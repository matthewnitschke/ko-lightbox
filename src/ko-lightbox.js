ko.components.register("lightbox", {
  viewModel: function(params){
    var self = this;

    var defaults = {
      closeButton: true,
      background: "#FFF"
    }

    var options = extend(defaults, params);

    self.viewModel = params.viewModel;
    self.viewModel.lightbox = self;

    self.visible = params.visible;

    self.closeButton = options.closeButton;
    self.background = options.background;

    self.close = function(){
      self.visible(false);
    }

    function extend(a, b){
      for(var key in b)
          if(b.hasOwnProperty(key))
              a[key] = b[key];
      return a;
    }

  },
  template: "<div class='lightbox' data-bind='visible: visible'>\
              <div class='lightbox-content-wrapper' data-bind='with: viewModel'>\
                <div class='lightbox-close-button' data-bind='if: $parent.closeButton'><i class='fa fa-times' aria-hidden='true' data-bind='click: close'></i></div>\
                <div class='lightbox-content' data-bind='attr: {style: \"background-color: \" + $parent.background} '>\
                  <!-- ko template: { nodes: $componentTemplateNodes } --><!-- /ko -->\
                </div>\
              </div>\
            </div>"
});
