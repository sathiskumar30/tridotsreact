import "./index.css";
import { GoSearch } from "react-icons/go";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { BsDot } from "react-icons/bs";
import { LiaGreaterThanSolid } from "react-icons/lia";
import Section1 from "./Section1";


function App() {
  return (
    <div>
      <div className="search">
        <div className="search_1">
          <p>
            <GoSearch id="searc" />
          </p>
          <p>Search here...</p>
        </div>
        <div>
          <img
            src="https://yt3.googleusercontent.com/Tfn2Z3Fd4qUEzumdHu7sADuSAo6kfGHLQqwCr-JMFIcy6kiY2eFKaigc1oxVdI68J-LK1lijUuk=s900-c-k-c0x00ffffff-no-rj"
            alt=""
            id="re_img"
          />
        </div>
        <div className="search_btn">
          <button className="btn_1">SUBSCRIBE</button>
          <button className="btn_2">SIGN IN</button>
        </div>
      </div>

      <div className="Nav_bar">
        <div className="nav_bar1">
          <p className="l_1"></p>
          <p className="l_2"></p>
          <p className="l_3"></p>
        </div>
        <div className="nav_section">
          <p style={{ color: "red" }}>Home</p>
          <p>Categories</p>
          <p>IR Prime</p>
          <p>Events</p>
          <p>Bookstore</p>
          <p>Newsletter</p>
          <p>Video</p>
        </div>
        <div className="weather">
          <p>
            <TiWeatherPartlySunny />
            Friday, 30th June,2023
          </p>
        </div>
      </div>
      <div className="Nav_bar2">
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

      <div className="News">
        <div className="new_img1">
          <div>
            <img
              src="https://previews.123rf.com/images/minianne/minianne1803/minianne180300154/98042061-lights-of-car-traffic-on-a-busy-city-road-at-night-in-the-big-city.jpg"
              id="img1"
            />
          </div>
          <div>
            <h3 style={{ color: "red" }}>HOTSPOTS</h3>
            <h5>Luxury Hotspots ; 5 more expensive</h5>
            <h5>high streets in the.,</h5>
          </div>
        </div>
        <div className="new_img2">
          <div>
            <img
              src="https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4="
              id="img2"
            />
          </div>
          <div>
            <h3 style={{ color: "red" }}>AI</h3>
            <h5>5 ways to leverage the power of </h5>
            <h5>ChatGPT in retail </h5>
          </div>
        </div>
        <div className="new_img2">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_sWj9gYDWKb77o4D0qwPoNssvWPe3Ps2YNA&usqp=CAU"
              id="img3"
            />
          </div>
          <div>
            <h3 style={{ color: "red" }}>SHIPPING</h3>
            <h5>Reliance to open 250 Azorte stores</h5>
            <h5>in 2-3 years</h5>
          </div>
        </div>
      </div>
      <div className="grids">
        <div>
          <div className="full_grid1">
            <div className="back_image" style={{ borderRadius: "5px" }}>
              <div className="img_text">
                <h4 id="foc_btn">IN FOCUS</h4>
                <h2>Rahul Gandhi In Manipur : Chopper Ride After women </h2>
                <h2>Protesters Sourrounded Car </h2>
                <h3 className="text-gray-300">Rahul Gandhi</h3>
              </div>
            </div>
            <div className="Comp_1">
              <div className="Comp_img1">
                <img src="https://img.forconstructionpros.com/files/base/acbm/fcp/image/2022/11/Stock_fleet_of_trucks.635ac468da689.6377d88e2593d.png?auto=format%2Ccompress&fit=crop&h=288&q=70&w=512" />
              </div>
              <div className="Comp_text1">
                <div className="texty_1">
                  <h3 style={{ color: "red" }}>SELECT CITYWALK</h3>
                  <h1>Wow! Momo Foods enters Bhopal Witth Wow!</h1>
                  <p># Citywalk #reel stories product</p>
                </div>
                <div className="Comp_icon1">
                  <LiaGreaterThanSolid />
                </div>
              </div>
            </div>
            <div className="Comp_1">
              <div className="Comp_img1">
                <img src="https://dxminds.com/wp-content/uploads/2019/03/HOW-MUCH-DOES-IT-COST-TO-SET-UP-AN-AI-STORE-LIKE-AMAZON-GO.jpg" />
              </div>
              <div className="Comp_text2">
                <div className="texty_1">
                  <h3 style={{ color: "red" }}>FOOD & BEVERAGE</h3>
                  <h1>KFC opens another outle in Punjab</h1>
                  <p># Beverage #reel stories product</p>
                </div>
                <div className="Comp_icon1">
                  <LiaGreaterThanSolid />
                </div>
              </div>
            </div>
            <div className="Comp_1">
              <div className="Comp_img1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_TiUxHEdFQfbw3uAo_SmQuH4BCj7JPdHyw&usqp=CAU" />
              </div>
              <div className="Comp_text3">
                <div className="texty_1">
                  <h3 style={{ color: "red" }}>SELECT CITYWALK</h3>
                  <h1>FNP (Ferns N Petals) appoints ashish Goel</h1>
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
              Select Citywalk opens 4 new stores in June
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
          <div className="bg-gray-50 h-44 rounded-xl w-auto pt-2 flex items-center justify-center flex-col gap-5" >
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
    </div>
  );
}

export default App;
