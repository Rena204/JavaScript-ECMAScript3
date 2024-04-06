//1
class Employee {
    constructor(name) {
      this.name = name;
    }
  
    displayInfo() {
      console.log(`Имя: ${this.name}`);
    }
  }
  
  class Manager extends Employee {
    constructor(name, department) {
      super(name);
      this.department = department;
    }
  
    displayInfo() {
      console.log(`Имя: ${this.name}`);
      console.log(`Отдел: ${this.department}`);
    }
  }
  
  const employee = new Employee("John Smith");
  employee.displayInfo();
  
  const manager = new Manager("Jane Doe", "Продажи");
  manager.displayInfo();

  
  //2
  class Order {
    constructor(orderNumber) {
      this.orderNumber = orderNumber;
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    getTotalPrice() {
      let totalPrice = 0;
      for (let product of this.products) {
        totalPrice += product.price;
      }
      return totalPrice;
    }
  }
  
  class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  const order = new Order(12345);
  const product1 = new Product("Телефон", 500);
  order.addProduct(product1);
  const product2 = new Product("Наушники", 100);
  order.addProduct(product2);
  console.log(order.getTotalPrice());
  