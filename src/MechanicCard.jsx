import React from "react";
import { Box, Text, Badge, Button, Flex, Img, Circle } from "@chakra-ui/react";

const ProfilePicureIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_1737_25837)">
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_1737_25837">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

function MechanicCard({ mechanic, onClick }) {
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      bg="secondary"
      color="quaternary"
      cursor={"pointer"}
      borderRadius="md"
      onClick={onClick}
    >
      <Flex align={'center'} gap={'15px'}>
        <label
          style={{
            display: "block",
            width: "4rem",
            height: "4rem",
            borderRadius: "50%",
            position: "relative",
            overflow: "hidden",
            zIndex: "1",
            backgroundColor: "#FDECDA",
          }}
        >
          {/* <img
            src={"/demo.jpg"}
            alt=""
            style={{ width: "100%" }}
          /> */}
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "30%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
              zIndex: "1",
            }}
          >
            <ProfilePicureIcon />
          </div>
        </label>
        <Text fontWeight="bold" fontSize="xl">
          {mechanic.name}
        </Text>
      </Flex>
      <Text mt={2}>Expertise: {mechanic.expertise}</Text>
      <Badge mt={2} colorScheme="teal">
        Rating: {mechanic.rating}
      </Badge>
      <Button mt={4} colorScheme="teal" onClick={onClick} float={"right"}>
        View Details
      </Button>
    </Box>
  );
}

export default MechanicCard;
