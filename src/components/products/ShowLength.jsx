import { useState } from "react";
const options = [
  { value: "0-5", label: "Show: 5" },
  { value: "0-10", label: "Show: 10" },
  { value: "0-15", label: "Show: 15" },
  { value: "0-20", label: "Show: 20" },
  { value: "0-50", label: "Show: 50" },
];
export default function ShowLength() {
  const [isOpenDD, setisOpenDD] = useState(false);
  const [selectedValue, setSelectedValue] = useState(options[4]);

  const handleClick = (value) => {
    setSelectedValue(value);
    setisOpenDD(false);
    // You can add additional logic here when an option is clicked
  };

  return (
    <div
      className="tf-my-dropdown tf-control-show nice-select open relative"
      tabIndex={0}
    >
      <div className="btn-select" onClick={() => setisOpenDD((pre) => !pre)}>
        <i className="icon-menu-dots" />
        <p className="body-text-3 w-100 current">{selectedValue.label}</p>
        <i className="icon-arrow-down fs-10" />
      </div>
      {isOpenDD && (
        <ul
          className="list"
          style={{
            position: "absolute",
            top: "100%",
            left: "0px",
            zIndex: 9,
            border: "1px solid var(--gray-5)",
            background: "#fff",
          }}
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={`option select-item ${
                selectedValue === option ? "selected focus" : ""
              }`}
              onClick={() => handleClick(option)}
            >
              <span className="text-value-item">{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
