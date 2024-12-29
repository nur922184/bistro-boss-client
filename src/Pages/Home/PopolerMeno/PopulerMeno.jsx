
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import Menuitem from '../../Shared/MenuItem/Menuitem';
import useMenu from '../../../Hooks/UesMenu';

const PopulerMeno = () => {

        const [menu] = useMenu(); 
        const popular = menu.filter(item => item.category === "popular")
    // const [menu, setMenu] = useState([])

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === "popular")
    //             setMenu(popularItems)
    //         })
    // }, [])

    return (
        <section className='mb-12'>
            <SectionTitle heading={"Form Our Menu"}
                subHeading={"Popular Items"}></SectionTitle>
            <div className='grid md:grid-cols-2 gap-8 '>
                {
                    popular.map(item => <Menuitem
                        key={item._id} item={item}>
                    </Menuitem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4">Full View Menu</button>
        </section>
    );
};

export default PopulerMeno;