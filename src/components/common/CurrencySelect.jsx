import { useEffect, useRef, useState } from "react";

const optionsData = [
  {
    value: "USD",
    thumbnail: "/images/country/us.png",
    text: "United States (USD $)",
    selected: true,
  },
  {
    value: "EUR",
    thumbnail: "/images/country/fr.png",
    text: "France (EUR €)",
  },
  {
    value: "EUR",
    thumbnail: "/images/country/ger.png",
    text: "Germany (EUR €)",
  },
  {
    value: "VND",
    thumbnail: "/images/country/vn.png",
    text: "Vietnam (VND ₫)",
  },
];

export default function CurrencySelect({ topStart = false, light = false }) {
  const [selected, setSelected] = useState(optionsData[0]);
  const [isDDOpen, setIsDDOpen] = useState(false);
  const languageSelect = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageSelect.current &&
        !languageSelect.current.contains(event.target)
      ) {
        setIsDDOpen(false); // Close the dropdown if click is outside
      }
    };
    // Add the event listener when the component mounts
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={languageSelect}
      onClick={() => setIsDDOpen((pre) => !pre)}
      className={`dropdown bootstrap-select image-select center style-default type-currencies ${
        light ? "color-white" : ""
      } dropup`}
    >
      <button
        type="button"
        tabIndex={-1}
        className={`btn dropdown-toggle btn-light  ${isDDOpen ? "show" : ""} ${
          light ? "text-white" : ""
        } `}
        title="USD $ | United States"
      >
        <div className="filter-option">
          <div className="filter-option-inner">
            <div className="filter-option-inner-inner">{selected.value}</div>
          </div>{" "}
        </div>
      </button>
      <div
        className={`dropdown-menu ${isDDOpen ? "show" : ""} `}
        style={{
          maxHeight: "899.688px",
          overflow: "hidden",
          minHeight: 0,
          position: "absolute",
          inset: topStart ? "" : "auto auto 12px 12px",
          margin: 0,
          top: topStart ? "12px" : "",
          transform: `translate(0px, ${topStart ? 22 : -20}px)`,
        }}
        data-popper-placement={`${!topStart ? "top" : "bottom"}-start`}
      >
        <div
          className="inner show"
          style={{ maxHeight: "869.688px", overflowY: "auto", minHeight: 0 }}
        >
          <ul
            className="dropdown-menu inner show"
            role="presentation"
            style={{ marginTop: 0, marginBottom: 0 }}
          >
            {optionsData.map((elm, i) => (
              <li onClick={() => setSelected(elm)} key={i}>
                <a
                  className={`dropdown-item ${
                    selected == elm ? "active selected" : ""
                  }`}
                >
                  <span className="text">{elm.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
