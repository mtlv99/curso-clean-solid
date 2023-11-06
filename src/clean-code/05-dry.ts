type Size = ''| 'S'|'M'|'XL';

class Product {
    constructor (
        public name: string = '',
        public price: number = 0, 
        public size: Size = '',
    ){}

    isProductReady(): boolean {
        
        for(const key in this) {
            // console.log(key, typeof this[key]);
            switch (typeof this[key]) {
                case 'string':
                    // Ambos son soluciones para ele error del .length (ts no está seguro si es un string, por lo tanto marca error)
                    // if(((this[key] + '').length <= 0)) throw new Error(`${key} is empty`);
                    if(((<string><unknown>this[key]).length <= 0)) throw new Error(`${key} is empty`);
                    break;
                case 'number':
                    if(((<number><unknown>this[key]) <= 0)) throw new Error(`${key} is zero`);
                    break;
            
                default:
                    throw Error(`${typeof this[key]} is not supported`);
            }
        }

        return true;
    }

    // toString NO debería realizar evaluaciones, solo imprimir la información.
    toString() {
        // No DRY
        // if (this.name.length <= 0) throw Error('Name is empty');
        // if (this.price <= 0) throw Error('Price is zero');
        // if (this.size.length <= 0) throw Error('Size is empty');

        // DRY
        if (!this.isProductReady()) return;

    
        return `${ this.name } (${this.price}), ${this.size}`;
    }
}

(() => {

    const bluePants = new Product("Blue large pants", 10, 'M');
    console.log(bluePants.toString());

})();