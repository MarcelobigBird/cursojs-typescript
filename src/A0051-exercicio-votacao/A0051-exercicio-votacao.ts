type VotationOption = {
  option: string;
  numberOfVotes: number;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  public addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  public vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }

  public get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  public addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  public showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }

      console.log('#############################');
    }
  }
}

const votation1 = new Votation('Qual sua linguagem de programação favorita?');
votation1.addVotationOption({ option: 'Python', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'JavasCript', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'Typescript', numberOfVotes: 0 });

votation1.vote(1);
votation1.vote(1);
votation1.vote(0);
votation1.vote(0);
votation1.vote(0);
votation1.vote(2);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);

votationApp.showVotations();

console.log();

const votation2 = new Votation('Qual sua cor favorita?');
votation2.addVotationOption({ option: 'Red', numberOfVotes: 0 });
votation2.addVotationOption({ option: 'Green', numberOfVotes: 0 });
votation2.addVotationOption({ option: 'Blue', numberOfVotes: 0 });

votation2.vote(0);
votation2.vote(0);
votation2.vote(0);
votation2.vote(2);

const votationApp1 = new VotationApp();
votationApp1.addVotation(votation2);

votationApp1.showVotations();
