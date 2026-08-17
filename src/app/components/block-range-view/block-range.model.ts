export type NumberStatus = 'available' | 'allocated' | 'gold' | 'platinum' | 'silver';

export interface BlockNumber {
  value: number;
  status: NumberStatus;
}

export interface BlockRangeDetail {
  selectedBlock: number;
  rangeStart: number;
  rangeEnd: number;
  totalNumbers: number;
  numbers: BlockNumber[];
}

export interface BlockRangeSaveData {
  selectedBlock: number;
  comment: string;
  rangeFrom: number | null;
  rangeTo: number | null;
}