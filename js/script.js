$navbar = $('.navbar');
$navbarBtn = $('.navbar__toggler');
$navbarBtnIcon = $('.navbar__icon');

$navbarBtn.on('click', () => {
	$navbar.toggleClass('active');
	$navbar.hasClass('active')
		? $navbarBtnIcon.attr('src', 'images/icon-close.svg')
		: $navbarBtnIcon.attr('src', 'images/icon-hamburger.svg');
});
