import CardNavigator from "./card-navigator";
import FlashCard from "./flash-card";

export default function QuizCreator() {
  return (
    <section className="border-1 border-primary/25 bg-primary/15 rounded-md m-20 shadow-lg p-10">
      <FlashCard />
      <CardNavigator />
    </section>
  );
}
