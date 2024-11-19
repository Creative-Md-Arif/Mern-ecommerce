import React from "react";
import Header from "../Header";
import { Outlet, ScrollRestoration } from "react-router-dom";
import ServicesTag from "../ServicesTag";
import Footer from "../Footer";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { persistor, store } from "../../redux/store";
import { PersistGate } from "redux-persist/integration/react";

const RootLayout = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <ScrollRestoration />
        <Outlet />
        <ServicesTag />
        <Footer />
        <Toaster
          position="bottom-rigjht"
          toastOptions={{
            style: {
              background: "#000000",
              color: "white",
            },
          }}
        />
      </PersistGate>
    </Provider>
  );
};

export default RootLayout;
