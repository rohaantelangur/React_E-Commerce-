import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";



export const Product = () => {
  const { id } = useParams();
  console.log(id);
  const [showproduct, setshowproduct] = useState({});
  const { CartItem, setCartItem } = useContext(CartContext);


  useEffect(() => {
    if (id !== "not") {
      axios.get(`https://fakestoreapi.com/products/${id}`).then((r) => {
        console.log(r);
        setshowproduct(r.data);
      });
    }
  }, [id]);

  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image
            // objectFit="cover"
            boxSize="100%"
            src={showproduct.image}
            h={'300px'}
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {showproduct.title}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
          {showproduct.category}
          </Text>
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            {showproduct.description}
          </Text>
          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              $ {showproduct.price}
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              {/* X {(showproduct.rating.rate)} */}
            </Badge>
          </Stack>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
              onClick={()=>{
                setCartItem([...CartItem,{ id:showproduct.id,qty:1,title:showproduct.title,image:showproduct.image,price:showproduct.price}])
              }
              }
            >
            Add To Cart              
            </Button>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
            <Link to="/checkout">Buy Now.</Link>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
};
