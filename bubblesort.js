const bubbleSortAsc = (inputArray)=>{

    console.log(`The input array is ${inputArray}`);

    for(i=0;i<inputArray.length;i++){

        for(j=1;j<inputArray.length-i;j++){

            if(inputArray[j]<inputArray[j-1]){

                let temp = inputArray[j];

                inputArray[j] = inputArray[j-1];

                inputArray[j-1] = temp;
            }
        }
    }

    console.log(`The sorted array is ${inputArray}`);

}

bubbleSortAsc([5,4,3,2,1]);

const bubbleSortDesc = (inputArray) =>{

    console.log(`The input array is ${inputArray}`);

    for(i=0;i<inputArray.length;i++){

        for(j=1;j<inputArray.length-i;j++){

            if(inputArray[j]>inputArray[j-1]){

                let temp = inputArray[j];

                inputArray[j] = inputArray[j-1];

                inputArray[j-1] = temp;

            }
        }
    }

    console.log(`The sorted array is ${inputArray}`);
}

bubbleSortDesc([1,2,3,4,5]);