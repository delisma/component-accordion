// Hydrogen / Components / Accordion

var env = "$H2ENV";
var version = "$H2VER";

function accordionTrigger(trigger) {
    var accordion = "[data-h2-accordion]";
    var content = "[data-h2-accordion-content]";
    if ($(trigger).parent(accordion).hasClass("hds-active")) {
        $(trigger).attr("aria-expanded", "false");
        $(trigger).parent(accordion).removeClass("hds-active");
        $(trigger).parent(accordion).find(content).attr("aria-hidden", "true");
    } else {
        $(trigger).attr("aria-expanded", "true");
        $(trigger).parent(accordion).addClass("hds-active");
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
            if ($(this).parent("[data-h2-accordion]").hasAttr("data-h2-disabled") == true) {
                // Do nothing.
                // console.log("system, but disabled");
            } else {
                // console.log("system, enabled");
                accordionTrigger(this);
            }
        } else if (env == "versioned") {
            var h2Version = $(this).closest("[data-h2-enabled=\"accordion, " + version + "\"");
            // console.log(h2Version);
            if (h2Version.length != 0) {
                if ($(this).parent("[data-h2-accordion]").hasAttr("data-h2-disabled") == true) {
                    // Do nothing.
                    // console.log("versioned, but disabled");
                } else {
                    // console.log("versioned, working properly");
                    accordionTrigger(this);
                }
            } else {
                // console.log("versioned, but missing enabler");
            }
        }
    });
});