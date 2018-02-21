var s;
var bannerTime = setInterval(tempoBan, 1000);
var imagenBan = 1;

s = 0;

function tempoBan() {
    var t = 10;
    s++;
    if(imagenBan == 1 && s == t){
        document.getElementById('ban').src = "img/banner2.png";
        imagenBan = 2;
        s = 0;
    }
    if(imagenBan == 2 && s == t){
        document.getElementById('ban').src = "img/banner3.png";
        imagenBan = 3;
        s = 0;
    }
    if(imagenBan == 3 && s == t){
        document.getElementById('ban').src = "img/banner1.png";
        imagenBan = 1;
        s = 0;
    }
}

function anterior() {
    if(imagenBan == 1){
        document.getElementById('ban').src = "img/banner3.png";
        imagenBan = 3;
		s = 0;
		return;
    }
    if(imagenBan == 2){
        document.getElementById('ban').src = "img/banner1.png";
        imagenBan = 1;
		s = 0;
		return;
    }
    if(imagenBan == 3){
        document.getElementById('ban').src = "img/banner2.png";
        imagenBan = 2;
		s = 0;
		return;
    }
}
function siguiente() {
    if(imagenBan == 1){
        document.getElementById('ban').src = "img/banner2.png";
        imagenBan = 2;
		s = 0;
		return;
    }
    if(imagenBan == 2){
        document.getElementById('ban').src = "img/banner3.png";
        imagenBan = 3;
		s = 0;
		return;
    }
    if(imagenBan == 3){
        document.getElementById('ban').src = "img/banner1.png";
        imagenBan = 1;
		s = 0;
		return;
    }
}


function ocultar() {
    document.getElementById('ban').style.display = 'none';
    document.getElementById('b1').style.display = 'none';
    document.getElementById('b2').style.display = 'block';
}
function mostrar() {
    document.getElementById('ban').style.display = 'block';
    document.getElementById('b2').style.display = 'none';
    document.getElementById('b1').style.display = 'block';
}
function prueba(){
    document.getElementById('ban').style.filter = 'blur(4px)';
}