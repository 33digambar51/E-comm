import AdminHeader from "./Admin_Header";
import LeftSidebar from "./Left_Sidebar";
import Footer from "./Admin_Footer";

const Payment = () => {
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
                                        <h2 className="text-center mb-4">User's Payment List</h2>
                                    </div>
                                    <div className="table-responsive text-center">
                                        <table class="table table-bordered table-sm text-center mt-4">
                                            <thead>
                                                <tr>
                                                    <th>Id/Order No.</th>
                                                    <th>Due Ammount</th>
                                                    <th>Invoice No</th>
                                                    <th>Toatal Products</th>
                                                    <th>Order Date</th>
                                                    <th>Paid/Unpaid</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>17000</td>
                                                    <td>87376587674</td>
                                                    <td>4</td>
                                                    <td>25 Aug, 2021</td>
                                                    <td>Unpaid</td>
                                                    <td>Pending</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>17000</td>
                                                    <td>87376587674</td>
                                                    <td>4</td>
                                                    <td>25 Aug, 2021</td>
                                                    <td>Unpaid</td>
                                                    <td>Pending</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>17000</td>
                                                    <td>87376587674</td>
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
                        {/* <admin-footer></admin-footer> */}
                        <Footer />
                    </div>
                </div>
            </section>
        </>
    );
}
export default Payment;