import { Console } from '@woowacourse/mission-utils';

export const UserOutput = {
  promptPurchaseAmount() {
    Console.print('구입금액을 입력해 주세요.');
  },

  printError(message) {
    Console.print(message);
  },
};
