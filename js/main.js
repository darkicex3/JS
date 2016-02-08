function mon_image() {
    var retour = $('<img />');
    retour.attr('src', 'https://pixabay.com/static/uploads/photo/2012/04/10/22/55/chess-26779_640.png');
    retour.css({
        width: '10px',
        height: '10px'
    })
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
                    var lig = ligne();
                }
            } else {
                if (j % 2 == 0) {
                    var lig = ligne();
                } else {
                    var lig = ligne().append(mon_image());
                }
            }

            col.append(lig);
        }
    }

    $('body').append(tab);
})
