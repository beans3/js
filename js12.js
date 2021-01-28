'use strict'

// Promise is a javascipt object for asynchronous operation.
// state: pending -> fulfilled or rejected
// Producer VS Consumer

// 1. Producer
// When new Promise is Created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some haevy work (network, read files)
  // 만들어진 순간 실행
  console.log('doing something...')
  setTimeout(() => {
    //resolve('ellie')
    reject(new Error('no network'))
  }, 2000)
})

// 2. Consumers: then, catch, finally
promise //
  .then(value => {
    console.log(value)
  })
  .catch(error => {
    console.log(error)
  })
  .finally(() => {
    console.log('finally')
  })

// 3. Promise chaining
const fetchNum = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000)
})

fetchNum
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000)
    })
  })
  .then(num => console.log(num))

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000)
  })

const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`${hen} => 🥚`)), 1000)
  })

const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000)
  })

/*
getHen()
.then(hen => getEgg(hen))
.then(egg => cook(egg))
.then(meal => console.log(meal));
*/

// 암묵적으로 전달하여 생략 가능
getHen()
  .then(getEgg)
  .catch(error => {
    return '🍔'
  })
  .then(cook)
  .then(console.log)
  .catch(console.log)
