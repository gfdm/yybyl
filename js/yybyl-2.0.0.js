// Copyright (c) 2014 Zeal Xiao
// Originally found at http://www.kagachi.com
//
$(document).ready(function() {
	$("div#yybyl-tools").html('送云烟一程');

	doLostHP();

	$('div#yybyl-tools').click(function() {
		time = time - 800;
		$('div#yybyl').css('background-image', 'url(images/yybyl-fast.gif)');
		$('div#yybyl-tools').fadeOut();
	});

	$('div#yybyl').click(function() {
		$('div#yybyl-showhp').addClass('showhp');
		$('div#yybyl-showhp').html('HP:' + hp + '/100');
		setTimeout("$('div#yybyl-showhp').html('')", 1600);
		setTimeout("$('div#yybyl-showhp').removeClass('showhp')", 1600);
	});

});

/* Default HP */
var hp = 99;
/* Default Time */
var time = 1600;

/* Change HP */
function setLostHP(hp) {
	$('div#yybyl-hp-inner').css('width', hp + '%');
}

/* Set Time */
function doLostHP() {
	if (hp >= 0) {
		setTimeout("doLostHP()", time);
		setLostHP(hp);
		hp--;
	}
	if (hp == 68) {
		$('div#yybyl-hp-inner').css('background-image', 'url(images/percentImage_back2.png)');
	}
	if (hp == 38) {
		$('div#yybyl-hp-inner').css('background-image', 'url(images/percentImage_back3.png)');
	}
	if (hp == 24) {
		$('div#yybyl-hp-inner').css('background-image', 'url(images/percentImage_back4.png)');
	}
	if (hp <= 0) {
		$('div#yybyl').css('background-image', 'url(images/yybyl-die.gif)');
	}
}
