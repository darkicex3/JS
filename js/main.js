function mon_image() {
    var retour = $('<img />');
    retour.attr('src', 'https://pixabay.com/static/uploads/photo/2012/04/10/22/55/chess-26779_640.png');
    return retour;
}

function mon_image1() {
    var retour = $('<img />');
    retour.attr('src', 'http://png.clipart.me/previews/218/knight-chess-piece-45344.png');
    return retour;
}



function colonne() {
    return $('<td></td>');
}

function ligne() {
    return $('<tr></tr>');
}

$(document).ready(function () {
    $('body').empty();

    var tab = $('<table></table>');

    for (var i = 0; i < 8; i++) {
        var col = colonne();
        tab.append(col);
        for (var j = 0; j < 8; j++) {
            if (i % 2 == 0) {
                if (j % 2 == 0) {
                    var lig = ligne().append(mon_image());
                } else {
                    var lig = ligne().append(mon_image1());
                    ;
                }
            } else {
                if (j % 2 == 0) {
                    var lig = ligne().append(mon_image1());
                    ;
                } else {
                    var lig = ligne().append(mon_image());
                }
            }

            col.append(lig);
        }
    }

    $('body').append(tab);
})
