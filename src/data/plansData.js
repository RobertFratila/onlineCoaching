import hearth from '../assets/hearth.png';
import crown from '../assets/crown.png';
import strengthMuscle from '../assets/strengthMuscle.png';

export const plansData = [
  {
    icon: (
      <img
        src={hearth}
        alt="icon"
        width="45"
        height="40"
      />
    ),
    name: "ONLINE COACHING",
    price: "300",
    features: [
      "3 Months subscription",
      "Workout Plan",
      "Meal Plan",
      "Suppliments Plan (if asked)",
      "Weekly check-in",
      "24/7 whatsapp disponibility",
    ],
  },
  {
    icon: (
      <img
        src={crown}
        alt="icon"
        width="45"
        height="40"
      />
    ),
    name: "ONE2ONE Coaching",
    price: "180",
    features: [
      "1 Month subscription",
      "12 Gym Meetings",
      "Workout Plan",
      "Meal Plan",
      "24/7 whatsapp disponibility",
    ],
  },
  {
    icon: (
      <img
        src={strengthMuscle}
        alt="icon"
        width="45"
        height="40"
      />
    ),
    name: "Group Coaching",
    price: "100",
    features: [
      "1 Month subscription",
      "You will train with another 3 people",
      "12 Gym Meetings",
      "Workout Plan",
      "Meal Plan",
      "24/7 whatsapp disponibility"
    ],
  },
];
