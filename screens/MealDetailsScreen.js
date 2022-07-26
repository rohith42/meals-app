import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import IconButton from "../components/IconButton";
import List from "../components/List";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";
import { MEALS } from "../data/dummy-data";



export default function MealDetailsScreen({ route, navigation }) {
    const id = route.params.id;

    const meal = MEALS.find(ml => ml.id === id);

    function favoriteMeal() {
        console.log(meal.title + ' added to favorites!');
    }
    
    useLayoutEffect(
        () => {
            navigation.setOptions({ 
                title: meal.title,
                headerRight: () => {
                    return <IconButton icon='star' color='white' onPress={favoriteMeal} />
                }, 
            });
        },
        [ navigation, meal, favoriteMeal ]
    );
    
    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
            <Text style={styles.title} >{meal.title}</Text>
            
            <MealDetails
                duration={meal.duration}
                complexity={meal.complexity}
                affordability={meal.affordability}
                textStyle={styles.detailText}
            />
            
            <View style={styles.listOuterContainer} >
                <View style={styles.listContainer} >
                    <Subtitle>Ingredients</Subtitle>
                    <List data={meal.ingredients} />
                    
                    <Subtitle>Steps</Subtitle>
                    <List data={meal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },  
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    listOuterContainer: {
        alignItems: "center",
    },
    listContainer: {
        width: '80%',
    },
});

