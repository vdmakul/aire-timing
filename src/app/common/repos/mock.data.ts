import {Injectable} from '@angular/core';
import {AttemptsRepo} from './attempts.repo';
import {Attempt, BoatClass, Run, RunResults} from '../types';

@Injectable()
export class MockData {

  private _referenceDate: Date = new Date();

  constructor(private _attemptsRepo: AttemptsRepo) {

    this._referenceDate.setMinutes(0);
    this._referenceDate.setSeconds(0);

    this.addRun(HEAT_1, Run.HeatRun1, BoatClass.C1M);
    this._referenceDate.setHours(this._referenceDate.getHours() + 2);
    this.addRun(HEAT_2, Run.HeatRun2, BoatClass.C1M);
    this._referenceDate.setHours(this._referenceDate.getHours() + 2);
    this.addRun(SEMI_FINALS, Run.SemiFinal, BoatClass.C1M);
    this._referenceDate.setHours(this._referenceDate.getHours() + 2);
    this.addRun(FINALS, Run.Final, BoatClass.C1M);
  }

  private addRun(res: Res, run: Run, boatClass: BoatClass): void {
    for (let _i = 0; _i < res.bibs.length; _i++) {
      const startDate = new Date(this._referenceDate);
      const finishDate = this.next(res.totals[_i]);
      const randomPenalties = this.randomPenalties(res.penalties[_i][0]);
      const attempt = new Attempt(res.bibs[_i], run, boatClass);
      this._attemptsRepo.save(
        attempt,
        new RunResults(attempt, startDate, finishDate, randomPenalties, [], ''));
    }

  }

  private next(aux: number): Date {
    const result = new Date(this._referenceDate);
    result.setMilliseconds(this._referenceDate.getMilliseconds() + aux);
    this._referenceDate.setMinutes(this._referenceDate.getMinutes() + 1);
    return result;
  }

  private randomPenalties(penalties: number): number[] {
    const res: number[] = Array(20).fill(0);
    while (penalties > 50) {
      penalties = penalties - 50;
      this.pushRandom(res, 50);
    }
    while (penalties > 2) {
      penalties = penalties - 2;
      this.pushRandom(res, 2);
    }
    return res;
  }

  private pushRandom(array: number[], val: number): void {
    while (!this.tryPushRandom(array, val)) {
    }
  }

  private tryPushRandom(array: number[], val: number): boolean {
    const i = Math.round(Math.random() * 100) % array.length - 1;
    if (array[i] === 0) {
      array[i] = val;
      return true;
    } else {
      return false;
    }
  }
}

interface Res {
  bibs: number[];
  names: string[];
  countries: string[];
  penalties: number[][];
  totals: number[];
}

