const graf = {}
graf.a = ['b', 'c']
graf.b = ['f']
graf.c = ['d', 'e']
graf.d = ['f']
graf.e = ['f']
graf.f = ['g']

function breadthSearch(graf, start, end) {
    let queue = []
    queue.push(start)
    while(queue.length > 0) {
        const current = queue.shift()
        if(!graf[current]) {
            graf[current] = []
        }
        if(graf[current].includes(end)) {
            return true
        } else {
            queue = [...queue, ...graf[current]]
        }
    }
}

console.log(breadthSearch(graf, 'a', 'g'));