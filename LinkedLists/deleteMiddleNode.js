/**
 * delete middle node in given linked list
 * @param {Node} head
 * @return {Node} 
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const deleteMiddleNode = (head) => {
  if(!head || !head.next) return null;
  let slow = head;
  let fast = head;
  let prev;
  while(fast!==null && fast.next!==null){
    prev=slow;
    slow=slow.next;
    fast=fast.next.next;
  }
  prev.next = slow.next;
}