// data from //https://www.canoeicf.com/canoe-slalom-world-cup/la-seu-durgell-2017/rankings-results
const HEAT_1: Res = {
  bibs: [4, 5, 2, 9, 12, 6, 7, 25, 18, 8, 10, 24, 1, 13, 15, 29, 33, 23, 14, 21, 22, 44, 20, 16, 26, 17, 27, 3, 34, 28, 31, 45, 38, 30, 39,
    32, 35, 55, 40, 41, 19, 36, 56, 57, 54, 43, 49, 53, 42, 60, 46, 11, 50, 47, 52, 37, 51, 58, 59, 48],
  names: ['Alexander SLAFKOVSKY', 'Sideris TASIADIS', 'Benjamin SAVSEK', 'Michal MARTIKAN', 'Lukas ROHAN', 'Ryan WESTLEY', 'Franz ANTON',
    'Cameron SMEDLEY', 'Martin THOMAS', 'David FLORENCE', 'Adam BURGESS', 'Roberto COLAZINGARI', 'Matej BENUS', 'Anze BERCIC',
    'Ander ELOSEGI', 'Kirill SETKIN', 'Stefano CIPRESSI', 'Raffaello IVALDI', 'Casey EICHFELD', 'Jergus BADURA', 'Michal JANE',
    'Jianming SHU', 'Jure LENARCIC', 'Luka BOZIC', 'Matija MARINIC', 'Vitezslav GEBAS', 'Vaclav CHALOUPKA', 'Denis GARGAUD_CHANUT',
    'Edern LE_RUYET', 'Nico BETTGE', 'Zachary LOKKEN', 'Shota SASAKI', 'Daniel WATKINS', 'Liam JEGOU', 'Miquel TRAVE', 'Jonathan MARC',
    'Ian BORROWS', 'Piotr SZCZEPANSKI', 'Kacper SZTUBA', 'Charles CORREA', 'Grzegorz HEDWIG', 'Felipe BORGES', 'Yves BOURHIS',
    'Daniel MARZO', 'Jiaxin ZHENG', 'Leonardo CURCEL', 'Liam SMEDLEY', 'Mathieu DOBY', 'Benjamin GIBB', 'Vitaly MAXIMOV', 'Spencer POMEROY',
    'Takuya HANEDA', 'Shaun HIGGINS', 'Robert HENDRICK', 'Tren LONG', 'Tristan CARTER', 'Yutthakan CHAIDET', 'Gelindo CHIARELLO',
    'Frederico ALVARENGA', 'Jake COCHRANE'],
  countries: ['SVK', 'GER', 'SLO', 'SVK', 'CZE', 'GBR', 'GER', 'CAN', 'FRA', 'GBR', 'GBR', 'ITA', 'SVK', 'SLO', 'ESP', 'RUS', 'ITA', 'ITA',
    'USA', 'NOR', 'CZE', 'CHN', 'SLO', 'SLO', 'CRO', 'CZE', 'CZE', 'FRA', 'FRA', 'GER', 'USA', 'JPN', 'AUS', 'IRL', 'ESP', 'FRA', 'AUS',
    'POL', 'POL', 'BRA', 'POL', 'BRA', 'SEN', 'ESP', 'CHN', 'BRA', 'CAN', 'BEL', 'NZL', 'RUS', 'CAN', 'JPN', 'NZL', 'IRL', 'USA', 'AUS',
    'THA', 'SUI', 'POR', 'IRL'],
  penalties: [[0], [0], [2], [0], [0], [0], [2], [0], [2], [0], [0], [2], [2], [0], [2], [2], [4], [0], [0], [0], [0], [0], [0], [2], [0],
    [0], [2], [4], [2], [0], [4], [0], [2], [4], [4], [4], [4], [2], [6], [4], [6], [4], [2], [4], [4], [4], [2], [6], [4], [0], [4], [8],
    [4], [6], [6], [6], [2], [6], [10], [54]],
  totals: [97370, 98070, 98790, 99080, 99650, 99900, 100020, 100330, 100400, 100410, 100770, 101140, 101200, 101490, 101500, 101700, 102670,
    102720, 102810, 102880, 102930, 102970, 103180, 103210, 103230, 103470, 103900, 104030, 104240, 104400, 106050, 106190, 106240, 106270,
    106890, 107020, 107020, 108070, 108450, 108720, 108750, 110480, 110910, 111000, 111310, 111450, 111600, 111680, 112170, 112560, 112640,
    113850, 113860, 113940, 115180, 115540, 116580, 121800, 123650, 164170],
};

