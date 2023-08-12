# format-money

format money

## Install

```
npm i @bearcookie/format-money
or
yarn add @bearcookie/format-money
```

## Usage

```javascript
import useMoney from "@bearcookie/format-money";
const { divide, multipole } = useMoney()

// divide
const money = divide(123456)
console.log(money.value) // 123,4.56
console.log(money.real) // 1234.56
console.log(money.origin) // 123456

// multiple
multipole(123456) // 12345600
```

### API

```javascript

```
