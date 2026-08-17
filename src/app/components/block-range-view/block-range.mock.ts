//Mock data for block values
import { BlockNumber, BlockRangeDetail, NumberStatus } from './block-range.model';

const STATUS_POOL: NumberStatus[] = ['available', 'available', 'available', 'allocated', 'gold', 'platinum', 'silver'];

export function getMockBlockRangeDetail(selectedBlock: number): BlockRangeDetail {
  const rangeStart = selectedBlock * 1000;
  const rangeEnd = rangeStart + 999;

  const numbers: BlockNumber[] = Array.from({ length: 1000 }, (_, i) => ({
    value: rangeStart + i,
    status: STATUS_POOL[Math.floor(Math.random() * STATUS_POOL.length)]
  }));

  return {
    selectedBlock,
    rangeStart,
    rangeEnd,
    totalNumbers: numbers.length,
    numbers
  };
}