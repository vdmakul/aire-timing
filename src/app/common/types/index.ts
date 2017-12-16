export enum BoatClass {
  C1W = 'C1W',
  C1M = 'C1M',
  K1W = 'K1W',
  K1M = 'K1M',
  C2MW = 'C2MW',
  C2M = 'C2M',
  C2W = 'C2W'
}

export enum Run {
  HeatRun1 = 'Heat Run 1',
  HeatRun2 = 'Heat Run 2',
  SemiFinal = 'Semi Final',
  Final = 'Final'
}

export enum Penalty {
  Two = 2,
  Fifty = 50,
  Capsized = 'Capsized'
}

export enum Mark {
  DNS = 'DNS',
  DNF = 'DNF',
  DSQ_R = 'DSQ-R',
  DSQ_C = 'DSQ-C'
}


export class RunResults {

  constructor(
    public startTime: Date,
    public stopTime: Date,
    public penalties: Penalty[],
    public marks: Mark[],
    public comments: string) {
  }
}

export class Attempt {

  constructor(
    public bib: number,
    public run: Run,
    public boatClass: BoatClass) {
  }

}

export class HeatResults {

  constructor(public attempts: Attempt[]) {
  }

}

export class CompetitionResults {
  constructor(public heats: HeatResults) {

  }
}
