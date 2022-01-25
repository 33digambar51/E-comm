// import logo from './logo.svg';
import './App.css';
// import Routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import components
import Header from './Components/Header';
import { Footer } from './Components/Footer';
import Register from './Components/Register';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Home from './Components/Home';
import AddProduct from './Components/AddProduct';
import PageNotFound from './Components/PageNotFound';
import UserProfile from './Components/UserProfile';
import Setting from './Components/Setting';
import My_Orders from './Components/My_Order';
import {All_Product} from './Components/All_Products';
import Product_Detail from './Components/Product_Detail';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import {My_Account} from './Components/My_Account';
import TodoList from './Components/TodoList';
import SearchProduct from './Components/SearchProduct'
// Protect Components
import Protected from './Components/Protected';

// Admin Area file
import Alogin from "./Components/Admin/A_Login";
import Aregister from './Components/Admin/A_Register';
import Index from './Components/Admin/Index';
//import AdminHeader from './Components/Admin/Admin_Header';
import Add_Product from './Components/Admin/Add_Product';
import Product_List from './Components/Admin/Product_List';
import Update_Product from './Components/Admin/Update_Product';
import Add_Category from './Components/Admin/Add_Category';
import Cat_List from './Components/Admin/Cat_List';
import Add_Brand from './Components/Admin/Add_Brand';
import Brand_List from './Components/Admin/Brand_List';
import Admin_Profile from './Components/Admin/Profile';
import Update_Category from './Components/Admin/Update_Category';
import Payment from './Components/Admin/Payment';
import Orders from './Components/Admin/Orders';
import Users_List from './Components/Admin/Users_List';
import Update_Brand from './Components/Admin/Update_Brand';
import Admin_Logout from './Components/Admin/Admin_Logout';
import Admin_Protected from './Components/Admin/Admin_Protected';
// Main Component
function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/register"><Register/></Route>
          <Route path="/all_product"><Protected cmp={All_Product}/></Route>
          <Route path="/cart"><Protected cmp={Cart}/></Route>
          <Route path="/login"><Login/></Route>
          <Route path="/logout"><Logout/></Route>
          <Route path="/profile/:id"><UserProfile/></Route>
          <Route path="/setting/:id"><Setting/></Route>
          <Route path="/my_order/:id"><My_Orders/></Route>
          <Route path="/product_detail/:id"><Product_Detail/></Route>
          <Route path="/checkout"><Protected cmp={Checkout}/></Route>
          <Route path="/my_account"><Protected cmp={My_Account}/></Route>
          <Route path="/todo_list"><TodoList/></Route>
          <Route path="/search_product"><SearchProduct/></Route>

          {/* Admin routing start */}

          <Route path="/admin"><Alogin/></Route>
          <Route path="/aregister"><Aregister/></Route>
          <Route path="/index"><Admin_Protected cmp={Index}/></Route>
          <Route path="/add_product"><Admin_Protected cmp={Add_Product}/></Route>
          <Route path="/product_list"><Admin_Protected cmp={Product_List}/></Route>
          <Route path="/update_product/:id"><Update_Product/></Route>
          <Route path="/add_category"><Add_Category/></Route>
          <Route path="/cat_list"><Cat_List/></Route>
          <Route path="/add_brand"><Add_Brand/></Route>
          <Route path="/brand_list"><Brand_List/></Route>
          <Route path="/profilee/:id"><Admin_Profile/></Route>
          <Route path="/update_category/:id"><Update_Category/></Route>
          <Route path="/payment"><Payment/></Route>
          <Route path="/orders"><Orders/></Route>
          <Route path="/users_list"><Users_List/></Route>
          <Route path="/update_brand/:id"><Update_Brand/></Route>
          <Route path="/logoutt"><Admin_Logout/></Route>

          <Route path="*"><PageNotFound/></Route>
        </Switch>
      </Router>

      <Footer/>
    </>
  );
}

export default App;
