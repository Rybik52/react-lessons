import PropTypes from "prop-types";
export default function ProductItem(props) {
    const { data, increaseCount, decreaseCount, removeProduct } = props
    const handleDecreaseClick = (e, id) => {
        e.stopPropagation();
        decreaseCount(id);
    };

    const handleIncreaseClick = (e, id) => {
        e.stopPropagation();
        increaseCount(id);
    };

    const handleDoubleClick = (e, id) => {
        e.stopPropagation();
        removeProduct(id);
    };

    return (
        <div className={"cards-wrapper"}>
            {data.map(item =>
                <div className={"card"} key={item.id} onDoubleClick={(e) => handleDoubleClick(e, item.id)}>
                    <h4>{item.name}</h4>
                    <span>{item.price} деняг.</span>
                    <div className="card__nav">
                        <span onClick={(e) => handleDecreaseClick(e, item.id)}>-</span>
                        <span>Кол-во: <strong>{item.count}</strong></span>
                        <span onClick={(e) => handleIncreaseClick(e, item.id)}>+</span>
                    </div>
                </div>
            )}
        </div>
    );
}

ProductItem.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
    })).isRequired,
    increaseCount: PropTypes.func.isRequired,
    decreaseCount: PropTypes.func.isRequired,
    removeProduct: PropTypes.func.isRequired,
};