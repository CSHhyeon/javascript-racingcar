## 자동차 경주 게임 기능 정의서

### 전역 변수
- 자동차 객체 Array(Car 객체)
  - name: 자동차 이름
  - totalDistance: 총 이동거리
  - doMoveForward: 전진 유무(true, false)
  - movedDistance: 이번에 이동한 거리

### 0. 초기화(initialization)
1단계) 자동차 객체 배열 비우기
2단계) 시도할 횟수 입력칸(racing-count-input)과 버튼(racing-count-submit) 비활성화

<!-- 영어, 한국어 혼합해도 되는지..? 숫자 넣어도 되는지..?
     근데 그런 명세는 없기 때문에 그냥 5자 이하인지만 구분했음..
 -->
<!-- 콤마로 구분한다고 했기 때문에 쉼표 split 후 trim으로 공백 제거 -->
### 1. 자동차 이름 입력 받기(getNameInput)
1단계) id="car-names-submit" 버튼 클릭 시 id="car-names-input" 안 텍스트 가져오기
2단계) 쉼표로 구분, trim으로 공백 제거
- return 값: Array
- input ex) input="east, west, south, north"
- output ex) return=["east", "west", "south", "north"]

### 2. 자동차 이름 입력값 검증(isValidName)
1단계) 이름이 5자 이하인지 확인 (그 외 조건이 없음)
2단계) 6자 이상이면 alert로 "5자 이하로 입력하세요." 표시
    - 괜히 입력창 초기화시키면 다 다시 입력해야 하므로 이 때는 입력창 초기화 X

### 3. 자동차 이름 저장(saveName)
1단계) isValidName이 모두 true이면 전역 변수에 객체 배열 저장
2단계) 시도할 횟수 입력칸(racing-count-input)과 버튼(racing-count-submit) 활성화

### 4. 횟수 입력값 검증(isValidCount)
1단계) 숫자인지 확인(isNaN)
2단계) 정수인지 확인(isInteger)
3단계) 0 이상인지 확인
-> 1, 2, 3 단계 통과하지 않으면 alert 창 띄우기
-> 모두 만족하면 5번(checkMoveDistance) 진행

### 5. 전진 조건 확인(checkMoveDistance)
for...of 사용해 자동차 객체 배열 돌며 하나씩 확인
1단계) 입력받은 cnt--
2단계) 0~9 사이에서 무작위 값 구하기
3단계) 4 미만이면 moveForward에 false 넣고 continue,
      4 이상이면 moveForward에 true, moveDistance에 무작위 값 넣기
4단계) 6번 함수 호출(showMovedForward)
5단계) 다음 루프 돌기

### 6. 값 출력(showMovedForward)
자동차 이름, 각 자동차 전진 횟수 넣은 HTML 생성

### 7. 우승자 출력(showWinner)
자동차 객체에서 totalDistance가 가장 큰 값을 가진 우승자들 구해 출력