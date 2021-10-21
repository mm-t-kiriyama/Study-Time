function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2

    return showResult ? phrase + result : ''
}

const number1 = 5
const number2 = 2.8
const printResult = true
const resultPhrase = 'Result is: '

const result = add(number1, number2, printResult, resultPhrase)

/** Object types */

type Person = {
    name: string
    age: number
    hobbies: string[]
    role: [number, string]
}

const person: Person = {
    name: 'Kiriyama',
    age: 26,
    hobbies: ['Yuri', 'Manga'],
    role: [1, 'author']
}

person.role.push('hoge')

console.log(person)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
    // console.log(hobby.map()) // map は string には無いので、候補に挙がらないし、エラーになる
}