import React from 'react'
import { Text, Img } from "components";
import { benefitsAustralia } from '../../utils/benefitsAustralia'
import { eligibility } from 'utils/eligibility';

export const WhyChooseCanada = ({ setPanel }) => {
  return (
    <div className='flex flex-col items-center justify-center p-[20px] mx-[150px] sm:mx-[50px] md:mx-[50px]'>
      <div className='flex items-start justify-start'>
        <Img
          src="images/img_arrowright.svg"
          className="cursor-pointer h-[20px] w-[20px] rotate-180"
          alt="arrowright"
          onClick={() => setPanel("Cards")} />
      </div>
      <div className='flex justify-center items-center'>
        <Text
          className="flex font-manrope mt-[25px] text-bluegray_900 text-center tracking-ls057 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
          as="h13"
          variant="h13"
        >
          Why Choose Canada?
        </Text>
      </div>
      <Text
        className="font-inter font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[30px] not-italic text-black_900 text-left"
        variant="body9"
      >
        {`Australia's rich culture, well-paying employment, excellent healthcare system, minimal air pollution, excellent educational system, and array of professional opportunities have led to an increase in individuals wanting to immigrate there in recent years. Australia welcomes immigrants with open arms and offers a variety of options for them to live, work, and settle permanently. If you wish to migrate and stay in Australia permanently, now is the right time to apply! Get assistance from our qualified Australia immigration counselor and MARA certified Agents to take this significant step. With a team of qualified immigration experts & visa consultants, WorldVisa offers the best support to make your Australia immigration process go smoothly and hassle-free.`}
        <br />
        <br />
        Key Benefits of Migrating to Australia
        <br />
        <br />
        <div>
          With all of these major advantages, Australia has become the most
          preferred destination for migrants. Sydney, Melbourne, Perth, the
          Gold Coast, Queensland, and other major cities in Australia welcome
          overseas nationals. Let us know where you wish to relocate, and our
          immigration experts and MARA certified agents will help you through
          the immigration procedure and provide their expertise to get you
          ready to travel to Australia.
        </div>

        <ul style={{ listStyleType: 'disc' }} className="pl-[20px] mt-[20px]">
          {benefitsAustralia.map(benefit => <li className='pt-[5px]'>{benefit}</li>)}
        </ul>

        <div className='mt-[30px]'>
          Check your Eligibility
        </div>
        <div className='mt-[30px]'>
          Here are the standardized requirements to apply for Australia PR
        </div>

        <ul style={{ listStyleType: 'disc' }} className="pl-[20px] mt-[10px]">
          {eligibility.map(eligibile => <li className='pt-[5px]'>{eligibile}</li>)}
        </ul>
      </Text>
    </div>
  )
}
