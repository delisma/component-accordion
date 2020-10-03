// Hydrogen / Components / Accordion

// "hasAttr" Function
$.fn.h2ComAccHasAttr0021 = function (name) {
    var attr = $(this).attr(name);
    return (typeof attr !== typeof undefined && attr !== false);
};

// Focusable Items
function h2ComAccFocusable0021(focusElement) {
    return (focusElement.find('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
}

// Accordion Open/Close
function accordionTrigger0021(trigger, accordion) {
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
        var focusableItems = h2ComAccFocusable0021(siblingContent);
        var firstFocusableItem = $(focusableItems).first();
        if (focusableItems.length != 0) {
            firstFocusableItem[0].focus();
        }
    }
}

// Accordion Trigger
$(document).ready(function () {
    $(document).on("click", "[data-h2-accordion-0-0-21] [data-h2-accordion-trigger]", function (e) {
        e.preventDefault();
        if ($(this).parents("[data-h2-accordion-0-0-21]").h2ComAccHasAttr0021("data-h2-no-js") == true) {
            // Do nothing.
        } else {
            var accordion = "[data-h2-accordion-0-0-21]";
            accordionTrigger0021(this, accordion);
        }
    });
});