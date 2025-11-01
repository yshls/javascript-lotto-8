import { Console } from '@woowacourse/mission-utils';

export const UserInput = {
  async readPurchaseAmount() {
    const input = await Console.readLineAsync('');
    return input;
  },

  async readWinningNumbers() {
    const input = await Console.readLineAsync('');
    return input;
  },

  async readBonusNumber() {
    const input = await Console.readLineAsync('');
    return input;
  },
};
