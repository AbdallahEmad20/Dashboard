
import  imageTest from "../assets/charityHome2.jpg"
import { useComponent } from "../hooks/useComponent";
import useIcons from "../hooks/useIcons";
import { Steps } from "antd";
const HomeCharity = () => {
  const { AreaChartDonate, DonationChart } = useComponent()
  const { FaChevronDown , FaGlobeAmericas, FaLeaf, FaHandsHelping } = useIcons();
  const foodProviders = [
    { name: "Koshary El-Tahrir", type: "Restaurant" },
    { name: "Steigenberger Hotel", type: "Hotel" },
    { name: "Mohamed Ahmed", type: "Individual" },
    { name: "Al-Azhar Restaurant", type: "Restaurant" },
    { name: "Hilton Cairo", type: "Hotel" },
    { name: "Fatma Khaled", type: "Individual" },
  ];


  const activities = [
    { title: "Koshary El Tahrir donated meals to Ahmed", location: "Cairo", date: "24 July, 2023", responsible: "Koshary El Tahrir" },
    { title: "Gad Restaurant provided food for Hanan", location: "Alexandria", date: "24 July, 2023", responsible: "Gad Restaurant" },
    { title: "Zooba sent fresh meals to Mahmoud", location: "Giza", date: "24 July, 2023", responsible: "Zooba" },
    { title: "Abou Shakra donated grilled meals to Omar", location: "Mansoura", date: "24 July, 2023", responsible: "Abou Shakra" },
    { title: "Buffalo Burger provided dinner for Sara", location: "Tanta", date: "24 July, 2023", responsible: "Buffalo Burger" },
    { title: "Cook Door donated sandwiches to Nour", location: "Suez", date: "24 July, 2023", responsible: "Cook Door" },
  ]


  const features = [
    { icon: <FaGlobeAmericas size={40} className="text-[#6366F1]" />, title: "Save The Earth", text: "Protect our planet for future generations." },
    { icon: <FaLeaf size={40} className="text-[#6366F1]" />, title: "Go Green", text: "Promote sustainability and eco-friendly practices." },
    { icon: <FaHandsHelping size={40} className="text-[#6366F1]" />, title: "Help The Needy", text: "Support communities with essential resources." }
  ];




  return (


    <div className="p-2">
      <div className="gap-4 grid grid-cols-1 lg:grid-cols-12">
  
        <div className="lg:col-span-9 rounded-xl">

          <div className="relative">
            <img
              src={ imageTest}
              alt="Helping Hands"
              className="rounded-lg w-full h-64 object-cover"
            />
            <div className="top-0 left-0 absolute flex flex-col justify-center bg-opacity-50 px-6 rounded-xl w-full h-full text-white">
              <h2 className="font-bold text-sm lg:text-base uppercase">
                WE ARE HELPING HAND ON
              </h2>
              <p className="mt-4 mb-4 font-bold text-[#6366F1] text-2xl lg:text-4xl">
                <span className="text-white">Providing</span>
                <span className="text-[#6366F1]"> Meals </span>
                <span className="text-white"> in 124 Countries</span>
              </p>
              <p className="mt-2 text-sm lg:text-base">
                Help fight hunger and nourish communities in need!
              </p>
            </div>
          </div>


          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white mt-[15px] p-4 rounded-lg">
            {features.map((feature, index) => (
              <div key={index} className="max-w-xs text-center">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="mt-3 font-bold text-lg">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>

        </div>





        <div className="lg:col-span-3 bg-white p-4 rounded-lg">
          <h3 className="mb-4 font-semibold text-lg">Best Food Providers</h3>
          <ul>
            {foodProviders.map((provider, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-2 border-gray-200 border-b last:border-none"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex justify-center items-center bg-gray-300 rounded-full w-10 h-10 font-semibold text-sm uppercase">
                    {provider.type[0]}
                  </div>
                  <div>
                    <span className="font-medium">{provider.name}</span>
                    <p className="text-gray-500 text-sm">{provider.type}</p>
                  </div>
                </div>

              </li>
            ))}
          </ul>
        </div>

      </div>








      {/*  Section bottom  */}

      < div className="gap-4 grid grid-cols-1 lg:grid-cols-12 mt-[30px]">

        <div className="col-span-1 lg:col-span-9 rounded-xl">
          <div className="md:gap-6 grid grid-cols-1 xl:grid-cols-2">
            <DonationChart />

            <div className="">
              <AreaChartDonate />
            </div>

          </div>


        </div>



        <div className="relative gap-4 col-span-1 lg:col-span-3 custom-scrollbar mt-[20px] md:mt-0 rounded-xl h-[430px] overflow-hidden hover:overflow-y-scroll scrollbar-hide">
          <FaChevronDown className="top-2 left-1/2 absolute text-gray-500 -translate-x-1/2 animate-bounce transform" />
          <div className="bg-white shadow-md p-6 rounded-xl">

            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg">Activities</h2>
              <p className="text-gray-400 text-sm">Detail</p>
            </div>

            {/* Steps Timeline */}
            <Steps
              direction="vertical"
              current={activities.length}
              items={activities.map((activity) => ({
                title: activity.title,
                description: (
                  <div className="text-gray-500 text-xs">
                    <p>{activity.location}, {activity.date}</p>
                    <p className="font-semibold text-orange-500">{activity.responsible}</p>
                  </div>
                ),
              }))}
            />
          </div>



        </div>

      </div>


    </div>




  )
}

export default HomeCharity

