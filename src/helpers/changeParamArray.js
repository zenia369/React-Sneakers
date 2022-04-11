export function changeParam(data = [], name, price, config = {}) {

    for(let i = 0; i < data.length; i++) {
        // console.log(i, data[i].name,  data[i].price);
        if(data[i].name.split(' ').join('') === name && data[i].price.split(' ').join('') === price) {
            // console.log(name, price);
            data[i] = {
                ...data[i],
                ...config
            }
            break
        }
    }

    return data

}