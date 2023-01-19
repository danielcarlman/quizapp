import rpmseafood from "../assets/rpmseafood.jpg";
import hub51 from "../assets/hub51.jpg";
import beatrix from "../assets/beatrix.jpg";
import tallboy from "../assets/tallboy.jpg";

export default function rubric(totalPoints: number) {
  if (totalPoints > 21)
    return {
      restaurant: "RPM Seafood",
      image: rpmseafood,
      description:
        "RPM Seafood is a dramatic multi-level restaurant overlooking the Chicago River featuring the truest expression of the world’s best fish and seafood.",
    };

  if (totalPoints > 16)
    return {
      restaurant: "Hub 51",
      image: hub51,
      description:
        "From the best nachos in Chicago to sushi, burgers, tacos and craft beers, we are River North’s go-to spot for lunch, dinner, weekend brunch and late-night eats.",
    };

  if (totalPoints > 10)
    return {
      restaurant: "Beatrix",
      image: beatrix,
      description:
        "Beatrix is a neighborhood coffeehouse, restaurant and meeting place in many of Chicago's neighborhoods. It is the ultimate destination in the city.",
    };

  return {
    restaurant: "Tall Boy Taco",
    image: tallboy,
    description:
      "Tallboy Taco offers a menu inspired by fresh and simple ingredients. Tacos served on hand-pressed corn tortillas. It includes all-day breakfast options.",
  };
}
