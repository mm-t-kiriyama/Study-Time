function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2

    return showResult ? phrase + result : ''
}

const number1 = 5
const number2 = 2.8
const printResult = true
const resultPhrase = 'Result is: '

const result = add(number1, number2, printResult, resultPhrase)

/** Object types Enum */

type Person = {
    name: string
    age: number
    hobbies: string[]
    role: [number, string]
    roleEnum: Role
}

enum Role { ADMIN = 1, READ_ONLY, AUTHOR } // enum は初めてかも Goでもあるんかな。マッピングに便利な気がする

const person: Person = {
    name: 'Kiriyama',
    age: 26,
    hobbies: ['Yuri', 'Manga'],
    role: [1, 'author'],
    roleEnum: Role.AUTHOR
}

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
    // console.log(hobby.map()) // map は string には無いので、候補に挙がらないし、エラーになる
}

/** Union & Literal Type */

type Combinable = number | string
type ConversionDescriptor = 'as-number' | 'as-text'

function combine(
    x: Combinable,
    y: Combinable,
    resultConversion: ConversionDescriptor
) {
    let result
    if (typeof x === 'number' && typeof y === 'number' || resultConversion === 'as-number') {
        result = +x + +y
    } else {
        result = x.toString() + y.toString()
    }
    return result
}

const combineAges = combine(20, 26, 'as-number')
console.log(combineAges)

const combineString = combine('20', '26', 'as-text')
console.log(combineString)


const combineNames = combine('Adachi', 'Shimamura', 'as-text')
console.log(combineNames)


/** Function Return Types & 'void' */

function sum(x: number, y: number): number {
    return x + y
}

function printResult2(num: number): void {
    console.log('Result: ' + num)
}

function printResultUndefined(num: number): undefined { // undefined も型の一つとしてあつかえるのか
    console.log('Result: ' + num)
    return
}

printResult2(sum(2, 3))

/** Function as Types */

let combineValues: (a: number, b: number) => number // なんやこの書き方...

combineValues = sum

console.log(combineValues(2, 3))

/** Callbacks */

function addAndHandle(x: number, y: number, cb: (num: number) => void) {
    const result = x + y
    cb(result)
}

addAndHandle(2, 4, (result) => {
    console.log(result)
})

/** Unknown type & Never type */

// 動画みるだけ