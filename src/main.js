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
    super();
    this.compare = compare;
  }

  /**
   * Pushes an element onto the queue.
   * @param  {*} item Element to be pushed onto the queue.
   * @return {number} The number of items on the queue after the push.
   */
  push(item) {
    // Add the item at the bottom of the heap
    const length = Array.prototype.push.call(this, item);
    // Bubble it up to its correct position (until it reaches a node with a
    // greater priority or it becomes the root node)
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
    // Get the item with the highest priority (it will be at index 0)
    const popped = this[0];
    // Rebalance the tree by putting the item with the lowest priority at the
    // top then bubbling it down to its correct position
    const item = Array.prototype.pop.call(this);
    let i = 0,
        ia = 1,
        ib = 2;
    while (ib < this.length) {
      // Swap the item with the child which has a higher priority
      if (this.compare(this[ia], this[ib])) {
        this[i] = this[ia];
        i = ia;
      } else {
        this[i] = this[ib];
        i = ib;
      }
      ia = (i * 2) + 1;
      ib = (i * 2) + 2;
    }
    // If the final pair of children only contains one item, don't compare both
    // children, but we do need to compare it with the item we are bubbling
    // because it used to be the other item in this pair and may have been the
    // item with the higher priority
    if (this.length !== 0) {
      if (ib === this.length && !this.compare(item, this[ia])) {
        this[i] = this[ia];
        i = ia;
      }
      this[i] = item;
    }
    return popped;
  }
}

/**
 * The comparison function which is used if no comparison function is passed
 * into the constructor. By default it evaluates `a < b`.
 * @type {Function}
 * @param {*} a First element to compare.
 * @param {*} b Second element to compare.
 * @return {boolean} `true` if `a < b`.
 */
PriorityQueue.defaultCompare = (a, b) => a < b;
