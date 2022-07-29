import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

export default function MealsList({ displayedMeals, navigation }) {
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