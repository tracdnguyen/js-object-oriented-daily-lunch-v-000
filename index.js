// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;
let mealId = 0;
let customerId = 0;
let deliveryId = 0;

class Neighborhood {
  constructor(name) {
    this.name = name;
    this.id = ++neighborhoodId;
    store.neighborhoods.push(this);
  };

  deliveries() {
    return 
  };

  customers() {
    
  };

  meals() {
    
  };
};

class Customer {
  
};

class Meal {
  
};

class Delivery {
  
};