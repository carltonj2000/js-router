function onRouteChanged() {
  const hash = window.location.hash;
  console.log(hash);
  const routerView = document.getElementById("router-view");

  if (!(routerView instanceof HTMLElement)) {
    throw new ReferenceError("No router view element available for rendering");
  }

  switch (hash) {
    case "#home":
      routerView.innerHTML = "<h1>Home page</h1>";
      break;

    case "#about":
      routerView.innerHTML = "<h1>About page</h1>";
      break;

    default:
      routerView.innerHTML = "<h1>404 - Page Not Found</h1>";
      break;
  }
}
window.addEventListener("hashchange", onRouteChanged);
