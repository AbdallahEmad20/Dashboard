import { useState } from "react";
import { Button, Table } from "antd";
import image1 from "../assets/chid3.png";
import image2 from "../assets/chid4.jpg";
import image3 from "../assets/chid3.png";
import { Link } from "react-router-dom";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import useIcons from "../hooks/useIcons";
import { useComponent } from "../hooks/useComponent";

const data = [
    {
        key: "1",
        images: [image1, image2, image3], // مجموعة صور لكل طلب
        cityStreet: "New York, 5th Ave",
        nationalId: "123456789",
        locationGMap: "https://goo.gl/maps/example1",
        details: "Order for Washing Machine  No one can deny taht life is very Final  ilfk sdfjks klfg kfng kdfng kjfdgd kdjgndf kjdfngdf kdfjgb kjfbgf No one can deny thta life is very ahrd without any poje ef w",
    },
    {
        key: "2",
        images: [image2, image3, image1],
        cityStreet: "Los Angeles, Sunset Blvd",
        nationalId: "987654321",
        locationGMap: "https://goo.gl/maps/example2",
        details: "Order for Iron...",
    },

    {
        key: "3",
        images: [image2, image3, image1],
        cityStreet: "Los Angeles, Sunset Blvd",
        nationalId: "987654321",
        locationGMap: "https://goo.gl/maps/example2",
        details: "Order for Iron...",
    },


    {
        key: "4",
        images: [image2, image3, image1],
        cityStreet: "Los Angeles, Sunset Blvd",
        nationalId: "987654321",
        locationGMap: "https://goo.gl/maps/example2",
        details: "Order for Iron...",
    },

    {
        key: "5",
        images: [image2, image3, image1],
        cityStreet: "Los Angeles, Sunset Blvd",
        nationalId: "987654321",
        locationGMap: "https://goo.gl/maps/example2",
        details: "Order for Iron...",
    },

    {
        key: "6",
        images: [image2, image3, image1],
        cityStreet: "Los Angeles, Sunset Blvd",
        nationalId: "987654321",
        locationGMap: "https://goo.gl/maps/example2",
        details: "Order for Iron...",
    },

    {
        key: "7",
        images: [image2, image3, image1],
        cityStreet: "Los Angeles, Sunset Blvd",
        nationalId: "987654321",
        locationGMap: "https://goo.gl/maps/example2",
        details: "Order for Iron...",
    },

    {
        key: "8",
        images: [image2, image3, image1],
        cityStreet: "Los Angeles, Sunset Blvd",
        nationalId: "987654321",
        locationGMap: "https://goo.gl/maps/example2",
        details: "Order for Iron...",
    },

    {
        key: "9",
        images: [image2, image3, image1],
        cityStreet: "Los Angeles, Sunset Blvd",
        nationalId: "987654321",
        locationGMap: "https://goo.gl/maps/example2",
        details: "Order for Iron...",
    },

];

const RequestsCharity = () => {
    const { ModelCharity } = useComponent()
    const { FaCheckCircle, FaMapMarkerAlt, FaTimesCircle } = useIcons();
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [isModalRequestVisible, setIsModalRequestVisible] = useState(false);

    const showModal = (order) => {
        setSelectedOrder(order);
        setIsModalRequestVisible(true);
    };

    const handleCancel = () => {
        setIsModalRequestVisible(false);
        setSelectedOrder(null);
    };

    const columns = [
        {
            title: "Image",
            dataIndex: "images",
            key: "image",
            render: (images) => (
                <img src={images[0]} alt="Customer" className="rounded-full w-10 h-10" /> // عرض أول صورة فقط
            ),
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
            title: "Location G-map",
            dataIndex: "locationGMap",
            key: "locationGMap",
            render: (link) => (
                <Link
                    to={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-500 underline"
                >
                    <FaMapMarkerAlt className="text-red-500" /> View on Map
                </Link>
            ),
        },
        {
            title: "Details",
            dataIndex: "details",
            key: "details",
            render: (text) => {
                const words = text.split(" ");
                const shortText = words.slice(0, 8).join(" ");
                return (
                    <span>
                        {shortText}
                        {words.length > 10 && " ..."}
                    </span>
                );
            },
        },
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
                <Button type="primary" onClick={() => showModal(record)}>
                    View Details
                </Button>
            ),
        },
    ];

    return (
        <div className="grid grid-cols-1 h-screen">
            <div className="w-full overflow-auto">
                <Table columns={columns} dataSource={data} pagination={{ pageSize: 8 }} rowClassName={"w-full bg-white"} />
            </div>

            {/* start  Request Modal */}
            <ModelCharity onClose={handleCancel} title="Data Request" open={isModalRequestVisible} footer={[]}>
                {selectedOrder && (
                    <div className="flex flex-col text-center">
                        {/* Swiper Slider for Images */}
                        <Swiper navigation={true} modules={[Navigation]} className="mb-4 w-full h-[150px] md:h-[200px] swiperRequest">
                            {selectedOrder.images.map((img, index) => (
                                <SwiperSlide key={index} className="h-full">
                                    <img src={img} alt={`Customer ${index + 1}`} className="w-full h-full" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <h2 className="font-semibold text-lg">{selectedOrder.cityStreet}</h2>
                        <p><strong>National ID:</strong> {selectedOrder.nationalId}</p>
                        <Link to={selectedOrder.locationGMap} rel="noopener noreferrer" className="flex justify-center items-center gap-1 mt-4 text-blue-500 hover:underline">
                            <FaMapMarkerAlt className="text-red-500" /> View on Map
                        </Link>
                        <div className="m-auto mt-3 w-[300px] text-center">
                            <label className="block font-bold text-sm text-center">Details:</label>
                            <textarea
                                value={selectedOrder.details}
                                readOnly
                                className="custom-scrollbar mt-1 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6366F1] w-full overflow-auto text-gray-700 text-center resize-none"
                                rows={selectedOrder.details && 4}
                            />
                        </div>
                        <div className="flex gap-4 mx-auto mt-6">
                            <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 shadow-md px-4 py-2 rounded-md text-white transition-all">
                                <FaCheckCircle /> Approve
                            </button>
                            <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 shadow-md px-4 py-2 rounded-md text-white transition-all">
                                <FaTimesCircle /> Reject
                            </button>
                        </div>
                    </div>
                )}
            </ModelCharity>
        </div>
    );
};

export default RequestsCharity;

