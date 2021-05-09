import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './actions/userActions';
import {
    BrowserRouter,
    // Switch,
    // Route,
    // Link
    Route
} from "react-router-dom";
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SignInCreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
function App() {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
        dispatch(signout());
    };
    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div>
                        <Link className="brand" to="/"></Link>
                    </div>
                    <div>
                        <Link to="/cart">
                            Cart
                                {cartItems.length > 0 && (
                                <span className="badge">{cartItems.length}</span>
                            )}
                        </Link>
                        {/* <Link to="/signin">Sign In</Link> */}
                        {userInfo ? (
                            <div className="dropdown">
                                <Link to="#">
                                    {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                                </Link>
                                <ul className="dropdown-content">
                                    <li>
                                        <Link to="#signout" onClick={signoutHandler}>
                                            Sign Out
                    </Link>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <Link to="/signin">Sign In</Link>
                        )}
                    </div>
                </header>
                <main>
                    <Route path="/cart/:id?" component={CartScreen}></Route>
                    <Route path="/product/:id" component={ProductScreen}></Route>
                    <Route path="/signin" component={SigninScreen}></Route>
                    <Route path="/" component={HomeScreen} exact></Route>
                    <Route path="/shipping" component={ShippingAddressScreen}></Route>
                    <Route path="/register" component={RegisterScreen}></Route>
                    <Route path="/payment" component={PaymentMethodScreen}></Route>
                </main>
                <footer className="row center">All right reserved</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
