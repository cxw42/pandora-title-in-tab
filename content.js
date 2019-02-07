// pandora-title-in-tab
// Copyright (c) 2019 Chris White.  CC-BY-SA 3.0.

'use strict';

console.log('Pandora title in tab loading');

function update() {
    'use strict';
    var track='', artist='';
    var elems = document.getElementsByClassName('Tuner__Audio__TrackDetail__title');
    if(elems.length === 1) { track = elems[0].textContent; }
    
    elems = document.getElementsByClassName('Tuner__Audio__TrackDetail__artist');
    if(elems.length === 1) { artist = elems[0].textContent; }

    var newtitle = `${track} - ${artist} - Pandora`;
    if(newtitle !== document.title) {
        document.title = newtitle;
    }

    setTimeout(update, 5000);
} //update()

window.addEventListener('load', function() { setTimeout(update, 500); } );

// vi: set ts=4 sts=4 sw=4 et ai: //
