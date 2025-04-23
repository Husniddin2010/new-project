import React, { useState } from "react";
import Image from "next/image";
import { Grid, width } from "@mui/system";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

function Card() {
  const arr = [
    {
      id: "1",
      name: "Spicy Mozarella with Barbeque",
      ime: "/cercle.png", // ortiqcha bo‘sh joylar olib tashlandi
      title: "food/",
      context: "Noodle",
    },
    {
      id: "2",
      name: "Burger Jumbo Special With Spicy",
      ime: "/cercle.png", // ortiqcha bo‘sh joylar olib tashlandi
      title: "food/",
      context: "Burger",
    },
    {
      id: "3",
      name: "Pizza la Piazza Special Nuggets",
      ime: "/cercle.png", // ortiqcha bo‘sh joylar olib tashlandi
      title: "food/",
      context: "pitsa",
    },
    {
      id: "4",
      name: "Spicy Mozarella with Barbeque",
      ime: "/cercle.png", // ortiqcha bo‘sh joylar olib tashlandi
      title: "food/",
      context: "Noodle",
    },
    {
      id: "5",
      name: "Spicy Mozarella with Barbeque",
      ime: "/cercle.png", // ortiqcha bo‘sh joylar olib tashlandi
      title: "food/",
      context: "Noodle",
    },
  ];
  const [foodDelete, setfoodDelete] = useState(arr)
  const router = useRouter()
  const handleDelete = ((id) => {
    setfoodDelete((items) => items.filter((item) => item.id !== id))
    console.log(foodDelete);
    
  })

  return (
    <div style={{ display: "flex" , marginTop:"20px", maxWidth: '1300px', flexWrap: 'wrap' }}>
      {foodDelete.map((item) => (
        <div
          style={{
            width: "300px",
            textAlign: "center",
            backgroundColor: "white",
            margin: "0 5px",
            padding: "10px",
            borderRadius: "16px",
            border: "2px solid rgb(241, 241, 241)",
          }}
          key={item.id}
        >
          <Image src={item.ime} alt={item.name} width={200} height={200} />
          <h2
            style={{
              width: "250px",
            }}
          >
            {item.name}
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                color: "green",
              }}
            >
              {item.title}
            </p>
            <p>{item.context}</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <button
                style={{
                
                  background: "#00B07426",
                  borderRadius: "5px",
                  padding:"5px",
                  margin:"10px",
                  border: 0
                }}
              >
                <Image src="/eggs.png" alt={item.name} width={24} height={24} />
              </button>
              <p>View</p>
            </div>
            <div
              style={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <button
                onClick={() => router.push(`/foods/edit`)}
                style={{
                  width: "34px",
                  background: "#FF5B5B26",
                  borderRadius: "5px",
                  padding:"5px",
                  margin:"10px",
                  border: 0
                }}
              >
                <Image src="/Icon (28).png" alt={item.name} width={24} height={24} />
              </button>
              <p>Edit</p>
            </div>
            <div
              style={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <button
                onClick={()=>handleDelete(item.id)}
                style={{
                  width: "34px",
                  background: "#2D9CDB26",
                  cursor: 'pointer',
                  borderRadius: "5px",
                  padding:"5px",
                  margin:"10px",
                  border: 0
                }}
              >
                <Image src="/Icon (29).png" alt={item.name} width={24} height={24} />
              </button>
              <p>Delete</p>
            </div>
            <div
              style={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <button
                style={{
                  width: "34px",
                  background: "#5E6C9326",
                  borderRadius: "5px",
                  padding:"5px",
                  margin:"10px",
                  border: 0
                }}
              >
                <Image src="/Icon (30).png" alt={item.name} width={24} height={24} />
              </button>
              <p>Duplicate</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
