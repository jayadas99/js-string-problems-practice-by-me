function maxInArray(numbers){
    // console.log('array inside the array', numbers);
    let largest = numbers[0];
    for(i =0 ; i <numbers.length; i++){
        const index = i;
        const element = numbers[index];
        // console.log(element);
        if(element > largest){
            largest = element;
        }
        
    }
    return largest;
}

const heights = [167, 190, 120, 165, 137, 265];
const tallest = maxInArray(heights);
console.log(tallest);

// homework:write a function to get the lowest number in an array