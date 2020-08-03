// Hydrogen / Components / Accordion

// "hasAttr" Function
$.fn.h2ComAccHasAttr$H2VERJS = function (name) {
    var attr = $(this).attr(name);
    return (typeof attr !== typeof undefined && attr !== false);
};

// Focusable Items
function h2ComAccFocusable$H2VERJS(focusElement) {
    return (focusElement.find('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
}

// Accordion Open/Close
function accordionTrigger$H2VERJS(trigger, accordion) {
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
        var focusableItems = h2ComAccFocusable$H2VERJS(siblingContent);
        var firstFocusableItem = $(focusableItems).first();
        if (focusableItems.length != 0) {
            firstFocusableItem[0].focus();
        }
    }
}

// Accordion Trigger
$(document).ready(function () {
    $(document).on("click", "[data-h2-accordion-trigger]", function (e) {
        e.preventDefault();
        if ($(this).parent("[data-h2-accordion$H2VERCSS]").h2ComAccHasAttr$H2VERJS("data-h2-no-js") == true) {
            // Do nothing.
        } else {
            var accordion = "[data-h2-accordion$H2VERCSS]";
            accordionTrigger$H2VERJS(this, accordion);
        }
    });
});