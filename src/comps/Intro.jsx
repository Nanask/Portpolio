import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../css/intro.css";
import { Calendar } from "../icon/Calendar";
import { Email } from "../icon/Email";
import { Human } from "../icon/Human";
import { Location } from "../icon/Location";
import { Phone } from "./../icon/Phone";

function Intro() {
  return (
    <section>
      <div className="my-14 text-center ">
        <h1 className="text-2xl font-bold">ABOUT ME</h1>
      </div>
      <div className="text-center mb-10">
        <div className="flex justify-center space-x-16">
          <div>
            <div className="flex justify-center flex-col px-10 py-5">
              <Human />
            </div>
            <div className="">
              <h1>이름</h1>
              <p>나나</p>
            </div>
          </div>
          <div>
            <div className="flex justify-center flex-col px-10 py-5">
              <Calendar />
            </div>
            <div className="">
              <h1>생년월일</h1>
              <p>1994.10.5</p>
            </div>
          </div>
          <div>
            <div className="flex justify-center flex-col px-10 py-5">
              <Location />
            </div>
            <div className="">
              <h1>현 거주지</h1>
              <p>광주광역시 북구</p>
            </div>
          </div>
          <div>
            <div className="flex justify-center flex-col px-10 py-5">
              <Email />
            </div>
            <div className="flex-col ">
              <h1>이메일</h1>
              <p>ybhag1005@gmail.com</p>
            </div>
          </div>
          <div>
            <div className="flex justify-center flex-col px-10 py-5">
              <Phone />
            </div>
            <div className="">
              <h1>전화번호</h1>
              <p>010-6329-6685</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
