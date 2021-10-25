/** 知らなかったところだけを抜粋 */

/** Spread Operator */
const hobbies = ['Yuri', 'Manga', 'NTR', 'ONERORI']
const activeHobbies = ['NTR']

activeHobbies.push(...hobbies) // hobbies[0], hobbies[1] を追加する
// const activeHobbies = ['NTR', ...hobbies] // これでもいける

const person = {
    name: 'YURI',
    age: 27
}

const copiedPerson = { ...person, hobbies: ['YURI', 'MANGA'] }

/** Rest parameters */

const superAdd = (...numbers: number[]) => {
    return numbers.reduce((currentResult, currentVlue) => {
        return currentResult + currentVlue
    }, 0)
}

console.log(superAdd(1, 3, 4, 5, 6))

/** Array & Object Destructuring */

const [hobby1, hobby2, ...remainingHobbies] = hobbies

console.log(hobby1, hobby2, remainingHobbies)