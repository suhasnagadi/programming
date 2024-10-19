const primeNumbersTillNum = (limit) => {
  let primeArray = [];

  for (i = 0; i < limit; i++) {
    let flag = false;

    for (j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = true;
      }
    }

    if (!flag) {
      primeArray.push(i);
    }
  }

  console.log(`The prime array is ${primeArray}`);
};

primeNumbersTillNum(100);

const nthPrimeNumber = (n) =>{

    let primeArray = [];

    for(i=0;i>-1;i++){

        let flag = false;

        for(j=2;j<i;j++){

            if(i%j==0){

                flag = true;
            }
        }

        if(!flag){

            primeArray.push(i);
        }

        if(primeArray.length==n+1){

            break;
        }
    }

    console.log(`The ${n} - th prime number is ${primeArray[primeArray.length-1]}`);

}

nthPrimeNumber(10);
