/**
 * Given a singly linked list, partition numbers less than the target number to the left.
 * @param {Node} head
 * @param {Int} target
 * @return {Node}
 */
const partitionInefficient = (head,x) => {
  const left = []
  const right =[]
  let temp = head
  while(temp!==null){
      if(temp.val < x){
          left.push(temp.val)
      } else {
          right.push(temp.val)
      }
      temp=temp.next;
  }
  let temp2 = head
  let leftIndex = 0
  let rightIndex = 0
  while(temp2!==null){
      if(leftIndex<left.length){
          temp2.val = left[leftIndex]
          leftIndex+=1
      } else {
          temp2.val = right[rightIndex]
          rightIndex+=1
      }
      temp2=temp2.next
  }
  return head
}

const partitionSpaceEfficient = (head,x) => {
  let leftNode=null;
    let rightNode = head;
    let prevNode=null;
    while(rightNode!==null){
        let next = rightNode.next
        if(rightNode.val < x){  
            if(!prevNode) {
                leftNode = rightNode
            } else {
                let temp = new ListNode(rightNode.val)
                prevNode.next = rightNode.next
                if(leftNode){
                    temp.next = leftNode.next
                    leftNode.next = temp
                    leftNode = leftNode.next
                } else {
                    temp.next=head
                    leftNode = temp
                    head = temp
                }
            }
        } else {
            prevNode= rightNode;    
        }
        rightNode= next;
    }
    return head
}