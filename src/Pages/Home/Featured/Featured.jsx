import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './featured.css'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        heading={"Featured Item"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pt-12 pb-20 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2024</p>
          <p className="uppercase">WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            dignissimos doloremque natus illum soluta accusantium dicta
            adipisci, pariatur delectus inventore praesentium facilis unde
            tenetur magni culpa itaque non, consequuntur architecto aperiam nemo
            odit cupiditate iusto excepturi. Mollitia laborum cupiditate ut,
            laudantium rerum officiis molestias molestiae dolore eaque omnis.
            Saepe, nihil?
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4" >Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
