import Cards from "../Components/Cards";
import { connect } from "react-redux";
import { addToCart, removeToCart } from "../Redux/Actions/action";

const mapStateToProps = (state) => ({
  data: state.cardItems,
});
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  
});
export default connect(mapStateToProps, mapDispatchToProps)(Cards);
