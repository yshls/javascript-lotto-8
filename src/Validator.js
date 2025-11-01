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
