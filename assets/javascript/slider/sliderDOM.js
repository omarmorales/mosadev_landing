import Slider from './slider';

let sliderText = document.querySelector("#slider-text");
let sliderTitle = document.querySelector("#slider-title");
let sliderSubtitle = document.querySelector("#slider-subtitle");
let sliderImage = document.querySelector("#slider-image");
let textContent = document.querySelector("#slider-text-content");

let slider = new Slider({
  elements: [
    {
      title: 'Lorem ipsum',
      subtitle: 'Ipsum',
      image: '../public/images/computers.jpg',
      text: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ios'
    },
    {
      title: 'Lorem ipsum 2',
      subtitle: 'Ipsum 2',
      image: '../public/images/keyboard.jpg',
      text: '2 Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ios'
    }
  ],
  animationFunc: function(element){
    textContent.classList.add("hide");
    sliderImage.classList.add("hide");

    setTimeout(function(){
      sliderTitle.innerHTML = element.title;
      sliderSubtitle.innerHTML = element.subtitle;
      sliderImage.src = element.image;
      sliderText.innerHTML = element.text;

      textContent.classList.remove("hide");
      sliderImage.classList.remove("hide");
    },600);

  },
  speed: 5000
});

slider.play();
