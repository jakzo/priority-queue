# priority-queue
[![Build Status](https://travis-ci.org/jakzo/priority-queue.svg?branch=master)](https://travis-ci.org/jakzo/priority-queue)
[![Build status](https://ci.appveyor.com/api/projects/status/ov5yyh5r827nwip1?svg=true)](https://ci.appveyor.com/project/jakzo/priority-queue)
[![Coverage Status](https://coveralls.io/repos/github/jakzo/priority-queue/badge.svg?branch=master)](https://coveralls.io/github/jakzo/priority-queue?branch=master)
[![Dependency Status](https://dependencyci.com/github/jakzo/priority-queue/badge)](https://dependencyci.com/github/jakzo/priority-queue)

*JavaScript priority queue implementation.*

## Usage

```js
// Include the library
// Browser: <script type="text/javascript" src="./lib/priority-queue.js"></script>
// Node:    var PriorityQueue = require('./lib/priority-queue.js')
// ES6:     import PriorityQueue from './lib/priority-queue.js'

function compare(a, b) {
  if (a.priority < b.priority) return true;
  return false;
}
var pq = new PriorityQueue(compare);
pq.push({ foo: 'bar', priority: 4 });
pq.push({ priority: 3, something: 'text' });
pq.push({ priority: 9 });
console.log(pq.pop()); // { priority: 3, something: 'text' }
console.log(pq.pop()); // { foo: 'bar', priority: 4 }
console.log(pq.pop()); // { priority: 9 }
```

## API


### Class: `PriorityQueue`

#### `push(item)`

Pushes an element onto the queue.

**item**: `*`, Element to be pushed onto the queue.

**Returns**: `number`, The number of items on the queue after the push.

#### `pop()`

Removes and returns the item with the highest priority.

**Returns**: `*`, The item with the highest priority in the queue.

#### `PriorityQueue.defaultCompare`

The comparison function which is used if no comparison function is passed
into the constructor. By default it evaluates `a < b`.
