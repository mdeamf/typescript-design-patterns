var Order = /** @class */ (function () {
    function Order() {
        this.cancelledOrderState = new CancelledOrderState(this);
        this.paymentPendingState = new PaymentPendingState(this);
        this.orderShippedState = new OrderShippedState(this);
        this.orderBeingPreparedState = new OrderBeingPreparedState(this);
        this.setState(this.paymentPendingState);
    }
    Order.prototype.setState = function (state) {
        this.currentState = state;
    };
    Order.prototype.getState = function () {
        return this.currentState;
    };
    return Order;
}());
var PaymentPendingState = /** @class */ (function () {
    function PaymentPendingState(order) {
        this.order = order;
    }
    PaymentPendingState.prototype.cancelOrder = function () {
        console.log("Cancelling your unpaid order...");
        this.order.setState(this.order.cancelledOrderState);
    };
    PaymentPendingState.prototype.verifyPayment = function () {
        console.log("Payment verified! Shipping soon...");
        this.order.setState(this.order.orderBeingPreparedState);
    };
    PaymentPendingState.prototype.shipOrder = function () {
        console.log("We cannot ship the order when payment is pending!");
    };
    return PaymentPendingState;
}());
var CancelledOrderState = /** @class */ (function () {
    function CancelledOrderState(order) {
        this.order = order;
    }
    CancelledOrderState.prototype.cancelOrder = function () {
        console.log("Your order has already been cancelled!");
    };
    CancelledOrderState.prototype.verifyPayment = function () {
        console.log("Your order has been cancelled, you cannot verify your payment!");
    };
    CancelledOrderState.prototype.shipOrder = function () {
        console.log("Your order has been cancelled, it cannot be shipped!");
    };
    return CancelledOrderState;
}());
var OrderBeingPreparedState = /** @class */ (function () {
    function OrderBeingPreparedState(order) {
        this.order = order;
    }
    OrderBeingPreparedState.prototype.cancelOrder = function () {
        console.log("Cancelling your order...");
        this.order.setState(this.order.cancelledOrderState);
    };
    OrderBeingPreparedState.prototype.verifyPayment = function () {
        console.log("Already verified your payment!");
    };
    OrderBeingPreparedState.prototype.shipOrder = function () {
        console.log("Shipping your order...");
        this.order.setState(this.order.orderShippedState);
    };
    return OrderBeingPreparedState;
}());
var OrderShippedState = /** @class */ (function () {
    function OrderShippedState(order) {
        this.order = order;
    }
    OrderShippedState.prototype.cancelOrder = function () {
        console.log("You cannot cancel it. It already shipped!");
    };
    OrderShippedState.prototype.verifyPayment = function () {
        console.log("You cannot verify it. It already shipped!");
    };
    OrderShippedState.prototype.shipOrder = function () {
        console.log("You cannot ship it. It already shipped!");
    };
    return OrderShippedState;
}());
function showOrderState(order) {
    console.log("\r\nOrder state: " + order.getState().constructor.name + "\r\n");
}
var order = new Order();
showOrderState(order);
order.getState().shipOrder();
showOrderState(order);
order.getState().verifyPayment();
showOrderState(order);
order.getState().shipOrder();
showOrderState(order);
order.getState().cancelOrder();
