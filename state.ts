interface State {
  order: Order;

  cancelOrder(): void;
  verifyPayment(): void;
  shipOrder(): void;
}

class Order {
  public cancelledOrderState: State;
  public paymentPendingState: State;
  public orderShippedState: State;
  public orderBeingPreparedState: State;

  public currentState: State;

  constructor() {
    this.cancelledOrderState = new CancelledOrderState(this);
    this.paymentPendingState = new PaymentPendingState(this);
    this.orderShippedState = new OrderShippedState(this);
    this.orderBeingPreparedState = new OrderBeingPreparedState(this);

    this.setState(this.paymentPendingState);
  }

  public setState(state: State) {
    this.currentState = state;
  }

  public getState() {
    return this.currentState;
  }
}

class PaymentPendingState implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder(): void {
    console.log("Cancelling your unpaid order...");
    this.order.setState(this.order.cancelledOrderState);
  }

  verifyPayment(): void {
    console.log("Payment verified! Shipping soon...");
    this.order.setState(this.order.orderBeingPreparedState);
  }

  shipOrder(): void {
    console.log("We cannot ship the order when payment is pending!");
  }
}

class CancelledOrderState implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder(): void {
    console.log("Your order has already been cancelled!");
  }

  verifyPayment(): void {
    console.log(
      "Your order has been cancelled, you cannot verify your payment!"
    );
  }

  shipOrder(): void {
    console.log("Your order has been cancelled, it cannot be shipped!");
  }
}

class OrderBeingPreparedState implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder(): void {
    console.log("Cancelling your order...");
    this.order.setState(this.order.cancelledOrderState);
  }

  verifyPayment(): void {
    console.log("Already verified your payment!");
  }

  shipOrder(): void {
    console.log("Shipping your order...");
    this.order.setState(this.order.orderShippedState);
  }
}

class OrderShippedState implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder(): void {
    console.log("You cannot cancel it. It already shipped!");
  }

  verifyPayment(): void {
    console.log("You cannot verify it. It already shipped!");
  }

  shipOrder(): void {
    console.log("You cannot ship it. It already shipped!");
  }
}

function showOrderState(order: Order): void {
  console.log("\r\nOrder state: " + (<any>order.getState()).constructor.name + "\r\n");
}

let order = new Order();
showOrderState(order);
order.getState().shipOrder();
showOrderState(order);
order.getState().verifyPayment();
showOrderState(order);
order.getState().shipOrder();
showOrderState(order);
order.getState().cancelOrder();
showOrderState(order);


