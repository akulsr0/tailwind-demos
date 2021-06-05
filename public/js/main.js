const gotoHome = () => {
  window.location = "/";
};

const openDemo = (name) => {
  window.location.href = `/${name}`;
};

const openDemoView = (name) => {
  window.location.href = `${name}/view`;
};

const openGithubRepo = () => {
  window.open("https://github.com/akulsr0/tailwind-demos", "_blank");
};
