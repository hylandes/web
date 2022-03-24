var asset1 = document.getElementById('asset-1');
var asset2 = document.getElementById('asset-2');

new simpleParallax(asset1, {
    overflow: true,
    delay: 3,
    orientation: 'right',
    transition: 'cubic-bezier(0,0,0,1)'
});

new simpleParallax(asset2, {
    overflow: true,
    delay: 3,
    orientation: 'left',
    transition: 'cubic-bezier(0,0,0,1)'
});