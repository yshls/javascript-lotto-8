import { validatePurchaseAmount } from '../src/Validator.js';

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

  test('유효한 입력값(1,000원 단위)은 에러가 발생된다.', () => {
    expect(() => {
      validatePurchaseAmount('3000');
    }).not.toThrow();
  });
});
