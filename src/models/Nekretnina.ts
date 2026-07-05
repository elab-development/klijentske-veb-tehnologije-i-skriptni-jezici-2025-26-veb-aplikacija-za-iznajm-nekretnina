export interface INekretnina {
  id: number;
  naziv: string;
  cena: number;
  grad: string;
  sobe: number;
  tip: 'Stan' | 'Kuća'; // Dodajemo tip nekretnine
  slika: string;
}

export class NekretninaServis {
  private nekretnine: INekretnina[];

  constructor(nekretnine: INekretnina[]) {
    this.nekretnine = nekretnine;
  }

  dohvatiSve(): INekretnina[] {
    return this.nekretnine;
  }
}