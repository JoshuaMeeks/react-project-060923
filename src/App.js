import { Navigation } from "./components/Navigation";
import './App.css';

function App() {

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    const logo = document.querySelector('h1');
    const carLeft = document.querySelector('.carLeft');
    const carRight = document.querySelector('.carRight');


    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      logo.style.fontSize = "4em";
      logo.style.marginLeft = "35%";
    } else {
      logo.style.fontSize = "14em";
      logo.style.marginLeft = "10%"
    }

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      logo.style.marginLeft = ".3em"
    }

    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      // logo.style.marginLeft = ".3em"
      carRight.style.marginRight = "2.5%"
    } else {
      carRight.style.marginRight = "100%"
    }

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      carLeft.style.marginLeft = "-444px"
    } else {
      carLeft.style.marginLeft = "100%"
    }
  } 

  return (
    <div className="main-container">
      <Navigation />
      <div className="article-main">
        <img src="https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/teaser_720x406x2/dam/pnr/2022/History/50-Years-911-Carrera-RS-2.7/Galerie-NEU-2/S22_2787_fine.jpg/jcr:content/S22_2787_fine.jpg" alt="911 Carrera RS" />
        <div className="title-container">
          <h1>Porsche 911 Carrera RS 2.7</h1>
        </div>
        <p>
          'Duck tail', 'RS' or '2.7'. Today, the Porsche 911 Carrera RS 2.7 is known by many nicknames. 
          But its significance remains unique: it was the fastest German production car of its day and is 
          the first series production model with front and rear spoilers - the latter earning it the 'duck tail' moniker. 
          In 1972, Porsche thereby launched a trend for rear spoilers on series production cars.<br/><br/>

          About 50 years ago, Porsche began with the development of the 911 Carrera RS 2.7. 
          “The 911 Carrera RS 2.7 was intended as a homologation special. It was to be a very light, fast sports car,” 
          recalls Peter Falk, who was then the Head of Testing for series production cars at Porsche. Even though the model 
          variant was based on the 911, it ended up becoming a new base vehicle for racing and rallying that featured many 
          technical innovations. The most powerful model of the first generation of the 911 was the first 911 to be christened 
          'Carrera' - the crowning glory of the Porsche range. Weight, aerodynamics, engine and chassis were all worked on 
          intensively. Around 15 engineers developed the car from May 1972 onwards, and were joined by production staff.
        </p>
        <img src="https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/teaser_720x406x2/dam/pnr/2022/History/50-Years-911-Carrera-RS-2.7/gallery-3/_DC94737.jpeg/jcr:content/_DC94737.jpeg" alt="911 Carrera RS" />
        <div className="title-container">
          <h1>Surprising Success</h1>
        </div>
        <p>
          Porsche initially planned to build 500 examples in order to homologate the 911 Carrera RS 2.7 for Group 4 Special 
          GT cars. It became a road-approved vehicle for customers who also wanted to participate in racing events. On 5 October 
          1972, the new model was presented at the Paris Motor Show, which was held at the Porte de Versailles. By the end of that 
          November all 500 vehicles had sold. Porsche was surprised by the car's success, and was able to triple the sales figures 
          by July 1973. A total of 1,580 examples were built, and once the 1,000th vehicle had been made, the Porsche 911 Carrera 
          RS 2.7 was homologated for Group 3 as well as Group 4. The optional M471 equipment package led to Porsche building 200 
          lightweight 'Sport' versions of the car. A further 55 examples of the racing version, 17 base vehicles, and 1,308 
          touring versions (M472) were built.
        </p>
        <img src="https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/teaser_720x406x2/dam/pnr/2022/History/50-Years-911-Carrera-RS-2.7/Galerie-NEU-3/S22_2791_fine.jpg/jcr:content/S22_2791_fine.jpg" alt="911 Carrera RS" />
        <p>
        The interior of the 911 Carrera RS 2.7 'Light' (M471) was pared back to the essentials, according to the customer's 
        requirements and the production date. Among other things, the rear seats, carpets, clock, coat hooks and armrests were 
        omitted. Upon request from the customer, two lightweight seat shells replaced the heavier sports seats. Even the Porsche 
        crest on the bonnet was initially glued on. Compared to the 'Touring' equipment package (M472), the 'Sport' weighed 115 
        kilograms less, with a kerb weight of 960 kg. It was priced at 34,000 German marks. The Sport package (M471) cost 700 
        German marks, while the Touring package (M472) was 2,500 German marks. The equipment package that was chosen therefore 
        defined the respective version of the 911 Carrera RS 2.7.<br/><br/>

        The car's 2.7-litre flat-six fuel-injected engine produced a powerful 210 PS at 6,300 rpm and developed 255 Nm at 5,100 
        rpm. This enabled the Sport version to accelerate from 0 to 100 km/h in 5.8 seconds, making the 911 Carrera RS 2.7 the 
        first production car to break the six-second mark set by the German trade journal 'auto, motor und sport'. The top speed 
        crossed the 245 km/h mark. (Touring 6.3 seconds, 240 km/h). The RS 2.7 became the ideal synthesis between weight, 
        performance, aerodynamics and handling.
        </p>
      </div>
    </div>
  );
}

export default App;
