
/**
 * 冒泡排序（升序）：
 * 1. 数组从前开始，两两比较，如果前项比后项大，则交换位置；
 * 2. 指针+1，再次重复两两比较；
 * 3. 直到比较索引为 arr.length - 2和arr.length - 1为止，则一轮比较结束；
 * 4. 此时，可以确实最后一项为数组的最大值；
 * 5. 第二轮比较开始，比较方法与上轮相同，不同的是，数组的已经确定了最后一项为最大值，该值没有必要参与本轮的比较，
 *    第三、四...以后每轮都是，随着轮数的递增，一轮中两两比较的次数会越来越少；
 * 6. 至少于可以比较多少轮数，因为每轮都可以确定一个最大值，如果一个数组有n个元素，在n - 1轮过后，就可以确实索引1到n - 1位置的数字，
 *    同时剩下的第1个数字没有必要再比较，因为没有可交换的空间；
 */

/**
 *
 * @param {Array} arr
 */
function bubble(arr) {
  for(let i = 0; i < arr.length - 1; i++) { /* 6 */
    for(let j = 0; j < arr.length - 1 -i; j++) { /* 5 */
      if (arr[j] > arr[j + 1]) { /* 1 */
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

module.exports = bubble;