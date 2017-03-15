import test from 'ava';
import PriorityQueue from '../lib/priority-queue';

test('example', t => {
  function compare(a, b) {
    if (a.priority < b.priority) return true;
    return false;
  }
  var pq = new PriorityQueue(compare);
  pq.push({ foo: 'bar', priority: 4 });
  pq.push({ priority: 3, something: 'text' });
  pq.push({ priority: 9 });
  t.is(pq.length, 3);
  t.deepEqual(pq.pop(), { priority: 3, something: 'text' });
  t.deepEqual(pq.peek(), { foo: 'bar', priority: 4 });
  t.deepEqual(pq.pop(), { foo: 'bar', priority: 4 });
  pq.clear();
  t.is(pq.length, 0);
  t.is(pq.pop(), undefined);
});

test('sorted', t => {
  const pq = new PriorityQueue(),
        items = [ 9, 1, 6, 4, 7, 7, 9, 4, 2, -14, 3, 32, 65, 8 ],
        itemsSorted = items.slice().sort((a, b) => a - b);
  items.forEach(item => pq.push(item));
  itemsSorted.forEach(item => t.is(pq.pop(), item));
});

test('custom compare', t => {
  const customCompare = (a, b) => (a[1] - b[1] || a[0] - b[0]) < 0,
        pq = new PriorityQueue(customCompare),
        items = [
          [0, 9], [1, 1], [2, 6], [3, 4], [4, 7], [5, 7], [6, 9], [7, 4],
          [8, 2], [9, -14], [10, 3], [11, 32], [12, 65], [13, 8]
        ],
        itemsSorted = items.slice().sort((a, b) => a[1] - b[1] || a[0] - b[0]);
  items.forEach(item => pq.push(item));
  itemsSorted.forEach(item => t.is(pq.pop(), item));
});
