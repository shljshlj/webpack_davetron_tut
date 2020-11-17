import { markdown } from 'markdown';

const attachPreviewer = function ($document, sourceId, previewId) {
  return function (event) {
    const text = $document.getElementById(sourceId).value,
      preview = $document.getElementById(previewId);

    preview.innerHTML = markdown.toHTML(text);
    event.preventDefault();
  };
};

export default {
  attachPreviewer: attachPreviewer
}