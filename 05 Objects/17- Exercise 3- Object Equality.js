// 17- Exercise 3- Object Equality


function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
};


let address1 = new Address('Rua Afonso Braz 505', 'São Paulo', '04511-011');

let address2 = new Address('Rua Augusta 2099', 'São Paulo', '01413-000');

let address3 = new Address('Rua Afonso Braz 505', 'São Paulo', '04511-011');


function areEqual(address1, address2) {
    return address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode; 
}

console.log(areEqual(address1, address3));

function areSame(address1, address2) { // Function to check if two objects are pointing to the same object. They are referencing the same object.
    if (address1 === address2)
        return true
    else
        return false
}

console.log(areSame(address1, address2));

// Mosh solution
function areSame(address1, address2) {
    return address1 === address2;
}