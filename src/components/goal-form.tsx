import { type FormEvent, useRef } from "react";
import { Goal, useGoals } from "../goals-context";

export function GoalForm() {
  const titleRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLTextAreaElement>(null);
  const { addGoal } = useGoals();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const enterdTitle = titleRef.current?.value;
    const enterdSummary = summaryRef.current?.value;

    if (enterdTitle && enterdSummary) {
      const newGoal: Goal = {
        title: enterdTitle,
        summary: enterdSummary,
        id: Math.random(),
      };
      addGoal(newGoal);
      e.currentTarget.reset();
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 max-w-xl mx-auto"
    >
      <label id="title">
        <p className="mb-2">Your Goal</p>
        <input ref={titleRef} type="text" name="title" required minLength={5} />
      </label>
      <label id="summery">
        <p className="mb-2">Short Summary</p>
        <textarea
          ref={summaryRef}
          className="scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-rounded-full"
          name="summery"
          required
          minLength={5}
        />
      </label>
      <button type="submit" className="bg-brand_1 mt-2">
        Add Goal
      </button>
    </form>
  );
}
