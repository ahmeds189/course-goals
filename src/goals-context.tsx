import {
  type PropsWithChildren,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

export type Goal = {
  id: number;
  title: string;
  summary: string;
};

type StateType = {
  goals: Goal[] | undefined;
  addGoal: (newGoal: Goal) => void;
  deleteGoal: (id: number) => void;
  deleteAll: () => void;
};

const initState = {
  goals: [],
  addGoal: () => null,
  deleteGoal: () => null,
  deleteAll: () => null,
};

function getInitialState() {
  const goals = localStorage.getItem("goals");
  return goals ? JSON.parse(goals) : [];
}

const GoalsContext = createContext<StateType>(initState);

export function GoalsProvider({ children }: PropsWithChildren) {
  const [goals, setGoals] = useState<Goal[]>(getInitialState);

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  const value = {
    goals,
    addGoal: (newGoal: Goal) => setGoals((prev) => [...prev, newGoal]),
    deleteGoal: (id: number) =>
      setGoals((prev) => prev.filter((goal) => goal.id !== id)),
    deleteAll: () => setGoals([]),
  };

  return (
    <GoalsContext.Provider value={value}>{children}</GoalsContext.Provider>
  );
}

export const useGoals = () => {
  const context = useContext(GoalsContext);

  if (context === undefined)
    throw new Error("useGoals must be used within a GoalsProvider");

  return context;
};
