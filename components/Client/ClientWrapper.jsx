"use client"

import { AuthProvider, useAuth } from "@/utils/AuthContext";
import { LangProvider } from "@/utils/langContext";
import LogicProvider from "./LogicProvider";
import BackToTop from "./BacktoTop";
import ScrollTopBehaviour from "./ScrollToTopBehaviour";

export default function ClientWrapper({ children }) {
  return (
    <>
      <AuthProvider>
        <LangProvider>
          <LogicProvider>
            {children}
            <BackToTop />
            <ScrollTopBehaviour />
          </LogicProvider>
        </LangProvider>
      </AuthProvider>
    </>
  );
}
