## Map

Key-value의 한 쌍으로 이루어진 데이터 집합이다.
Key에는 중복된 값이 입력될 수 없다

```js
new Map(); // map을 만든다
map.set(key, value); // key를 이용해 value를 저장한다
map.get(key); // key에 해당하는 값 반환. key가 존재하지 않다면 undefined를 반환
```

## Set
셋(Set)은 중복을 허용하지 않는 값을 모아놓은 특별한 컬렉션입니다. 셋에 키가 없는 값이 저장됩니다.

`new Set(iterable)` – 셋을 만듭니다. 이터러블 객체를 전달받으면(대개 배열을 전달받음) 그 안의 값을 복사해 셋에 넣어줍니다.

`set.add(value)` – 값을 추가하고 셋 자신을 반환합니다.

`set.delete(value)` – 값을 제거합니다. 호출 시점에 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환합니다.

`set.has(value)` – 셋 내에 값이 존재하면 true, 아니면 false를 반환합니다.

`set.clear()` – 셋을 비웁니다.

`set.size` – 셋에 몇 개의 값이 있는지 세줍니다.