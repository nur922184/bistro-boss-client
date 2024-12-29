import { useState } from 'react';
import order from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/UesMenu';
import FoodCard from '../../../Component/FoodCard/FoodCard';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    const [tabindex, setTabIndex] = useState(0)
    const [menu] = useMenu();
    const {category} = useParams();
    console.log(category)
    const desserts = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")
    const drinks = menu.filter(item => item.category === "drinks")


    return (
        <div>
            <Cover Img={order} title={"Order Food"}></Cover>
            <Tabs defaultIndex={tabindex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;