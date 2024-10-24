"use client";

import { createContext, useContext, useState } from "react";
import { sections } from "@/lib/data";

type SectionName = (typeof sections)[number]["name"];

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Hero");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (!context) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
};

export default ActiveSectionContextProvider;
