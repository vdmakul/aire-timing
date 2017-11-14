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
  startTime: Date;
  stopTime: Date;
  penalties: Penalty[];
  marks: [Mark];
  comments: string;
}

export class Attempt {
  bib: number;
  run: Run;
  boatClass: BoatClass;
}

export class HeatResults {
  attempts: Attempt[];
}

export class CompetitionResults {
  heats: HeatResults
}
