/**
 * Created by qinai on 10/31/16.
 */
(function (app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'my-app',
            template: '<h1>My first Angular App</h1>'
        })
            .class({
                constructor: function () {
                }
            });
})(window.app || (window.app = {}))