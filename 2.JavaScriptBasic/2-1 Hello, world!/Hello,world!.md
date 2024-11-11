- 웹 페이지에 자바스크립트 코드를 추가하기 위해 html 파일에 `<script>` 태그를 사용합니다.

- type 과 language 속성은 필수가 아닙니다.

      type
      HTML4에선 스크립트에 type을 명시하는 것이 필수였습니다. 따라서 type="text/javascript" 속성이 붙은 스크립트를 어렵지 않게 찾을 수 있었습니다. 이젠 타입 명시가 필수가 아닙니다.


      language 속성: <script language=…>
      이 속성은 현재 사용하고 있는 스크립트 언어를 나타냅니다. 지금은 자바스크립트가 기본 언어이므로 속성의 의미가 퇴색된 상황입니다. 더는 사용할 필요가 없어졌죠.

- 외부 스크립트 파일은

```html
<script src="path/to/script.js"></script>
```

와 같이 삽입합니다.
