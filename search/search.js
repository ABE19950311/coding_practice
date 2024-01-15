function searchNode(target) {
    const array = []
    for(let i=0;i<=100;i++) {
        array.push(i)
    }
    let start = 0
    let end = array.length-1
    let mid = 0
    let count = 0
    while(start<=end) {
        count++
        mid = Math.floor((start+end)/2);
        if(array[mid]==target) return [mid,count]
        if(array[mid]>target) {
            end=mid-1
        } else {
            start=mid+1
        }
    }
    return 1
}

function main() {
    const res = searchNode(1);
    console.log(res)
}
main()