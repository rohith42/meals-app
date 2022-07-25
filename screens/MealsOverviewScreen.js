import { CATEGORIES, MEALS } from "../data/dummy-data";
import { Text, View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";


export default function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;

	const displayedMeals = MEALS.filter((mealItem) => {
		return mealItem.categoryIds.indexOf(catId) >= 0;
	});

	useLayoutEffect(() => {
			const categoryTitle = 
				CATEGORIES.find(category => category.id === catId).title;
		
			navigation.setOptions({
				title: categoryTitle,
			});
		}, [catId, navigation] 
	);

	function renderMealItem(itemData) {
		const item = itemData.item;

		function pressHandler() {
            navigation.navigate("Meal Details", { id: item.id });
        }
		
		const mealItemProps = {
			title: item.title,
			imgUrl: item.imageUrl,
			affordability: item.affordability,
			complexity: item.complexity,
			duration: item.duration,
			onPress: pressHandler,
		};
		
		return (
			<MealItem {...mealItemProps} />
		);
	}
	
	return(
		<View style={styles.container}>
			<FlatList
				data={displayedMeals}
				keyExtractor={item => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});