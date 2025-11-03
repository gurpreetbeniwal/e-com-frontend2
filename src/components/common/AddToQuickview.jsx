import { useContextElement } from "@/context/Context";
import { allProducts } from "@/data/products";

export default function AddToQuickview({ productId, tooltipClass = "" }) {
  const product =
    allProducts.filter((elm) => elm.id == productId)[0] || allProducts[0];
  const { setQuickViewItem } = useContextElement();
  return (
    <a
      href="#quickView"
      data-bs-toggle="modal"
      onClick={() => setQuickViewItem(product)}
      className={`box-icon quickview btn-icon-action hover-tooltip ${tooltipClass}`}
    >
      <span className="icon icon-view" />
      <span className="tooltip">Quick View</span>
    </a>
  );
}
