// function notifyUpdate() {
//     document.getElementById("app").innerText = `${JSON.stringify(obj)}
//     ${JSON.stringify(arrData)}`
// }
// function defineProperty(obj, key, val) {
//     Object.defineProperty(obj, key, {
//         get() {
//             console.log(`get ${key}:${val}`);
//             return val
//         },
//         set(newVal) {
//             if (newVal !== val) {
//                 val = newVal
//                 console.log(`set ${key}:${newVal}`);
//                 observe(newVal) // 新值是对象的情况
//                 notifyUpdate()
//             }
//         }
//     })
// }
// function defineReactive(obj, key, val) {
//     defineProperty(obj, key, val)
// }
// function observe(obj) {
//     if (typeof obj !== 'object' || obj == null) {
//         return
//     }
//     Object.keys(obj).forEach(key => {
//         defineReactive(obj, key, obj[key])
//     })
// }
// const arrData = [1, 2, 3, 4, 5];
// const obj = { foo: 1 }
// notifyUpdate()
// observe(obj)
// setTimeout(() => {
//     obj.foo = 2
// }, 2000)
// setTimeout(() => {
//     delete obj.foo
// }, 4000)
// setTimeout(() => {
//     obj.abc = 2
// }, 6000)

// arrData.forEach((val, index) => {
//     defineProperty(arrData, index, val)
// })
// arrData.push(100) // no ok
// arrData.pop()  // no ok
// arrData[0] = 99 // ok

