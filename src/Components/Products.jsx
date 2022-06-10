import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useToast } from '@chakra-ui/react'

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'
import { Link, Navigate } from "react-router-dom";
import { AddIcon } from "@chakra-ui/icons";
import { CartContext } from "../Context/CartContext";


export const Products = () => {
  const [products, setproducts] = useState([]);
  const toast = useToast()
  const { CartItem, setCartItem } = useContext(CartContext);


  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
      .then((r) => setproducts(r.data));
  }, []);
//   console.log(products);

  return (
    <>
                  <Grid templateColumns='repeat(3, 1fr)' w={'80%'} gap={10} m={'10px auto'} >
              {products.map((item) => {
                return (
            <GridItem key={item.id} 
            
             my={10}
            p={6}
            maxW={"330px"}
            w={"full"}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            //   zIndex={1}
            >
                  <Link to={"/product/"+item.id}>
              
              <Box
                rounded={"lg"}
                mt={-12}
                pos={"relative"}
                height={"230px"}
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 5,
                  left: 0,
                  backgroundImage: `url(${item.image})`,
                  filter: "blur(15px)",
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(20px)",
                  },
                }}
                
              >
                <Image
                  rounded={"lg"}
                  height={230}
                  width={282}
                  objectFit={"cover"}
                  src={item.image}
                />
              </Box>
              <Stack pt={10} align={"center"}>
                <Text
                  color={"gray.500"}
                  fontSize={"sm"}
                  textTransform={"uppercase"}
                  >
                  Brand
                </Text>
                <Text numberOfLines={1} fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                    {item.title}
                </Text>
                <Stack direction={"row"} align={"center"}>
                  <Text fontWeight={800} fontSize={"xl"}>
                    ${item.price}
                  </Text>
                  <Text textDecoration={"line-through"} color={"gray.600"}>
                    ${item.price+56}
                  </Text>
                </Stack>
              </Stack>
              </Link>
              <Button
              variant={"outline"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon />}
              onClick={() => {
                let p = true;
                CartItem.map((el)=>{
                 if(item.id === el.id){
                   p=false;
                   toast({
                    title: 'You already add this product',
                    status: 'warning',
                    position:'top',
                    duration: 9000,
                    isClosable: true,
                  })
                 }
               })
               if(p===true){
                setCartItem([
                  ...CartItem,
                  {
                    id: item.id,
                    title: item.title,
                    qty:1,
                    image: item.image,
                    price: item.price,
                  },
                ]);
               }
              }}
            >
              ADD TO CART
            </Button>
            </GridItem>
        );
    })}
    </Grid>
    </>
  );
};
