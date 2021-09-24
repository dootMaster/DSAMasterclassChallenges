class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }

  removeVertex(vertex) {
    while(this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  DFSrecursive(vertex) {
    let result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    const helper = (vertex) => {
      if(!vertex) return null;
      result.push(vertex);
      visited[vertex] = true;
      adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]) {
          return helper(neighbor);
        }
      })
    }
    helper(vertex);
    return result;
  }

  DFSiterative(start) {
    let S = [start], result = [], visited = {[start]: true},
    currentVertex;

    while(S.length) {
      currentVertex = S.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]) {
          visited[neighbor] = true;
          S.push(neighbor);
        }
      })
    }
    return result;
  }
}


let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");

let a = g.DFSrecursive("Dallas");
let b = g.DFSrecursive("Tokyo");
let c = g.DFSrecursive("Aspen");
let d = g.DFSrecursive("Los Angeles");
let e = g.DFSrecursive("Hong Kong");

let f = g.DFSiterative("Dallas");
let g1 = g.DFSiterative("Tokyo");
let h = g.DFSiterative("Aspen");
let i = g.DFSiterative("Los Angeles");
let j = g.DFSiterative("Hong Kong");

let test = [a, b, c, d, e, f, g1, h, i, j,];

test.forEach(item => console.log(item));



