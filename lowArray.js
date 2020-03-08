class LowArray {

    arayy = [];
        
    constructor(size) {
        this.size = size;
        console.log(this.size);
    }

    setElem(index, value) {
        let arr = [];
        arr[index] = value;
        this.arayy = arr;
        console.log(arr);
    }

    getElem(index) {
        console.log(this.arayy[index]);
        return this.arayy[index];
    }

}

arr = new LowArray(20);
let aray = arr.setElem(0, 15);
let ar = arr.getElem(0);
// console.log(aray);

