let prenom = document.getElementById("prenom");
let nome = document.getElementById("nome");
let montant = document.getElementById("Montant");
let periode = document.getElementById("Periode");
let revenu = document.getElementById("revenu");
let select = document.querySelector("select");
let show = document.getElementById("show");
let paragraphe = document.getElementById("paragraphe");

function PMT(montant,taux,mois){
      let taux_mois = taux / 100 / 12;
      return (montant * taux_mois) / (1 - Math.pow(1 + taux_mois,-mois)); 
}
function clear(){
prenom.value = "";
nome.value = "";
montant.value = "";
periode.value = "";
revenu.value = "";
select.selectedIndex = 0;
}

function calculer(){

let p = prenom.value;
let n = nome.value;
let m = parseFloat(montant.value);
let d = parseFloat(periode.value);
let r = parseFloat(revenu.value);
let type = select.value;

if( !p || !n || !m || !d || !r){
paragraphe.textContent = "error";
paragraphe.classList.remove("opacity-0");
paragraphe.classList.add("opacity-100");
clear();
return;
}
let taux = 0;
if( type === "Maison"){
    taux = 4.5;
}else if( type === "Appartement"){
    taux = 5;
}else if( type === "Terrain"){
    taux = 5.5;
}else if( type === "Petite_entreprise"){
    taux = 6;
}else{
    taux = 7;
}

let mois = d * 12;
let mensualite = PMT(m , taux, mois);
let total = mensualite * mois;
let interet = total - m ;

if(mensualite > r * 0.4){
    paragraphe.textContent = "Les conditions n'ont pas été remplies.";
    paragraphe.classList.remove("opacity-0");
    paragraphe.classList.add("opacity-100");
    return;
}else{
    paragraphe.classList.remove("opacity-100");
    paragraphe.classList.add("opacity-0");
}

show.innerHTML = `
<tr class=" border-gray-300">
<td>${p}</td>
<td>${n}</td>
<td>${m.toFixed(2)} DH</td>
<td>${d} ans</td>
<td>${r.toFixed(2)} DH</td>
<td>${type}</td>
<td>${mensualite.toFixed(2)} DH</td>
<td>${interet.toFixed(2)} DH</td>
<td>${total.toFixed(2)} DH</td>
</tr>
`;

clear();

}









