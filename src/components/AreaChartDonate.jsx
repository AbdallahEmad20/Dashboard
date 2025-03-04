import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { name: "Cairo", donations: 120 },
    { name: "Alexandria", donations: 85 },
    { name: "Giza", donations: 70 },
    { name: "Mansoura", donations: 50 },
    { name: "Tanta", donations: 40 },
    { name: "Suez", donations: 30 },
    { name: "Aswan", donations: 25 },
    { name: "Luxor", donations: 20 },
];

const AreaChartDonate = () => {
    return (
        <div className="bg-white mt-[20px] md:mt-0 p-6 rounded-xl h-full">
            <h2 className="mb-4 font-semibold text-lg">Food Donations Across Egypt</h2>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                    <XAxis dataKey="name" stroke="#6366f1" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="donations" stroke="#6366F1" fill="#6366F1" fillOpacity={0.3} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AreaChartDonate;
