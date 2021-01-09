//MOSTRAR O ELEMENTO ATIVO NA NAVEGAÇÃO APÓS O CLIQUE
function mostrarAtivobg(tag){
    var tag_lista = document.getElementById('lista_menu');
    var tag_li = tag_lista.getElementsByTagName('li');
        for (i=0; i<tag_li.length; i++ )
        {
            tag_li[i].style.backgroundColor = "";
        }
            tag.style.backgroundColor = "#f87d19";
}

