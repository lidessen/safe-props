# PropsCheck
simple function to check props type.


```javascript
function Add(numberA, numberB) {
    console.log(numberA + numberB)
}

let SafeAdd = Safe([
    {
        name: "numberA",
        type: "number"
    },
    {
        type: "number"
    }
], Add)

SafeAdd(1, "");
//>> Error: prop[1] is not type [number]

SafeAdd("", 1);
//>> Error: prop[numberA] is not type [number]

SafeAdd(1, 1);
//>> 2
```
