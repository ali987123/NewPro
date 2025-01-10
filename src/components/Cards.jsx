const SmallCard = ({ title, description, image }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-cover"
        />
        <div className="p-4">
          <h3 className="text-md font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    );
  };
  
  const Cards = () => {
    const cardData = [
      {
        title: "Card 1",
        description: "Description for card 1.",
        image: "https://images.unsplash.com/photo-1627773755683-dfcf2774596a?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Card 2",
        description: "Description for card 2.",
        image: "https://images.unsplash.com/photo-1627773755683-dfcf2774596a?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Card 3",
        description: "Description for card 3.",
        image: "https://images.unsplash.com/photo-1627773755683-dfcf2774596a?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ];
  
    return (
      // <div className="bg-black-100 min-h-screen py-10">
        <div className="bg-red-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-left mb-8">
          Latest Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-5">
            {cardData.map((card, index) => (
              <SmallCard
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            ))}
          </div>
        </div>
      // </div>
    );
  };
  
  export default Cards;
  