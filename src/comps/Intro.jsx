import "aos/dist/aos.css";
import React from "react";
import "../css/intro.css";
import { Calendar } from "../icon/Calendar";
import { GitHub } from "../icon/GitHub";
import { Human } from "../icon/Human";
import { Velog } from "../icon/Velog";

function Intro() {
  return (
    <section data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
      <div className="my-14 text-center font-black">
        <h1 className="text-2xl font-bold ">ABOUT ME</h1>
      </div>
      <div className="flex justify-center flex-row space-x-16 text-center mb-10  ">
        <div className="flex ">
          <div>
            <div className="flex justify-center  px-10 py-5">
              <Human />
            </div>
            {/* <div className=""> */}
            <h1 className="font-bold"> 이름</h1>
            <p>나나</p>
            {/* </div> */}
          </div>
          <div>
            <div className="flex justify-center flex-col px-10 py-5">
              <Calendar />
            </div>
            {/* <div className=""> */}
            <h1 className="font-bold">생년월일</h1>
            <p>1994.10.5</p>
            {/* </div> */}
          </div>
          <div>
            <div className="flex justify-center flex-col px-10 py-5 ">
              <a href="https://github.com/Nanask/Portpolio" target="_blank">
                <GitHub />
              </a>
            </div>
            {/* <div className=""> */}
            <p className="font-bold">Git Hub</p>
            {/* </div> */}
          </div>
          <div className="flex">
            <div>
              <div className="flex justify-center flex-col px-10 py-5">
                <a href="https://velog.io/@nana1005" target="_blank">
                  <Velog />
                </a>
              </div>
              {/* <div className=""> */}
              <h1 className="font-bold">Velog</h1>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
