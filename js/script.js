// random background

const images = [
    './assets/img/balcon.jpg',
    './assets/img/calle.jpg',
    './assets/img/corredera.jpg',
    './assets/img/farol.jpg',
    './assets/img/flor.jpg',
    './assets/img/macetas.jpg',
    './assets/img/mezquita.jpg',
    './assets/img/patios.jpg',
    './assets/img/puente.jpg',
    './assets/img/rejas.jpg',
  ];
  
  const changeBackgroundImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    document.body.style.backgroundImage = `url('${randomImage}')`;
    document.body.style.backgroundSize = 'cover';
  }
  
  changeBackgroundImage();
  
  setInterval(changeBackgroundImage, 11000);



