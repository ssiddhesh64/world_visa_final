import React from 'react'
import { Text } from "components";

export const Eligibility = ( {elig} ) => {
  return (
    <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
        <Text
            className="font-manrope text-bluegray_900 text-left tracking-ls057 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
            as="h13"
            variant="h13"
        >
            Eligibility
        </Text>
        <Text
            className="font-normal font-opensans leading-[33.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left tracking-ls03 md:tracking-ls1 sm:tracking-ls1"
            variant="body9"
        >
            Applicant must:
        </Text>
        <ul style={{ listStyleType: 'disc' }} className="pl-[20px]">
            {elig.map(eligible => <li className='font-normal font-opensans leading-[33.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left tracking-ls03 md:tracking-ls1 sm:tracking-ls1'>{eligible}</li>)}
        </ul>
    </div>
  )
}

