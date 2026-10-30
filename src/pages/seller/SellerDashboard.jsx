
import { useNavigate, Link } from "react-router-dom";
import {
  FaHome,
  FaBox,
  FaPlus,
  FaShoppingBag,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
  FaStore,
  FaBell,
  FaSearch,
  FaUserCircle,
  FaArrowUp,
  FaEllipsisH,
} from "react-icons/fa";

function SellerDashboard() {
  const navigate = useNavigate();

  // Get seller information
  const seller = JSON.parse(localStorage.getItem("seller") || "null");

  const handleLogout = () => {
    localStorage.removeItem("seller");
    navigate("/seller/register");
  };

  if (!seller) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="rounded-xl bg-white p-8 text-center shadow">
          <h2 className="text-xl font-bold">Seller account not found</h2>
          <button
            onClick={() => navigate("/seller/register")}
            className="mt-4 rounded-lg bg-green-700 px-5 py-2 text-white"
          >
            Register as Seller
          </button>
        </div>
      </div>
    );
  }

  const stats = [
    {
      title: "Total Revenue",
      value: "LKR 125,500",
      change: "+12.5%",
      icon: <FaChartLine />,
    },
    {
      title: "Total Orders",
      value: "128",
      change: "+8.2%",
      icon: <FaShoppingBag />,
    },
    {
      title: "Total Products",
      value: "42",
      change: "+4.5%",
      icon: <FaBox />,
    },
    {
      title: "Pending Orders",
      value: "08",
      change: "Need attention",
      icon: <FaBell />,
    },
  ];

  const orders = [
    {
      id: "#VD-1025",
      customer: "Kasun Perera",
      product: "Wireless Headphones",
      date: "Oct 29, 2026",
      amount: "LKR 4,500",
      status: "Pending",
    },
    {
      id: "#VD-1024",
      customer: "Nimal Silva",
      product: "Smart Watch",
      date: "Oct 28, 2026",
      amount: "LKR 8,500",
      status: "Delivered",
    },
    {
      id: "#VD-1023",
      customer: "Amaya Fernando",
      product: "Travel Backpack",
      date: "Oct 27, 2026",
      amount: "LKR 3,200",
      status: "Processing",
    },
    {
      id: "#VD-1022",
      customer: "Ruwan Jayasuriya",
      product: "Bluetooth Speaker",
      date: "Oct 26, 2026",
      amount: "LKR 5,900",
      status: "Delivered",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="hidden w-64 shrink-0 flex-col bg-gray-900 text-white md:flex">

        <div className="flex h-20 items-center gap-3 border-b border-gray-700 px-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
            <FaStore className="text-xl" />
          </div>

          <div>
            <h1 className="text-xl font-bold">Vendora</h1>
            <p className="text-xs text-gray-400">Seller Center</p>
          </div>
        </div>

        <div className="px-5 py-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Main Menu
          </p>

          <nav className="space-y-2">

            <Link
              to="/seller/dashboard"
              className="flex items-center gap-3 rounded-lg bg-green-700 px-4 py-3 text-sm font-medium"
            >
              <FaHome />
              Dashboard
            </Link>

            <Link
              to="/seller/products"
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-300 transition hover:bg-gray-800"
            >
              <FaBox />
              My Products
            </Link>

            <Link
              to="/seller/products/new"
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-300 transition hover:bg-gray-800"
            >
              <FaPlus />
              Add Product
            </Link>

            <Link
              to="/seller/orders"
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-300 transition hover:bg-gray-800"
            >
              <FaShoppingBag />
              Orders
            </Link>

            <Link
              to="/seller/analytics"
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-300 transition hover:bg-gray-800"
            >
              <FaChartLine />
              Analytics
            </Link>

          </nav>

          <p className="mb-4 mt-10 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Account
          </p>

          <nav className="space-y-2">
            <Link
              to="/seller/settings"
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-300 transition hover:bg-gray-800"
            >
              <FaCog />
              Settings
            </Link>

            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-red-400 transition hover:bg-gray-800"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </nav>
        </div>

        {/* SELLER PROFILE */}
        <div className="mt-auto border-t border-gray-700 p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-700 font-bold">
              {seller.name?.charAt(0).toUpperCase()}
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">{seller.name}</p>
              <p className="truncate text-xs text-gray-400">Seller Account</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="min-w-0 flex-1">

        {/* TOP NAVBAR */}
        <header className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-8">

          <div>
            <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
              Dashboard
            </h2>
            <p className="hidden text-xs text-gray-500 sm:block">
              Manage your online store
            </p>
          </div>

          <div className="flex items-center gap-4">

            <button className="relative rounded-full bg-gray-100 p-3 text-gray-600 hover:bg-gray-200">
              <FaBell />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
            </button>

            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-700">
                <FaUserCircle className="text-xl" />
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-gray-800">
                  {seller.name}
                </p>
                <p className="text-xs text-gray-500">{seller.district}</p>
              </div>
            </div>

          </div>
        </header>

        {/* DASHBOARD BODY */}
        <div className="space-y-8 p-4 sm:p-8">

          {/* WELCOME SECTION */}
          <section className="flex flex-col justify-between gap-4 rounded-2xl bg-gray-900 p-6 text-white sm:flex-row sm:items-center sm:p-8">

            <div>
              <p className="text-sm text-green-400">Seller Overview</p>

              <h1 className="mt-2 text-2xl font-bold sm:text-3xl">
                Welcome back, {seller.name}!
              </h1>

              <p className="mt-2 text-sm text-gray-300">
                Here's what's happening with your shop today.
              </p>

              <p className="mt-3 text-sm font-medium text-green-300">
                <FaStore className="mr-2 inline" />
                {seller.shopName}
              </p>
            </div>

            <Link
              to="/seller/products/new"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              <FaPlus />
              Add New Product
            </Link>

          </section>

          {/* STATISTICS */}
          <section>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">
                Store Performance
              </h2>

              <span className="text-xs text-gray-500">Demo statistics</span>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">{stat.title}</p>

                    <div className="rounded-lg bg-green-50 p-3 text-green-700">
                      {stat.icon}
                    </div>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-gray-900">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-xs text-green-600">
                    <FaArrowUp className="mr-1 inline" />
                    {stat.change}
                  </p>
                </div>
              ))}

            </div>
          </section>

          {/* CHART AND QUICK ACTIONS */}
          <section className="grid grid-cols-1 gap-5 xl:grid-cols-3">

            {/* SALES CHART */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm xl:col-span-2">

              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-gray-900">Sales Overview</h2>
                  <p className="mt-1 text-xs text-gray-500">
                    Monthly revenue performance
                  </p>
                </div>

                <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-600">
                  This Year
                </button>
              </div>

              <div className="mt-8 flex h-48 items-end justify-between gap-3 border-b border-l border-gray-200 px-2">

                {[35, 55, 40, 75, 60, 90, 65, 80, 50, 95, 70, 85].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex h-full flex-1 items-end"
                    >
                      <div
                        style={{ height: `${height}%` }}
                        className="w-full rounded-t-md bg-green-600 transition hover:bg-green-800"
                      ></div>
                    </div>
                  )
                )}

              </div>

              <div className="mt-3 flex justify-between text-xs text-gray-500">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
                  (month) => (
                    <span key={month}>{month}</span>
                  )
                )}
              </div>

            </div>

            {/* QUICK ACTIONS */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

              <h2 className="font-bold text-gray-900">Quick Actions</h2>
              <p className="mt-1 text-xs text-gray-500">
                Manage your store easily
              </p>

              <div className="mt-6 space-y-3">

                <Link
                  to="/seller/products/new"
                  className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 transition hover:border-green-500 hover:bg-green-50"
                >
                  <div className="rounded-lg bg-green-100 p-3 text-green-700">
                    <FaPlus />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      Add Product
                    </p>
                    <p className="text-xs text-gray-500">
                      List a new product
                    </p>
                  </div>
                </Link>

                <Link
                  to="/seller/products"
                  className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 transition hover:border-green-500 hover:bg-green-50"
                >
                  <div className="rounded-lg bg-blue-100 p-3 text-blue-700">
                    <FaBox />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      My Products
                    </p>
                    <p className="text-xs text-gray-500">
                      Manage your listings
                    </p>
                  </div>
                </Link>

                <Link
                  to="/seller/orders"
                  className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 transition hover:border-green-500 hover:bg-green-50"
                >
                  <div className="rounded-lg bg-purple-100 p-3 text-purple-700">
                    <FaShoppingBag />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      View Orders
                    </p>
                    <p className="text-xs text-gray-500">
                      Check customer orders
                    </p>
                  </div>
                </Link>

              </div>
            </div>

          </section>

          {/* RECENT ORDERS */}
          <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

            <div className="flex items-center justify-between border-b border-gray-200 p-5">
              <div>
                <h2 className="font-bold text-gray-900">Recent Orders</h2>
                <p className="mt-1 text-xs text-gray-500">
                  Latest customer purchases
                </p>
              </div>

              <Link
                to="/seller/orders"
                className="text-sm font-semibold text-green-700 hover:text-green-900"
              >
                View All
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-left text-sm">

                <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                  <tr>
                    <th className="px-5 py-4">Order ID</th>
                    <th className="px-5 py-4">Customer</th>
                    <th className="px-5 py-4">Product</th>
                    <th className="px-5 py-4">Date</th>
                    <th className="px-5 py-4">Amount</th>
                    <th className="px-5 py-4">Status</th>
                    <th className="px-5 py-4">Action</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">

                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">

                      <td className="px-5 py-4 font-semibold text-gray-800">
                        {order.id}
                      </td>

                      <td className="px-5 py-4 text-gray-600">
                        {order.customer}
                      </td>

                      <td className="px-5 py-4 text-gray-600">
                        {order.product}
                      </td>

                      <td className="px-5 py-4 text-gray-500">
                        {order.date}
                      </td>

                      <td className="px-5 py-4 font-semibold text-gray-800">
                        {order.amount}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            order.status === "Delivered"
                              ? "bg-green-100 text-green-700"
                              : order.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>

                      <td className="px-5 py-4">
                        <button className="text-gray-500 hover:text-gray-900">
                          <FaEllipsisH />
                        </button>
                      </td>

                    </tr>
                  ))}

                </tbody>
              </table>
            </div>

          </section>

          {/* FOOTER */}
          <footer className="pb-4 text-center text-xs text-gray-400">
            © 2026 Vendora Seller Center. All rights reserved.
          </footer>

        </div>
      </main>
    </div>
  );
}

export default SellerDashboard;
