export default function checkIsSame(arr1 = [], arr2 = [], params = {}) {
    for(let i = 0; i < arr2.length; i++) {
        const name2 = arr2[i].name.split(' ').join(''),
              price2 = arr2[i].price.split(' ').join('');
        // console.log('i:', i);
        for(let j = 0; j < arr1.length; j++) {
            const name1 = arr1[j].name.split(' ').join(''),
                  price1 = arr1[j].price.split(' ').join('');
            // console.log(j);
            if(name2 === name1 && price2 === price1) {
                arr1[j] = {
                    ...arr2[i],
                    ...params
                }

                break
            }
        }
    }

    return {
        arr1,
        arr2
    }
}