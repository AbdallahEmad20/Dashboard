import { useState } from "react";
import { Table, Select, Tag } from "antd";
import image1 from "../assets/charityHome2.jpg";
import image2 from "../assets/charityHome2.jpg";
import image3 from "../assets/charityHome2.jpg";
import { Link } from "react-router-dom";

import useIcons from "../hooks/useIcons";


const { Option } = Select;

const data = [
    { key: "1", images: [image1, image2, image3], cityStreet: "New York, 5th Ave", nationalId: "123456789", locationGMap: "https://goo.gl/maps/example1", details: "Order for Washing Machine...", status: "Approved" },
    { key: "2", images: [image2, image3, image1], cityStreet: "Los Angeles, Sunset Blvd", nationalId: "987654321", locationGMap: "https://goo.gl/maps/example2", details: "Order for Iron...", status: "Pending" },
    { key: "3", images: [image2, image3, image1], cityStreet: "Chicago, Michigan Ave", nationalId: "456789123", locationGMap: "https://goo.gl/maps/example3", details: "Order for Microwave...", status: "Rejected" },
];

const HistoryCharity = () => {
    const { FaMapMarkerAlt } = useIcons();
    const [filteredStatus, setFilteredStatus] = useState(null);

    const handleFilterChange = (value) => {
        setFilteredStatus(value);
    };

    const filteredData = filteredStatus ? data.filter(item => item.status === filteredStatus) : data;

    const columns = [
        {
            title: "Image",
            dataIndex: "images",
            key: "image",
            render: (images) => <img src={images[0]} alt="Customer" className="rounded-full w-10 h-10" />,
        },
        {
            title: "City Street",
            dataIndex: "cityStreet",
            key: "cityStreet",
        },
        {
            title: "National ID",
            dataIndex: "nationalId",
            key: "nationalId",
        },
        {
            title: "Location",
            dataIndex: "locationGMap",
            key: "locationGMap",
            render: (link) => (
                <Link to={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-500 underline">
                    <FaMapMarkerAlt className="text-red-500" /> View on Map
                </Link>
            ),
        },
        {
            title: "Details",
            dataIndex: "details",
            key: "details",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => {
                let color = status === "Approved" ? "green" : status === "Pending" ? "orange" : "red";
                return <Tag color={color}>{status}</Tag>;
            },
        },
    ];

    return (

        <div className="grid grid-cols-1 h-screen">

            <div className="w-full overflow-auto">
                <h2 className="mb-4 font-semibold text-xl">Requests History</h2>
                <div className="mb-10">
                    <Select
                        className="mb-4 w-60"
                        placeholder="Filter by Status"
                        onChange={handleFilterChange}
                        allowClear
                    >
                        <Option value="Approved">Approved</Option>
                        <Option value="Pending">Pending</Option>
                        <Option value="Rejected">Rejected</Option>
                    </Select>
           </div>
                <Table columns={columns} dataSource={filteredData} pagination={{ pageSize: 5 }} rowClassName="bg-white" />
            </div>

        </div>

    );
};




export default HistoryCharity;
