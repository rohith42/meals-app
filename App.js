import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
	return (
		<Drawer.Navigator>
			<Drawer.Screen />
		</Drawer.Navigator>
	);
}

export default function App() {
  	return (
      	<>
        	<StatusBar style='light' />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: { backgroundColor: '#351401' },
						headerTintColor: 'white',
						contentStyle: { backgroundColor: '#3f2f25' },
					}}
				>
					<Stack.Screen 
						name="MealsCategories" 
						component={DrawerNavigator} 
						options={{
							title: 'Categories',
						}}
					/>
					<Stack.Screen 
						name="MealsOverview" 
						component={MealsOverviewScreen} 
						// One way to change options based on the route data
						// options={({ route, navigation }) => {
						// 	const catID = route.params.categoryId;
						// 	return ({
						// 		title: catID,
						// 	});
						// }}
					/>
					<Stack.Screen name='Meal Details' component={MealDetailsScreen} />
				</Stack.Navigator>
			</NavigationContainer>
      	</>
  	);
}

const styles = StyleSheet.create({

});
