const arr = [1,3,4,5,6,8,9, 100, 222, 333, 448, 500, 6657, 1000];

const binarySearch = (arr, value) => {
	let height = arr.length -1;
	let low = 0;
	let middle = 0;

	while (low < height) {
		middle = Math.floor((height + low)/2);
		if(arr[middle] === value){
			return middle;
		}else if(value >  arr[middle]){
			low = middle + 1
		}else{
			height = middle - 1
		}
	}

	return -1;

}

const res = binarySearch(arr, 101);
console.log(res)