import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import UseMenu from "../../../Hooks/UseMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
  const [menu]=UseMenu();
  const dessert = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const offered = menu.filter(item => item.category === 'offered');

  return (
    <div>
      <Helmet>
        <title>Bistro Boss Menu</title>
      </Helmet>
      <Cover img={menuImg} title='Our Menu'></Cover>
      <SectionTitle subHeading="do not miss" heading="today offer"></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory items={dessert} img={dessertImg} title='dessert'></MenuCategory>
      <MenuCategory items={pizza} img={pizzaImg} title='pizza'></MenuCategory>
      <MenuCategory items={salad} img={saladImg} title='salad'></MenuCategory>
      <MenuCategory items={soup} img={soupImg} title='soup'></MenuCategory>

      
    </div>
  );
};

export default Menu;
