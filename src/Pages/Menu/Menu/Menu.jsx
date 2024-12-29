import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'

const Menu = () => {

    

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover Img={menuImg} title={"Our Menu"}></Cover>
          
        </div>
    );
};

export default Menu;