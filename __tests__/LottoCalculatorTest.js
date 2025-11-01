import Lotto from '../src/Lotto.js';
import LottoCalculator from '../src/LottoCalculator.js';

describe('로또 계산기 테스트', () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;

  const calculator = new LottoCalculator(winningNumbers, bonusNumber);

  test('3개 일치을 정확히 계산한다.', () => {
    const myLotto = new Lotto([1, 2, 3, 10, 11, 12]);
    const rank = calculator.calculateRank(myLotto);
    expect(rank).toBe(5);
  });

  test('4개 일치을 정확히 계산한다.', () => {
    const myLotto = new Lotto([1, 2, 3, 4, 11, 12]);
    const rank = calculator.calculateRank(myLotto);
    expect(rank).toBe(4);
  });

  test('5개 일치, 보너스 불일치를 정확히 계산한다.', () => {
    const myLotto = new Lotto([1, 2, 3, 4, 5, 8]);
    const rank = calculator.calculateRank(myLotto);
    expect(rank).toBe(3);
  });

  test('5개 일치 + 보너스 일치를 정확히 계산한다.', () => {
    const myLotto = new Lotto([1, 2, 3, 4, 5, 7]);
    const rank = calculator.calculateRank(myLotto);
    expect(rank).toBe(2);
  });

  test('6개 일치를 정확히 계산한다.', () => {
    const myLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const rank = calculator.calculateRank(myLotto);
    expect(rank).toBe(1);
  });

  test('2개 이하 일치를 정확히 계산한다.', () => {
    const myLotto = new Lotto([1, 2, 10, 11, 12, 13]);
    const rank = calculator.calculateRank(myLotto);
    expect(rank).toBe(null);
  });
});
