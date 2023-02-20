import React from 'react'
import { Text, Line, Img } from "components";
import { Eligibility } from 'components/Eligibility';



export const Subclass189 = ({ elig }) => {

    const sub189 = [
        'Allows invited workers with requisite skills to live and work permanently anywhere in Australia.',
        'For applicants who are not sponsored by family members or employers or nominated by a state government',
        'PR for 5 years and allowed to live in any part of the country',
    ]
  return (
    <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[50px] items-end justify-start md:w-[100%] sm:w-[100%] w-[full]">
        <div className="flex flex-col gap-[15px] items-stretch justify-start md:w-[100%] sm:w-[100%] w-[full]">
            <Text
                className="font-manrope text-bluegray_900 text-left tracking-ls057 md:tracking-ls1 sm:tracking-ls1 w-[full]"
                as="h13"
                variant="h13"
            >
                Subclass 189
            </Text>
            <ul style={{ listStyleType: 'disc' }} className="pl-[20px]">
                {sub189.map(sub => <li className='font-normal font-opensans leading-[33.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left tracking-ls03 md:tracking-ls1 sm:tracking-ls1' variant="body9">{sub}</li>)}
            </ul>
        </div>
        <Eligibility elig={elig}/>
    </div>
  )
}