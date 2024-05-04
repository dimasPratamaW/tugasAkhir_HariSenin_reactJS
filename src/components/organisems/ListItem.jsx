
import { useEffect, useState } from 'react';

const itemsInStore = [
    {
        idItem: 1,
        Name: "item Test 1",
        Price: 99.75,
        pictureItem: "../../assets/1.png"
    },
    {
        idItem: 2,
        Name: "item Test 2",
        Price: 169.05
    },
    {
        idItem: 3,
        Name: "item Test 3",
        Price: 99.75
    },
    {
        idItem: 4,
        Name: "item Test 4",
        Price: 99.75
    },
    {
        idItem: 5,
        Name: "item Test 5",
        Price: 169.05
    },
    {
        idItem: 6,
        Name: "item Test 6",
        Price: 99.75
    },
    {
        idItem: 7,
        Name: "item Test 7",
        Price: 169.05
    },
    {
        idItem: 8,
        Name: "item Test 8",
        Price: 99.75
    },
];

export default function ListItem() {
    const [listItemChoosen, setItemsChoose] = useState([]);

    function onClick(item) {
        // Check if the item's id is already in the list
        if (!listItemChoosen.some((chosenItem) => chosenItem.idItem === item.idItem)) {
            // If not, add the item to the list
            setItemsChoose([...listItemChoosen, item]);
        }
    }
    // for testing the listitemchosen have been updated
    // useEffect(() => {
    //     console.log(listItemChoosen);
    // }, [listItemChoosen]);
    return (
        <>
            <div>
                {
                    itemsInStore.map((item) => (
                        <button key={item.idItem} className="flex-col bg-white p-2 text-left mx-1 my-1" onClick={() => onClick(item)}>
                            <img className="" src={item.pictureItem} alt="" />
                            <p className="font-bold">{item.Name}</p>
                            <p className="text-[#724b68] font-bold">$ {item.Price}</p>
                        </button>
                    ))
                }
            </div>
        </>
    );
}