import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import Menuitem from '../../Shared/MenuItem/Menuitem';

const PopulerMeno = () => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item=>item.category === "popular")
                setMenu(popularItems)
            })
    }, [])

    return (
        <section className='mb-12'>
            <SectionTitle heading={"Form Our Menu"}
                subHeading={"Popular Items"}></SectionTitle>
            <div className='grid md:grid-cols-2 gap-8 '>
                {
                    menu.map(item => <Menuitem
                        key={item._id} item={item}>
                    </Menuitem>)
                }
            </div>
        </section>
    );
};

export default PopulerMeno;