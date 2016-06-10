ko.components.register("lightbox", {
  viewModel: function(params){
    var self = this;

    var defaults = {
      closeButton: true,
      background: "#FFF"
    }

    var options = extend(defaults, params);

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
              <div class='lightbox-content-wrapper'>\
                <div class='lightbox-close-button' data-bind='if: closeButton'><i class='fa fa-times' aria-hidden='true' data-bind='click: close'></i></div>\
                <div class='lightbox-content' data-bind='attr: {style: \"background-color: \" + background} '>\
                  <!-- ko template: { nodes: $componentTemplateNodes } --><!-- /ko -->\
                </div>\
              </div>\
            </div>"
});
