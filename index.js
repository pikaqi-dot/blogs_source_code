var name = 'global_name'
var obj = {
  name: 'local',
  foo: function() {
    this.name = 'foo'
    console.log(this.name)
  }.bind(global),
}
var bar = new obj.foo()
var bar3 = (bar2 = bar)
setTimeout(function (name) {
  console.log(name)
}, {name:"setTimeout"})
setTimeout(function () {
  console.log(name)
}, 0)
console.log(bar.name)
bar2.name = 'f002' 
console.log(bar3.name)
// console.log("this: ",globalThis);