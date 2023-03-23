class Carte {
  constructor(titlu, autor, editura, an_aparitie, pret, nr_pagini) {
    this.titlu = titlu;
    this.autor = autor;
    this.editura = editura;
    this.an_aparitie = an_aparitie;
    this.pret = pret;
    this.nr_pagini = nr_pagini;
  }
  carteInfo() {
    console.log(titlu);
    console.log(autor);
    console.log(editura);
    console.log(an_aparitie);
  }

  deschideCartea(pagina) {
    console.log(`Cartea a fost deschisa la pagina ${pagina}`);
  }
  modificaPret(pretNou) {
    if (pretNou > 10 && pretNou < this.pret) {
      this.pret = pretNou;
    }
  }
  reducere(procent) {
    this.pret -= (procent * this.pret) / 100;
    console.log(`pretul cu reducere este ${this.pret}`);
  }
}

const carte = new Carte("Poezii", "M.Eminescu", "All", 2010, 50);
carte.modificaPret(75);

console.log(carte);
