function defilImgHrz(el, srcs, pas, tps) {
	if (typeof el == "string") {
		el = document.querySelector('.bandeau_horizontal');
	}

	var tps = tps || 50;
	var pas = pas || 1;
	var imgs = [];
	var offset = 0;

	for (var i = 0, l = srcs.length; i < l; i++) {
		var img = new Image();
		img.src = srcs[i];
		imgs.push(img);
		img.style.height = el.offsetHeight + "px";
		img.style.position = "absolute";
		img.style.left = offset + "px";
		el.appendChild(img);
		offset += img.offsetWidth;
	}

	var first = 0;
	var last = imgs.length - 1;

	(function d() {
		for (var i = 0, l = imgs.length; i < l; i++) {
			var left = parseInt(imgs[i].style.left, 10);
			imgs[i].style.left = left - pas + "px";

			if (i == first && left - pas + imgs[i].offsetWidth < 0) {
				imgs[i].style.left = parseInt(imgs[last].style.left, 10) + imgs[last].offsetWidth - (i == 0 ? pas : 0) + "px";
				last = first++;

				if (first > imgs.length - 1) {
					first = 0;
				}
			}
		}
		setTimeout(d, tps);
	})();
}

// Appel des deux fonctions de défilement au chargement de ma page .
window.onload = function () {
	defilImgHrz("bandeau_horizontal", ["assets/img/elancourt.png", "assets/img/elancourt.png", "assets/img/elancourt.png"]);
};
