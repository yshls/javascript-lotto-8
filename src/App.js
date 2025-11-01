import { UserInput } from './UserInput.js';
import { UserOutput } from './UserOutput.js';
import { validatePurchaseAmount } from './Validator.js';

class App {
  #purchaseAmount;

  async run() {
    await this.#getPurchaseAmount();
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
}

export default App;
