import React, { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { BsIncognito } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { TbFileDescription } from "react-icons/tb";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { useAddHero } from "../hooks/useSuperHeroData";
////
export default function AddSuperHero() {
  // const inputRef1 = useRef();
  // const inputRef2 = useRef();
  // const inputRef3 = useRef();
  // const inputRef4 = useRef();

  const [superHeroName, setsuperHeroName] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [alterEgo, setalterEgo] = useState(null);
  const [description, setdescription] = useState(null);

  const { mutate } = useAddHero();

  const submitHero = (e) => {
    e.preventDefault();
    // const refs = [inputRef1, inputRef2, inputRef3, inputRef4];
    // refs.map((el, i) => {
    //   if (el.current.value === "" || el.current.value === null) {
    //     el.current.classList.add("border-red-700");
    //   } else {
    //     el.current.classList.remove("border-red-700");
    //   }

    //   return el;
    // });
    console.log(superHeroName, alterEgo, imgSrc, description);
    const hero = { name: superHeroName, img: imgSrc, alterEgo, description };
    if (hero) {
      mutate(hero);
    }
  };
  return (
    <div className="flex justify-center p-5 ">
      <form className="rounded-lg p-5 flex flex-col justify-evenly items-center gap-5 border border-gray-500 w-[50%]">
        <label>Super Hero Name</label>

        <CustomInput
          icon={<BsIncognito size={"80%"} />}
          setValue={setsuperHeroName}
          type={"text"}
        />

        <label>Super Hero AlterEgo</label>

        <CustomInput
          icon={<FaUser size={"80%"} />}
          setValue={setalterEgo}
          type={"text"}
        />
        <label>image source</label>

        <CustomInput
          icon={<AiOutlineLink size={"80%"} />}
          setValue={setImgSrc}
          type={"text"}
        />
        <label>description</label>

        <CustomInput
          type={"text"}
          setValue={setdescription}
          icon={<TbFileDescription size={"80%"} />}
        />
        <CustomButton
          width={`w-[87px]`}
          height={`h-[45px]`}
          borderCol={`border border-green-500`}
          bg={`bg-gray-400`}
          onClick={submitHero}
        >
          Add
        </CustomButton>
      </form>
    </div>
  );
}
