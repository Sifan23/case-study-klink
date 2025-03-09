"use client"; // Ensure it's a Client Component

import { WagmiProvider } from "wagmi";
import { config } from "@/hooks/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export default function WagmiClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>{children}</WagmiProvider>
    </QueryClientProvider>
  );
}
