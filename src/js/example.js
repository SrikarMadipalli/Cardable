// Show implementation of MDB with Webpack
$('h1').css('color', '#E34234');

export function createHTMLElement(html) {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.firstElementChild;
}
