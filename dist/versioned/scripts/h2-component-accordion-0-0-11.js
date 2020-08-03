// Hydrogen / Components / Accordion

// "hasAttr" Function
$.fn.h2ComAccHasAttr0011 = function (name) {
    var attr = $(this).attr(name);
    return (typeof attr !== typeof undefined && attr !== false);
};

// Focusable Items
function h2ComAccFocusable0011(focusElement) {
    return (focusElement.find('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
}

// Accordion Open/Close
function accordionTrigger0011(trigger, accordion) {
    var content = "[data-h2-accordion-content]";
    if ($(trigger).parents(accordion).hasClass("h2-active")) {
        $(trigger).attr("aria-expanded", "false");
        $(trigger).parents(accordion).removeClass("h2-active");
        $(trigger).parents(accordion).find(content).attr("aria-hidden", "true");
    } else {
        $(trigger).attr("aria-expanded", "true");
        $(trigger).parents(accordion).addClass("h2-active");
        $(trigger).parents(accordion).find(content).attr("aria-hidden", "false");
        var siblingContent = $(trigger).siblings(content);
        var focusableItems = h2ComAccFocusable0011(siblingContent);
        var firstFocusableItem = $(focusableItems).first();
        if (focusableItems.length != 0) {
            firstFocusableItem[0].focus();
        }
    }
}

// Accordion Trigger
$(document).ready(function () {
    $(document).on("click", "[data-h2-accordion-0-0-11] [data-h2-accordion-trigger]", function (e) {
        e.preventDefault();
        if ($(this).parents("[data-h2-accordion-0-0-11]").h2ComAccHasAttr0011("data-h2-no-js") == true) {
            // Do nothing.
        } else {
            var accordion = "[data-h2-accordion-0-0-11]";
            accordionTrigger0011(this, accordion);
        }
    });
});