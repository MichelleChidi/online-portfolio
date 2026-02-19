const navs = document.querySelectorAll("a[data-nav-link]");

navs.forEach(async (link) => {
  const res = await fetch("../../assets/handdrawn-circle.svg");
  console.log({ res });
  const svg = await res.text();
  console.log({ svg });
  // TODO: insert handdrawn circle to every link
  //   link.append(svg);
});
