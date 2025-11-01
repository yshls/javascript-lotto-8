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
};
