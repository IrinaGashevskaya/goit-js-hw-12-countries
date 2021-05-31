import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
  import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
  import '@pnotify/core/dist/BrightTheme.css';
  defaultModules.set(PNotifyMobile, {});

  function showAlert() {
  alert({
    text: 'Too many matches found. Please enter a more specific query!',
    type: 'error',
    width: '350px',
    height: '100px',
    animation: 'fade',
    animateSpeed: 'normal',
    hide: true,
    delay: 2000,
  });
}
export default showAlert;