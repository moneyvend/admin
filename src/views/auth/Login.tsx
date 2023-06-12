import React, { useState } from "react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Image,
  Text,
  Input,
  Checkbox,
  Stack,
  HStack,
  Button,
  CardFooter,
  Link,
  InputGroup,
  InputRightElement,
  Spacer,
  Alert,
  AlertIcon,
  useToast
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { HiEye } from "react-icons/hi";
import { AppRoutes } from "../../utils/routes";
import auth, { type LoginBody } from "../../data/auth";
import { Images } from "../../utils/images";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const toast = useToast();

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    if (!email || !password) {
      setError("Please enter all fields");
      setLoading(false);
      return;
    }
    try {
      const loginBody: LoginBody = {
        usr: email,
        pwd: password
      };
      const apiResponse = await auth.login(loginBody);
      if (apiResponse) {
        auth.saveUser(apiResponse);
        toast({
          title: "Success",
          description: "Successfully logged in",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top-right"
        });
        setLoading(false);
        navigate(AppRoutes.DASHBOARD);
        return;
      } else {
        toast({
          title: "Warning",
          description: "Wrong credentials",
          status: "warning",
          duration: 9000,
          isClosable: true,
          position: "top-right"
        });
        setLoading(false);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error processing your request",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top-right"
      });
      setLoading(false);
    }
  };
  return (
    <Box bg="#EDF2F7" w="100%" h="100vh" display="flex" justifyContent="center" alignItems="center">
      <Container
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center">
        <Image src={Images.LOGO} w={198.34} mb={26} />
        <Card
          display="flex"
          flexDir="column"
          justifyContent="center"
          px={8}
          alignItems="center">
          <CardHeader display="flex" flexDir="column" justifyContent="center" alignItems="center">
            <Text color="#A8A8A8" fontSize="14px" fontWeight={400}>
              Enter your credentials to access your account .
            </Text>
          </CardHeader>
          <CardBody
          width="100%">
            {error && (
              <Alert status="error" mb={13.72}>
                <AlertIcon />
                {error}
              </Alert>
            )}
            <InputGroup mb={13.72}  w="100%">
              <Input
                placeholder="Email Address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                w="100%"
              />
              <InputRightElement>
                <MdEmail color="grayText" fontSize="21" />
              </InputRightElement>
            </InputGroup>
            <InputGroup>
              <Input
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
              />
              <InputRightElement>
                <HiEye color="grayText" fontSize="21" />
              </InputRightElement>
            </InputGroup>
          </CardBody>
          <CardFooter display="flex" flexDir="column" justifyContent="center" alignItems="center">
            <Button
              w={349}
              colorScheme="brand"
              mb={31.4}
              isLoading={loading}
              loadingText="loading..."
              onClick={handleLogin}>
              Sign in
            </Button>
          </CardFooter>
        </Card>
      </Container>
    </Box>
  );
};

export default Login;
