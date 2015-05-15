define('unit/tool', ['jquery'], function($) {
	return {
		setCSSValue: function (s, a, v) {
			var pattarn = new RegExp('(\s)?(' + a + ':).+?(;)');
			return s.replace(pattarn, '$1$2'+ v +'$3');
		}
	};
});