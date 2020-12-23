// 15- Exercise 1- Address Object

const address = {
    street: 'Rua Afonso Braz 505',
    city: 'São Paulo',
    zipCode: '04511-011'
};

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key])
    }
};

showAddress(address);
