import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";



const weeklyData = [
    { name: "Mon", food: 50 },
    { name: "Tue", food: 80 },
    { name: "Wed", food: 60 },
    { name: "Thu", food: 110 },
    { name: "Fri", food: 90 },
    { name: "Sat", food: 120 },
    { name: "Sun", food: 70 },
];

const monthlyData = [
    { name: "Week 1", food: 350 },
    { name: "Week 2", food: 420 },
    { name: "Week 3", food: 390 },
    { name: "Week 4", food: 470 },
];

const yearlyData = [
    { name: "Jan", food: 1.5 },
    { name: "Feb", food: 1.2 },
    { name: "Mar", food: 1.3 },
    { name: "Apr", food: 1.4 },
    { name: "May", food: 1.6 },
    { name: "Jun", food: 1.7 },
    { name: "Jul", food: 1.8 },
    { name: "Aug", food: 1.75 },
    { name: "Sep", food: 1.65 },
    { name: "Oct", food: 1.5 },
    { name: "Nov", food: 1.4 },
    { name: "Dec", food: 1.55 },
];

const DonationChart = () => {
    const [filter, setFilter] = useState("Month");
    const Time = ["Week", "Month", "Year"]

    const data = filter === "Week" ? weeklyData : filter === "Month" ? monthlyData : yearlyData;

    return (
        <div className="bg-white p-4 rounded-xl w-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-lg">Food Donation Statistics</h2>
                <span className="text-gray-500">Total Food Donated ({filter === "Year" ? "Tons" : filter === "Month" ? "Meals" : "Kg"})</span>
            </div>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} margin={{ top: 20, right: 20, left: -10, bottom: 10 }}>
                    <XAxis dataKey="name" tick={{ fill: "#555" }} />
                    <YAxis tick={{ fill: "#555" }} />
                    {/* <Tooltip /> */}
                    <Tooltip/>
                    <Legend /> 
                    <Bar dataKey="food" fill="#6366F1" stroke="none" radius={[5, 5, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>

            <div className="flex justify-center gap-2 mt-4">
                {Time.map((item) => (
              
               
                    <button
                        key={item}
                        type="default"
                        className={` w-[100px] h-[40px] rounded-md ${filter === item
                            ? "bg-[#6366F1] text-white hover:bg-[#6366F1] hover:text-white !important"
                            : "border-[#6366f1] border-2 hover:border-[#6366f1] !important"
                        }`}
                        onClick={() => setFilter(item)}
                    >
                        {item}
                    </button>
               
               
               ))}
            </div>
        </div>
    );
};

export default DonationChart;
