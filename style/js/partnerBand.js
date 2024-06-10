function marqueelike() {
  document.querySelectorAll('.messageDefilant').forEach((element) => {
    var texte = element.innerHTML;
    element.innerHTML = '<div><span>' + texte + '</span><span>' + texte + '</span></div>';
  });
}

window.addEventListener('load', function() {
  marqueelike();
});
