import React from "react";
import FilterOptions from "./FilterOptions";

export default function FilterSidebar({ allProps }) {
  return (
    <div
      className="offcanvas offcanvas-start canvas-sidebar canvas-filter-product"
      id="filterShop2"
    >
      <div className="canvas-wrapper">
        <div className="canvas-header">
          <h5 className="title">Filter</h5>
          <span
            className="icon-close link icon-close-popup close-filter"
            data-bs-dismiss="offcanvas"
          />
        </div>
        <div className="canvas-body">
          <FilterOptions allProps={allProps} />
        </div>
        <div className="canvas-bottom">
          <button
            id="reset-filter"
            onClick={() => allProps.clearFilter()}
            className="tf-btn btn-reset w-100"
          >
            <span className="caption text-white">Reset Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
}
