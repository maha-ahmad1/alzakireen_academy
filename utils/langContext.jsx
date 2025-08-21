"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let LangContext = createContext([]);

export function LangProvider({ children }) {
  let [lang, setLang] = useState({});


  let getApi = async () => {
    let languages = ""

    setLang(languages);
  };

  useEffect(() => {
    getApi();
  }, []);


  return (
    <LangContext.Provider
      value={{ lang }}
    >
      {children}
    </LangContext.Provider>
  );
}
