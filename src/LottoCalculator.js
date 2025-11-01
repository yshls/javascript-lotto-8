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

  calculateStatistics(lottos) {
    const stats = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    lottos.forEach((lotto) => {
      const rank = this.calculateRank(lotto);
      if (rank) {
        stats[rank]++;
      }
    });

    return stats;
  }

  calculateProfitRate(stats, purchaseAmount) {
    const PRIZES = {
      1: 2_000_000_000,
      2: 30_000_000,
      3: 1_500_000,
      4: 50_000,
      5: 5_000,
    };

    const totalRevenue = Object.entries(stats).reduce((sum, [rank, count]) => {
      return sum + PRIZES[rank] * count;
    }, 0);

    const profitRate = (totalRevenue / purchaseAmount) * 100;

    return Math.round(profitRate * 10) / 10;
  }
}

export default LottoCalculator;
