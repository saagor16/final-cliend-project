import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import UseMenu from "../../../Hooks/UseMenu";

const PopularMenu = () => {
  const [menu]=UseMenu();
  const popular = menu.filter(item => item.category === 'popular');


  return (
    <section className="mb-16">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"Check it out"}
      />
      <div className="gap-10 grid md:grid-cols-2">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-4">
        <button className="btn btn-outline border-0 border-b-4">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
