
import { Input, Select, Button, Upload, Avatar } from "antd";
import imageTest from "../assets/et3am.png"
import { useState } from "react";
import { CheckCircleFilled, UploadOutlined } from "@ant-design/icons";

import useIcons from "../hooks/useIcons";
import { useComponent } from "../hooks/useComponent";

const { Option } = Select;

const SettingsCharity = () => {
    const { ModelCharity }= useComponent()
    const { FiLogOut } = useIcons()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);

    return (
        <div className="h-full md:h-[650px]">

            <div className="bg-white p-4 md:p-6 rounded-2xl h-full md:h-[95%]">
      
                    <div className="flex items-center space-x-4 md:mt-[30px]">
                        <img
                            src={imageTest}
                            alt="Profile"
                            className="rounded-full w-20 h-20 object-cover"
                        />
                        <div>
                            <h2 className="font-semibold text-lg md:text-xl">el3man Charity</h2>
                            <p className="text-[14px] text-gray-500 md:text-[18px]">alexarawles@gmail.com</p>
                        </div>
                    </div>

                   


                
            


                <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mt-10">
                    <Input defaultValue="Alexa" className="p-2"  disabled  />
                    <Input type="email" defaultValue="alexarawles@gmail.com" className="p-2" disabled />
                    <Select className="w-full" defaultValue="female" disabled>
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                    </Select>
                    <Input defaultValue="Rawles" className="p-2" disabled />
                    <Select className="w-full" defaultValue="english" disabled>
                        <Option value="english">English</Option>
                        <Option value="spanish">Spanish</Option>
                    </Select>
                    <Select className="w-full" defaultValue="gmt" disabled>
                        <Option value="gmt">GMT</Option>
                        <Option value="est">EST</Option>
                    </Select>
                </div>

                <div className="mt-8">
                    <h3 className="font-medium text-lg">Email Address</h3>
                    <div className="flex items-center space-x-4 mt-2">
                        <div className="flex-1 bg-gray-100 p-2 rounded-lg">alexarawles@gmail.com</div>
                       
                    </div>
                  
                    <div className="flex items-center gap-4 mt-10">
                        <Button type="primary" className="mt-4 !w-[120px] !h-[40px]" onClick={() => setIsModalVisible(true)}>Edit</Button>
                        <div className="flex mt-4">
                            <Button onClick={() => setIsLogoutModalVisible(true)} type="primary" danger className="flex items-center shadow-md border-none rounded-lg !w-[120px] !h-[40px] text-white">
                                <FiLogOut className="mr-2" /> Logout
                            </Button>
                        </div>
                  </div>
                </div>
            </div>



            
 {/*  start Model  Edit  Broooooooo */}
            <ModelCharity title="Edit Data" open={isModalVisible} onClose={() => setIsModalVisible(false)} >
                <div className="">
                    <div className="flex flex-col items-center mb-4">
                        <div className="inline-block relative">
                            <Avatar size={100} src={imageTest} className="cursor-pointer" />
                            <CheckCircleFilled className="right-0 bottom-0 absolute bg-white rounded-full text-green-500 text-xl" />
                        </div>
                  
                            <Upload className="mt-2" listType="picture" maxCount={1}>
                                <Button icon={<UploadOutlined />}>Upload Image</Button>
                            </Upload>
                     
                    </div>
                    <div className="gap-4 grid grid-cols-2">
                        <Input defaultValue="Alexa" className="p-2" />
                        <Input type="email" defaultValue="alexarawles@gmail.com" className="p-2" />
                        <Select className="w-full" defaultValue="female">
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                            <Option value="other">Other</Option>
                        </Select>
                        <Input defaultValue="Rawles" className="p-2" />
                        <Select className="w-full" defaultValue="english">
                            <Option value="english">English</Option>
                            <Option value="spanish">Spanish</Option>
                        </Select>
                        <Select className="w-full" defaultValue="gmt">
                            <Option value="gmt">GMT</Option>
                            <Option value="est">EST</Option>
                        </Select>
                    </div>
                    <div className="mt-4 text-right">
                        <Button type="primary" >Save</Button>
                    </div>
                </div>
            </ModelCharity>

            {/* End Model Edit Brooo */}

            

             {/* Start  MOdel LogOut  */}
            <ModelCharity  title="logout" open={isLogoutModalVisible}  onClose={() => setIsLogoutModalVisible(false)}>
                <div className="">
                    <div className="flex-auto justify-center p-5 text-center">
                     
                    
                      
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex items-center mx-auto w-16 h-16 text-red-500"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zM11 7a1 1 0 012 0v6a1 1 0 11-2 0V7zm1 10a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <h3 className="py-4 font-bold text-xl">Are you sure</h3>
                        <p className="px-8 text-gray-500 text-sm">Do you really want to delete your account?
                            This process cannot be undone</p>
                    </div>
                    

                    <div className="flex justify-center space-x-3 mt-4">
                        <Button onClick={() => setIsLogoutModalVisible(false)} className="!w-[120px] !h-[40px]" >Cancel</Button>
                        <Button className="!w-[120px] !h-[40px]" type="primary" danger>
                            Yes, Logout
                        </Button>
                    </div>
       </div>
</ModelCharity>
        </div>
    );
};

export default SettingsCharity;
