import { useGoals } from "../goals-context";

type Props = {
  title: string;
  summary: string;
  id: number;
};

export function GoalCard({ title, summary, id }: Props) {
  const { deleteGoal } = useGoals();
  return (
    <article className="border-dashed border-muted border-2 p-3 min-h-full rounded-md">
      <div className="flex justify-between mb-2">
        <h4 className="text-lg">🎯 {title}</h4>
        <button className="bg-red-400/20 p-1" onClick={() => deleteGoal(id)}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.14"
              d="M18 16.2V6H16H12H8H6V16.2C6 17.8802 6 18.7202 6.32698 19.362C6.6146 19.9265 7.07354 20.3854 7.63803 20.673C8.27976 21 9.11984 21 10.8 21H13.2C14.8802 21 15.7202 21 16.362 20.673C16.9265 20.3854 17.3854 19.9265 17.673 19.362C18 18.7202 18 17.8802 18 16.2Z"
              fill="black"
            />
            <path
              d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17"
              className="stroke-danger"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <p className="text-muted text-sm">{summary}</p>
    </article>
  );
}
