// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;
let mealId = 0;
let customerId = 0;
let deliveryId = 0;

class Neighborhood {
  constructor(name) {
    this.id = ++neighborhoodId;
    this.name = name;
    store.neighborhoods.push(this);
  };

  deliveries() {

  };

  customers() {

  };

  meals() {

  };
};

class Customer {
  constructor(name, neighborhoodId) {
    this.id = neighborhoodId
    this.name = name;
    this.neighborhoodId = neighborhoodId;
    store.customers.push(this);
  };

  deliveries() {
    return store.deliveries.filter(delivery => delivery.customerId === this.id);
  };

  meals() {

  };

  totalSpent() {

  };
};

class Meal {
  constructor(title, price) {
    this.id = ++mealId;
    this.title = title;
    this.price = price;
    store.meals.push(this);
  };

  deliveries() {

  };

  customers() {

  };
};

class Delivery {
  constructor(mealId, neighborhoodId, customerId) {
    this.id = ++deliveryId;
    this.mealId = mealId;
    this.neighborhoodId = neighborhoodId;
    this.customerId = customerId;
    store.deliveries.push(this)
  };

  meal() {

  };

  customer() {
    return store.customers.find(customer => customer.id === this.customerId)
  };

  neighborhood() {

  };
};
