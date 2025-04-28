import React from "react";

function MainCourse(props) {
  const arr = [
    {
      img: "./Mask Group.png",
      name: "Watermelon juice with ice",
      Qty: 2,
      Price: 9,
    },
    {
      img: "./Mask Group.png",
      name: "Watermelon juice with ice",
      Qty: 4,
      Price: 8,
    },
    {
      img: "./Mask Group.png",
      name: "Watermelon juice with ice",
      Qty: 5,
      Price: 10,
    },
  ];
  return (
    <>
      {arr.map((item) => (
        <div
          style={{ marginTop: "20px", display: "flex", alignItems: "center" }}
        >
          <img src={item.img} />
          <div style={{ marginLeft: "25px", marginRight: "70px" }}>
            <p style={{ color: "#2D9CDB", marginBottom: "5px" }}>
              {" "}
              MAIN COURSE
            </p>
            <h2> {item.name}</h2>
            <img style={{ marginTop: "5px" }} src="./starts.png" />
          </div>
          <h2 style={{ marginRight: "70px" }}>{item.Qty}x</h2>
          <h2 style={{ marginRight: "70px" }}>${item.Price}</h2>
          <h2 style={{ marginRight: "70px" }}>${item.Qty * item.Price}</h2>
          <button style={{ marginRight: "70px" }}>
            <img src="x.png" />
          </button>
        </div>
      ))}
    </>
  );
}

export default MainCourse;
