import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
	{
		id: "m1",
		name: "Paneer Tikka",
		description: "Tantalizing Grilled Paneer",
		price: 250,
	},
	{
		id: "m2",
		name: "Dal Makhani",
		description: "Creamy Lentil Delight",
		price: 200,
	},
	{
		id: "m3",
		name: "Malai Kofta",
		description: "Velvety Paneer Balls",
		price: 300,
	},
	{
		id: "m4",
		name: "Aloo Gobi",
		description: "Potato Cauliflower Medley",
		price: 150,
	},
];
const AvailableMeals = () => {
	const mealsList = DUMMY_MEALS.map((meal) => (
		<MealItem
			key={meal.id}
			id={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));
	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
