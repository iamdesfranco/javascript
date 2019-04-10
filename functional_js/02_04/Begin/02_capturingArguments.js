// Learning Functional Programming with Javascript
// Chapter 02, Video 04, Exercise 02

function createCounter(count) {

  return {
    increment: function() {
      count = count + 1
    },

    currentValue: function() {
      return count
    }
  }
}

var counterStartAt5 = createCounter(5)
console.log(counterStartAt5.currentValue())
counterStartAt5.increment()
console.log(counterStartAt5.currentValue())
