export class Test2 {
    get(id) {
        console.log("Test2 get")
        console.log("Test2 get 555")
        return {id: `test2-${id}`};
    }
}
