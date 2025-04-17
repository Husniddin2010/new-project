import React from "react";
import PageTitle from "@/components/common/PageTitle";
import CustomerTable from "./CustomerTable";
import CustomerFilter from "./CustomerFilter";

export default function CustomersList() {
  return (
    <>
      <div style={{
         display: "flex",
         justifyContent: "space-between",
         fontFamily: "'Barlow', sans-serif",
         marginBottom: "40px"
      }}>
        <PageTitle
          title="General Customer"
          subtitle="Here is your general customers list data"
        />
        <div style={{
          display:"flex"
        }}>
          <CustomerFilter />
        </div>
      </div>
      <div className={"tableData"}>
        <CustomerTable />
      </div>
      {/* <PageTitle
        title="General Customer"
        subtitle="Here is your general customers list data"
      />
      <CustomerTable /> */}
    </>
  );
}
