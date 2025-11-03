import { useEffect } from "react";

export default function LayoutHandler() {
  useEffect(() => {
    const handleClick = (e) => {
      console.log("first");
      e.preventDefault();

      const viewSwitch = e.currentTarget;
      const tabClass = viewSwitch.dataset.tab;
      const gridLayout = document.querySelector(".tf-grid-layout");
      const gridLayoutWrapper = document.querySelector(".gridLayout-wrapper");
      const cardProducts = document.querySelectorAll(
        ".tf-grid-layout .card-product"
      );

      gridLayoutWrapper.classList.add("loading");
      gridLayout.classList.add("d-none");

      setTimeout(() => {
        // Remove all layout classes
        const layoutClasses = Array.from(gridLayout.classList).filter(
          (className) => className.startsWith("layout-")
        );
        layoutClasses.forEach((className) =>
          gridLayout.classList.remove(className)
        );

        // Add new layout class
        gridLayout.classList.add(`layout-${tabClass}`);

        // Update active state for all switches
        document
          .querySelectorAll(".tf-view-layout-switch")
          .forEach((switchEl) => {
            switchEl.classList.remove("active");
          });
        viewSwitch.classList.add("active");

        // Reset and update card classes
        cardProducts.forEach((card) => {
          card.className = "card-product";

          if (tabClass === "tablist-1") {
            card.classList.add("style-row");
          } else if (tabClass === "tablist-2") {
            card.classList.add(
              "style-row",
              "type-row-2",
              "row-small",
              "flex-sm-row"
            );
          }
        });

        gridLayoutWrapper.classList.remove("loading");
        gridLayout.classList.remove("d-none");
      }, 300);
    };

    // Add event listeners to all switches
    const switches = document.querySelectorAll(".tf-view-layout-switch");
    switches.forEach((switchEl) => {
      switchEl.addEventListener("click", handleClick);
    });

    // Cleanup function
    return () => {
      switches.forEach((switchEl) => {
        switchEl.removeEventListener("click", handleClick);
      });
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <ul className="tf-control-layout menu-tab-line" role="tablist">
      <li className="tf-view-layout-switch" data-tab="tabgrid-1">
        <a
          href="#"
          className="tab-link main-title link fw-semibold d-flex active"
          data-bs-toggle="tab"
        >
          <i className="icon-menu-dots" />
        </a>
      </li>
      <li className="tf-view-layout-switch" data-tab="tabgrid-2">
        <a
          href="#"
          className="tab-link main-title link d-flex fw-semibold"
          data-bs-toggle="tab"
        >
          <i className="icon-dot-line" />
        </a>
      </li>
      <li className="tf-view-layout-switch" data-tab="tablist-1">
        {/* <a
          href="#"
          className="tab-link main-title link d-flex fw-semibold"
          data-bs-toggle="tab"
        >
          <i className="icon-list-1" />
        </a> */}
      </li>
      <li className="tf-view-layout-switch" data-tab="tablist-2">
        {/* <a
          href="#"
          className="tab-link main-title link d-flex fw-semibold"
          data-bs-toggle="tab"
        >
          <i className="icon-list-2" />
        </a> */}
      </li>
    </ul>
  );
}
