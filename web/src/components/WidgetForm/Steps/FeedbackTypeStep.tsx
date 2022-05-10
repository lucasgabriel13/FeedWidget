import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

type FeedbackTypeStepProps = {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
};

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6 dark:text-zinc-100 text-zinc-900">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="dark:bg-zinc-800 bg-zinc-100 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span className="dark:text-zinc-100 text-zinc-900">{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
