function createCatalogue(input) {
    let catalogue = {};

    for (let item of input) {
        let [productName, productPrice] = item.split(' : ');
        productPrice = Number(productPrice);
        let initial = productName[0];

        if (!catalogue[initial]) {
            catalogue[initial] = [];
        }
        catalogue[initial].push({ name: productName, price: productPrice });
    }

    let sortedInitials = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));

    for (let initial of sortedInitials) {
        console.log(initial);
        let sortedProducts = catalogue[initial].sort((a, b) => a.name.localeCompare(b.name));
        for (let product of sortedProducts) {
            console.log(`  ${product.name}: ${product.price}`);
        }
    }
}

