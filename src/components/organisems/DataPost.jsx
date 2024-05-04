import item1 from "../../assets/img/1.png";
import item2 from "../../assets/img/2.png";
import item3 from "../../assets/img/3.png";
import item4 from "../../assets/img/4.png";
import item5 from "../../assets/img/5.png";
import item6 from "../../assets/img/6.png";
import item7 from "../../assets/img/7.png";
import item8 from "../../assets/img/8.png";

export default function DataPost() {
  const dataMeja = [
    {
      img: item1,
      title: "Corner Desk Left Sit",
      price: "$ 97.75",
    },
    {
      img: item2,
      title: "Corner Desk Left Sit",
      price: "$ 97.75",
    },
    {
      img: item3,
      title: "Corner Desk Left Sit",
      price: "$ 97.75",
    },
    {
      img: item4,
      title: "Corner Desk Left Sit",
      price: "$ 97.75",
    },
    {
      img: item5,
      title: "Corner Desk Left Sit",
      price: "$ 97.75",
    },
    {
      img: item6,
      title: "Corner Desk Left Sit",
      price: "$ 97.75",
    },
    {
      img: item7,
      title: "Corner Desk Left Sit",
      price: "$ 97.75",
    },
    {
      img: item8,
      title: "Corner Desk Left Sit",
      price: "$ 97.75",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-5 place-content-center gap-3">
        {" "}
        {dataMeja.map((elm, i) => {
          return (
            <div className="grid w-full bg-white h-max overflow-hidden" key={i}>
              <img src={elm.img} alt={elm.title} height={100} className="h-auto w-full object-cover" />
              <div className="px-3 py-4 grid gap-2">
                <span className="font-bold text-md">{elm.title}</span>
                <span className="font-bold font-sm text-red-800">{elm.price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
