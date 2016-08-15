(function () {

	var clipboard = new Clipboard('#copy-to-clipboard');

	clipboard.on('success', function (e) {
		e.clearSelection();
		$('.copy-message.success').show();
		$('.copy-message.success').fadeOut(1400);
	});

	clipboard.on('error', function (e) {
		e.ClearSelection();
		$('.copy-message.error').show();
		$('.copy-message.error').fadeOut(1400);
		console.info('Trigger: ', e.trigger);
	})

})();