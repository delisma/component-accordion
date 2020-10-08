// Hydrogen / Components / Accordion

// "hasAttr" Function
$.fn.h2ComAccHasAttr0026 = function (name) {
    var attr = $(this).attr(name);
    return (typeof attr !== typeof undefined && attr !== false);
};

// Focusable Items
function h2ComAccFocusable0026(focusElement) {
    return (focusElement.find('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
}

// Accordion Open/Close
function accordionTrigger0026(trigger, accordion) {
    var content = "[data-h2-accordion-content]";
    if ($(trigger).parents(accordion).hasClass("h2-active")) {
        // Get the manual focus item.
        var targetInput = $(accordion).find("[data-h2-focus]");
        // Ensure that the object manually set to be focusable is no longer focusable.
        $(targetInput).attr("tabindex", "-1");
        // Close the accordion.
        $(trigger).attr("aria-expanded", "false");
        $(trigger).parents(accordion).removeClass("h2-active");
        $(trigger).parents(accordion).find(content).attr("aria-hidden", "true");
    } else {
        // Open the accordion.
        $(trigger).attr("aria-expanded", "true");
        $(trigger).parents(accordion).addClass("h2-active");
        $(trigger).parents(accordion).find(content).attr("aria-hidden", "false");
        // Get the manual focus item.
        var targetInput = $(accordion).find("[data-h2-focus]");
        // Ensure that the object manually set to be focusable is in fact focusable.
        $(targetInput).attr("tabindex", "0");
        // Get the content area.
        var siblingContent = $(trigger).siblings(content);
        // Determine all focusable items in the content area.
        var focusableItems = h2ComAccFocusable0026(siblingContent);
        var firstFocusableItem = $(focusableItems).first();
        if (focusableItems.length != 0) {
            firstFocusableItem[0].focus();
        }
    }
}

// Accordion Trigger
$(document).ready(function () {
    $("[data-h2-accordion-0-0-26] [data-h2-accordion-trigger]").on("click", function (e) {
        e.preventDefault();
        if ($(this).parents("[data-h2-accordion-0-0-26]").h2ComAccHasAttr0026("data-h2-no-js") == true) {
            // Do nothing.
        } else {
            var accordion = "[data-h2-accordion-0-0-26]";
            accordionTrigger0026(this, accordion);
        }
    });
});