import CardNavigator from "./card-navigator";
import FlashCardCreator from "./flash-card-creator";

export default function FlashCardQuiz() {
  return (
    <section className="border-1 border-primary/25 bg-primary/15 rounded-md m-20 shadow-lg p-10">
      <FlashCardCreator />
      <CardNavigator />
    </section>
  );
}
