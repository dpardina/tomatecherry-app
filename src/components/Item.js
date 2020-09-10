import chocotorta from '../assets/img/chocotortabrownie.jpg';
import mixbrownie from '../assets/img/mix-brownie.jpg';
import cherrymix from '../assets/img/cherrymix.jpg';

const Products = new Promise((resolve, reject) => {

    const listProducts = setTimeout(() => {
        const products = [
            {id: '1', name: 'Chocotorta Brownie', price: 1170, stock: 5, image: chocotorta},
            {id: '2', name: 'Mix Brownies', price: 590, stock: 10, image: mixbrownie},
            {id: '3', name: 'Cherrymix', price: 700, stock: 10, image: cherrymix}
        ]
        resolve(products);
    }, 2000);
    return listProducts
});

Products.then((res) => {
    console.log(res);
    return res;
})
.catch((err) => {
    console.log('Error');
})

export default Products;