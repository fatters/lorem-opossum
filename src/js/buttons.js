(function () {

	$('#generate').click(function () {
		$('#lorem-opossum-modal, .modal-overlay').addClass('active');
		opossum.main.generate();
	});

	$('#legendary-typo').click(function (e) {
		e.preventDefault();
		$('#origins-modal, .modal-overlay').addClass('active');
	});

	$('.modal-overlay, .modal__header__close').click(function () {
		$('.modal, .modal-overlay').removeClass('active');
	});

})();