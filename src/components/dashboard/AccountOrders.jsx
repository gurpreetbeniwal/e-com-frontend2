import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getOrders } from "../../../api";

export default function AccountOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrderHistory();
  }, []);

  const fetchOrderHistory = async () => {
    try {
      setLoading(true);
      const response = await getOrders();
      if (response.data?.success) {
        setOrders(response.data.orders || []);
      } else {
        toast.error("Failed to load order history");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      if (error.response?.status === 401) {
        toast.error("Please login to view your orders");
      } else {
        toast.error("Unable to fetch orders");
      }
    } finally {
      setLoading(false);
    }
  };

  const formatAmount = (val) => {
    const num = Number(val);
    return isNaN(num) ? "0.00" : num.toFixed(2);
  };

  if (loading) {
    return (
      <div className="my-account-content account-dashboard">
        <h4 className="fw-semibold mb-20">Order History</h4>
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status" />
          <p className="mt-3 text-muted">Loading order history...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="my-account-content account-dashboard">
      <h4 className="fw-semibold mb-20">Order History</h4>
      {orders.length === 0 ? (
        <div className="text-center py-5">
          <p className="text-muted">You have no past orders.</p>
          <Link to="/shop-default" className="tf-btn">
            <span className="text-white">Start Shopping</span>
          </Link>
        </div>
      ) : (
        <div className="tf-order_history-table">
          <table className="table_def w-100">
            <thead>
              <tr>
                <th className="title-sidebar fw-medium">Order ID</th>
                <th className="title-sidebar fw-medium">Date</th>
                <th className="title-sidebar fw-medium">Status</th>
                <th className="title-sidebar fw-medium">Total</th>
                <th className="title-sidebar fw-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                const date = new Date(order.created_at);
                const formattedDate = date.toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric"
                });
                const itemCount =
                  order.OrderItems?.reduce(
                    (sum, item) => sum + item.quantity,
                    0
                  ) || 0;
                return (
                  <tr key={order.id} className="td-order-item">
                    <td className="body-text-3">#{order.id}</td>
                    <td className="body-text-3">{formattedDate}</td>
                    <td
                      className={`body-text-3 ${
                        order.order_status === "delivered"
                          ? "text-delivered"
                          : order.order_status === "shipped"
                          ? "text-on-the-way"
                          : "text-processing"
                      }`}
                    >
                      {order.order_status.replace(/^\w/, (c) => c.toUpperCase())}
                    </td>
                    <td className="body-text-3">
                      ₹{formatAmount(order.total_amount)} / {itemCount}{" "}
                      {itemCount === 1 ? "item" : "items"}
                    </td>
                    <td>
                      <Link
                        to={`/order-details/${order.id}`}
                        className="tf-btn btn-small d-inline-flex"
                      >
                        <span className="text-white">Detail</span>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
