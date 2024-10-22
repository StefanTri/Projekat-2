function kopija() {
    alert("Uhvacen si da kopiras tekst!");
}
document.addEventListener("DOMContentLoaded", function() {
    var halfElements = document.querySelectorAll('.half-element');

    window.addEventListener('scroll', function() {
        halfElements.forEach(function(element) {
            var top = element.getBoundingClientRect().top;
            var windowHeight = window.innerHeight;

            if (top < windowHeight * 0.75 ) {
                element.style.opacity = 1;
            } else {
                element.style.opacity = 0;
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById('scrollButton');
    var targetElement = document.getElementById('targetElement');

    scrollButton.addEventListener('click', function() {
        // Pomičemo se polako do ciljanog elementa
        smoothScroll(targetElement);
    });
});

function smoothScroll(target) {
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var duration = 1000; // Vreme animacije u milisekundama
    var start = null;

    // Funkcija animacije
    function animation(currentTime) {
        if (start === null) start = currentTime;
        var timeElapsed = currentTime - start;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing funkcija za glatko kretanje
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    // Pokretanje animacije
    requestAnimationFrame(animation);
}
function tekst(){
    let trener = "Rođen 19.04.1988. godine u Vršcu. Taekwondo-om se bavi od 1999. godine. Nosilac je crnog pojasa 3.DAN. Trenirao je u taekwondo klubu ” Vršac ” iz Vršca, jednom od najuspešnijih klubova u državi. Glavni trener mu je Boris Gorjup, nosilac crnog pojasa 5. DAN, bivši trener juniorske a danas veoma uspešan trener seniorske reprezentacije. Aleksandar Andreevski od 2000. godine aktivno se bavi takmičarskim taekwondo-om. Osvajač je mnogobrojnih medalja u državi i inostranstvu. Višestruki je prvak države u pionirskoj, juniorskoj i seniorskoj konkurenciji i dugogodišnji član reprezentacije.";
    let tren = [
        "2013. godine je izabran za pomoćnog trenera pionirske reprezentacije Srbije.",
"2015. godine izabran je za jednog od glavnih trenera pionirske reprezentacije Srbije.",
"2016. godine izabran je za glavnog trenera para tekvondo reprezentacije Srbije.",
"2017. završava osnovne akademske studije na fakultetu za sport u Beogradu."
    ];
    let pravila = [
        "Uvek pokazivati poštovanje prema trenerima i nosiocima viših pojaseva",
"Pokloniti se kada se ulazi ili izlazi iz sale za vežbanje",
"Naklon se vrši iz stojeceg stava, spojenih stopala, držeći ruke na bokovima, blagim spuštanjem glave i naginjanjem prema napred",
"Zabranjeno je u obući ulaziti u salu za vežbanje (osim u patikama za Taekwondo)",
"Uvek imati uredan i čist Dobok ( Tae Kwon Do uniformu)",
"Bez psovanja i galame u prostorijama kluba a pogotovo u sali za vežbanje",
"U klubu su zabranjeni pušenje i konzumiranje alkohola",
"Ako nosilac nižeg pojasa pokaže nedostatak znanja, dužnost je starijih da ga informišu ili isprave"
    ];
    const polja = document.getElementById("polja");
    const polja1 = document.getElementById("polja1");
    const polja2 = document.getElementById("polja2");
    polja.innerHTML="<p>"+trener+"</p>";
    let sadr = "";
    sadr+= "<ul>";
    for (let i=0; i < tren.length; i++){
            sadr += "<li>" + tren[i] + "</li>";
    }
    sadr+= "</ul>";
    polja1.innerHTML= sadr;

    let drugi = "";
    drugi+= "<ul>";
    for (let i=0; i < pravila.length; i++){
        drugi+= "<li>" + pravila[i] + "</li>";
    }
    drugi += "</ul>";
    polja2.innerHTML = drugi;
}
function Provera(Obrazac)
     {
        const p = document.getElementById("p");
        const a = document.getElementById("a");
        const b = document.getElementById("b");
        const v = document.getElementById("v");
        const g = document.getElementById("g");
      if(Obrazac.mejl.value=="")
      {
      alert("Unesi e-mail!");
      Obrazac.mejl.focus();
      p.style.border="5px solid red";
      return false;
      }
      else if(Obrazac.ime.value=="")
      {
      alert("Unesi ime!");
      Obrazac.ime.focus();
      a.style.border="5px solid red";
      return false;
      }
      else if(Obrazac.prezime.value=="")
      {
      alert("Unesi prezime!");
      Obrazac.prezime.focus();
      b.style.border="5px solid red";
      return false;
      }
      else if(Obrazac.sifra.value=="")
      {
      alert("Unesi sifru!");
      Obrazac.sifra.focus();
      v.style.border="5px solid red";
      return false;
      }
      else if(Obrazac.adresa.value=="")
      {
        alert("Unesi adresu!");
      Obrazac.adresa.focus();
      g.style.border="5px solid red";
      return false;
      }
      else { 
        alert("Uspesno ste se prijavili!!!");
        return true;
      }
     }
     
