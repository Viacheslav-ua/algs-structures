const graph = {}
graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}



function shortPath(graph, start, end) {
    const costs = {}    // Кратчайшие пути
    const processed = []    // Узлы уже проверенные
    let neighbors = {}   // Соседние вершины рассматриваемого узла

    Object.keys(graph).forEach(node => {
        if(node !== start) {
            const value = graph[start][node]
            costs[node] = value || 100000000
        }
    })

    // console.log(costs)

    let node = findNodeLowestCosts(costs, processed)
    while(node) {
        const cost = costs[node]
        neighbors = graph[node]
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor]
            if(newCost < costs[neighbor]) {
                costs[neighbor] = newCost
            }
        })
        processed.push(node)
        node = findNodeLowestCosts(costs, processed)
    }
    return costs
}

function findNodeLowestCosts(costs, processed) {
    let lowestCosts = 100000000 // Минимальное значение
    let lowestNode // Будем возвращать по итогу с мин. значением

    Object.keys(costs).forEach(node => {
        let cost = costs[node]
        if (cost < lowestCosts && !processed.includes(node)) {
            lowestCosts = cost
            lowestNode = node
        }
    })
    return lowestNode
}

console.log(shortPath(graph, 'a', 'g'))
