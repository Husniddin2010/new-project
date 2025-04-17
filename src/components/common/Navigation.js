import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "@/styles/Aside.module.css";
import { GoHome, GoListUnordered ,GoPersonFill ,GoPeople  } from "react-icons/go";
import { FaWallet } from "react-icons/fa";
import { TbShoppingCartDown ,TbPresentationAnalyticsFilled ,TbPencilDollar ,TbBrandWechat ,TbCoffee ,TbNotebook ,TbCalendarMonthFilled  } from "react-icons/tb";
import Image from "next/image";


function Navigation(props) {
  const router = useRouter();

  const links = [
    {
      img: "./sedap.png",
      id: 1,
      linkName: "Dashboard",
      icon: <GoHome GoListUnordered  />,
      href: "/",
      active: true,
    },
    {
      id: 2,
      linkName: "Order List",
      icon: <GoListUnordered/>,
      href: "/orders",
      active: true,
    },
    {
      id: 3,
      linkName: "Order Detail",
      icon: <TbShoppingCartDown />,
      href: "/OrderTop",
      active: true,
    },
    {
      id: 4,
      linkName: "Customers",
      icon: <GoPersonFill  />,
      href: "/customers",
      active: true,
    },
    {
      id: 5,
      linkName: "Analytics",
      icon: <TbPresentationAnalyticsFilled  />,
      href: "/analis",
      active: true,
    },
    {
      id: 6,
      linkName: "Review",
      icon: <TbPencilDollar  />,
      href: "/review",
      active: true,
    },
    {
      id: 7,
      linkName: "Foods",
      icon: <TbCoffee  />,
      href: "/foods",
      active: true,
    },
    {
      id: 8,
      linkName: "Food Detail",
      icon: <TbNotebook  />,
      href: "/foodDetail",
      active: true,
    },
    {
      id: 9,
      linkName: "Customer Detail",
      icon: <TbCalendarMonthFilled />,
      href: "/CustomerTop",
      active: true,
    },
    {
      id: 11,
      linkName: "Chat",
      icon: <TbBrandWechat />,
      href: "/chat",
      active: true,
    },
    {
      id: 12,
      linkName: "Wallet",
      icon: <FaWallet />,
      href: "/wallet",
      active: true,
    },
  ];

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700&display=swap"
        />
      </Head>
      <aside className={styles["aside"]}>
        <div className={styles["aside-header"]}>
          <Image
            src="/Sedap.png"
            alt="Sedap Logo"
            width={167}
            height={49}
            className={styles["logo"]}
          />
          <p
            style={{
              color: "#B9BBBD",
              fontSize: "18px",
              backgroundColor: "unset",
            }}
          >
            Modern Admin Dashboard
          </p>
        </div>
        <div className={styles["buttonsMenu"]}>
          {links.map(({ id, href, linkName, icon, active }) => (
            <Links
              key={id}
              linkName={linkName}
              icon={icon}
              href={href}
              active={active}
            />
          ))}
        </div>
      </aside>
    </div>
  );
}

function Links(props) {
  const { linkName, icon, href, active } = props;
  const router = useRouter();
  return (
    <Link
      className={`${router.asPath === href ? styles.active : ""} ${
        styles.link
      }`}
      href={href}
    >
      {icon }
      {linkName}
    </Link>
  );
}

export default Navigation;
