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
        "This is the definition of high-class dining experience. One of our best restaurants features prawns, shrimps and pretty much all great creatures from under the sea!",
    };

  if (totalPoints > 16)
    return {
      restaurant: "Hub 51",
      image: hub51,
      description:
        "This is the greatest Pub Restaurant ever in the world. Such an incredible experience dining here. Feel free to bring your family and have fun under the sun!",
    };

  if (totalPoints > 10)
    return {
      restaurant: "Beatrix",
      image: beatrix,
      description:
        "This is the greatest Casual Beat Restaurant ever in the world. Such an incredible experience dining here. Feel free to bring your friends and guest and have great party!",
    };

  return {
    restaurant: "Tall Boy",
    image: tallboy,
    description:
      "This is the greatest Restaurant for Tacos ever in the world. Such an incredible authentic Mexican here. Feel free to bring your friends and guests. Gracias!",
  };
}
