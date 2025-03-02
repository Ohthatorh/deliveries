"use client";

import { persistor, store } from "@/services/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {() => children}
      </PersistGate>
    </Provider>
  );
}
