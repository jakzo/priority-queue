/**
 * JavaScript implementation of a binary-heap priority queue.
 */
export default class PriorityQueue extends Array {
  /**
   * @param {?Function} compare Function used to compare the priority of two
   *    items. It is passed two arguments and should return `true` if the first
   *    item has a greater priority than the second, otherwise `false`.
   */
  constructor(compare = PriorityQueue.defaultCompare) {
    this.compare = compare;
  }

  /**
   * Pushes an element onto the queue.
   * @param  {*} item Element to be pushed onto the queue.
   * @return {number} The number of items on the queue after the push.
   */
  push(item) {
    const length = Array.prototype.push.call(this, item);
    let i = length - 1,
        parent = i - 1 >> 1;
    while (i > 0 && this.compare(item, this[parent])) {
      this[i] = this[parent];
      this[parent] = item;
      i = parent;
      parent = i - 1 >> 1;
    }
    return length;
  }

  /**
   * Removes and returns the item with the highest priority.
   * @return {*} The item with the highest priority in the queue.
   */
  pop() {
    const popped = this[0],
          item = Array.prototype.pop.call(this);
    let i = 0,
        ia = 1,
        ib = 2;
    while (ia < this.length) {
      if (ib == this.length || this.compare(this[ia], this[ib])) {
        if (this.compare(item, this[ia])) break;
        this[i] = this[ia];
        i = ia;
      } else {
        if (this.compare(item, this[ib])) break;
        this[i] = this[ib];
        i = ib;
      }
      ia = i * 2 + 1;
      ib = i * 2 + 2;
    }
    if (this.length != 0) this[i] = item;
    return popped;
  }
}

/**
 * The comparison function which is used if no comparison function is passed
 * into the constructor. By default, it just evaluates `a < b`.
 * @type {Function}
 */
PriorityQueue.defaultCompare = (a, b) => a < b;
