export const validatePurchaseAmount = (input) => {
  if (isNaN(Number(input))) {
    throw new Error('[ERROR] 입력값은 숫자여야합니다.');
  }

  if (Number(input) < 1000) {
    throw new Error('[ERROR] 입력값은 1000원 이상이어야합니다.');
  }

  if (Number(input) % 1000 !== 0) {
    throw new Error('[ERROR] 입력값은 1000원 단위여야합니다.');
  }
};

export const validateWinningNumbers = (input) => {
  const numbers = input.split(',').map(Number);

  if (numbers.length !== 6) {
    throw new Error('[ERROR] 당첨 번호는 6개여야 합니다.');
  }

  if (numbers.some(isNaN)) {
    throw new Error('[ERROR] 당첨 번호는 숫자여야 합니다.');
  }

  const uniqueNumbers = new Set(numbers);
  if (uniqueNumbers.size !== numbers.length) {
    throw new Error('[ERROR] 당첨 번호에 중복된 숫자가 있습니다.');
  }

  if (numbers.some((num) => num < 1 || num > 45)) {
    throw new Error('[ERROR] 당첨 번호는 1~45 사이의 숫자여야 합니다.');
  }
};
