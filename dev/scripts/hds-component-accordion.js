// Hydrogen / Components / Accordion

function accordionTrigger(trigger) {
    var accordion = "[data-hds-accordion]";
    var content = "[data-hds-accordion-content]";
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
    $(document).on("click", "[data-hds-accordion-trigger]", function (e) {
        e.preventDefault();
        accordionTrigger(this);
    });
});