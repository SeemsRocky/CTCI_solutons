/**
 * Delete all duplicate nodes in the linked list
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const removeDuplicates = (head) => {
  // let temp = head;
  let memory = {};
  let prev;
  for(let temp = head; temp !==null; temp=temp.next){
    if(memory.hasOwnProperty(temp.val)){
      prev.next = temp.next
    } else {
      prev = temp;
      memory[temp.val] = true
    }
  }
}