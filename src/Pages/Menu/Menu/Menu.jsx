import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import DessertImg from '../../../assets/menu/dessert-bg.jpeg'
import PizzaImg from '../../../assets/menu/pizza-bg.jpg'
import SaladImg from '../../../assets/menu/salad-bg.jpg'
import soupimg from '../../../assets/menu//soup-bg.jpg'
import useMenu from '../../../Hooks/UesMenu';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {

    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")
    const offered = menu.filter(item => item.category === "offered")



    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover Img={menuImg} title={"Our Menu"}></Cover>
            {/* main cover */}
            <SectionTitle subHeading={"Don't miss"} heading={"Today's Offer"}></SectionTitle>
            {/* offered */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={desserts}
            title="dessert"
            img={DessertImg}
            ></MenuCategory>
            {/* pizz menu items */}
            <MenuCategory items={pizza}
            title="pizza"
            img={PizzaImg}
            ></MenuCategory>
            {/* pizz menu items */}
            <MenuCategory items={salad}
            title="salad"
            img={SaladImg}
            ></MenuCategory>
            {/* soup menu items */}
            <MenuCategory items={soup}
            title="soup"
            img={soupimg}
            ></MenuCategory>

        </div>
    );
};

export default Menu;