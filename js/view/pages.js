define('view/pages', ['backbone', 'view/page'], function(Backbone, PageView) {
	return Backbone.View.extend({
		el: $('.pageList'),
		events: {
			'click #addPage': 'createOne',
			'click .removeAll': 'removeAll'
		},
		initialize: function() {
			this.listenTo(this.model, 'add', this.addOne);
			this.listenTo(this.model, 'remove', this.removeItem);
			this.listenTo(this.model, 'reset', this.reset);
			this.listenTo(this.model, 'change', this.changeAttr);
			this._itemsView = {};

			this.model.fetch();
		},
		render: function(model, options) {
			this.model.map(this.addOne, this);
			return this;
		},
		reset: function(model, options) {
			options.previousModels.map(this.removeItem, this);
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
		removeAll: function() {
			this.model.removeAll();
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
		filterOther: function(id) {
			return this.model.filter(function(model) {
				return model.get('aid') !== id;
			});
		},
		setUnChecked: function(model) {

		},
		changeAttr: function(model, options) {
			var otherModels;
			if(model.changed.checked) {
				otherModels = this.filterOther(model.get('aid'));
				_.each(otherModels, function(m) {
					m.save('checked', false);
				});
				this.resetRender();
				this.render();
			}
		},
		resetRender: function() {
			this.model.reset();
			this.model.fetch();
		}
	});
});