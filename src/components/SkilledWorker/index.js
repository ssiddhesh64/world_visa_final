import React from 'react'
import { Text } from "components";

export const SkilledWorker = () => {

    const family = [
        'your spouse or common-law partner',
        'dependent children',
        'dependent children of your spouse or common-law partner',
        'dependent children of dependent children'
    ]

    const children = [
        'under 22 years old and not a spouse or common law partner',
        '22 years of age or older, depended significantly on financial support from their parents before the age of 22 and can not support themselves financially due to a physical or mental condition'
    ]
    return (
        <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
            <div className="flex flex-col gap-[15px] items-start justify-start w-[100%]">
                <Text
                    className="font-manrope text-bluegray_900 text-left tracking-ls057 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    as="h13"
                    variant="h13"
                >
                    Skilled Worker Immigration Pathway
                </Text>
                <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    Under its Immigration Levels Plan, Canada aims to welcome over 400,000 immigrants every year. Some 60 per cent of these immigrants arrive as skilled workers. The main way skilled workers can immigrate to Canada is through the Express Entry application management system. The second main way is through the Provincial Nominee Program (PNP), followed by Quebec’s skilled worker programs, and then a few other targeted federal programs.
                </Text>
                <Text
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
                </Text>

                <div className='pl-[20px]'>
                    <ul style={{ listStyleType: 'disc' }}>
                        {family.map(fam => <li
                            className="font-normal font-opensans not-italic text-gray_500 text-left md:tracking-ls1 sm:tracking-ls1 text-[20px]"
                        >
                            {fam}
                        </li>)}
                    </ul>
                </div>

                <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    Dependent children are:
                </Text>
                <div className='pl-[20px]'>
                    <ul style={{ listStyleType: 'disc' }}>
                        {children.map(child => <li
                            className="font-normal font-opensans not-italic text-gray_500 text-left md:tracking-ls1 sm:tracking-ls1 text-[20px]"
                        >
                            {child}
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

