import { apiAuth } from "../../api";

export const handleLogin = async(dispatch: any) => {
  const tokenGr =
    "Bearer AQUM9jAA3BKxdWF5mijTB375mlAPx0LIq7j4cpuUOhL9Cp1ovA8pGibbE7XlY_NJSp0NPB0hFW-cUm3DX73bUNWKI0BUcCKpnb1u43LI6rwNaddzW4XkfICHVxOM9p2VfcBNGOjgq4xXyTt7jkpUR4odTSJadhDa_FsbfJumM6Irqk8GWY9Y6HNRJY9NewD7ziIrHD8VpdvjpBuT5n42vRpHtRB_RArTzvz6vgQLmpTSPtBzE1U7g4tOt6MGCjgNUM9Svuf0R32AK25ZekppzMDIbIgOw7TivYhmw6MOYRBrpatn8QKNk9hSwux39wU6KNFFDaaZWSexTxzsK4ovMCixpx_8ug";
  try {
    const { data } = await apiAuth.get(`/${tokenGr}`);

    const authorization = {
      type: "SET_AUTH",
      token: 'dasdas',
      auth: true,
    };

    apiAuth.defaults.headers.common["Authorization"] = tokenGr;

    localStorage.setItem("token", data);
    dispatch(authorization);
    
    // console.log(data);
    console.log(authorization);
    
  } catch (error) {
    console.log(error);
  }
};
