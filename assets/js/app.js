$.getJSON('https://discordapp.com/api/guilds/523568899690725384/widget.json', function(data) {

   let membersCount = 1;

   Object.entries(data.members).forEach(() => {
      membersCount++;
   });

   $("#members").html('<img src="./assets/images/members.svg"> ' + membersCount + ' miembros online');

});

let backgrounds = [
   'bgi-main-1',
   'bgi-main-2',
   'bgi-main-3',
   'bgi-main-4',
   'bgi-main-5'
];

let randomNumber = Math.floor(Math.random() * backgrounds.length);
let backgroundClass = backgrounds[randomNumber];

$('#background').addClass(backgroundClass);

particlesJS("particles", {
   "particles": {
      "number": {
         "value": 50,
         "density": {
            "enable": true,
            "value_area": 600
         }
      },
      "color": {
         "value": [
            "#FFFFFF"
         ]
      },
      "shape": {
         "type": "circle",
         "stroke": {
            "width": 0,
            "color": "#000000"
         },
         "polygon":{
            "nb_sides": 5
         },
         "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
         }
      },
      "opacity": {
         "value": 1,
         "random": true,
         "anim":{
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
         }
      },
      "size": {
         "value": 3,
         "random": true,
         "anim": {
            "enable": false,
            "speed": 30,
            "size_min": 0.1,
            "sync": false
         }
      },
      "line_linked": {
         "enable": false,
         "distance": 500,
         "color": "#ffffff",
         "opacity": 0.4,
         "width": 2
      },
      "move": {
         "enable": true,
         "speed": 0.2,
         "direction": "top",
         "random": true,
         "straight": false,
         "out_mode": "out",
         "bounce": false,
         "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
         }
      }
   },
   "interactivity":{
      "detect_on":"canvas",
      "events":{
         "onhover":{
            "enable":false,
            "mode":"bubble"
         },
         "onclick":{
            "enable":false,
            "mode":"repulse"
         },
         "resize":true
      },
      "modes":{
         "grab":{
            "distance":400,
            "line_linked":{
               "opacity":0.5
            }
         },
         "bubble":{
            "distance":400,
            "size":4,
            "duration":0.3,
            "opacity":1,
            "speed":3
         },
         "repulse":{
            "distance":200,
            "duration":0.4
         },
         "push":{
            "particles_nb":4
         },
         "remove":{
            "particles_nb":2
         }
      }
   },
   "retina_detect":true
});