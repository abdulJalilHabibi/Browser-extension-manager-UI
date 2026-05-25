import { data } from "./data";
import { useState } from "react";
export default function Card({ filter, setFilter }) {
  const [items, setItems] = useState(data);
  const filterData = items.filter((item) => {
    if (filter === "active") {
      return item.isActive === true;
    }
    if (filter === "inactive") {
      return item.isActive === false;
    }
    return true;
  });

  function handleRemoveCard(name) {
    setItems((prev) =>
      prev.filter((el) => {
        return el.name !== name;
      }),
    );
  }

  return (
    <div className="All-card">
      {filterData.map((item) => {
        return (
          <div className="card-container" key={item.name}>
            <div className="text-img">
              <div className="img-photo">
                <img src={item.logo} className="img" />
              </div>
              <div className="text-item">
                <h5>{item.name}</h5>
                <p className="paragraph">{item.description}</p>
              </div>
            </div>
            <div className="remove-btn ">
              <div>
                <button
                  className="rm-btn"
                  onClick={() => handleRemoveCard(item.name)}
                >
                  Remove
                </button>
              </div>
              <label className="check-box">
                <input
                  type="checkbox"
                  onChange={() => {
                    setItems((prev) =>
                      prev.map((el) => {
                        if (el.name === item.name) {
                          return {
                            ...el,
                            isActive: !el.isActive,
                          };
                        }
                        return el;
                      }),
                    );
                  }}
                  checked={item.isActive}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
}
