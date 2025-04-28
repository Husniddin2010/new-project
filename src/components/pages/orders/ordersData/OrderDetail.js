import React from "react";
import OnDelivery from "@/components/common/OnDelivery";
import styles from "@/styles/order.module.css";
import MainCourse from "@/components/common/MainCourse"

function OrderDetail() {
  return (
    <div style={{marginLeft:"25px"}}>
      <div className="heder2">
        <div>
          <h1>Order ID #5552351</h1>
          <p>
            <a>Orders /</a>Order Detaills
          </p>
        </div>
        <dev>
          <button>Cancel Order</button>
          <OnDelivery />
        </dev>
      </div>
      <div>
      
      <div 
      style={{
        display:"flex",
        marginTop:"30px"
      }}
      >
        <div
          style={{
            border: "1px #FFFFFF solid",
            textAlign: "center",
            backgroundColor: "#FFFFFF    ",
            marginRight:"50px"
          }}
        >
          <img src="./placeholder (1).png" />
          <h2 style={{ paddingTop: "20px", paddingBottom: "10px" }}>
            Wahyu Adi Kurniawan
          </h2>
          <button
            style={{ background: " #00B07426", width: "100px", height: "20px" }}
          >
            Customer
          </button>
          <div
          style={{
            borderRadius: "5px",
            border: "1px #5E6C93 solid",
            marginTop: "10px",
            background: " #5E6C93",
            color: "#FFFFFF",
          }}
        >
          
        <div
         style={{
          padding: "15px",        
        }}>
        <h2  style={{ paddingBottom: "10px" }}>Note Order</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed do eiusmod tempor <br />
            incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px  #2D9CDB solid",
              background: "#2D9CDB",
            }}
          >
            <img src="iconDelivery.png" />
            <p>
              6 The Avenue, London <br />
              EC50 4GN
            </p>
          </div>
        </div>
        </div>
        <div>
          <div>
            <div 
            style={{
             border:"1px   #00B074 solid",
             width:"800px",
             height:"40px",
             display:"flex",
            //  justifyContent:"center",
            //  justifyContent:"space-between",
             alignItems:"center",
             color:"white",
             padding:"0 25px",
             background: "#00B074",
             borderRadius:"10px"
            }}
            >
              <p>Items</p>
              <p style={{paddingLeft:"350px"}}>Qty</p>
              <p  style={{paddingLeft:"70px"}}>Price</p>
              <p   style={{paddingLeft:"50px"}}>Total Price  </p>
            </div>
            <MainCourse/>
          </div>
          <div>
            <img style={{width:"800px",marginBottom:"50px", marginTop:"100px", }} src="map.png" />
            <h2>Delivery by</h2>
            <div style={{marginTop: "20px",display:"flex" ,  alignItems:"center"}}>
              <img src="odam (2).png"/>
              <div style={{marginLeft:"10px"}}>
                <h2>Kevin Hobs Jr.</h2>
                <p>ID - 412455</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default OrderDetail;