const HEAT_2: Res = {
  bibs: [16, 3, 19, 40, 32, 17, 34, 27, 11, 55, 35, 26, 39, 56, 22, 30, 42, 41, 28, 57, 44, 46, 54, 36, 20, 31, 38, 60, 53, 43, 37, 48, 47,
    45, 52, 50, 49, 59, 51, 58],
  names: ['Luka BOZIC', 'Denis GARGAUD_CHANUT', 'Grzegorz HEDWIG', 'Kacper SZTUBA', 'Jonathan MARC', 'Vitezslav GEBAS', 'Edern LE_RUYET',
    'Vaclav CHALOUPKA', 'Takuya HANEDA', 'Piotr SZCZEPANSKI', 'Ian BORROWS', 'Matija MARINIC', 'Miquel TRAVE', 'Yves BOURHIS',
    'Michal JANE', 'Liam JEGOU', 'Benjamin GIBB', 'Charles CORREA', 'Nico BETTGE', 'Daniel MARZO', 'Jianming SHU', 'Spencer POMEROY',
    'Jiaxin ZHENG', 'Felipe BORGES', 'Jure LENARCIC', 'Zachary LOKKEN', 'Daniel WATKINS', 'Vitaly MAXIMOV', 'Mathieu DOBY',
    'Leonardo CURCEL', 'Tristan CARTER', 'Jake COCHRANE', 'Robert HENDRICK', 'Shota SASAKI', 'Tren LONG', 'Shaun HIGGINS', 'Liam SMEDLEY',
    'Frederico ALVARENGA', 'Yutthakan CHAIDET', 'Gelindo CHIARELLO'],
  countries: ['SLO', 'FRA', 'POL', 'POL', 'FRA', 'CZE', 'FRA', 'CZE', 'JPN', 'POL', 'AUS', 'CRO', 'ESP', 'SEN', 'CZE', 'IRL', 'NZL', 'BRA',
    'GER', 'ESP', 'CHN', 'CAN', 'CHN', 'BRA', 'SLO', 'USA', 'AUS', 'RUS', 'BEL', 'BRA', 'AUS', 'IRL', 'IRL', 'JPN', 'USA', 'NZL', 'CAN',
    'POR', 'THA', 'SUI'],
  penalties: [[0], [0], [0], [0], [0], [0], [0], [2], [0], [0], [0], [2], [0], [0], [2], [2], [0], [4], [0], [6], [2], [2], [0], [2], [4],
    [4], [4], [2], [4], [2], [6], [6], [4], [6], [4], [4], [6], [8], [6], [58]],
  totals: [98640, 99790, 99980, 100100, 100560, 100890, 101470, 101620, 102630, 102850, 103180, 103780, 103780, 104300, 104820, 104990,
    105180, 105190, 105320, 105560, 105570, 105810, 106330, 107180, 107600, 108150, 108760, 108900, 110140, 111030, 111030, 111530, 112020,
    113180, 114650, 116660, 117450, 120540, 121770, 168890],
};

const SEMI_FINALS: Res = {
  bibs: [5, 2, 15, 18, 4, 11, 19, 27, 6, 12, 13, 3, 9, 16, 29, 8, 1, 17, 34],
  names: ['Sideris TASIADIS', 'Benjamin SAVSEK', 'Ander ELOSEGI', 'Martin THOMAS', 'Alexander SLAFKOVSKY', 'Takuya HANEDA',
    'Grzegorz HEDWIG', 'Vaclav CHALOUPKA', 'Ryan WESTLEY', 'Lukas ROHAN', 'Anze BERCIC', 'Denis GARGAUD_CHANUT', 'Michal MARTIKAN',
    'Luka BOZIC', 'Kirill SETKIN', 'David FLORENCE', 'Matej BENUS', 'Vitezslav GEBAS', 'Edern LE_RUYET', 'Casey EICHFELD'],
  countries: ['GER', 'SLO', 'ESP', 'FRA', 'SVK', 'JPN', 'POL', 'CZE', 'GBR', 'CZE', 'SLO', 'FRA', 'SVK', 'SLO', 'RUS', 'GBR', 'SVK', 'CZE',
    'FRA', 'USA'],
  penalties: [[0], [2], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [2], [0], [2], [2], [2], [2], [4]],
  totals: [93710, 94610, 94830, 95070, 96730, 96900, 96920, 97010, 97170, 97330, 97330, 97510, 98580, 98620, 98730, 99080, 99250, 100030,
    101110, 101500],
};

const FINALS: Res = {
  bibs: [2, 4, 18, 5, 6, 12, 27, 19, 11, 15, 13],
  names: ['Benjamin SAVSEK', 'Alexander SLAFKOVSKY', 'Martin THOMAS', 'Sideris TASIADIS', 'Ryan WESTLEY', 'Lukas ROHAN', 'Vaclav CHALOUPKA',
    'Grzegorz HEDWIG', 'Takuya HANEDA', 'Ander ELOSEGI', 'Anze BERCIC'],
  countries: ['SLO', 'SVK', 'FRA', 'GER', 'GBR', 'CZE', 'CZE', 'POL', 'JPN', 'ESP', 'SLO'],
  penalties: [[0], [2], [0], [0], [0], [0], [0], [2], [2], [4], [4]],
  totals: [94120, 94250, 94560, 94930, 95610, 97400, 97580, 99070, 99250, 99290, 101180],
};
