class LottoCalculator {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = new Set(winningNumbers);
    this.#bonusNumber = bonusNumber;
  }

  calculateRank(lotto) {
    const numbers = lotto.getSortedNumbers();

    const matchCount = numbers.filter((number) =>
      this.#winningNumbers.has(number)
    ).length;

    const hasBonus = numbers.includes(this.#bonusNumber);

    if (matchCount === 6) {
      return 1;
    }
    if (matchCount === 5) {
      return hasBonus ? 2 : 3;
    }
    if (matchCount === 4) {
      return 4;
    }
    if (matchCount === 3) {
      return 5;
    }
    return null;
  }
}

export default LottoCalculator;
