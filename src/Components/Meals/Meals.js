import React from 'react';

import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';

function Meals() {
    return (
        <>
            <MealsSummary></MealsSummary>
            <AvailableMeals></AvailableMeals>
        </>
    );
}

export default Meals;
