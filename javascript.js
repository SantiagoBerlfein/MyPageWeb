    // Botón para ir para arriba

function irArriba(pxPantalla){
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        var botonArriba = document.getElementById('botonArriba');

        if (scroll > pxPantalla){
            botonArriba.style.right = 20 + "px";
        }
        else{
            botonArriba.style.right = -100 + "px";
        }
    })
}
irArriba(100);

    // Botón para cambiar el idioma

var check=document.querySelector(".check1");
check.addEventListener('click', idioma);

function idioma(){
    let id=check.checked;
    if(id==true){
        location.href="ing/index.html";
    } else{
        location.href="../index.html";
    }
}

var checkNos=document.querySelector(".check2");
checkNos.addEventListener('click', idiomaNos);

function idiomaNos(){
    let id=checkNos.checked;
    if(id==true){
        location.href="../ing/nosotros.html";
    } else{
        location.href="../nosotros/nosotros.html";
    }
}

var checkArea=document.querySelector(".check3");
checkArea.addEventListener('click', idiomaArea);

function idiomaArea(){
    let id=checkArea.checked;
    if(id==true){
        location.href="../ing/areas.html";
    } else{
        location.href="../areas/areas.html";
    }
}
