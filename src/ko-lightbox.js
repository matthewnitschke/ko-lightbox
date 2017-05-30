ko.components.register("ko-lightbox", {
    viewModel: function (params) {
        var self = this;

        var defaults = {
            allowOutsideClose: true,
            background: "#FFF",
            fullscreen: false
        }

        var options = ko.utils.extend(defaults, params);

        self.closeMethod = params.closeMethod;

        if (params.viewModel) {
            self.viewModel = params.viewModel;
            self.viewModel.lightbox = self;
        } else {
            self.viewModel = self;
        }


        self.visible = params.visible;

        self.allowOutsideClose = options.allowOutsideClose;
        self.background = options.background;
        self.fullscreen = options.fullscreen;

        self.outsideClose = function () {
            if (ko.unwrap(self.allowOutsideClose)) {
                self.close();
            }
        }

        self.close = function () {
            if (self.closeMethod) {
                self.closeMethod();
            }
            self.visible(false);
        }

    },
    //Needs a link to ko-lightbox.css to work properly
    template: "<div class='ko-lightbox-flex-container' data-bind='visible: visible'>\
                    <div class='ko__lightbox-content-wrapper' data-bind='with: viewModel, css: {\"ko__lightbox-content-wrapper-fullscreen\": $component.fullscreen}'>\
                        <div class='ko__lightbox-content' data-bind='attr: {style: \"background-color: \" + $parent.background}, css: {\"ko__lightbox-content-fullscreen\": $parent.fullscreen} '>\
                        <!-- ko template: { nodes: $componentTemplateNodes } --><!-- /ko -->\
                        </div>\
                    </div>\
                    <div class='ko__lightbox-overlay' data-bind='click: outsideClose'></div>\
              </div>"
});