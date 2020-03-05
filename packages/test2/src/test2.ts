export class IdClass {
    id: string
}

export class Test2 {
    get(id: number): IdClass {
        console.log("Test2 get")
        console.log("Test2 get 555")
        return { id: `test2-${id}` };
    }
}
