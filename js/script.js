function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var sgS6 = new Phone('Samsung Galaxy S6', 1400, 'Silver');
sgS6.printInfo();

var ip6s = new Phone('iPhone 6s', 2000, 'Black');
ip6s.printInfo();

var opo = new Phone('OnePlus One', 1000, 'White');
opo.printInfo();