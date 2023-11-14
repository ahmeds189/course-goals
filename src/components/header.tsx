import { useGoals } from "../goals-context";
import { GoalForm } from "./goal-form";

export function Header() {
  const { goals, deleteAll } = useGoals();
  return (
    <header className="bg-section rounded-md p-2 md:p-4 mb-4 ">
      <GoalForm />

      <div className="flex items-center justify-between mt-3 max-w-xl mx-auto">
        <h1 className="text-lg font-bold text-brand_1">🎯 Yor Course Goals</h1>
        <div className="flex items-center gap-2 md:gap-4">
          <p className="text-sm text-muted bg-red-400/20 p-1.5 rounded-md">
            🎯 {goals?.length}
          </p>
          <button onClick={deleteAll} className="bg-red-400/20 p-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.14"
                d="M16 16.2V6H14H10H6H4V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H11.2C12.8802 21 13.7202 21 14.362 20.673C14.9265 20.3854 15.3854 19.9265 15.673 19.362C16 18.7202 16 17.8802 16 16.2Z"
                fill="black"
              />
              <path
                d="M12 10V17M8 10V17M19 9H22M19 14H22M19 19H21M16 6V16.2C16 17.8802 16 18.7202 15.673 19.362C15.3854 19.9265 14.9265 20.3854 14.362 20.673C13.7202 21 12.8802 21 11.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V6M2 6H18M14 6L13.7294 5.18807C13.4671 4.40125 13.3359 4.00784 13.0927 3.71698C12.8779 3.46013 12.6021 3.26132 12.2905 3.13878C11.9376 3 11.523 3 10.6936 3H9.30643C8.47705 3 8.06236 3 7.70951 3.13878C7.39792 3.26132 7.12208 3.46013 6.90729 3.71698C6.66405 4.00784 6.53292 4.40125 6.27064 5.18807L6 6"
                className="stroke-danger"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
