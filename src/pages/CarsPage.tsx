import React, {useEffect} from 'react';

import CarsComponent from "../components/CarsComponent";
import {carService} from "../services/api.service";

const CarsPage = () => {

    useEffect(() => {
        carService.getCars().then(value => console.log(value));
    }, []);

    return (
        <div>
            <CarsComponent/>
        </div>
    );
};

export default CarsPage;