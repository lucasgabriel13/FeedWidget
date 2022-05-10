import { Header } from "../components/Header";
import bugImageUrl from "../assets/bug.svg";
import ideaImageUrl from "../assets/idea.svg";
import thoughtImageUrl from "../assets/thought.svg";
import { CardDashboard } from "../components/CardDashboard";
import { useEffect, useState } from "react";
import { api } from "../services/api";

type countFeedbacks = {
  BUG: number;
  IDEA: number;
  OTHER: number;
};

export function Dashboard() {
  const [countFeedbacks, setCountFeedbacks] = useState<countFeedbacks>();

  useEffect(() => {
    const getCountFeedbacks = async () => {
      try {
        const { data } = await api.get("/feedbacks");

        if (!data) return;

        setCountFeedbacks(data);
      } catch (err) {
        console.log(err);
      }
    };

    getCountFeedbacks();
  }, []);

  return (
    <section className="flex items-center justify-center mt-24 flex-wrap gap-5">
      <CardDashboard
        title="Bug"
        image={bugImageUrl}
        count={countFeedbacks?.BUG}
      />
      <CardDashboard
        title="Ideia"
        image={ideaImageUrl}
        count={countFeedbacks?.IDEA}
      />
      <CardDashboard
        title="Outros"
        image={thoughtImageUrl}
        count={countFeedbacks?.OTHER}
      />
    </section>
  );
}
