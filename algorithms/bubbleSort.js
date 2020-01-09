const arr = [3,4,8,100, 22, 11, 99, 200, 1, -10];

const bubbleSort = (arr) => {

	for (let i=0; i<arr.length; i++) {

		for (let j=0; j<arr.length; j++) {
			if(arr[j] > arr[j+1]){
				let temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}

	return arr
}

bubbleSort(arr);

console.log(arr)