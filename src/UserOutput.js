import { Console } from '@woowacourse/mission-utils';

export const UserOutput = {
  promptPurchaseAmount() {
    Console.print('구입금액을 입력해 주세요.');
  },

  printError(message) {
    Console.print(message);
  },

  printLottoCount(count) {
    Console.print(`\n${count}개를 구매했습니다.`);
  },

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getSortedNumbers().join(', ')}]`);
    });
  },

  promptWinningNumbers() {
    Console.print('\n당첨 번호를 입력해 주세요.');
  },

  promptBonusNumber() {
    Console.print('\n보너스 번호를 입력해 주세요.');
  },

  printStatisticsHeader() {
    Console.print('\n당첨 통계');
    Console.print('---');
  },

  printStatistics(stats) {
    Console.print(`3개 일치 (5,000원) - ${stats[5]}개`);
    Console.print(`4개 일치 (50,000원) - ${stats[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${stats[3]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${stats[2]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${stats[1]}개`);
  },
};
