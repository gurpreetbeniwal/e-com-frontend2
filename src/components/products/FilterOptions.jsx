import React, { useState } from "react";

export default function FilterOptions({ allProps }) {
  const [priceRange, setPriceRange] = useState([null, null]); // [min, max]

  console.log('🔍 FilterOptions Debug:', {
    allCategories: allProps?.allCategories,
    categoriesLength: allProps?.allCategories?.length,
    currentCategories: allProps?.categories,
    currentPrice: allProps?.price
  });

  const handleInputChange = (e, index) => {
    const value = e.target.value === "" ? null : Number(e.target.value);
    const newPriceRange = [...priceRange];
    newPriceRange[index] = value;
    setPriceRange(newPriceRange);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that min <= max
    if (
      priceRange[0] !== null &&
      priceRange[1] !== null &&
      priceRange[0] <= priceRange[1]
    ) {
      console.log('💰 Setting custom price range:', priceRange);
      allProps.setPrice(priceRange);
    } else if (priceRange[0] !== null && priceRange[1] === null) {
      // Only min price set
      allProps.setPrice([priceRange[0], 1000]);
    } else if (priceRange[0] === null && priceRange[1] !== null) {
      // Only max price set
      allProps.setPrice([0, priceRange[1]]);
    }
  };

  return (
    <>
      {/* ✅ DYNAMIC CATEGORIES FROM BACKEND */}
      <div className="facet-categories">
        <h6 className="title fw-medium">Show all categories</h6>
        <ul>
          {allProps.allCategories && allProps.allCategories.length > 0 ? (
            allProps.allCategories.map((category) => (
              <li key={category.id}>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('📂 Category clicked:', category);
                    allProps.setCategories(category.id);
                  }}
                  className={`link ${allProps.categories && allProps.categories.includes(category.id) ? 'text-primary fw-bold' : ''}`}
                  style={{
                    color: allProps.categories && allProps.categories.includes(category.id) ? '#007bff' : 'inherit'
                  }}
                >
                  {category.name} <i className="icon-arrow-right" />
                </a>
              </li>
            ))
          ) : (
            <li>
              <span className="text-muted">Loading categories...</span>
            </li>
          )}
        </ul>
      </div>

      {/* ✅ PRICE FILTER */}
      <div className="widget-facet facet-price">
        <p className="facet-title title-sidebar fw-semibold">Price</p>
        
        {/* Price Range Buttons */}
        <div className="box-fieldset-item">
          <fieldset
            className="fieldset-item"
            onClick={() => {
              console.log('💰 Setting price: Under ₹10,000');
              allProps.setPrice([0, 10000]);
            }}
          >
            <input
              type="radio"
              checked={allProps.price && allProps.price[0] === 0 && allProps.price[1] === 10000}
              readOnly
              className="tf-check"
            />
            <label>Under ₹10,000</label>
          </fieldset>
          
          <fieldset
            className="fieldset-item"
            onClick={() => {
              console.log('💰 Setting price: ₹10,000 to ₹25,000');
              allProps.setPrice([10000, 25000]);
            }}
          >
            <input
              checked={allProps.price && allProps.price[0] === 10000 && allProps.price[1] === 25000}
              type="radio"
              readOnly
              className="tf-check"
            />
            <label>₹10,000 to ₹25,000</label>
          </fieldset>
          
          <fieldset
            className="fieldset-item"
            onClick={() => {
              console.log('💰 Setting price: ₹25,000 to ₹50,000');
              allProps.setPrice([25000, 50000]);
            }}
          >
            <input
              type="radio"
              checked={allProps.price && allProps.price[0] === 25000 && allProps.price[1] === 50000}
              className="tf-check"
              readOnly
            />
            <label>₹25,000 to ₹50,000</label>
          </fieldset>
          
          <fieldset
            className="fieldset-item"
            onClick={() => {
              console.log('💰 Setting price: ₹50000 & Above');
              allProps.setPrice([50000, 1000000]);
            }}
          >
            <input
              type="radio"
              checked={allProps.price && allProps.price[0] === 50000 && allProps.price[1] === 1000000}
              className="tf-check"
              readOnly
            />
            <label>₹50,000 &amp; Above</label>
          </fieldset>
        </div>
        
        {/* Custom Price Range Input */}
        <div className="box-price-product">
          <form onSubmit={handleSubmit} className="w-100 form-filter-price">
            <div className="cols w-100">
              <fieldset className="box-price-item">
                <input
                  type="number"
                  className="min-price price-input"
                  value={priceRange[0] ?? ""}
                  onChange={(e) => handleInputChange(e, 0)}
                  min={0}
                  max={1000}
                  placeholder="$ Min"
                />
              </fieldset>
              <span className="br-line" />
              <fieldset className="box-price-item">
                <input
                  type="number"
                  className="max-price price-input"
                  value={priceRange[1] ?? ""}
                  onChange={(e) => handleInputChange(e, 1)}
                  placeholder="$ Max"
                  min={0}
                  max={1000}
                />
              </fieldset>
            </div>
            <button type="submit" className="btn-filter-price cs-pointer link">
              <span className="title-sidebar fw-bold">Go</span>
            </button>
          </form>
        </div>
        <br />  <br />
      </div>
    </>
  );
}
