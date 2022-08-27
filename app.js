//grabbing the first six Incomplete Todos from https://jsonplaceholder.typicode.com/todos


async function firstSixIncomplete(userId){
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos")
    const results = await promise.json()
    const incompleteTasks = results.filter(elem => !elem.completed).slice(0,6)

    console.log(incompleteTasks)


}


firstSixIncomplete()
