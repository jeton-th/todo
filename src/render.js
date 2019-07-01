
function render(element, repopulateElement) {
    element.innerHTML = '';
    repopulateElement();
  }

  export {
      render
  }