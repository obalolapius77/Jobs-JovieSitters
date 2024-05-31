document.addEventListener("DOMContentLoaded", () => {
  const links = document.links;
  console.log(links);

  for (let i = 0; i < links.length; i++) {
    const element = links[i];

    if (!element.href.includes("login")) {
      element.setAttribute("href", "./preform");
    }
  }
});
