
var haromszogek = document.querySelectorAll('.haromszog');
var sebessegek = [0.5, 0.3, 0.7];
// var kezdoertekek = [240, 280, 30]

var kezdoertekek = [];
for (var i = 0; i < haromszogek.length; i++ ){
  //ebben a körben ez a háromszögünk
  var haromszog = haromszogek [i];
  //a haromszogunk top/left/bottom/right/width/height értékei
  var informaciok = haromszog.getBoundingClientRect();
  kezdoertekek[i] = informaciok.top;
}


//ha a böngésző szól, h scrollozott, akkor ez rörténjen

function szkrolloztak() {
  //ismételjük meg a lépéseket amig i kisebb mint a háromszögek száma
  //for (ciklus előtt történik, amíg ez igaz, ciklusok végén)
  /*
  ciklus előtt történik
  ismételd (amig igaz)
    EZ TÖRTÉNIK MINDEN CIKLUSBAN
    ciklusok végén
    */

  for(var i = 0; i < haromszogek.length; i = i + 1 ) {
    //i: 0,1,2
    var haromszog = haromszogek[i];
    var kezdoertek = kezdoertekek[i];
    var sebesseg = sebessegek[i];

    haromszog.style.top = kezdoertek + document.body.scrollTop * sebesseg + 'px';
  }
}

//ha a böngésző szól nekünk, akkor ez történjen

document.addEventListener('scroll', szkrolloztak);
