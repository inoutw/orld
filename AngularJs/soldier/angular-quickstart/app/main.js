/**
 * Created by qinai on 11/3/16.
 */
(function(app){
    document.addEventListener('DOMContentLoaded', function(){
        ng.platformBrowserDynamic
            .platformBrowserDynamic()
            .bootstrapModule(app.AppModule);
    });
})(window.app || (window.app = {}))