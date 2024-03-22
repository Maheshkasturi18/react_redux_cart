import Cart from "../Components/Cart";
import { connect } from "react-redux";
import { removeToCart } from "../Redux/Actions/action";

const mapStateToProps = (state) => ({
  data: state.cardItems,
});
const mapDispatchToProps = (dispatch) => ({
  removeToCartHandler: (data) => dispatch(removeToCart(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
