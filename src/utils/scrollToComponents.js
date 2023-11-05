export const scrollToComponent = componentId => {
  const element = document.getElementById(componentId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  if (componentId == '/') {
    window.scrollTo(0, 0);
  }
};
