class Student {
  constructor(id, nume, varsta, nota1, nota2, media) {
    this.id = id;
    this.nume = nume;
    this.varsta = varsta;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.media = media;
  }
  salut() {
    console.log(`Salut! Numele meu este ${nume}`);
  }
  examen() {
    this.media = (nota1 + nota2) / 2;
  }
}
