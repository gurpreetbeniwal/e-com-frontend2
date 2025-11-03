import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getOrder } from "../../../api";

export default function OrderDetails({ orderId: propOrderId }) {
  const { orderId: paramOrderId } = useParams();
  const orderId = propOrderId || paramOrderId;
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!orderId) {
      toast.error("Invalid order ID");
      navigate("/my-account/orders", { replace: true });
      return;
    }
    fetchOrder();
  }, [orderId]);

  const fetchOrder = async () => {
    try {
      setLoading(true);
      const res = await getOrder(orderId);
      if (res.data.success) {
        setOrder(res.data.order);
      } else {
        toast.error("Order not found");
        navigate("/my-account/orders", { replace: true });
      }
    } catch (err) {
      console.error("Error fetching order:", err);
      if (err.response?.status === 404) {
        toast.error("Order not found");
        navigate("/my-account/orders", { replace: true });
      } else if (err.response?.status === 401) {
        toast.error("Please login to view this order");
        navigate("/login", { replace: true });
      } else {
        toast.error("Unable to fetch order details");
      }
    } finally {
      setLoading(false);
    }
  };

  const fmt = (val) => {
    const n = Number(val);
    return isNaN(n) ? "0.00" : n.toFixed(2);
  };

  if (loading) {
    return (
      <section className="tf-sp-2">
        <div className="container text-center py-5">
          <div className="spinner-border text-primary" role="status" />
          <p className="mt-3">Loading order details...</p>
        </div>
      </section>
    );
  }

  if (!order) {
    return (
      <section className="tf-sp-2">
        <div className="container text-center py-5">
          <p className="text-muted">Order not found.</p>
          <Link to="/my-account/orders" className="tf-btn">
            <span className="text-white">Back to Orders</span>
          </Link>
        </div>
      </section>
    );
  }

  const addr = order.ShippingAddress || order.Address || {};
  const fsu = order.flashSaleUsage;
  const hasFlashSale =
    Boolean(fsu) || Number(order.flash_discount) > 0 || Boolean(order.flash_sale_code);

  return (
    <section className="tf-sp-2">
      <div className="container">
        {/* Progress */}
        <div className="checkout-status tf-sp-2 pt-0">
          <div className="checkout-wrap">
            <span className="checkout-bar end" />
            <div className="step-payment">
              <span className="icon"><i className="icon-shop-cart-1" /></span>
              <Link to="/shop-cart" className="link-secondary body-text-3">
                Shopping Cart
              </Link>
            </div>
            <div className="step-payment">
              <span className="icon"><i className="icon-shop-cart-2" /></span>
              <Link to="/checkout" className="link-secondary body-text-3">
                Shopping &amp; Checkout
              </Link>
            </div>
            <div className="step-payment">
              <span className="icon"><i className="icon-shop-cart-3" /></span>
              <span className="text-secondary body-text-3">Confirmation</span>
            </div>
          </div>
        </div>

        {/* Confirmation */}
        <div className="order-notice mb-4 d-flex align-items-center">
          <span className="icon bg-success text-white rounded-circle p-2">
            <i className="icon-check" />
          </span>
          <p className="ms-3">Thank you. Your order has been received.</p>
        </div>

        {/* Overview */}
        <ul className="order-overview-list mb-4 list-unstyled">
          <li>Order number: <strong>#{order.id}</strong></li>
          <li>
            Date:{" "}
            <strong>
              {new Date(order.created_at).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </strong>
          </li>
          <li>Status: <strong>{order.order_status}</strong></li>
          <li>Total: <strong>₹{fmt(order.total_amount)}</strong></li>
          <li>Payment method: <strong>{order.payment_method}</strong></li>
        </ul>

        {/* Flash Sale Details */}
        {hasFlashSale && (
          <div className="order-detail-wrap mb-4">
            <h5 className="fw-bold mb-3">Flash Sale Details</h5>
            <table className="tf-table-order-detail w-100">
              <tbody>
                <tr>
                  <th>Flash Sale Name:</th>
                  <td>{fsu?.flashSale?.name || order.flash_sale_code || "N/A"}</td>
                </tr>
                <tr>
                  <th>Discount Applied:</th>
                  <td>
                    ₹
                    {fmt(
                      fsu?.flash_discount != null
                        ? fsu.discount_applied
                        : order.flash_discount
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Code Used:</th>
                  <td>{fsu?.code_used || order.flash_sale_code || "N/A"}</td>
                </tr>
                <tr>
                  <th>Used At:</th>
                  <td>
                    {fsu?.used_at
                      ? new Date(fsu.used_at).toLocaleString()
                      : "N/A"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Order Items */}
        <div className="order-detail-wrap mb-4">
          <h5 className="fw-bold mb-3">Order details</h5>
          <table className="tf-table-order-detail w-100">
            <thead>
              <tr>
                <th>Product</th>
                <th className="text-end">Total</th>
              </tr>
            </thead>
            <tbody>
              {order.OrderItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Link
                      to={`/product-detail/${item.ProductVariant?.product_id}`}
                      className="link fw-normal"
                    >
                      {item.product_name_snapshot}{" "}
                      <span className="text-black">×{item.quantity}</span>
                    </Link>
                  </td>
                  <td className="text-end">
                    <strong>₹{fmt(item.price_at_purchase * item.quantity)}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th>Subtotal:</th>
                <td className="text-end">₹{fmt(order.subtotal_amount)}</td>
              </tr>
              <tr>
                <th>GST (18%):</th>
                <td className="text-end">₹{fmt(order.gst_amount)}</td>
              </tr>
              <tr>
                <th>Shipping:</th>
                <td className="text-end">
                  {order.shipping_charge === 0
                    ? "Free shipping"
                    : `₹${fmt(order.shipping_charge)}`}
                </td>
              </tr>
              <tr>
                <th>Payment method:</th>
                <td className="text-end">{order.payment_method}</td>
              </tr>
              <tr>
                <th>
                  <span className="fw-semibold">Total:</span>
                </th>
                <td className="text-end">
                  <strong>₹{fmt(order.total_amount)}</strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Addresses */}
        <div className="row g-4">
          <div className="col-md-6">
            <div className="order-detail-wrap">
              <h5 className="fw-bold">Billing Address</h5>
              <div className="billing-info">
                <p>
                  {order.User?.first_name} {order.User?.last_name}
                </p>
                <p>{addr.street_address}</p>
                <p>
                  {addr.city}, {addr.state} {addr.postal_code}
                </p>
                <p>{addr.country}</p>
                <p>📞 {addr.phone_number}</p>
                <p>✉️ {order.User?.email}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="order-detail-wrap">
              <h5 className="fw-bold">Shipping Address</h5>
              <div className="billing-info">
                <p>
                  {order.User?.first_name} {order.User?.last_name}
                </p>
                <p>{addr.street_address}</p>
                <p>
                  {addr.city}, {addr.state} {addr.postal_code}
                </p>
                <p>{addr.country}</p>
                <p>📞 {addr.phone_number}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
