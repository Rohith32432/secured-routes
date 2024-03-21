import { useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Login = () => {
 
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
     
      console.log(jwtDecode(codeResponse.access_token))
    },
    onError: (error) => console.log("Login Failed:", error)
  });
  return(
    <button onClick={login}>clk</button>
  )
};

export default Login;