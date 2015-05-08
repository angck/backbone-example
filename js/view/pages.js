define('view/pages', ['backbone', 'view/page'], function(Backbone, PageView) {
	return Backbone.View.extend({
		el: $('.pageList'),
		events: {
			'click #addPage': 'createOne'
		},
		initialize: function() {
			this.listenTo(this.model, 'add', this.addOne);
			// this.listenTo(this.model, 'change', this.setChecked);
			this.listenTo(this.model, 'remove', this.removeItem);
			this._itemsView = {};
		},
		render: function() {
			this.model.map(this.addOne, this);
			return this;
		},
		addOne: function(model) {
			var pageView = new PageView({
				model: model
			});
			this.$('#pageList').append(pageView.render().el);
			this._itemsView[model.id] = pageView;
		},
		addAll: function() {
			this.model.each(function(model) {
				self.addOne(model);
			});
		},
		createOne: function() {
			var self = this;
			this.model.create({
				aid: this.getAid(),
				backgroundColor: '#fff',
				backgroundImage: '',
				checked: false
			});
		},
		getAid: function() {
			if (!this.model.length) return 1;
			return this.model.last().get('aid') + 1;
		},
		removeItem: function(model) {
			var nextModel = this.nextAll(model.get('aid'));
			this.resetNext(nextModel);
			this._itemsView[model.id].remove();
			this._itemsView[model.id] = null;
			delete this._itemsView[model.id];
		},
		resetNext: function(models) {
			_.each(models, function(model, i, list) {
				model.save('aid', model.get('aid') - 1);
			});
		},
		nextAll: function(id) {
			return _.filter(this.model.models, function(model) {
				return model.get('aid') > id
			});
		},
		/*filterModels: function(model) {
			return this.model.filter(function(m) {
				return model.id != m.id
			});
		},*/
		/*setChecked: function(model, options) {
			this.model.each(function(item, i, models){
				if(item.id != model.id) {
					item.unChecked()
				}
			});
		}*/
	});
});