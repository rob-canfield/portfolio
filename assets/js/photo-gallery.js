var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var items = [
    {
        src: '../images/experimental/00-experimental-robcanfield.JPG',
        w: 600,
        h: 400,
        msrc: '../images/experimental/00-experimental-robcanfield.JPG'
    },
    {
        src: 'https://placekitten.com/1200/900',
        w: 1200,
        h: 900,
        msrc: 'https://placekitten.com/600/400'

    }
];

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};

// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();