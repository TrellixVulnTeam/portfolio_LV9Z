/* Credit and Thanks:
Matrix - Particles.js;
SliderJS - Ettrics;
Design - Sara Mazal Web;
Fonts - Google Fonts
*/

window.onload = function () {
    Particles.init({
      selector: ".background"
    });
  };
  const particles = Particles.init({
    selector: ".background",   
    color: ["#e6ff02", "#1280fd", "#000000"], 
    connectParticles: true,
    responsive: [      
      {
        breakpoint: 768,
        options: {
          color: ["#e6ff02", "#1280fd", "#000000"],
          maxParticles: 200,
          connectParticles: false
        }
      }
    ]
  });
  
  new NavigationPage();
  /* Credit and Thanks:
  Matrix - Particles.js;
  SliderJS - Ettrics;
  Design - Sara Mazal Web;
  Fonts - Google Fonts
  */
  