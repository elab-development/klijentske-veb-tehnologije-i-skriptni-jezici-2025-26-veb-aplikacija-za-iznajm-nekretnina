export interface INekretnina {
  id: number;
  naziv: string;
  cena: number;
  grad: string;
}


export class NekretninaServis {
  private nekretnine: INekretnina[];

  constructor(nekretnine: INekretnina[]) {
    this.nekretnine = nekretnine;
  }

  
  dohvatiSve(): INekretnina[] {
    return this.nekretnine;
  }

  
  filtrirajPoGradu(grad: string): INekretnina[] {
    return this.nekretnine.filter(n => n.grad.toLowerCase() === grad.toLowerCase());
  }
}