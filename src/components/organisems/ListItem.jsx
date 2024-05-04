import item1Image from "../../assets/img/1.png";
import item2Image from "../../assets/img/2.png";
import item3Image from "../../assets/img/3.png";
import item4Image from "../../assets/img/4.png";
import item5Image from "../../assets/img/5.png";
import item6Image from "../../assets/img/6.png";
import item7Image from "../../assets/img/7.png";
import item8Image from "../../assets/img/8.png";

export default function ListItem({ onClick }) {
  const itemsInStore = [
    {
      idItem: 1,
      Name: "item Test 1",
      Price: 99.75,
      pictureItem: item1Image,
    },
    {
      idItem: 2,
      Name: "item Test 2",
      Price: 169.05,
      pictureItem: item2Image,
    },
    {
      idItem: 3,
      Name: "item Test 3",
      Price: 99.75,
      pictureItem: item3Image,
    },
    {
      idItem: 4,
      Name: "item Test 4",
      Price: 99.75,
      pictureItem: item4Image,
    },
    {
      idItem: 5,
      Name: "item Test 5",
      Price: 169.05,
      pictureItem: item5Image,
    },
    {
      idItem: 6,
      Name: "item Test 6",
      Price: 99.75,
      pictureItem: item6Image,
    },
    {
      idItem: 7,
      Name: "item Test 7",
      Price: 169.05,
      pictureItem: item7Image,
    },
    {
      idItem: 8,
      Name: "item Test 8",
      Price: 99.75,
      pictureItem: item8Image,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-4">
        {itemsInStore.map((item) => (
          <button key={item.idItem} className="flex-col bg-white pb-4 p-2 text-left mx-1 my-1" onClick={() => onClick(item)}>
            <img src={item.pictureItem} />
            <p className="font-bold">{item.Name}</p>
            <p className="text-[#724b68] font-bold">$ {item.Price}</p>
          </button>
        ))}
      </div>
    </>
  );
}
