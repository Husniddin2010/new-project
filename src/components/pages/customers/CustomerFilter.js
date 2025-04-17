import React from "react";
import Image from "next/image";
import { width } from "@mui/system";

function CustomerFilter() {
  return (
    <div>
      <div style={{
        display:"flex",
        justifyContent: "center",
        width: "212px",
        height:"68px",
        backgroundColor:"white",
        borderRadius:"12px",
      }}>
        <Image style={{
          width:"24px",
          height:"24px",
          margin:" auto 0"
        }} src="/allstatus.png" alt="allstatus" width={24} height={24}/>
        <select style={{
           outlineStyle: "none",
           border: "none",
           fontSize: "16px"
        }}>
          <option>Filter</option>
          <option>Name</option>
          <option>ID</option>
        </select>
      </div>
    </div>
  );
}

export default CustomerFilter;
