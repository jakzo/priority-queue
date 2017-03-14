(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.PriorityQueue = factory());
}(this, (function () { 'use strict';

/**
 * JavaScript implementation of a binary-heap priority queue.
 */
var PriorityQueue = (function (Array) {
  function PriorityQueue(compare) {
    if ( compare === void 0 ) compare = PriorityQueue.defaultCompare;

    this.compare = compare;
  }

  if ( Array ) PriorityQueue.__proto__ = Array;
  PriorityQueue.prototype = Object.create( Array && Array.prototype );
  PriorityQueue.prototype.constructor = PriorityQueue;

  /**
   * Pushes an element onto the queue.
   * @param  {*} item Element to be pushed onto the queue.
   * @return {number} The number of items on the queue after the push.
   */
  PriorityQueue.prototype.push = function push (item) {
    var this$1 = this;

    var length = Array.prototype.push.call(this, item);
    var i = length - 1,
        parent = i - 1 >> 1;
    while (i > 0 && this.compare(item, this[parent])) {
      this$1[i] = this$1[parent];
      this$1[parent] = item;
      i = parent;
      parent = i - 1 >> 1;
    }
    return length;
  };

  /**
   * Removes and returns the item with the highest priority.
   * @return {*} The item with the highest priority in the queue.
   */
  PriorityQueue.prototype.pop = function pop () {
    var this$1 = this;

    var popped = this[0],
          item = Array.prototype.pop.call(this);
    var i = 0,
        ia = 1,
        ib = 2;
    while (ia < this.length) {
      if (ib == this$1.length || this$1.compare(this$1[ia], this$1[ib])) {
        if (this$1.compare(item, this$1[ia])) { break; }
        this$1[i] = this$1[ia];
        i = ia;
      } else {
        if (this$1.compare(item, this$1[ib])) { break; }
        this$1[i] = this$1[ib];
        i = ib;
      }
      ia = i * 2 + 1;
      ib = i * 2 + 2;
    }
    if (this.length != 0) { this[i] = item; }
    return popped;
  };

  return PriorityQueue;
}(Array));

/**
 * The comparison function which is used if no comparison function is passed
 * into the constructor. By default, it just evaluates `a < b`.
 * @type {Function}
 */
PriorityQueue.defaultCompare = function (a, b) { return a < b; };

return PriorityQueue;

})));
//# sourceMappingURL=priority-queue.js.map
