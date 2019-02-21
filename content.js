// pandora-title-in-tab
// Copyright (c) 2019 Chris White.  CC-BY-SA 3.0.

'use strict';

console.log('Pandora title in tab loading');

function update() {
    'use strict';

    try {   // Ignore all fatal errors
        var track='', artist='', thumb='';
        var elems = document.getElementsByClassName('Tuner__Audio__TrackDetail__title');
        if(elems.length === 1) { track = elems[0].textContent; }

        elems = document.getElementsByClassName('Tuner__Audio__TrackDetail__artist');
        if(elems.length === 1) { artist = elems[0].textContent; }

        // Is it thumbed up?

        try {   // Ignore all errors
            var thumb_snap = document.evaluate('//button[@data-qa="thumbs_up_button"]', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE);
            if(thumb_snap && thumb_snap.snapshotLength >=1) {
                var thumb_btn = thumb_snap.snapshotItem(0);
                if(thumb_btn.classList.contains('ThumbUpButton--active')) {
                    thumb = String.fromCodePoint(0x1f44d) + ' ';
                                    // U+1F44D THUMBS UP SIGN
                }
            }
        } catch { }

        var newtitle = `${thumb}${track} - ${artist} - Pandora`;
        if(newtitle !== document.title) {
            document.title = newtitle;
        }
    } catch { }

    setTimeout(update, 5000);
} //update()

window.addEventListener('load', function() { setTimeout(update, 500); } );

// vi: set ts=4 sts=4 sw=4 et ai: //
