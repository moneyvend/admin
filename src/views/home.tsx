import { Box, Grid, Link, VStack } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "../components";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../utils/routes";

const Home = (): React.JSX.Element => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate(AppRoutes.LOGIN);
  }, [navigate]);
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Link
            color="teal.500"
            href="http://credify.africa"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer">
            Credify Africa
          </Link>
        </VStack>
      </Grid>
    </Box>
  );
};

export default Home;
