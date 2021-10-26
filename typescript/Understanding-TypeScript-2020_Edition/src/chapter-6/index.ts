/** Intersection Types */

type Admin = {
    name: string
    privileges: string[]
}

type Employee = {
    name: string
    startDate: Date
}

type ElevatedEmployee = Admin & Employee // オブジェクトがネストされるわけではない

type UnknownEmployee = Admin | Employee

const e: ElevatedEmployee = {
    name: 'kiriyama',
    privileges: ['Yuri'],
    startDate: new Date()
}