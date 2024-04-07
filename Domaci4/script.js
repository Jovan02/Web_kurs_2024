const ucenici = [
    {
      ime: "Ana",
      prezime: "Kovačević",
      godina_rodjenja: 2005,
      pol: "ženski",
      ocjene: {
        matematika: 4,
        maternji_jezik: 5,
        engleski_jezik: 3,
        biologija: 4,
        likovna_kultura: 5
      }
    },
    {
      ime: "Marko",
      prezime: "Petrović",
      godina_rodjenja: 2006,
      pol: "muški",
      ocjene: {
        matematika: 5,
        maternji_jezik: 4,
        engleski_jezik: 5,
        biologija: 3,
        likovna_kultura: 4
      }
    },
    {
      ime: "Elena",
      prezime: "Jovanović",
      godina_rodjenja: 2005,
      pol: "ženski",
      ocjene: {
        matematika: 3,
        maternji_jezik: 5,
        engleski_jezik: 4,
        biologija: 4,
        likovna_kultura: 4
      }
    },
    {
      ime: "Ivan",
      prezime: "Popović",
      godina_rodjenja: 2007,
      pol: "muški",
      ocjene: {
        matematika: 5,
        maternji_jezik: 4,
        engleski_jezik: 5,
        biologija: 5,
        likovna_kultura: 3
      }
    },
    {
      ime: "Jelena",
      prezime: "Nikolić",
      godina_rodjenja: 2006,
      pol: "ženski",
      ocjene: {
        matematika: 4,
        maternji_jezik: 3,
        engleski_jezik: 5,
        biologija: 4,
        likovna_kultura: 4
      }
    },
    {
      ime: "Stefan",
      prezime: "Stojanović",
      godina_rodjenja: 2007,
      pol: "muški",
      ocjene: {
        matematika: 5,
        maternji_jezik: 4,
        engleski_jezik: 5,
        biologija: 3,
        likovna_kultura: 5
      }
    },
    {
      ime: "Milica",
      prezime: "Simić",
      godina_rodjenja: 2005,
      pol: "ženski",
      ocjene: {
        matematika: 4,
        maternji_jezik: 5,
        engleski_jezik: 4,
        biologija: 3,
        likovna_kultura: 4
      }
    },
    {
      ime: "Nikola",
      prezime: "Pavlović",
      godina_rodjenja: 2006,
      pol: "muški",
      ocjene: {
        matematika: 3,
        maternji_jezik: 4,
        engleski_jezik: 5,
        biologija: 5,
        likovna_kultura: 4
      }
    },
    {
      ime: "Sara",
      prezime: "Ilić",
      godina_rodjenja: 2007,
      pol: "ženski",
      ocjene: {
        matematika: 5,
        maternji_jezik: 3,
        engleski_jezik: 5,
        biologija: 4,
        likovna_kultura: 3
      }
    },
    {
      ime: "Luka",
      prezime: "Đorđević",
      godina_rodjenja: 2005,
      pol: "muški",
      ocjene: {
        matematika: 4,
        maternji_jezik: 4,
        engleski_jezik: 4,
        biologija: 5,
        likovna_kultura: 5
      }
    }
  ]

for(let i = 0; i < ucenici.length; i++){

  ucenici[i]['izracunajProsjek'] = function() {
    let ukupno = 0;
    let brojPredmeta = 0;
    for(let predmet in this.ocjene){
        ukupno += this.ocjene[predmet];
        brojPredmeta++;
    }
    let prosjek = ukupno / brojPredmeta;
    this['prosjek'] = prosjek;
    return prosjek;  
  }

  ucenici[i]['uspjeh'] = function() {
    let nedovoljan = false;

    for(let predmet in this.ocjene){
      if(this.ocjene[predmet] == 1){
        nedovoljan = true;
        break;
      }
    }

    let tekst = this.ime + ' ' + this.prezime + ' je ';

    if(this.pol == 'muški'){
      if(nedovoljan){
        tekst += 'Nedovoljan';
      } else if(this.izracunajProsjek() >= 4.5){
        tekst += 'Odličan';
      } else if(this.izracunajProsjek() >= 3.5){
        tekst += 'Vrlo Dobar';
      } else if (this.izracunajProsjek() >= 2.5){
        tekst += 'Dobar';
      } else {
        tekst += 'Dovoljan';
      }
    } else {
      if(nedovoljan){
        tekst += 'Nedovoljna';
      } else if(this.izracunajProsjek() >= 4.5){
        tekst += 'Odlična';
      } else if(this.izracunajProsjek() >= 3.5){
        tekst += 'Vrlo Dobra';
      } else if (this.izracunajProsjek() >= 2.5){
        tekst += 'Dobra';
      } else {
        tekst += 'Dovoljna';
      }
    }
    
    console.log(tekst);
  }
}

function statistikaUspjeha(niz) {
  let rezultat = {
    'Odličan': 0,
    'Vrlo Dobar': 0,
    'Dobar': 0,
    'Dovoljan': 0,
    'Nedovoljan': 0,
  };

  console.log(rezultat);
  for(let i = 0; i < niz.length; i++){
    let nedovoljan = false;

    for(let predmet in niz[i].ocjene){
      if(niz[i].ocjene[predmet] == 1){
        nedovoljan = true;
        break;
      }
    }

    if(nedovoljan){
      rezultat['Nedovoljan']++;
    } else if(niz[i].izracunajProsjek() >= 4.5){
      rezultat['Odličan']++;
    } else if(niz[i].izracunajProsjek() >= 3.5){
      rezultat['Vrlo Dobar']++;
    } else if(niz[i].izracunajProsjek() >= 2.5){
      rezultat['Dobar']++;
    } else if(niz[i].izracunajProsjek() >= 2){
      rezultat['Dovoljan']++;
    }
  }

  return rezultat;
}

function sortirajUcenike(niz) {
  return niz.sort((a, b) => a.prezime > b.prezime ? 1 : -1);
}






