import { useContextElement } from "@/context/Context";
export default function AddToWishlist({ productId, tooltipClass = "" }) {
  const { addToWishlist, isAddedtoWishlist } = useContextElement();
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        addToWishlist(productId);
      }}
      className={`box-icon btn-icon-action hover-tooltip ${tooltipClass}`}
    >
      <span
        className={`icon ${
          isAddedtoWishlist(productId) ? "icon-trash" : "icon-heart2"
        } `}
      />
      <span className="tooltip">
        {" "}
        {isAddedtoWishlist(productId) ? "Remove Wishlist" : "Add to Wishlist"}
      </span>
    </a>
  );
}
