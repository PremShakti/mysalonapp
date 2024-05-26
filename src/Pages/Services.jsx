import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import MasterServicesComp from "../components/MasterServicesComp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetServices } from "../Redux/services/Action";
import { HeaderTypeOther } from "../Redux/headerManage/Action";

const Services = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(HeaderTypeOther());
  }, [dispatch]);

  useEffect(() => {
    dispatch(GetServices());
  }, [dispatch]);

  const data = useSelector((store) => store.servicesReducer.servicesData);

  // console.log('dataaaaaaa',data)
  //   const men = data?.filter((e, i) => e.categary === "Gents");
  //   const women = data?.filter((e, i) => e.categary === "Ladies");
  //   const both = data?.filter((e, i) => e.categary === "Ladies/Gents");

  const men = [
    { categary: "Gents", name: "Head massage", price: "2200" },
    { categary: "Gents", name: "Head washing", price: "3200" },
    { categary: "Gents", name: "Head shampoo", price: "2200" },
    { categary: "Gents", name: "Head dry", price: "1200" },
  ];
  const women = [
    { categary: "Ladies", name: "Head massage", price: "4200" },
    { categary: "Ladies", name: "Head washing", price: "4200" },
    { categary: "Ladies", name: "Head dry", price: "4200" },
    { categary: "Ladies", name: "Head shampoo", price: "4200" },
    { categary: "Ladies", name: "Head massage+hair cut", price: "4200" },
  ];
  const both = [
    { categary: "Gents", name: "hair cutting", price: "2200" },
    { categary: "Ladies", name: "Head massage", price: "4200" },
    { categary: "Ladies", name: "Head massage", price: "4200" },
    { categary: "Ladies", name: "Head massage", price: "4200" },
  ];

  return (
    <>
      <Heading
        as={"h2"}
        size={"xl"}
        textAlign={"center"}
        mb={9}
        bgGradient="linear(to-r, gold, white)"
        bgClip="text"
        color="transparent"
      >
        Services
      </Heading>
      <Box
        w={"90%"}
        m={"auto"}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={2}
      >
        <MasterServicesComp data={men} ServiceFor={"Gents Hair Services"} />
        <MasterServicesComp data={women} ServiceFor={"Ladies Hair Services."} />
        <MasterServicesComp
          data={both}
          ServiceFor={"Hair Treatment (Ladies/Gents)"}
        />
      </Box>
    </>
  );
};

export default Services;
