import { useEffect, useState } from "react";
import { DashboardCard } from "./components/DashboardCart"; // Ensure correct spelling in imports
import { DashboardEmpty } from "./components/DashboardEmpty";

export const DashboardPage = () => {
    const [orders, setOrders] = useState([]); // Keep this as an empty array
    const token = JSON.parse(sessionStorage.getItem("token"));

    useEffect(() => {
        async function fetchOrders() {
            const response = await fetch(`http://localhost:8000/660/orders?user.id=1`, {
                method: "GET",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
            });
            const data = await response.json();

            // Check if data is an array before setting state
            if (Array.isArray(data)) {
                setOrders(data); // Only set orders if data is an array
            } else {
                console.error("Fetched data is not an array:", data); // Debug log
                setOrders([]); // Reset to an empty array if it's not an array
            }
        }
        fetchOrders();
    }, [token]); // Ensure to include token in dependencies

    return (
        <main>
            <section>
                <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
            </section>
            <section>
                {Array.isArray(orders) && orders.length > 0 ? (
                    orders.map((order) => (
                        <DashboardCard key={order.id} order={order} />
                    ))
                ) : (
                    <DashboardEmpty />
                )}
            </section>
        </main>
    );
};
