import { useContextElement } from "@/context/Context";

export default function AddToCart({ productId, tooltipClass = "" }) {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  return (
    <>
      <a
        href="#shoppingCart"
        data-bs-toggle="offcanvas"
        onClick={() => addProductToCart(productId)}
        className={`box-icon add-to-cart btn-icon-action hover-tooltip ${tooltipClass}`}
      >
        <span className="icon icon-cart2" />
        <span className="tooltip">
          {isAddedToCartProducts(productId) ? "Already Added" : "Add to Cart"}
        </span>
      </a>
    </>
  );
}
