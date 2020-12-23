// 16- Exercise 2- Factory and Constructor Functions

// Factory function
function cretaAddress(street, city, zipCode) {
    return  {
        street,
        city,
        zipCode
    };
};

// Constructor function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
};


let address1 = cretaAddress('Rua Afonso Braz 505', 'São Paulo', '04511-011');
console.log(address1);

let address2 = new Address('Rua Augusta 2099', 'São Paulo', '01413-000');
console.log(address2)