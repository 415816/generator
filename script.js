let array = [0, 0, 0, 0];
let i = 0;
let j = 0;

while (j < array.length) {
    while (i < 5) {
        array[j] = i;
        console.log(array);
        i++;  
    }
    array[j] = 0;
    i = 0;

    j++;
}
