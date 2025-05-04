import React, { useRef, useState } from 'react';
import coxsbazarImg from "../assets/icons/Rectangle 1.png"
import sreemangalImg from "../assets/icons/Sreemongol.png"
import sundorbonImg from "../assets/icons/sundorbon.png"
import sajekImg from "../assets/icons/Sajek.png"
import { NavLink } from 'react-router';


const Categories = () => {
    
    const carouselRef = useRef(null);

    const scrollLeft = () => {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };
  
    const scrollRight = () => {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    const destinations = [
      {
        id: 1,
        title: "Cox's Bazar",
        description:
          "Cox's Bazar is home to the world's longest natural sea beach, stretching over 120 kilometers along the southeastern coast of Bangladesh. Known for its golden sands, vibrant beach life, and scenic views of the Bay of Bengal, it attracts millions of local and international tourists each year.",
        img: coxsbazarImg,
      },
      {
        id: 2,
        title: "Sreemangal",
        description:
          "Sreemangal is widely known as the tea capital of Bangladesh. The area is famous for its lush green tea gardens, Lawachara National Park, and the unique seven-layer tea. It's a peaceful retreat for nature lovers.",
        img: sreemangalImg,
      },
      {
        id: 3,
        title: "Sundarbans",
        description:
          "The Sundarbans is the world's largest mangrove forest and a UNESCO World Heritage Site. It is home to the Royal Bengal Tiger and many unique wildlife species, with a rich network of rivers and creeks.",
        img: sundorbonImg,
      },
      {
        id: 4,
        title: "Sajek",
        description:
          "Sajek Valley, located in Rangamati, is known for its breathtaking hills, floating clouds, and scenic views. Popular for sunrises and indigenous culture, it’s often called the Queen of Hills in Bangladesh.",
        img: sajekImg,
      },
    ];

    const [selected, setSelected] = useState(destinations[0]);
  
return (
    <div>
       <div className="flex flex-col md:flex-row  justify-between  md:items-center gap-8">
      {/* Left: Info Section */}
      <div className="max-w-md space-y-2 p-4 border rounded-lg shadow-md text-[#ffffff]">
        <h2 className="text-2xl font-bold">{selected.title}</h2>
        <p className="text-[#ffffff] text-base">{selected.description}</p>
      </div>

      {/* Right: Carousel */}
      <div>
        <div
          ref={carouselRef}
          className="carousel carousel-left rounded-box w-[400px] space-x-8 p-4 scroll-smooth overflow-x-auto"
        >
          {destinations.map((place) => (
            <div
              key={place.id}
              className="carousel-item w-2/3 relative cursor-pointer"
              onClick={() => setSelected(place)}
            >
              <img
                src={place.img}
                className="rounded-box w-full hover:border-4 border-blue-400"
                alt={place.title}
              />
               {/* Overlay Title */}
               <div className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-50 text-white text-center py-1 rounded opacity-0 group-hover:opacity-100 transition">
                {place.title}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="mt-5 flex gap-3 justify-center">
          <button onClick={scrollLeft} className="btn btn-circle">
            ❮
          </button>
          <button onClick={scrollRight} className="btn btn-circle">
            ❯
          </button>
        </div>
      </div>
    </div>
    </div>
);
};

export default Categories;