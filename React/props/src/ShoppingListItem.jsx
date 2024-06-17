function ShoppingListItem({key, item, quantity, completed}){
    const styles = {color: completed?"green":"red", textDecoration: completed?"line-through":"none"}
    return (
        <li style={styles} key={key}>
            {item} - {quantity}
        </li>
    );
}

// To add propTypes, this ensures whether data entered in props is of the desired type or not:
import PropTypes from 'prop-types';

ShoppingListItem.propTypes = {
    item: PropTypes.string,
    quantity: PropTypes.number,
    completed: PropTypes.bool
};

export default ShoppingListItem;