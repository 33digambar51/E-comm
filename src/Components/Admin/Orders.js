import AdminHeader from "./Admin_Header";
import LeftSidebar from "./Left_Sidebar";
import Footer from "./Admin_Footer";

const Orders = () => {
    return (
        <>
            <section className="common-c admin-section">
                <div class="d-flex w-100 align-items-stretch wrapper" style={{ backgroundColor: "#f7f9f7" }}>
                    {/* <Admin-left-sidebar></Admin-left-sidebar> */}
                    <LeftSidebar />
                    {/* Page Content */}
                    <div id="content" class="position-relative">
                        {/* <Admin-header></Admin-header> */}
                        <AdminHeader />
                        <div id="center-content" class="position-absolute">
                            <div class="container-fluid">
                                <div class="row">
                                    <div className="col-sm-12">
                                        <h2 className="text-center mb-4">Orders List</h2>
                                        <div className="table-responsive text-center">
                                            <table class="table table-bordered table-sm text-center mt-4">
                                                <thead>
                                                    <tr>
                                                        <th>Id/Order No.</th>
                                                        <th>Ammount</th>
                                                        <th>Product Name</th>
                                                        <th>Toatal Products</th>
                                                        <th>Order Date</th>
                                                        <th>Paid/Unpaid</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>47000</td>
                                                        <td>Dell Laptop X305</td>
                                                        <td>4</td>
                                                        <td>25 Aug, 2021</td>
                                                        <td>Unpaid</td>
                                                        <td>Pending</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>36000</td>
                                                        <td>Titan</td>
                                                        <td>4</td>
                                                        <td>25 Aug, 2021</td>
                                                        <td>Unpaid</td>
                                                        <td>Pending</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>47000</td>
                                                        <td>Apple 12</td>
                                                        <td>4</td>
                                                        <td>25 Aug, 2021</td>
                                                        <td>Unpaid</td>
                                                        <td>Pending</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <admin-footer></admin-footer> */}
                        <Footer />
                    </div>
                </div>
            </section>
        </>
    );
}
export default Orders;