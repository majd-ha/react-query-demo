import React, { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import CustomInput from "../components/CustomInput";
import SkiltionCard from "../components/SkiltionCard";
export default function Home() {
  const [field1, setfield1] = useState("");
  // const arr = [3, 34, 4, 5];
  console.log(field1);
  return (
    <div>
      <div>
        {/* <SkilitonAnimation count={arr} />*/}
        <SkiltionCard />
        {/* <ImgView /> */}
        <div className="w-[40%]">
          <CustomInput
            type={"text"}
            setValue={setfield1}
            icon={<FaEnvelope size={"2rem"} />}
          />
          <CustomInput
            type={"password"}
            setValue={setfield1}
            icon={<FaEyeSlash size={"80%"} />}
            opIcon={<FaEye size={"80%"} />}
          />{" "}
        </div>
      </div>
    </div>
  );
}
