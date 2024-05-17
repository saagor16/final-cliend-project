const FoodCard = ({item}) => {
    const {name,image,price,recipe}=item;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="absolute right-0 px-4 bg-slate-900 mr-4 mt-4 text-white">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline bg-gray-100 border-0 border-b-4 mt-4 border-orange-400">Add TO Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
