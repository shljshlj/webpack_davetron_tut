import markdownPreviewer from './markdownPreviewer';

import 'tachyons';
import '../css/styles.css';

window.onload = function () {
  document.getElementById('editor').addEventListener(
    'submit',
    markdownPreviewer.attachPreviewer(
      document,     // pass in document
      'source',     // id of source textarea
      'preview'));  // id of preview DOM element
};

//     background: linear-gradient( 125deg, #f4d7de 0%, #cecfe7 100% );
// background: linear-gradient(125deg,#a4eae4 0%,#f9c0c9 100%);