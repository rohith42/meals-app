import { useContext } from "react";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/favorites";
import MealsList from "../components/MealsList";
import { View, Text, StyleSheet } from "react-native";



export default function FavoritesScreen({ navigation }) {
    const favoriteMeals = useContext(FavoritesContext);
    
    const displayedMeals = MEALS.filter((mealItem) => {
		return favoriteMeals.ids.includes(mealItem.id);
	});
    
    if (favoriteMeals.ids.length === 0) {
        return (
            <View style={styles.container} >
                <Text style={styles.text}>
                    You don't have any favorites yet!
                </Text>
            </View>
        );
    }

    return (
        <MealsList displayedMeals={displayedMeals} navigation={navigation} />
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 24,
        color: 'white',
    }
});