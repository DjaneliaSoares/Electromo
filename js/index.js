const imgs = document.getElementById("img");
const img = document.getElementById("#img img");
let idx = 0;
function carrossel(){
	idx++;
	if (idx > img.lngth -1) {
		idx=0;
	}

	imgs.style.transform = `translatex($(idx*1176)px)`;
}
setInterval(carrossel, 1000);