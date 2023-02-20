import React, { useState } from 'react'
import { Text, Line, Img, Subclass189, Subclass190, Subclass } from "components";
import { sub189elig } from '../../utils/sub189elig'
import { sub887 } from '../../utils/sub887'
import { sub186 } from '../../utils/sub186'
import { sub187 } from '../../utils/sub187'
import { sub190 } from '../../utils/sub190'
import { sub858 } from '../../utils/sub858'
import { sub189 } from '../../utils/sub189'


export const Pathways = ({ setPanel }) => {
        
    const [subsection, setsubsection] = useState(sub189)
    const [id, setid] = useState("1")

    function handleClick(id, subsection) {
        setsubsection(subsection);
        setid(id)
    }

  return (
    <div className='flex flex-col px-[150px] sm:px-[50px] md:px-[50px] mt-[50px]'>
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
        <div className="flex md:flex-col sm:flex-col flex-row font-manrope gap-[47px] items-stretch justify-center mt-[50px] md:w-[100%] sm:w-[100%]">
            <div className="flex flex-col md:h-[auto] sm:h-[auto] items-stretch justify-start sm:w-[100%] w-[auto]">
              <div className="flex flex-row gap-[30px] items-center justify-start w-[full]">
                <Line className={`${id === '1' ? 'bg-blue_A700' : 'bg-bluegray_200'} h-[60px] w-[5px]`} />
                <Text
                  className="cursor-pointer  font-semibold text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body14"
                  onClick={() => {setsubsection(sub189); setid("1")}}
                >
                  Subclass 189 (Skilled Independent Visa):
                </Text>
              </div>
              <div className="flex flex-row gap-[30px] items-center justify-start sm:pr-[20px] pr-[15px] w-[full]">
                <Line className={`${id === '2' ? 'bg-blue_A700' : 'bg-bluegray_200'} h-[60px] w-[5px]`} />
                <Text
                  className="cursor-pointer  font-semibold text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body14"
                  onClick={() => {setsubsection(sub190); setid("2")}}
                >
                  Subclass 190 (Skilled Nominated Visa)
                </Text>
              </div>
              <div className="flex flex-row gap-[30px] items-center justify-start w-[full]">
                <Line className={`${id === '3' ? 'bg-blue_A700' : 'bg-bluegray_200'} h-[60px] w-[5px]`} />
                <Text
                  className=" cursor-pointer font-semibold text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body14"
                  onClick={() => {setsubsection(sub190); setid("3")}}
                >
                  Subclass 491 (Skilled Work Regional (Provisional) Visa)
                </Text>
              </div>
              <div className="flex flex-row gap-[30px] items-center justify-start sm:pr-[20px] pr-[15px] sm:w-[100%] w-[full]">
                <Line className={`${id === '4' ? 'bg-blue_A700' : 'bg-bluegray_200'} h-[60px] w-[5px]`} />
                <Text
                  className=" cursor-pointer font-semibold text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body14"
                  onClick={() => {setsubsection(sub190); setid("4")}}
                >
                  Subclass 494 : Skilled Employer Sponsored Regional <br />
                  (Provisional) Visa
                </Text>
              </div>
              <div className="flex flex-row gap-[30px] items-center justify-start sm:pr-[20px] pr-[15px] sm:w-[100%] w-[full]">
                <Line className={`${id === '5' ? 'bg-blue_A700' : 'bg-bluegray_200'} h-[60px] w-[7px]`} />
                <Text
                  className="  font-semibold text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body14"
                >
                  Subclass 491 (Skilled Work Regional (Provisional) visa
                  – Subsequent Entrant
                </Text>
              </div>
              <div className="flex flex-row gap-[30px] items-center justify-start sm:pr-[20px] pr-[15px] sm:w-[100%] w-[full]">
                <Line className={`${id === '6' ? 'bg-blue_A700' : 'bg-bluegray_200'} h-[60px] w-[9px]`} />
                <Text
                  className="  font-semibold text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body14"
                >
                  Skilled Employer Sponsored Regional (Provisional) Visa
                   (subclass 494) -Subsequent Entrant
                </Text>
              </div>
              <div className="flex flex-row gap-[30px] items-center justify-start sm:pr-[20px] pr-[15px] w-[full]">
                <Line className={`${id === '7' ? 'bg-blue_A700' : 'bg-bluegray_200'} h-[60px] w-[5px]`} />
                <Text
                  className="  font-semibold text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body14"
                  onClick={() => {setsubsection(sub858); setid("7")}}
                >
                  Subclass 858 : Global Talent Visa
                </Text>
              </div>
              <div className="flex flex-row gap-[30px] items-center justify-start sm:pr-[20px] pr-[15px] w-[full]">
                <Line className={`${id === '8' ? 'bg-blue_A700' : 'bg-bluegray_200'} h-[60px] w-[5px]`} />
                <Text
                  className="cursor-pointer font-semibold text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body14"
                >
                  Subclass 155 (Resident Return Visa)
                </Text>
              </div>
              <div className="flex flex-row gap-[30px] items-center justify-start sm:pr-[20px] pr-[15px] w-[full]">
                <Line className={`${id === '9' ? 'bg-blue_A700' : 'bg-bluegray_200'} h-[60px] w-[5px]`} />
                <Text
                  className="cursor-pointer font-semibold text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body14"
                  onClick={() => {setsubsection(sub887); setid("9")}}
                >
                  Subclass 887
                </Text>
              </div>
            </div>
            <Subclass sub={subsection} elig={subsection.eligibility}/>
          </div>
    </div>
  )
}