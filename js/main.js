function mon_image() {
    var retour = $('<img />');
    retour.attr('src', 'https://pixabay.com/static/uploads/photo/2012/04/10/22/55/chess-26779_640.png');
    retour.css({
        width: '10',
        height: 'auto'
    })
}

function ligne() {
    return $('<td></td>');
}

function colonne() {
    return $('<tr></tr>');
}

$(document).ready(function () {
    $body.empty();

    $('<table></table>');

    for (var i = 0; i < 8; i++) {
        var img = mon_image();
        colonne().html(img);
        for (var j = 0; j < 8; j++) {
            ligne().html(img);
        }
    }
})
