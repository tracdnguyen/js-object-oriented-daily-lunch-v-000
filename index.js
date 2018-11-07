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
    this.id = neighborhoodId++
    this.name = name;
    this.neighborhoodId = neighborhoodId;
    store.customers.push(this);
  };
};

class Meal {

};

class Delivery {

};
