import axios from "axios";

export async function searchID(folderName, name, price) {

    const {data} = await axios.get(`https://61f3f1b710f0f7001768c762.mockapi.io/${folderName}`);
    const {id} = data.find(el => (el.name === name && el.price.split(' ').join('') === price.split(' ').join('')));

    return id
}