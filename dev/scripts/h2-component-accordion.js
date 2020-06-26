// Hydrogen / Components / Accordion

function accordionTrigger(trigger) {
    var accordion = "[data-h2-accordion]";
    var content = "[data-h2-accordion-content]";
    if ($(trigger).parent(accordion).hasClass("hds-active")) {
        $(trigger).attr("aria-expanded", "false");
        $(trigger).parent(accordion).removeClass("hds-active");
        $(trigger).parent(accordion).find(content).attr("aria-hidden", "true");
    }
    else {
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
        if ($(this).parent("[data-h2-accordion]").hasAttr("data-h2-disabled") == true) {
            // Do nothing.
        } else {
            accordionTrigger(this);
        }
    });
});