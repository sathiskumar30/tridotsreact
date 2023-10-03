import "./index.css";
import { GoSearch } from "react-icons/go";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { BsDot } from "react-icons/bs";
import { LiaGreaterThanSolid } from "react-icons/lia";
import Section1 from "./Section1";



function App() {
  return (
    <div>
      <div className="search sm:flex sm:flex-row sm:justify-between sm:gap-2">
        <div className="search_1 max-sm:[8px]">
          <p>
            <GoSearch id="searc" />
          </p>
          <p>Search here...</p>
        </div>
        <div className="max-sm:hidden">
          <img
            src="https://yt3.googleusercontent.com/Tfn2Z3Fd4qUEzumdHu7sADuSAo6kfGHLQqwCr-JMFIcy6kiY2eFKaigc1oxVdI68J-LK1lijUuk=s900-c-k-c0x00ffffff-no-rj"
            alt=""
            id="re_img"
          />
        </div>
        <div className="search_btn">
          <button className="btn_1 max-sm:bg-red-700 max-sm:text-xs">SUBSCRIBE</button>
          <button className="btn_2 max-sm:text-[9px] max-sm:font-semibold ">SIGN IN</button>
        </div>
      </div>

      <div className="Nav_bar max-sm:flex max-sm:flex-row max-sm:justify-between max-sm:items-center max-sm:gap-2 max-sm:">
        <div className="nav_bar1 max-sm:flex max-sm:flex-col max-sm:gap-1">
          <p className="l_1 max-sm:w-4 max-sm:h-0.5"></p>
          <p className="l_2 max-sm:w-6 max-sm:h-0.5"></p>
          <p className="l_3 max-sm:w-4 max-sm:h-0.5"></p>
        </div>
        <div className=" nav_section max-sm:flex max-sm:flex-row max-sm:justify-between max-sm:items-center max-sm:gap-5 max-sm:text-sm max-sm:overflow-scroll">
          <p style={{ color: "red" }}>Home</p>
          <p>Categories</p>
          <p>Prime</p>
          <p>Events</p>
          <p>Bookstore</p>
          <p>Newsletter</p>
          <p>Video</p>
        </div>
        <div className="weather max-sm:flex max-sm:flex-col max-sm:justify-between max-sm:items-center max-sm:text-[8px]">
          <p className="">
            <TiWeatherPartlySunny className="max-sm:text-lg" />
            Friday, 30th June,2023
          </p>
        </div>
      </div>
      <div className="Nav_bar2 max-sm:flex max-sm:flex-row max-sm:justify-between max-sm:items-center max-sm:gap-1 max-sm:py-2 max-sm:text-[8.5px] max-sm:px-4 max-sm:font-[400]">
        <p>Fashion & Lifestyle</p>
        <BsDot />
        <p>Beauty & Wellness </p>
        <BsDot />
        <p>Food & Beverage</p>
        <BsDot />
        <p>Consumer Durables & IT</p>
        <BsDot />
        <p>Entertainment</p>
        <BsDot />
        <p>Home Decor & Furnishing</p>
      </div>

      <div className="flex flex-row justify-between items-center gap-2 px-7 py-3 max-sm:flex max-sm:flex-row max-sm:justify-between max-sm:items-center max-sm:p-0 bg-slate-100 max-sm:py- max-sm:px-3">
        <div className="flex flex-row justify-between items-center gap-4 max-sm:flex max-sm:flex-row max-sm:justify-between max-sm:items-center max-sm:gap-3 max-sm:py-4">
          <div>
          <img className="rounded-t-lg w-fit max-sm:h-[99px] max-sm:w-[150px] " src={require('./images/imga1.jpg')} alt="image" srcset="" />
          </div>
          <div className="max-sm:flex max-sm:flex-col max-sm:gap-0  ">
            <h3 style={{ color: "red" }} className="max-sm:text-[12px] font-[600]">HOTSPOTS</h3>
            <h5 className="font-[600] max-sm:text-[11.5px]">Luxury Hotspots ; 5 more expensive</h5>
            <h5 className="font-[600] max-sm:text-[11.5px] ">high streets in the.,</h5>
          </div>
        </div>



        <div className="flex flex-row justify-between items-center gap-4 max-sm:flex max-sm:flex-row max-sm:justify-between max-sm:items-center max-sm:gap-3 max-sm:py-4">
          <div>
          <img className="rounded-t-lg w-fit max-sm:h-[99px] max-sm:w-[150px]" src={require('./images/imga2.jpg')} alt="image" srcset="" />
          </div>
          <div className="max-sm:flex max-sm:flex-col max-sm:gap-0  ">
            <h3 style={{ color: "red" }} className="font-[600] max-sm:text-[12px]">AI</h3>
            <h5 className="font-[600] max-sm:text-[11.5px]">5 ways to leverage the power of </h5>
            <h5 className="font-[600] max-sm:text-[11.5px] ">ChatGPT in retail </h5>
          </div>
        </div>
        <div className="max-sm:hidden flex flex-row justify-between items-center gap-4 max-sm:flex max-sm:flex-row max-sm:justify-between max-sm:items-center max-sm:gap-3 max-sm:py-4">
          <div className=" max-sm:flex max-sm:flex-col max-sm:gap-0  ">
          <img className="rounded-t-lg w-fit max-sm:h-[90px] max-sm:w-[120px]" src={require('./images/imga3.jpg')} alt="image" srcset="" />
          </div>
          <div>
            <h3 style={{ color: "red" }} className="max-sm:text-[10px] font-[500]">SHIPPING</h3>
            <h5 className="font-[600] max-sm:text-[10px]">Reliance to open 250 Azorte stores</h5>
            <h5 className="font-[600] max-sm:text-[10px]">in 2-3 years</h5>
          </div>
        </div>
      </div>
      <div className="grids max-sm:grid max-sm:grid-cols-1 max-sm:gap-4 ">
        <div>
          <div className="full_grid1">
            <div className="back_image max-sm:w-fit max-sm:h-[220px]" style={{ borderRadius: "5px" }}>
              <div className="img_text max-sm:flex max-sm:gap-0">
                <h4 id="foc_btn" className="max-sm:text-xs max-sm:py-0.5">IN FOCUS</h4>
                <h2 className="max-sm:text-sm max-sm:py-0">Rahul Gandhi In Manipur : Chopper Ride After women </h2>
                <h2 className="max-sm:text-sm max-sm:py-0">Protesters Sourrounded Car </h2>
                <h3 className="text-red-600 max-sm:text-sm max-sm:font-[600]">Rahul Gandhi</h3>
              </div>
            </div>



            <div className="Comp_1 max-sm:flex max-sm:flex-row max-sm:justify-between max-sm:items-center max-sm:gap-4 max-sm:pt-3">
              <div className="Comp_img1 max-sm:w-fit h-fit">
                <img src="https://img.forconstructionpros.com/files/base/acbm/fcp/image/2022/11/Stock_fleet_of_trucks.635ac468da689.6377d88e2593d.png?auto=format%2Ccompress&fit=crop&h=288&q=70&w=512" />
              </div> 
              <div className="Comp_text1 max-sm:flex max-sm:flex-row max-sm:justify-between max-sm:gap-0">
                <div className="texty_1 max-sm:flex max-sm:flex-col max-sm:justify-between max-sm:items-start max-sm:gap-2 max-sm:text-sm">
                  <h3 style={{ color: "red" }} className="max-sm:font-[500]">SELECT CITYWALK</h3>
                  <h1 className="max-sm:font-[500]">Wow! Momo Foods enters Bhopal Witth Wow!</h1>
                  <p># Citywalk #reel stories product</p>
                </div>
                <div className="Comp_icon1">
                  <LiaGreaterThanSolid />
                </div>
              </div>
            </div>






            <div className="Comp_1 max-sm:flex max-sm:flex-row max-sm:justify-between max-sm:gap-4 max-sm:py-0">
              <div className="Comp_img1  max-sm:w-[95px] h-fit">
                <img src="https://dxminds.com/wp-content/uploads/2019/03/HOW-MUCH-DOES-IT-COST-TO-SET-UP-AN-AI-STORE-LIKE-AMAZON-GO.jpg" />
              </div>
              <div className="Comp_text2 max-sm:flex max-sm:flex-row max-sm:justify-between max-sm:gap-0">
                <div className="texty_1 max-sm:flex max-sm:flex-col max-sm:justify-between max-sm:items-start max-sm:gap-2 max-sm:text-sm">
                  <h3 style={{ color: "red" }} className="max-sm:font-[500]">FOOD & BEVERAGE</h3>
                  <h1 className="max-sm:font-[500]">KFC opens another outle in Punjab</h1>
                  <p># Beverage #reel stories product</p>
                </div>
                <div className="Comp_icon1">
                  <LiaGreaterThanSolid />
                </div>
              </div>
            </div>
            <div className="Comp_1 max-sm:flex max-sm:flex-row max-sm:justify-between max-sm:gap-4 max-sm:pb-0">
              <div className="Comp_img1  max-sm:w-[115px] h-fit">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_TiUxHEdFQfbw3uAo_SmQuH4BCj7JPdHyw&usqp=CAU" />
              </div>
              <div className="Comp_text3 max-sm:flex max-sm:flex-row max-sm:justify-between max-sm:gap-0">
                <div className="texty_1 max-sm:flex max-sm:flex-col max-sm:justify-between max-sm:items-start max-sm:gap-2 max-sm:text-sm">
                  <h3 style={{ color: "red" }} className="max-sm:font-[500]">SELECT CITYWALK</h3>
                  <h1 className="max-sm:font-[500]">FNP (Ferns N Petals) appoints ashish Goel</h1>
                  <p># Citywalk #reel stories product</p>
                </div>
                <div className="Comp_icon1">
                  <LiaGreaterThanSolid />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Comp_2">
          <div>
            <h2 style={{ fontWeight: "bold" }}>Latest News</h2>
            <p className="red_line"></p>
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/id/693280398/photo/man-at-supermarket.jpg?s=612x612&w=0&k=20&c=4LdVDVwDpomw1nb2NwYrqpdiRKkjMjk5KioV2L_O4Kg="
              className="py-2 rounded-2xl"
            />
          </div>
          <div>
            <h2 className="py-2 font-normal">
              Unwrapping the Archives reinvention plan
            </h2>
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/id/1157106624/photo/all-your-necessities-stored-in-one-place.jpg?s=612x612&w=0&k=20&c=fANV-CP9N_Dt5lVoKWiZdAch60-2IOeHEm_pnvgk348="
              className=" py-2 rounded-2xl"
            />
          </div>
          <div>
            <h3 className="font-medium py-4">
              How AI is enhancing stores, How AI is enhancing stores
            </h3>
          </div>
          <div>
            <h3 className="font-medium border-t-[1px] py-4">
              Croma opens 58 outlets in 6, croma retails more than 16,000
            </h3>
            <h4 className="pb-4">
              These companies created a lot of hype when they listed on the...
            </h4>
          </div>
          <div>
            <h3 className="font-medium border-t-[1px] py-4">
              Select Citywalk opens 4 new stores in July
            </h3>
            <h4>
              These companies created a lot of hype when they listed on the...
            </h4>
          </div>
        </div>
        <div>
          <div>
            <h4 className="text-center">-Advertisement-</h4>
            <img
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/big-bike-video-advertisement-design-template-a14c688334345c8422193f4d9425112a_screen.jpg?ts=1664733817"
              className="rounded-2xl pb-3"
            />
          </div>
          <div className="bg-pink-100 rounded-2xl h-80 w-auto px-1 pb-4">
            <div className="flex items-center justify-between ">
              <div className="flex items-center justify-between gap-3 pt-2">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8wOimL1El2wnJNIEF5erGV05PYsDqQf9LXe6SA7YtVh3DMYa6liXPJLt8Apej9TGrOg&usqp=CAU"
                    alt=""
                    className="h-8 rounded-sm pl-1"
                  />
                </div>
                <div className="text-[12px]">
                  <h5>IR PRIME</h5>
                  <p>Top 3 stories of the day </p>
                </div>
              </div>
              <div className="text-[14px] border bg-white p-1">See All</div>
            </div>

            <div className="flex justify-between items-center gap-3 p-2">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-dP90U2H-m4sPLLdLF8Ly6-KtEQs3gkfr7w&usqp=CAU" alt="" className="h-16 rounded-sm"/>
              <h5 className="font-medium">8 retail companis headed by women , These brands are not just famous...</h5>

            </div>
           <div className="flex justify-between items-center gap-3 p-2">
            <img src="https://img.freepik.com/premium-vector/spring-window-with-landscape-with-book-coffee-cup-sill-vector-illustration-flat-style-eps-10_505557-3104.jpg" alt="" className="h-16 w-30 rounded-sm" />
            <h5 className="font-medium">
              Joom Maketplace offers a global window foe sellers 
            </h5>
           </div>
           <div className="flex justify-between items-center gap-3 p-2">
            <img src="https://media.istockphoto.com/id/935316446/photo/fresh-raw-rib-eye-steaks-isolated-on-white.jpg?s=612x612&w=0&k=20&c=UBnLccI6y47Vynuxa2BybZS0jPUtEqpJvL4LzVgGSOg=" alt="" className="h-16 w-16 rounded-sm " />
            <h5 className="font-medium">
              FreshToHome fixing a broken meat market retailing in...
            </h5>
           </div>
          </div>
          <div className="bg-gray-100 h-44 rounded-xl w-auto pt-2 flex items-center justify-center flex-col gap-5 max-sm:mt-4" >
              <div className="text-red-500 font-bold text-2xl">
                <h1 >Subscribe</h1>
              </div>
              <div>
                <div className="pb-6">
                <p className="border-b-2 border-zinc-950 text-sm pr-3 text-gray-400">Your email address...</p>
                </div>
                <div className="text-center border-2 bg-red-500 text-white rounded-md ">Subscribe</div>
              </div>
              
          </div>
        </div>
      </div>
      <Section1/>

    <div>
        <div className="pl-6">
           <h2 className="font-bold text-2xl">Trending</h2>
            <p className="red_line"></p>
        </div>
         <div className="flex justify-stretch items-center flex-row gap-3 p-4 pl-6 max-sm:flex max-sm:flex-row max-sm:justify-stretch max-sm:items-center max-sm:gap-2 max-sm:overflow-scroll">
            <p className="border border-gray-200 rounded-md p-1.5 font-medium text-base text-gray-500 max-sm:font-bold  max-sm:w-fit">Rahul Gandhi in Manipur</p>
            <p className="border border-gray-200 rounded-md p-1.5 font-medium text-base text-gray-500 max-sm:font-bold max-sm:text-xs  ">Meta</p>
            <p className="border border-gray-200 rounded-md p-1.5 font-medium text-base text-gray-500 max-sm:font-bold max-sm:text-xs ">E-Commercer</p>
            <p className="border border-gray-200 rounded-md p-1.5 font-medium text-base text-gray-500 max-sm:font-bold max-sm:text-xs ">Fashion</p>
            <p className="border border-gray-200 rounded-md p-1.5 font-medium text-base text-gray-500 max-sm:font-bold max-sm:text-xs ">Live Cricket News</p>
            <p className="border border-gray-200 rounded-md p-1.5 font-medium text-base text-gray-500 max-sm:font-bold max-sm:text-xs ">Leo Update</p>
            <p className="border border-gray-200 rounded-md p-1.5 font-medium text-base text-gray-500 max-sm:font-bold max-sm:text-xs ">Sushant dead</p>
            <p className="border border-gray-200 rounded-md p-1.5 font-medium text-base text-gray-500 max-sm:font-bold max-sm:text-xs ">Myntra Launches</p>
            <p className="border border-gray-200 rounded-md p-1.5 font-medium text-base text-gray-500 max-sm:font-bold max-sm:text-xs ">Thalapathy Vijay</p>
            <p className="border border-gray-200 rounded-md p-1.5 font-medium text-base text-gray-500 max-sm:font-bold max-sm:text-xs ">India won</p>
            <p className=" border border-gray-200 rounded-md  font-medium text-base text-gray-500 px-2 py-2 max-sm:hidden "><LiaGreaterThanSolid/></p>
         </div>
         </div>






    <div main className="p-3 pl-6 flex flex-row justify-between gap-2 max-sm:flex max-sm:flex-col max-sm:justify-between max-sm:items-center max-sm:gap-3">

      <div firstblock>
              <div nav className=" flex flex-row items-center justify-between">
                   <div>
                  <h2 className="font-bold text-2xl">Leaders Ink</h2>
                    <p className="red_line"></p>
                    </div>
                    <div className="flex justify-between
                    items-center gap-1.5 ">
                      <p className="text-slate-600">See more </p>
                      <p className=" text-base text-gray-500 text-center mt-1"><LiaGreaterThanSolid/></p>
                    </div>
              </div>
          <div content className="pt-2 flex flex-row justify-between items-center gap-4 max-sm:flex max-sm:flex-col max-sm:justify-between max-sm:items-center max-sm:gap-3 max-sm:pt-3">
              <div comp className="">
                  <div>
                    <img className="rounded-t-lg w-auto max-sm:w-[300px]" src={require('./images/imgs4.jpg')} alt="image" srcset="" />
                  </div>
                  <div>
                      <div className="flex flex-row justify-between align-center pt-3 gap-3 py-2"> 
                       <img className="" src={require('./images/elip1.jpg')} alt="image" srcset="" />
                       <p className="text-md font-bold">Top 5 Iconic Apple stores across the world by design</p>
                       </div>
                      <div className="flex flex-col items-start justify-center gap-2 w-fit">
                      <p className="text-gray-500 font-medium ">From a total of around 522 Apple stores across the world..</p>
                      <p className="font-semibold">Arundhati Roy</p>
                      </div>
                  </div>
              </div>
              <div comp className="">
                  <div>
                    <img className="rounded-t-lg w-fit max-sm:w-[300px]" src={require('./images/imgs2.jpg')} alt="image" srcset="" />
                  </div>
                  <div>
                      <div className="flex flex-row justify-between align-center pt-3 gap-3 py-2"> 
                       <img className="" src={require('./images/elip2.jpg')} alt="image" srcset="" />
                       <p className="text-md font-bold">Rollercoaster ride of four retail industry IPOs</p>
                       </div>
                       <div className="flex flex-col items-start justify-center gap-2">
                      <p className="text-gray-500 font-medium ">These companies created a lot of hype when they listed on the...</p>
                      <p className="font-semibold">Vikram Seth</p>
                      </div>
                  </div>
              </div>
              <div comp className="pt-2">
                  <div>
                    <img className="rounded-t-lg w-fit max-sm:w-[300px]" src={require('./images/imgs3.jpg')} alt="image" srcset="" />
                  </div>
                  <div>
                      <div className="flex flex-row justify-between align-center pt-3 gap-3 py-2"> 
                       <img className="h-fit pt-2" src={require('./images/elip3.jpg')} alt="image" srcset="" />
                       <p className="text-base font-bold">Uniqlo India's Success Mantra: Making headway </p>
                       </div>
                       <div className="flex flex-col items-start justify-center gap-2">
                      <p className="text-gray-500 font-medium ">Uniqlo Asia's largest fashion retailer has managed to hit...</p>
                      <p className="font-semibold">Jhumpa Lahiri</p>
                      </div>
                  </div>
              </div>
          </div>  
      </div>
    <div Secondblock className="">
        <div comp>
             <div nav className=" flex flex-row items-center justify-between  pl-4 max-sm:p-0 ">
                  <div>
                    <h2 className="font-bold text-2xl">Research</h2>
                    <p className="red_line"></p>
                 </div>
                 <div className="flex justify-between
                    items-center gap-1.5 ">
                      <p className="text-slate-600">See more </p>
                      <p className=" text-base text-gray-500 text-center mt-1"><LiaGreaterThanSolid/></p>
                  </div>
             </div>
         <div imgComp className="flex pt-4 pl-4 gap-4 max-sm:pl-0">
              <div className="">
                  <div >
                    <img className="rounded-t-lg w-fit" src={require('./images/imgs1.jpg')} alt="image" srcset="" />
                  </div>
                  <div>
                    <h2 className="py-3  text-gray-500 text-lg font-medium">
                      Human touchpoint is extremely important for us,
                    </h2>
                    <h2 className="text-red-600 pb-2 font-medium">
                      FASHION
                    </h2>
                   </div>
              </div>
              <div >
                  <div className="">
                    <img className="rounded-t-lg w-fit" src={require('./images/imgs5.jpg')} alt="image" srcset="" />
                  </div>
                  <div>
                    <h2 className="py-3  text-gray-500 text-lg font-medium">
                      US denim brand Lee opens outlets in Sikar , Patna..
                    </h2>
                    <h2  className="text-red-600 pb-2 font-medium">
                      BEAUTY
                    </h2>
                   </div>
              </div>
         </div>
        </div>
      </div>


    </div>

{/* //blackscreen */}

  <div className="bg-slate-600 h-[29rem] max-sm:h-fit">
          <div>
             <div nav className=" flex flex-row items-center justify-between pt-7 px-10 max-sm:px-3 max-sm:pl-6 max-sm:pt-3">
                   <div>
                  <h2 className="font-medium text-2xl text-white max-sm:text-lg">IR Video Mall</h2>
                    <p className="red_line"></p>
                    </div>
                    <div className="flex justify-between
                    items-center gap-1.5 ">
                      <p className="text-white text-[14.89px]">See more </p>
                      <p className=" text-base text-white text-center mt-1"><LiaGreaterThanSolid/></p>
                    </div>
              </div>
              <div className="grid grid-cols-2 max-sm:grid max-sm:grid-cols-1 max-sm:gap-3">
                   <div sub_img className="px-10 pt-5 max-sm:px-6 max-sm:pt-3">
                     <img className="rounded-lg w-fit max-sm:w-fit" src={require('./images/imgp1.jpg')} alt="image" srcset="" />
                   </div>
                   <div comp1 className="grid grid-cols-3 pr-4 gap-2 max-sm:grid max-sm:grid-cols-1 max-sm:p-0 max-sm:gap-7" >
                          <div slide1 className=" flex flex-col items-start gap-2 max-sm:pl-6 max-sm:gap-4">
                        <h2 className="font-medium text-[17px] text-white ">Retail with Result</h2>
                        <p className="bg-red-600 w-6 p-0 h-0.5"></p>
                        <div className="max-sm:grid max-sm:grid-cols-2 max-sm:gap-4 max-sm:pr-2 ">
                        <img className="rounded-lg w-fit " src={require('./images/imgps1.jpg')} alt="image" srcset="" />
                        <p className="text-[12px] font-[500] text-white max-sm:text-base">Senco Gold IPO subsrcibed 69% on first day of subscription</p>
                        </div>
                         <div className="max-sm:grid max-sm:grid-cols-2 max-sm:gap-4 max-sm:pr-2">
                        <img className="rounded-lg w-fit " src={require('./images/imgps4.jpg')} alt="image" srcset="" />
                        <p className="font-[500] text-white text-[12px] max-sm:text-base">India D2 Summit & Awards 2023 TRaiblazing Brands and Profeesionals</p>
                        </div>
                     </div>

                        <div slide2 className=" flex flex-col items-start gap-2 max-sm:pl-6 max-sm:gap-4">
                        <h2 className="font-medium text-[17px] text-white">The Store</h2>
                        <p className="bg-red-600 w-6 p-0 h-0.5"></p>
                        <div className="max-sm:grid max-sm:grid-cols-2 max-sm:gap-4 max-sm:pr-2">
                        <img className="rounded-lg w-fit " src={require('./images/imgps2.jpg')} alt="image" srcset="" />
                        <p className="text-[12px] font-[500] text-white max-sm:text-base">Fastrack Smart onboards Ranveer Singh as brand ambassador</p>
                        </div>
                        <div className="max-sm:grid max-sm:grid-cols-2 max-sm:gap-4 max-sm:pr-2">
                        <img className="rounded-lg w-fit " src={require('./images/imgps5.jpg')} alt="image" srcset="" />
                        <p className="font-[500] text-white text-[12px] max-sm:text-base">Planet Fashion by ABFRL opens 2 outlets in Mumbai </p>
                        </div>
                        </div>


                        <div slide3 className=" flex flex-col items-start gap-2 max-sm:pl-6 max-sm:gap-4 max-sm:pb-4">
                        <h2 className="font-medium text-[17px] text-white">IR Studio </h2>
                        <p className="bg-red-600 w-6 p-0 h-0.5"></p>
                        <div className="max-sm:grid max-sm:grid-cols-2 max-sm:gap-4 max-sm:pr-2">
                        <img className="rounded-lg w-fit " src={require('./images/imgps3.jpg')} alt="image" srcset="" />
                        <p className="text-[12px] font-[500] text-white max-sm:text-base">Zoca Cafe launches outlet in Bengaluru on Friday</p>
                        </div>
                        <div className="max-sm:grid max-sm:grid-cols-2 max-sm:gap-4 max-sm:pr-2">
                        <img className="rounded-lg w-fit " src={require('./images/imgps6.jpg')} alt="image" srcset="" />
                        <p className="font-[500] text-white text-[12px] max-sm:text-base">Unwrapping the Archies's reinevention plan</p>
                        </div>
                        </div>
                   </div>
              </div>
          </div>        
  </div>

   
   <div className="flex py-7 justify-center items-center max-sm:flex max-sm:justify-center max-sm:iems-center max-sm:py-5 max-sm:px-5">
         <img className="rounded-sm w-fit " src={require('./images/slide.jpg')} alt="image" srcset="" />
   </div>


{/* FASHION BLOCK */}


  <div grid className="grid grid-cols-[2fr,1fr] px-6 max-sm:grid max-sm:grid-cols-[1fr] max-sm:px-0">
       <div className="flex flex-col justify-between ">
                    <div className="flex flex-row justify-between items-center max-sm:flex max-sm:items-center max-sm:justify-between max-sm:pl-4 max-sm:px-2">
                              <div className="">
                                  <h2 className="font-bold text-2xl">Fashion &  Styles</h2>
                                  <p className="bg-red-600 w-6 p-0 h-0.5"></p>
                              </div>
                              <div className="flex justify-between
                                  items-center gap-1.5">
                                    <p className="text-slate-600">See more </p>
                                    <p className=" text-base text-gray-500 text-center mt-1"><LiaGreaterThanSolid/></p>
                                </div>      
                      </div>
                    <div className="grid grid-cols-2 py-4 gap-1 max-sm:grid max-sm:grid-cols-1 max-sm:gap-2 max-sm:px-4 max-sm:h-fit">
                      <div className="">
                          <div FIRST className="flex flex-row justify-between gap-4 pb-5 max-sm:gap-3 max-sm:pb-3 ">
                              <img className="rounded-lg w-fit" src={require('./images/imgn1.jpg')} alt="image" srcset="" /> 
                               <div className="flex flex-col gap-2 max-sm:gap-0.5">
                              <h3 className="font-[500] text-red-400 max-sm:font[300] max-sm:text-xs">FASHION | FOOD</h3> 
                              <h4 className="font-[600] max-sm:text-[13px]">What makes File unique is its attitude and...</h4> 
                               <p className="text-gray-500 max-sm:text-[13px]" >The singer-songwritter has been spotted in the hybrid garment...</p>
                              <p className="font-[600] max-sm:text-[13px]">#fashion</p>
                             </div>
                          </div>
                          <div THIRD className="flex flex-row justify-between gap-4 pb-5 max-sm:gap-3 max-sm:pb-3">
                              <img className="rounded-lg w-fit " src={require('./images/imgn3.jpg')} alt="image" srcset="" /> 
                               <div className="flex flex-col gap-2 max-sm:gap-0.5">
                              <h3 className="font-[500] text-red-400 max-sm:text-[13px]">SHAJLESH | FASHION</h3> 
                              <h4 className="font-[600] max-sm:text-[13px]">Fashion brand icons: Shailesh Chaturvedi of arvind Fashions</h4> 
                              <p className="text-gray-500 max-sm:text-[13px]" >The Guccci loafer has been a signature style for 70 years.</p>
                              <p className="font-[600] max-sm:text-[13px]">#fashion</p>
                             </div>
                          </div>
                          <div FIVE className="flex flex-row justify-between gap-4 pb-5 max-sm:gap-3 max-sm:pb-3">
                              <img className="rounded-lg w-fit " src={require('./images/imgn5.jpg')} alt="image" srcset="" /> 
                               <div className="flex flex-col gap-2 max-sm:gap-0.5">
                              <h3 className="font-[500] text-red-400  max-sm:text-[13px]">LIFESTYLE | FASHION</h3> 
                              <h4 className="font-[600]  max-sm:text-[13px]">What makes File unique is its attitude and...</h4> 
                              <p className="text-gray-500 max-sm:text-[13px]" >BTS attended the 2022 Grammy Awards in complementary</p>
                              <p className="font-[600] max-sm:text-[13px]">#fashion</p>
                             </div>
                          </div>
                     </div>
                        <div className="">
                              <div SECOND className="flex flex-row justify-between gap-4 pb-5 max-sm:gap-3 max-sm:pb-3">
                                  <img className="rounded-lg w-fit " src={require('./images/imgn2.jpg')} alt="image" srcset="" /> 
                                  <div className="flex flex-col gap-2 max-sm:gap-0.5">
                                  <h3 className="font-[500] text-red-400 max-sm:text-[13px]">SIDD | FASHION</h3> 
                                  <h4 className="font-[600]  max-sm:text-[13px]">French Connection announces Siddhant Chaturvedi as...</h4> 
                                  <p className="text-gray-500 max-sm:text-[13px]" >The singer-songwritter has been spotted in the hybrid garment...</p>
                                  <p className="font-[600] max-sm:text-[13px]">#fashion</p>
                                </div>
                              </div>
                            
                              <div FOUR className="max-sm:gap-3 max-sm:pb-3 flex flex-row justify-between gap-4 pb-5">
                              <img className="rounded-lg w-fit " src={require('./images/imgn4.jpg')} alt="image" srcset="" /> 
                               <div className="flex flex-col gap-2 max-sm:gap-0.5">
                              <h3 className="font-[500] text-red-400   max-sm:text-[13px]">FASHION | RETAILERS</h3> 
                              <h4 className="font-[600]  max-sm:text-[13px]">Indian Fashion retailers to witness revenue...</h4> 
                              <p className="text-gray-500  max-sm:text-[13px]" >The singer-songwritter has been spotted in the hybrid garment...</p>
                              <p className="font-[600]  max-sm:text-[13px]">#fashion</p>
                             </div>
                          </div>


                          <div SIX className="flex flex-row justify-between gap-4 pb-5 max-sm:gap-3 max-sm:pb-3">
                              <img className="rounded-lg w-fit " src={require('./images/imgn6.jpg')} alt="image" srcset="" /> 
                               <div className="flex flex-col gap-2 max-sm:gap-0.5">
                              <h3 className="font-[500] text-red-400  max-sm:text-[13px]">FASHION | ZOUK</h3> 
                              <h4 className="font-[600]  max-sm:text-[13px]">Zouk marries heritage with functionality </h4> 
                              <p className="text-gray-500 max-sm:text-[13px]" >The singer-songwritter has been spotted in the hybrid garment...</p>
                              <p className="font-[600] max-sm:text-[13px]">#lifestyle</p>
                             </div>
                          </div>
                        </div> 
                    </div>
       </div>
       <div className="flex flex-col pl-7 gap-4 max-sm:flex max-sm:flex-col max-sm:gap-2 max-sm:pl-4  ">
                    <div className="flex flex-row justify-between items-center max-sm:pr-3 ">
                               <div className="">
                                  <h2 className="font-bold text-2xl max-sm:text-lg">Beauty &  Wellness</h2>
                                  <p className="bg-red-600 w-6 p-0 h-0.5"></p>
                              </div>
                              <div className="flex justify-between
                                  items-center gap-1.5 ">
                                    <p className="text-slate-600">See more </p>
                                    <p className=" text-base text-gray-500 text-center mt-1"><LiaGreaterThanSolid/></p>
                                </div>      
                      </div>
                      <div className="border rounded-lg border-gray-600 p-4 flex flex-col gap-2 max-sm:flex max-sm:flex-col max-sm:p-3 max-sm:gap-2 max-sm:mr-3 ">
                               <div one className=" flex flex-row justify-between gap-5 max-sm:flex max-sm:flex-row max-sm:justify-between max-sm:gap-5  ">
                                <div className="w-40 flex flex-col justify-between items-start gap-2 max-sm:flex max-sm:flex-col max-sm:justify-between max-sm:items-center max-sm:gap-1.5 ">
                                   <h2 className=" text-red-500 text-sm font-[500] pt-[-10px] max-sm:text-xs">BEAUTY | NEWS</h2>
                                   <img className="rounded-lg w-fit " src={require('./images/imgrn1.jpg')} alt="image" srcset="" />
                                </div>
                                <div className="flex items-center">
                                  <h2 className="font-[500] text-[15px]">Sugar Cosmetics unveils its 200th brand-owned store</h2>
                                </div>
                              </div>


                              <div two className="flex flex-row justify-between gap-5 max-sm:flex max-sm:flex-row max-sm:justify-between max-sm:gap-5">
                                <div className="w-40 flex flex-col justify-between items-start gap-2 max-sm:flex max-sm:flex-col max-sm:justify-between max-sm:items-center max-sm:gap-1.5">
                                   <h2 className=" text-red-500 text-sm font-[500] pt-[-10px]  max-sm:text-xs">BEAUTY | NEWS</h2>
                                   <img className="rounded-lg w-fit " src={require('./images/imgrn2.jpg')} alt="image" srcset="" />
                                </div>
                                <div className="flex items-center">
                                  <h2 className="font-[500] text-[15px]">Sugar Cosmetics unveils its 200th brand-owned store</h2>
                                </div>
                              </div>


                              <div three className="flex flex-row justify-between gap-5 max-sm:flex max-sm:flex-row max-sm:justify-between max-sm:gap-5">
                                <div className="w-40 flex flex-col justify-between items-start gap-2 max-sm:flex max-sm:flex-col max-sm:justify-between max-sm:items-center max-sm:gap-1.5">
                                   <h2 className=" text-red-500 text-sm font-[500] pt-[-10px]  max-sm:text-xs">BEAUTY | NEWS</h2>
                                   <img className="rounded-lg w-fit " src={require('./images/imgrn3.jpg')} alt="image" srcset="" />
                                </div>
                                <div className="flex items-center">
                                  <h2 className="font-[500] text-[15px]">Sugar Cosmetics unveils its 200th brand-owned store</h2>
                                </div>
                              </div>

                              <div four className="flex flex-row justify-between gap-5 max-sm:flex max-sm:flex-row max-sm:justify-between max-sm:gap-5">
                                <div className="w-40 flex flex-col justify-between items-start gap-2">
                                   <h2 className=" text-red-500 text-sm font-[500] pt-[-10px]  max-sm:text-xs">BEAUTY | NEWS</h2>
                                   <img className="rounded-lg w-fit " src={require('./images/imgrn4.jpg')} alt="image" srcset="" />
                                </div>
                                <div className="flex items-center">
                                  <h2 className="font-[500] text-[15px]">Sugar Cosmetics unveils its 200th brand-owned store</h2>
                                </div>
                              </div>

                              <div five className="flex flex-row justify-between gap-5 max-sm:flex max-sm:flex-row max-sm:justify-between max-sm:gap-5">
                                <div className="w-40 flex flex-col justify-between items-start gap-2 max-sm:flex max-sm:flex-col max-sm:justify-between max-sm:items-center max-sm:gap-1.5">
                                   <h2 className=" text-red-500 text-sm font-[500] pt-[-10px]  max-sm:text-xs">BEAUTY | NEWS</h2>
                                   <img className="rounded-lg w-fit " src={require('./images/imgrn5.jpg')} alt="image" srcset="" />
                                </div>
                                <div className="flex items-center">
                                  <h2 className="font-[500] text-[15px]">Sugar Cosmetics unveils its 200th brand-owned store</h2>
                                </div>
                              </div>

                    </div>
        </div>
  </div>

{/* TOSTART */}

    </div>
  );
}

export default App;


