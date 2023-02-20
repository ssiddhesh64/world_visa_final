import React from 'react'
import { Text } from "components";

export const ExpressEntry = () => {

    const entries = [
        'Federal Skilled Worker Program (FSWP)',
        'Canadian Experience Class (CEC)',
        'Federal Skilled Trades Program (FSTP)'
    ]

    const children = [
        'under 22 years old and not a spouse or common law partner',
        '22 years of age or older, depended significantly on financial support from their parents before the age of 22 and can not support themselves financially due to a physical or mental condition'
    ]
    return (
        <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
            <div className="flex flex-col gap-[15px] items-start justify-start w-[100%]">
                <Text
                    className="font-manrope text-bluegray_900 text-left tracking-ls057 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    as="h13"
                    variant="h13"
                >
                    Express Entry
                </Text>
                <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    Express Entry is Canada’s main way of managing skilled worker applications through the three main economic class immigration programs:                </Text>
                {/* <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    Skilled Workers Can Move to Canada with their Family
                </Text>

                <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    Skilled workers can also bring close family members with them to Canada. These family members also gain permanent resident status.
                </Text>
                <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    Close family members include:
                </Text> */}

                <div className='pl-[20px]'>
                    <ul style={{ listStyleType: 'disc' }}>
                        {entries.map(entry => <li
                            className="font-normal font-opensans not-italic text-gray_500 text-left md:tracking-ls1 sm:tracking-ls1 text-[20px]"
                        >
                            {entry}
                        </li>)}
                    </ul>
                </div>

                <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    Candidates who are eligible for Express Entry can upload their profile onto the federal government’s website. <br />
                    Candidates receive a Comprehensive Ranking System (CRS) score based on criteria such as their age, education, language skills, and work experience.
                </Text>

                <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    Approximately every two weeks, Immigration, Refugees and Citizenship Canada (IRCC) invites candidates with the highest CRS scores to apply for permanent residence.<br />
                    IRCC aims to process permanent residence applications in six months or less.<br />
                    Under its Immigration Levels Plan, Canada seeks to welcome an average of 110,000 immigrants through Express Entry each year.
                </Text>

            </div>
        </div>
    )
}

