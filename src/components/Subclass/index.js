import React from 'react'
import { Text, Line, Img } from "components";
import { Eligibility } from 'components/Eligibility';

export const Subclass = ({ sub, elig }) => {

  return (
    <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
      <div className="flex flex-col gap-[15px] items-start justify-start w-[100%]">
        <Text
          className="font-manrope text-bluegray_900 text-left tracking-ls057 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
          as="h13"
          variant="h13"
        >
          {sub.title}
        </Text>
        <ul >
          {sub.content.map(sub => <li
            className="font-normal font-opensans mt-[20px] leading-[33.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left tracking-ls03 md:tracking-ls1 sm:tracking-ls1 text-[20px]"
          >
            {sub}
          </li>)}
        </ul>
      </div>
      <Eligibility elig={elig} />
    </div>
  )
}