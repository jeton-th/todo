const pageLoad = () => {
  const content = document.querySelector('#content');
  content.innerHTML = 'Hello, World!';
};

export { pageLoad as default };
