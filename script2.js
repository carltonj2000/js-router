"use strict";

document.querySelectorAll("[data-go-to-id]").forEach(function (link) {
  link.addEventListener("click", function () {
    const element = document.getElementById(link.dataset.goToId);

    if (!(element instanceof HTMLElement)) {
      throw new ReferenceError(`Unable to found element with id "${goToId}"`);
    }

    window.scroll({
      top: element.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  });
});
