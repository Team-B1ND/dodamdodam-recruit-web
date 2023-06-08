import { useState } from "react";
import { ProvidersProps } from "./types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalStyle } from "../../../styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";

const Providers = ({ children }: ProvidersProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: Infinity,
            staleTime: 0,
          },
        },
      })
  );

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <BrowserRouter>{children}</BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default Providers;
