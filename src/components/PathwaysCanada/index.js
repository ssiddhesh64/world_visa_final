import React, { useState } from 'react'
import { Text, Line, Img, Subclass, SkilledWorker, ExpressEntry, ProvincialNominee, Quebec, Atlantic, Federal, BusinessImmigration, FamilyClass } from "components";
import { sub887 } from '../../utils/sub887'
import { sub186 } from '../../utils/sub186'
import { sub187 } from '../../utils/sub187'
import { sub190 } from '../../utils/sub190'
import { sub858 } from '../../utils/sub858'
import { sub189 } from '../../utils/sub189'


export const PathwaysCanada = ({ setPanel }) => {

  const [subsection, setsubsection] = useState(sub189)
  const [id, setid] = useState("1")

  function handleClick(id, subsection) {
    setsubsection(subsection);
    setid(id)
  }

  return (
    <div className='flex flex-col px-[150px] sm:px-[50px] md:px-[50px] mt-[50px] w-[100%]'>
      <Img
        src="images/img_arrowright.svg"
        className="cursor-pointer h-[20px] w-[20px] rotate-180"
        alt="arrowright"
        onClick={() => setPanel("Cards")} />
      <Text
        className="font-manrope text-bluegray_900 text-center tracking-ls057 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
        as="h13"
        variant="h13"
      >
        Immigration Pathways
      </Text>
      <div className="flex flex-grow md:flex-col sm:flex-col flex-row font-manrope items-start justify-start mt-20 w-[100%]">
        <div className="flex flex-col md:h-[auto] sm:h-[auto] items-start justify-start w-[50%]">
          <div className="flex flex-row gap-[30px] items-center justify-start w-[full]">
            <Line className={`${id === '1' ? 'bg-blue_A700' : 'bg-bluegray_200'} h-[60px] w-[6px]`} />
            <Text
              className="cursor-pointer font-semibold text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
              variant="body14"
              onClick={() => { setid("1") }}
            >
              Skilled Worker Immigration Pathway
            </Text>
          </div>
          <div className="flex flex-row gap-[30px] items-center justify-start w-[full]">
            <Line className={`${id === '2' ? 'bg-blue_A700' : 'bg-bluegray_200'} h-[60px] w-[5px]`} />
            <Text
              className="cursor-pointer font-semibold text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              variant="body14"
              onClick={() => { setid("2") }}
            >
              Express Entry
            </Text>
          </div>
          <div className="flex flex-row gap-[30px] items-center justify-start w-[full]">
            <Line className={`${id === '3' ? 'bg-blue_A700' : 'bg-bluegray_200'} h-[60px] w-[5px]`} />
            <Text
              className="cursor-pointer font-semibold text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              variant="body14"
              onClick={() => { setid("3") }}
            >
              Provincial Nominee Program
            </Text>
          </div>
          <div className="flex flex-row gap-[30px] items-center justify-start w-[full]">
            <Line className={`${id === '4' ? 'bg-blue_A700' : 'bg-bluegray_200'} h-[60px] w-[5px]`} />
            <Text
              className="cursor-pointer font-semibold text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              variant="body14"
              onClick={() => { setid("4") }}
            >
              Quebec Immigration
            </Text>
          </div>
          <div className="flex flex-row gap-[30px] items-center justify-start w-[full]">
            <Line className={`${id === '5' ? 'bg-blue_A700' : 'bg-bluegray_200'} h-[60px] w-[5px]`} />
            <Text
              className="cursor-pointer font-semibold text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              variant="body14"
              onClick={() => { setid("5") }}
            >
              Atlantic Immigration Program
            </Text>
          </div>
          <div className="flex flex-row gap-[30px] items-center justify-start w-[full]">
            <Line className={`${id === '6' ? 'bg-blue_A700' : 'bg-bluegray_200'} h-[60px] w-[5px]`} />
            <Text
              className="cursor-pointer font-semibold text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              variant="body14"
              onClick={() => { setid("6") }}
            >
              Other Federal Skilled Worker Programs
            </Text>
          </div>
          <div className="flex flex-row gap-[30px] items-center justify-start w-[full]">
            <Line className={`${id === '7' ? 'bg-blue_A700' : 'bg-bluegray_200'} h-[60px] w-[5px]`} />
            <Text
              className="cursor-pointer font-semibold text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              variant="body14"
              onClick={() => { setid("7") }}
            >
              Business Immigration
            </Text>
          </div>
          <div className="flex flex-row gap-[30px] items-center justify-start w-[full]">
            <Line className={`${id === '8' ? 'bg-blue_A700' : 'bg-bluegray_200'} h-[60px] w-[5px]`} />
            <Text
              className="cursor-pointer font-semibold text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              variant="body14"
              onClick={() => { setid("8") }}
            >
              Family Class Sponsorship
            </Text>
          </div>
        </div>
        {(() => {
          switch (id) {
            case '1':
              return <SkilledWorker />
            case '2':
              return <ExpressEntry />
            case '3':
              return <ProvincialNominee />
            case '4':
              return <Quebec />
            case '5':
              return <Atlantic />
            case '6':
              return <Federal />
            case '7':
              return <BusinessImmigration />
            case '8':
              return <FamilyClass />
            default:
              return null
          }
        })()}
      </div>
    </div>
  )
}