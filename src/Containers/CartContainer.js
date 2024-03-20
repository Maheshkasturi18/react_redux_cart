import Cart from "../Components/Cart";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  data: state.cardItems,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);