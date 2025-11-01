import {
  validatePurchaseAmount,
  validateWinningNumbers,
} from '../src/Validator.js';

describe('구입 금액 검증 테스트', () => {
  test('입력값이 1,000원으로 나누어 떨어지지 않으면 에러가 발생된다.', () => {
    expect(() => {
      validatePurchaseAmount('1500');
    }).toThrow('[ERROR]');
  });

  test('입력값이 숫자가 아니면 에러가 발생된다.', () => {
    expect(() => {
      validatePurchaseAmount('1000j');
    }).toThrow('[ERROR]');
  });

  test('입력값이 0원이면 에러가 발생된다.', () => {
    expect(() => {
      validatePurchaseAmount('0');
    }).toThrow('[ERROR]');
  });

  test('입력값이 음수이면 에러가 발생된다.', () => {
    expect(() => {
      validatePurchaseAmount('-1000');
    }).toThrow('[ERROR]');
  });

  test('유효한 입력값(1,000원 단위)은 에러가 발생되지 않는다.', () => {
    expect(() => {
      validatePurchaseAmount('3000');
    }).not.toThrow();
  });
});

describe('당첨 번호 검증 테스트', () => {
  test('숫자가 6개가 아니면 에러가 발생한다.', () => {
    expect(() => {
      validateWinningNumbers('1,2,3,4,5');
    }).toThrow('[ERROR]');
  });

  test('숫자가 아닌 값이 포함되면 에러가 발생한다.', () => {
    expect(() => {
      validateWinningNumbers('1,2,3,4,5,a');
    }).toThrow('[ERROR]');
  });

  test('중복된 숫자가 있으면 에러가 발생한다.', () => {
    expect(() => {
      validateWinningNumbers('1,2,3,4,5,5');
    }).toThrow('[ERROR]');
  });

  test('1~45 범위를 벗어난 숫자가 있으면 에러가 발생한다.', () => {
    expect(() => {
      validateWinningNumbers('1,2,3,4,5,46');
    }).toThrow('[ERROR]');
  });

  test('유효한 당첨 번호는 에러가 발생하지 않는다.', () => {
    expect(() => {
      validateWinningNumbers('1,2,3,4,5,6');
    }).not.toThrow();
  });
});
