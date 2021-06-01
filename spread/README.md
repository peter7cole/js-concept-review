[Home](https://github.com/peter7cole/js-concept-review)

# Spread & Rest Operator

> ...

### **Spread**: Used to split up array elements OR object properties

```javascript
const newArray = [...oldArray, 1, 2];
const newObject = { ...oldObject, newProp: 5 };
```

### **Rest**: Used to merge a list of function arguments into an array

```javascript
function sortArgs(...args) {
  return args.sort();
}
```
