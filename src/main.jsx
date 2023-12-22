import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MyRouter from "./routers/RouterProvider";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./routers/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={MyRouter}></RouterProvider>
          <Toaster />
        </AuthProvider>
      </QueryClientProvider>
    </DndProvider>
  </React.StrictMode>
);
