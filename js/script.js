//AutoPlay video inicio 
var vid = document.getElementById("video-inicio");
vid.autoplay = true;
vid.load();


//AutoPlay con sonido carrousel galeria
$('#carousel-galeria').on('slid.bs.carousel', function (e) {
    let elemento = $('#carousel-galeria .carousel-item.active video').first();
    if (elemento.prop("tagName") == "VIDEO") {
      elemento.get(0).play();
    }
 });

 $('#carousel-galeria').bind('slide.bs.carousel', function (e) {  
    let elemento = $('#carousel-galeria .carousel-item.active video').first();
    if (elemento.prop("tagName") == "VIDEO") {
      elemento.get(0).pause();
    }
 });