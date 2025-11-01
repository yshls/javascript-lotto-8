import { UserInput } from './UserInput.js';
import { UserOutput } from './UserOutput.js';
import { validatePurchaseAmount } from './Validator.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  #purchaseAmount;
  #lottos = [];

  async run() {
    await this.#getPurchaseAmount();
    const lottoCount = this.#purchaseAmount / 1000;
    UserOutput.printLottoCount(lottoCount);

    this.#issueLottos(lottoCount);
    UserOutput.printLottos(this.#lottos);
  }

  async #getPurchaseAmount() {
    while (true) {
      try {
        UserOutput.promptPurchaseAmount();
        const amountInput = await UserInput.readPurchaseAmount();

        validatePurchaseAmount(amountInput);

        this.#purchaseAmount = Number(amountInput);
        break;
      } catch (error) {
        UserOutput.printError(error.message);
      }
    }
  }

  #issueLottos(lottoCount) {
    for (let i = 0; i < lottoCount; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);
      this.#lottos.push(lotto);
    }
  }
}

export default App;
