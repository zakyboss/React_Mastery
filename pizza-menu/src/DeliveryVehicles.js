import React from 'react';
import ReactDOM from 'react-dom/client';

//   export default deliveryVehicles;
  
function Delivery(props) {
    return (
      <div
        className="vehicleContainer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px",
          margin: "10px 0",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* Vehicle Image */}
        <img
          src={props.deliveryObj.photoName}
          alt="Delivery Vehicle"
          style={{
            width: "100px",
            height: "auto",
            borderRadius: "8px",
            border: "2px solid #ccc",
            marginRight: "15px",
          }}
        />
  
        {/* Vehicle Details */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <p style={{ margin: "5px 0", fontWeight: "bold", fontSize: "16px" }}>
            Driver: {props.deliveryObj.driver}
          </p>
          <p style={{ margin: "5px 0", color: "#555" }}>
            Capacity: {props.deliveryObj.capacity}
          </p>
          <p
            style={{
              margin: "5px 0",
              color: props.deliveryObj.isAvailable ? "green" : "red",
              fontWeight: "bold",
            }}
          >
            {props.deliveryObj.isAvailable
              ? "Currently Available"
              : "Currently Not Available"}
          </p>
        </div>
  
        {/* Book Button */}
        <button
          style={{
            padding: "10px 15px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
        >
          Book Now!
        </button>
      </div>
    );
  }
    
export default Delivery;

