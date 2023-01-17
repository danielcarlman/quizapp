interface Questions {
  question: string;
  answers: { [key: string]: number };
}

const questions: Questions[] = [
  {
    question: "Pick a city you would like to jet off to",
    answers: {
      Tokyo: 2,
      Paris: 4,
      "Los Angeles": 1,
      Nashville: 3,
    },
  },
  {
    question: "Pick a Netflix show to binge watch",
    answers: {
      "Stranger Things": 2,
      "The Crown": 4,
      "House of Cards": 1,
      Wednesday: 3,
    },
  },
  {
    question: "What is the first thing you reach for in the morning?",
    answers: {
      Coffee: 1,
      Phone: 4,
      Glass: 2,
      "TV Remote": 3,
    },
  },
  {
    question: "If you could be any animal what would you pick?",
    answers: {
      Eagle: 1,
      Dog: 3,
      Deer: 4,
      Monkey: 2,
    },
  },
  {
    question: "Pick a superpower",
    answers: {
      Invisibility: 3,
      "Mind Reading": 4,
      Telekinesis: 1,
      Flight: 2,
    },
  },
  {
    question:
      "If you were to write a book about your life, what genre would it be?",
    answers: {
      Romance: 4,
      Thriller: 2,
      Comedy: 3,
      Adventure: 1,
    },
  },
];

export default questions;
