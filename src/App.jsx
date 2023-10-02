import {useState} from "react";
import ProductItem from "./components/ProductItem.jsx";
export default function App() {
    const [data, setData] = useState([
        {id: 1, name: 'Велосипед', price: 1000, count: 1},
        {id: 2, name: 'Самокат', price: 700, count: 1},
        {id: 3, name: 'Ролики', price: 1300, count: 2},
        {id: 4, name: 'Сноуборд', price: 19000, count: 4},
    ]);

    const increaseCount = (id) => {
        const newData = data.map(item => {
            if (item.id === id) {
                const newCount = item.count + 1;
                return {
                    ...item,
                    count: newCount <= 25 ? newCount : 25
                };
            }
            return item;
        });
        setData(newData);
    };

    const decreaseCount = (id) => {
        const newData = data.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    count: item.count - 1
                }
            }
            return item;
        }).filter(item => item.count > 0);
        setData(newData);
    };

    const addProduct = () => {
        const name = prompt("Введите название товара") || "untitled";
        const price = prompt("Введите цену товара") || 0;

        const newProduct = {
            id: Date.now(),
            name,
            price,
            count: 1
        };

        setData([...data, newProduct]);
    };

    const removeProduct = (id) => {
        const newData = data.filter(item => item.id !== id);
        setData(newData);
    };
    return (
        <>
            <button onClick={addProduct}>Добавить товар</button>
            <ProductItem data={data} increaseCount={increaseCount} decreaseCount={decreaseCount} removeProduct={removeProduct}/>
        </>
    );
}