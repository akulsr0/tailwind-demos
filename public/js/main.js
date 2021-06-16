const gotoHome = () => {
  window.location = "/";
};

const openLink = (link) => {
  if (!link) return;
  window.open(link, "_blank");
};

const openDemo = (name) => {
  window.location.href = `/${name}`;
};

const openDemoView = (name) => {
  window.location.href = `${name}/view`;
};

const openDemoGithub = (slug) => {
  window.open(
    `https://github.com/akulsr0/tailwind-demos/tree/main/demos/${slug}`,
    "_blank"
  );
};

const openGithubRepo = () => {
  window.open("https://github.com/akulsr0/tailwind-demos", "_blank");
};

const toggleHtmlCodeView = () => {
  const htmlCode = document.getElementById("html-code");
  const arrow = document.getElementById("toggle-html-code-arrow");
  const isVisible = htmlCode.style.display === "block";
  if (isVisible) {
    arrow.src =
      "https://upload.wikimedia.org/wikipedia/commons/1/10/TriangleArrow-Up.svg";
    htmlCode.style.display = "none";
  } else {
    arrow.src =
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/TriangleArrow-Down.svg";
    htmlCode.style.display = "block";
  }
};

const toggleCSSCodeView = () => {
  const cssCode = document.getElementById("css-code");
  const arrow = document.getElementById("toggle-css-code-arrow");
  const isVisible = cssCode.style.display === "block";
  if (isVisible) {
    arrow.src =
      "https://upload.wikimedia.org/wikipedia/commons/1/10/TriangleArrow-Up.svg";
    cssCode.style.display = "none";
  } else {
    arrow.src =
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/TriangleArrow-Down.svg";
    cssCode.style.display = "block";
  }
};

const toggleJSCodeView = () => {
  const jsCode = document.getElementById("js-code");
  const arrow = document.getElementById("toggle-js-code-arrow");
  const isVisible = jsCode.style.display === "block";
  if (isVisible) {
    arrow.src =
      "https://upload.wikimedia.org/wikipedia/commons/1/10/TriangleArrow-Up.svg";
    jsCode.style.display = "none";
  } else {
    arrow.src =
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/TriangleArrow-Down.svg";
    jsCode.style.display = "block";
  }
};

const search = () => {
  console.log("jansk");
  const input = document.getElementById("searchInput");
  if (input.value === "") {
    return;
  }
  window.location.href = `?search=${input.value}`;
};
