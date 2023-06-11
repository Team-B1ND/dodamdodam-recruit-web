import Token from "../libs/token/Token";

const useLogout = () => {
  const onLogout = () => {
    Token.clear();
    window.location.href = "https://dodam.b1nd.com/sign";
  };

  return { onLogout };
};
export default useLogout;
