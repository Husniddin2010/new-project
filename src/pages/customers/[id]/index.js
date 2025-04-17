
import { useParams } from "next/navigation";
import MainLayout from "@/components/common/layouts/MainLayout";
import Image from "next/image";
import { customerData } from "@/Data";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { display, width } from "@mui/system";
function CustomerDetail() {
  const router = useRouter();
  const [currentCustomer, setCurrentCustomer] = useState(null);
  const [activeFilter, setActiveFilter] = useState("Monthly");
  const [mostLikedFilter, setMostLikedFilter] = useState("Monthly");
  useEffect(() => {
    if (router.query.id) {
      setCurrentCustomer(customerData.find((o) => o.id == router.query.id));
    }
  }, [router]);

  return (

    
    
        <div>
          <h1>Customer Detail</h1>
          <p>Here your Customer Detail Profile</p>
    
          <Grid container spacing={2} style={{ display: "flex" }}>
            <Grid item sm={8} md={8} style={{ display: "flex" }}>
              <Image
                src={"/placeholder (2).png"}
                alt="phone"
                width={222.79}
                height={217}
              />
              <div style={{ display: "flex" }}>
                <div style={{ marginLeft: "20px", marginTop: "20px" }}>
                  <h1>SAYID</h1>
                  <p
                    style={{
                      color: "#00B074",
                      marginTop: "15px",
                      marginBottom: "15px",
                    }}
                  >
                    UX Designer
                  </p>
                  <p style={{ color: "#A3A3A3", fontSize: "15px" }}>
                    St. Kings Road 57th, Garden Hills, Chelsea - London
                  </p>
                  <div style={{ marginTop: "50px", display: "flex" }}>
                    <div style={{ display: "flex" }}>
                      <Image
                        style={{ marginRight: "10px" }}
                        src={"/Icon (14).png"}
                        alt="phone"
                        width={20}
                        height={20}
                      />
                      <p>eren.yeager@mail.co.id</p>
                    </div>
                    <div style={{ display: "flex", marginLeft: "20px" }}>
                      <Image
                        style={{ marginRight: "10px" }}
                        src={"/Icon (25).png"}
                        alt="phone"
                        width={20}
                        height={20}
                      />
                      <p>+0123456789</p>
                    </div>
                    <div style={{ display: "flex", marginLeft: "20px" }}>
                      <Image
                        style={{ marginRight: "10px" }}
                        src={"/Icon (26).png"}
                        alt="phone"
                        width={20}
                        height={20}
                      />
                      <p>Highspeed.Studios</p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
    
            <Grid
              item
              sm={4}
              md={4}
              style={{
                marginLeft: "40px",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "16px",
                border: "1px solid rgb(241, 241, 241)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}
              >
                <p>Your Balance</p>
                <p style={{ fontSize: "35px", marginTop: "-20px" }}>...</p>
              </div>
              <h1>$ 9,425</h1>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "30px",
                }}
              >
                <p>2451 **** **** ****</p>
                <p>02/21</p>
              </div>
              <div>
                <p>Name</p>
                <h3 style={{ marginTop: "20px" }}>Eren Yeager</h3>
              </div>
            </Grid>
          </Grid>
    
          <div
            style={{
              marginTop: "50px",
              width: "700px",
              backgroundColor: "white",
              border: "1px solid rgb(241, 241, 241)",
              borderRadius: "16px",
              padding: "20px 30px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h1>Most Ordered Food</h1>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              <Image
                src={"/toogle_tabmenu.png"}
                alt="phone"
                width={269}
                height={48}
              />
            </div>
    
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  marginTop: "30px",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Image
                  src={"/placeholder (2).png"}
                  alt="phone"
                  width={86.88}
                  height={87}
                />
                <div>
                  <h3 style={{ marginBottom: "10px" }}>
                    Meidum Spicy Spagethi Italiano
                  </h3>
                  <h3 style={{ marginBottom: "10px" }}>SPAGETHI</h3>
                  <p style={{ color: "#A3A3A3" }}>
                    Serves for 4 Person | 24mins
                  </p>
                </div>
                <h1>$12.56</h1>
                <button style={{ fontSize: "25px" }}>...</button>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
  

export default CustomerDetail;

CustomerDetail.getLayout = (pageProps) => (
  <MainLayout>
    <CustomerDetail {...pageProps} />
  </MainLayout>
);
