ko.components.register("ko-lightbox", {
    viewModel: function (params) {
        var self = this;

        var defaults = {
            closeButton: true,
            background: "#FFF"
        }

        var options = extend(defaults, params);

        self.closeMethod = params.closeMethod;

        if (params.viewModel) {
            self.viewModel = params.viewModel;
            self.viewModel.lightbox = self;
        } else {
            self.viewModel = self;
        }


        self.visible = params.visible;

        self.closeButton = options.closeButton;
        self.background = options.background;

        self.close = function () {
            if (self.closeMethod) {
                self.closeMethod();
            }
            self.visible(false);
        }

        function extend(a, b) {
            for (var key in b)
                if (b.hasOwnProperty(key))
                    a[key] = b[key];
            return a;
        }

    },
    template: "<div class='ko__lightbox' data-bind='visible: visible'>\
              <div class='ko__lightbox-content-wrapper' data-bind='with: viewModel'>\
                <div class='ko__lightbox-close-button' data-bind='if: $parent.closeButton'><i class='fa fa-times' aria-hidden='true' data-bind='click: $parent.close'></i></div>\
                <div class='ko__lightbox-content' data-bind='attr: {style: \"background-color: \" + $parent.background} '>\
                  <!-- ko template: { nodes: $componentTemplateNodes } --><!-- /ko -->\
                </div>\
              </div>\
            </div>"
});
