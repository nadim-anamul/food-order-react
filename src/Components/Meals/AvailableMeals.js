import React, { useState, useEffect } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

import classes from './AvailableMeal.module.css';

function AvailableMeal() {
    const [meals, setMeals] = useState([]);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://react-http-1ef17-default-rtdb.firebaseio.com/Meals.json');
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseData = await response.json();

            //console.log(responseData);
            const loadedMeals = [];
            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                });
            }
            setMeals(loadedMeals);
        };
        fetchMeals().catch((error) => {
            setHttpError(error.message);
        });
    }, []);

    if (httpError) {
        return (
            <section className={classes.mealsError}>
                <p>{httpError}</p>
            </section>
        );
    }
    const mealList = meals.map((meal) => (
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        ></MealItem>
    ));
    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealList}</ul>
            </Card>
        </section>
    );
}

export default AvailableMeal;
