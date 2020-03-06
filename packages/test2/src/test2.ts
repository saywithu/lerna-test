export class IdClass2 {
    id: string
}

export class Test2 {
    get(id: number): IdClass2 {
        return { id: `test2-${id}` };
    }
}
