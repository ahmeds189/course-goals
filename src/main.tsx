import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/header";
import { GoalsList } from "./components/goals-list";
import { GoalsProvider } from "./goals-context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoalsProvider>
      <Header />
      <GoalsList />
    </GoalsProvider>
  </React.StrictMode>
);
