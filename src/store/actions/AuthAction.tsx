import { apiAuth } from "../../api";

export const handleLogin = async () => {
  const tokenGr =
    "Bearer AQUDXRxP7qrg-6fgAL8km7CCSgdhz9gO1T1ZQWsHeMUmDdb618bsCbUjxwEhABFHcOnU0xGAcOMwhepWn8LeX6Qj51ebnBZkZWNxAvRFdY8_-6HZrPLtdpikBqWPgINoSTLJwf1wL4-mb71AyNSWHzWdJijT66xf_28Nd2zec4_gOYXXL6yu7LICoymUhlQIL0u8XeFYVwTyFd_P8hqnmwQAhYgZ2DMqKQg3RhXJ6M7w5-9e8cdJUqQkHe35Igbxp4f0g1ViyVjxMgyiMM7pyZ9Tmol9GQFL2UrrlCCcP7_lezq3VGaJDK1NDiBQsBI_RNjAG0LhEJFf5R5WLb87ZBVe_bXrMg";
  try {
    const { data } = await apiAuth.get(`/${tokenGr}`);

    const authorization = {
      type: "SET_AUTH",
      token: data,
      auth: true,
    };
    apiAuth.defaults.headers.common["Authorization"] = data;
    localStorage.setItem("token", data);
  } catch (error) {
    console.log(error);
  }
};
