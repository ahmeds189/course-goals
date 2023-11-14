import { useGoals } from "../goals-context";
import { EmptyList } from "./empty-list";
import { GoalCard } from "./goal-card";

export function GoalsList() {
  const { goals } = useGoals();

  return (
    <section className="flex flex-col gap-8 bg-section rounded-md p-2 md:p-4 flex-1 overflow-y-auto scrollbar-thumb-muted/20 scrollbar-track-gray-600/20 scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
      <div>
        <h3>Goals List</h3>
        <hr className="mt-2 bg-muted h-0.5 rounded-md border-none" />
      </div>
      {goals && goals.length ? (
        <ul className="flex flex-col gap-4">
          {goals.map((goal) => (
            <li key={goal.id}>
              <GoalCard {...goal} />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyList />
      )}
    </section>
  );
}
