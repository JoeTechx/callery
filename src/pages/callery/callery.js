import Footer from "../../Component/footer/footer";
// import Gallery from "../../Component/gallery/gallery";
import Nav from "../../Component/nav/nav";
import { Droppable, DragDropContext, Draggable } from "react-beautiful-dnd";
import "./callery.css";
import { useState, forwardRef, useRef} from "react";
import { AiOutlineSearch } from "react-icons/ai";
// import Card from "../../UI/card";
// forwardRef((props, ref)
const Callery = forwardRef((props, ref) => {
  const Toyota1 = require("../../Assets/supra1.jpg");
  const Toyota2 = require("../../Assets/supra2.jpeg");
  const Toyota3 = require("../../Assets/supra3.jpg");
  const Toyota4 = require("../../Assets/Toyota-GR-Supra.jpg");
  const Toyota5 = require("../../Assets/supra5.jpg");

  const NissanGtr1 = require("../../Assets/nissangtr1.jpg");
  const NissanGtr2 = require("../../Assets/nissangtr2.jpg");

  const Tesla = require("../../Assets/tesla.jpg");

  const Ferrari = require("../../Assets/ferrari.jpg");
  const Ferrari1 = require("../../Assets/ferrari.jpeg");
  const Ferrari2 = require("../../Assets/ferrari1.jpg");
  const Ferrari_Monze_SP2 = require("../../Assets/Ferrari_Monza_SP2.jpg");

  const Arudi_Abt = require("../../Assets/Arudi Abt.jpg");
  const arudi1 = require("../../Assets/arudi1.jpeg");

  const Black_BMW_car = require("../../Assets/Black_BMW_Car.jpg");
  const bmw_f82 = require("../../Assets/bmw-f82.jpg");

  const Black_lamboorghini_aventador = require("../../Assets/black_lamborghini_aventador_4k_hd.jpg");

  const HondaSport = require("../../Assets/Honda.jpg");

  const Acura_NSX = require("../../Assets/Acura_NSX.jpeg");
  const Acura1 = require("../../Assets/Acura1.jpg");

  const images = [
    {
      id: 0,
      image: Toyota1,
      Tag: "Toyota Supra mk4",
    },
    {
      id: 1,
      image: Toyota2,
      Tag: "Toyota Supra mk4",
    },
    {
      id: 2,
      image: Toyota3,
      Tag: "Toyota Supra mk4",
    },
    {
      id: 3,
      image: Toyota4,
      Tag: "Toyota Supra mk4",
    },
    {
      id: 4,
      image: Toyota5,
      Tag: "Toyota Supra",
    },
    {
      id: 5,
      image: NissanGtr1,
      Tag: "Nissan Gtr skyline",
    },
    {
      id: 6,
      image: NissanGtr2,
      Tag: "Nissan Gtr skyline",
    },
    {
      id: 7,
      image: Tesla,
      Tag: "Tesla",
    },
    {
      id: 8,
      image: Ferrari,
      Tag: "Ferrari",
    },
    {
      id: 9,
      image: Ferrari1,
      Tag: "Ferrari",
    },
    {
      id: 10,
      image: Ferrari2,
      Tag: "Ferrari",
    },
    {
      id: 11,
      image: Ferrari_Monze_SP2,
      Tag: "Ferrari Monze SP2",
    },
    {
      id: 12,
      image: Arudi_Abt,
      Tag: "Arudi Abt",
    },
    {
      id: 13,
      image: arudi1,
      Tag: "Arudi",
    },
    {
      id: 14,
      image: Black_BMW_car,
      Tag: "Black BMW car",
    },
    {
      id: 15,
      image: bmw_f82,
      Tag: "bmw f82",
    },
    {
      id: 16,
      image: Black_lamboorghini_aventador,
      Tag: "Black lamboorghini aventador",
    },
    {
      id: 17,
      image: HondaSport,
      Tag: "HondaSport",
    },
    {
      id: 18,
      image: Acura_NSX,
      Tag: "Acura NSX",
    },
    {
      id: 19,
      image: Acura1,
      Tag: "Acura",
    },
  ];

  const [data, setData] = useState(images);

  const handleDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) 
      return;
    const items = Array.from(data);
    const [reorderData] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderData);
    setData(items);
  }

  const [term, setTerm] = useState("");
  // console.log(images.filter(image => image.Tag.toLowerCase().includes(term)));



  return (
    <>
      <Nav />

      <form>
            <input
              onChange={(e) => setTerm(e.target.value)}
              type="search"
              id="gsearch"
              name="gsearch"
              placeholder="Which car do want to see?"
            />
            <AiOutlineSearch className="search_icon" />
          </form>
      <section className="galleries">
        <DragDropContext   onDragEnd={handleDragEnd}>
          <Droppable droppableId="div">
            {(provided, snapshot) => (
              <div
                className="container galleries_container"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {data &&
                  data.filter(image => image.Tag.toLowerCase().includes(term)).map((item, index) => {
                    return (
                      <Draggable
                        key={item.id}
                        draggableId={item.id.toString()}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            style={{ backgroundColor:snapshot.isDraggingOver ? 'blue' : 'grey' }}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className=" card gallery"
                          >
                            <div className="gallery_img">
                              <img src={item.image} alt={item.Tag} />
                            </div>
                            <div className="gallery_tag">
                              <h3>{item.Tag}</h3>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
              {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </section>
      {/* <section className="galleries">
        <div className="container galleries_container">
          <DragDropContext>
            <Droppable droppableId="images">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {images.map(({ id, image, Tag }) => {
                    return (
                      <Draggable key={id} draggableId={id.toString()}>
                        {(provided) => (
                          <Gallery
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            image={image}
                            Tag={Tag}
                          />
                        )}
                      </Draggable>
                    );
                  })}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </section> */}

      <Footer />
    </>
  );
});

export default Callery;
