"use strict";

function onRouteChanged() {
  const hash = window.location.hash,
    routerView = document.querySelector("#app");

  if (!(routerView instanceof HTMLElement)) {
    throw new ReferenceError("No router view element available for rendering");
  }

  switch (hash) {
    case "#new-item":
      routerView.innerHTML =
        '<object type="text/html" data="views/new-item.html"></object>';
      break;
    case "#existing-item":
      routerView.innerHTML =
        '<object type="text/html" data="views/existing-item.html"></object>';
      break;
    default:
      routerView.innerHTML =
        '<object type="text/html" data="views/page-not-found.html"></object>';
      break;
  }
  //console.log(hash);
}

window.addEventListener("hashchange", onRouteChanged);
