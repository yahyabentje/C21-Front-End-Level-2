let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom? de keyword let is variabel. vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype string  waarom? de keyword let is een variabele en kan met zowel een int als str gespecificeerd worden. vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? omdat let een variabele keyword is in js vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen 17 vul je antwoord in op de lijn

    // vul in wat naam is: naam is de Paragraph van regel 17 vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde 'Yahya Ben Abdessadak'(str) de waarde noemen we een Anker tag vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een op het scherm met de tekst "Yahya Ben Abdessadak"  deze tekst staan op regel 17 van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? Ja vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? Het brengt een referentie terug naar de eerste object, waarvan de specificatie ID Hide or Show is. en waar wordt deze in je HTML aangeroepen? ____________ vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML rule 25 vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? It returns a value that is specificated with an object ID vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? It returns an image as object that called out trough onclick vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen Rule 32 en wanneer wordt deze aangeroepen Bij onclick. vul je antwoord in op de lijn

    let antwoord = myInt - getal; //waar komt de waarde van myInt vandaan van de variabel myInt die hier boven gespecificieerd staat. en waar komt de waarde van getal vandaan? myInt vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? It returns the first element of a descedant node that matches the selector .som.  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? it returns the antwoord with the descedant node .som vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? it returns (antwoord)+3  vul je antwoord in op de lijn
}

//probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt? Ja de waarde bij - neemt af en bij * vermenigvuldigt dit.
function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen Rule 38 vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan Javascript en waar komt de waarde van kleur vandaan? CSS vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van size vandaan? HTML vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? It returns a collor and size that is specificated in html with the node setColor. vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven It returns the call of the variable let that is specificated in js. en wanneer gebeurt dat on rule  (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? On rule 11 whenvul je antwoord in op de lijn.