window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#333a40",
      "text": "#ffffff"
    },
    "button": {
      "background": "#ff8201",
      "text": "#ffffff"
    }
  },
  "theme": "edgeless",
  "position": "top",
  "static": true,
  "content": {
    "href": getBaseUrl("terms/privacy-policy"),
    "dismiss": "Accept"
  }
});

$('form').off('areYouSure');
$(window).off('beforeunload');
