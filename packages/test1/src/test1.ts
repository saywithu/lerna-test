export class IdClass1 {
    id: string
}

export class Test1 {
    get(id: number): IdClass1 {
        return { id: `test1-${id}` };
    }
}
