function kopija() {
    alert("Uhvacen si da kopiras tekst!");
}
function poruka(){
    alert("Dobro nam dosli!")
}
function ispis(x){
    let raspored1 = [
        "Od 18:00h – 18:45h Školica sporta i korektivna gimnastika sa elementima tekvondoa (deca od 4 do 6 godina)",
"Od 19:00h – 20:00h (deca od 7 do 11 godina)",
"Od 20:15h – 21:15h (deca od 12 do 16 godina)",
"Od 21:15h – 22:15h ( preko 17 godina)"
    ];
    let raspored2 = [
        "Od 19:00h – 20:15h I grupa",
"Od 20:30h – 21:45h II grupa"
    ];
    let raspored3 = [
        "Od 09:45h – 11:00h I grupa",
"Od 11:00h – 12:15h II grupa"
    ];
    let raspored4 = [
        "Za jednu osobu iznosi 3000 dinara.",
"Za dvoje iz iste porodice 5000 dinara.",
"Za troje iz iste porodice 6000 dinara.",
"Dete + roditelj (fitness zona) 4500 dinara.",
"Fitness zona 1500 dinara.",
"*Članarina sa plaća do 10-og za tekući mesec."
    ];

    const polje = document.getElementById("polje");
    const polje1 = document.getElementById("polje1");
    const polje2 = document.getElementById("polje2");
    const polje3 = document.getElementById("polje3");

    let sadrzaj = "";
    if(x==='raspored1'){
        sadrzaj+= "<ul>";
        for(let i=0; i < raspored1.length; i++){
            sadrzaj += "<li>" + raspored1[i] + "</li>";
        }
        sadrzaj+= "</ul>";
        polje.innerHTML= sadrzaj;
    }
    else if(x==='raspored2'){
        sadrzaj+= "<ul>";
        for(let i=0; i < raspored2.length; i++){
            sadrzaj += "<li>" + raspored2[i] + "</li>";
        }
        sadrzaj+= "</ul>";
        polje1.innerHTML= sadrzaj;
    }
    else if(x==='raspored3'){
        sadrzaj+= "<ul>";
        for(let i=0; i < raspored3.length; i++){
            sadrzaj += "<li>" + raspored3[i] + "</li>";
        }
        sadrzaj+= "</ul>";
        polje2.innerHTML= sadrzaj;
    }
    else if(x==='raspored4'){
        sadrzaj+= "<ul>";
        for(let i=0; i < raspored4.length; i++){
            sadrzaj += "<li>" + raspored4[i] + "</li>";
        }
        sadrzaj+= "</ul>";
        polje3.innerHTML= sadrzaj;
    }
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