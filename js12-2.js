'use strict'

// JS is synchronous.
// hoisting: var, function declaration

// 1
// Synchronous callback
function printImm (print) {
  print()
}

// 2
console.log('1')
// 5
setTimeout(() => console.log('2'), 1000)
// 3
console.log('3')

// 4
printImm(() => console.log('hello'))

// Asynchronous callback
function printWD (print, timeout) {
  setTimeout(print, timeout)
}

printWD(console.log('async callback'), 2000)

class UserST {
  loginUser (id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id)
      } else {
        onError(new Error('not found'))
      }
    }, 2000)
  }

  getRoles (user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' })
      } else {
        onError(new Error('no access'))
      }
    }, 1000)
  }
}

// 1. id, password 입력
// 2. login
// 3. role 요청
// 4. name, role print
const userST = new UserST()
const id = prompt('Enter your ID')
const password = prompt('Enter your password')
userST.loginUser(
  id,
  password,
  user => {
    userST.getRoles(
      user,
      userRole => {
        alert(`Hello ${userRole.name}, you have a ${userRole.role} role`)
      },
      error => {
        console.log(error)
      }
    )
  },
  error => {
    console.log(error)
  }
)
