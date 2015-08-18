define('model/navigator', ['backbone', 'localforage', 'indexeddb'], function(Backbone, localforage, indexeddb) {
    return Backbone.Model.extend({
        initialize: function(model) {
            this.reset(model);
        },
        reset: function (data) {
            this.set('data', data);
        },
        clickType: function(type) {
            this.trigger(type);
        }
    });
});