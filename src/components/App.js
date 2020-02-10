import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IngredientSearchInput from './IngredientSearchInput';

const App = () => {
    const [searchPhrase, setSearchPhrase] = useState();

    const handleSearch = e => {
        setSearchPhrase(e.target.value);
    }

    useEffect(() => {
        axios({
            url: 'https://trackapi.nutritionix.com/v2/search/instant',
            headers: {
                'x-app-id': process.env.REACT_APP_NUTRITION_DB_API_ID,
                'x-app-key': process.env.REACT_APP_NUTRITION_DB_API_KEY,
                'x-remote-user-id': 0
              },
            params: {
                query: searchPhrase,
                self: false,
                branded: false,
                detailed: true,
            }
        })
        .then(res => console.log(res))
    }, [searchPhrase]);

    return (
        <IngredientSearchInput handleChange={handleSearch}/>
    )
}

export default App