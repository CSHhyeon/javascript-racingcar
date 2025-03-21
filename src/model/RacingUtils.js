// 자동차 이름 입력값 검증 (하나라도 1~5 글자가 아니면 false)
export function isValidName(nameList) {
  return nameList.every(name => name.length > 0 && name.length <= 5);
}

// 시도 횟수 입력값 검증 (정수인지, 0 이상인지 확인)
export function isValidCount(count) {
  return Number.isInteger(count) && (count > 0);
}

// 문자열 입력을 , 로 나누고 공백 제거
export function splitNameInput(input) {
  return input.split(",").map(name => name.trim());
}