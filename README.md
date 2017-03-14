# priority-queue
[![Build Status](https://travis-ci.org/jakzo/priority-queue.svg?branch=master)](https://travis-ci.org/jakzo/priority-queue)

*JavaScript priority queue implementation.*

## Usage

```js
// Include the library
// Browser: <script type="text/javascript" src="./lib/priority-queue.js"></script>
// Node:    var PriorityQueue = require('./lib/priority-queue.js')
// ES6:     import PriorityQueue from './lib/priority-queue.js'

function compare(a, b) {
  if (a.priority < b.priority) return true;
  else return false;
}
var pq = new PriorityQueue(compare);
pq.push({ foo: 'bar', priority: 4 });
pq.push({ priority: 3, something: 'text' });
pq.push({ priority: 9 });
console.log(pq.pop()); // { priority: 3, something: 'text' }
console.log(pq.pop()); // { foo: 'bar', priority: 4 }
console.log(pq.pop()); // { priority: 9 }
```
