// Hydrogen / Components / Accordion

var env = "$H2ENV";
var version = "$H2VER";

function accordionTrigger(trigger, accordion) {
    var content = "[data-h2-accordion-content]";
    if ($(trigger).parent(accordion).hasClass("h2-active")) {
        $(trigger).attr("aria-expanded", "false");
        $(trigger).parent(accordion).removeClass("h2-active");
        $(trigger).parent(accordion).find(content).attr("aria-hidden", "true");
    } else {
        $(trigger).attr("aria-expanded", "true");
        $(trigger).parent(accordion).addClass("h2-active");
        $(trigger).parent(accordion).find(content).attr("aria-hidden", "false");
        var siblingContent = $(trigger).siblings(content);
        var focusableItems = focusable(siblingContent);
        var firstFocusableItem = $(focusableItems).first();
        if (focusableItems.length != 0) {
            firstFocusableItem[0].focus();
        }
    }
}

$(document).ready(function () {
    $(document).on("click", "[data-h2-accordion-trigger]", function (e) {
        e.preventDefault();
        if (env == "system") {
            if ($(this).parent("[data-h2-accordion]").hasAttr("data-h2-no-js") == true) {
                // Do nothing.
                // console.log("system, but disabled");
            } else {
                // console.log("system, enabled");
                var accordion = "[data-h2-accordion]";
                accordionTrigger(this, accordion);
            }
        } else if (env == "versioned") {
            if ($(this).parent("[data-h2-accordion-" + version + "]").hasAttr("data-h2-no-js") == true) {
                // Do nothing.
                // console.log("versioned, but disabled");
            } else {
                // console.log("versioned, working properly");
                var accordion = "[data-h2-accordion-" + version + "]";
                accordionTrigger(this, accordion);
            }
        }
    });
});