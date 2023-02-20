import React from 'react'
import { Text, Line, Img } from "components";
import { Eligibility } from 'components/Eligibility';



export const Subclass190 = ({ elig }) => {

    const sub190 = [
        'For skilled workers who wish to live and work in regional Australia.',
        'Must live and work in the nominating state for at least for 2 years.'
    ]
  return (
    <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[30px] items-end justify-start md:w-[100%] sm:w-[100%] w-[100%]">
        <div className="flex flex-col gap-[15px] items-stretch justify-start md:w-[100%] sm:w-[100%] w-[full]">
            <Text
                className="font-manrope text-bluegray_900 text-left tracking-ls057 md:tracking-ls1 sm:tracking-ls1 w-[full]"
                as="h13"
                variant="h13"
            >
                Subclass 190 (Skilled Nominated Visa)
            </Text>
            {/* <Text
                  className="font-normal font-opensans leading-[33.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left tracking-ls03 md:tracking-ls1 sm:tracking-ls1"
                  variant="body9"
                >

                </Text> */}
            <ul >
                {sub190.map(sub => <li
                  className="font-normal font-opensans mt-[20px] leading-[33.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left tracking-ls03 md:tracking-ls1 sm:tracking-ls1 text-[20px]"
                >
                  {sub}  
                </li>)}
            </ul>
        </div>
        <Eligibility elig={elig}/>
    </div>
  )
}