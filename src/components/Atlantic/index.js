import React from 'react'
import { Text } from "components";

export const Atlantic = () => {

    const provinces = [
        'New Brunswick',
        'Newfoundland and Labrador',
        'Nova Scotia',
        'Prince Edward Island'
    ]

    return (
        <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
            <div className="flex flex-col gap-[15px] items-start justify-start w-[100%]">
                <Text
                    className="font-manrope text-bluegray_900 text-left tracking-ls057 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    as="h13"
                    variant="h13"
                >
                    Atlantic Immigration Program
                </Text>
                <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    Atlantic Canada has its own immigration program called the Atlantic Immigration Program (AIP). The AIP allows employers to attract and retain foreign talent. Atlantic Canada includes four provinces:
                </Text>

                <div className='pl-[20px]'>
                    <ul style={{ listStyleType: 'disc' }}>
                        {provinces.map(province => <li
                            className="font-normal font-opensans not-italic text-gray_500 text-left md:tracking-ls1 sm:tracking-ls1 text-[20px]"
                        >
                            {province}
                        </li>)}
                    </ul>
                </div>

                <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    Employers who wish to benefit from the AIP must find a suitable candidate and offer them a job. They do not need to conduct a labour market impact assessment. Once the candidate accepts the offer, the employer must connect the candidate with a designated organization that will help him or her develop a settlement plan. Employers who wish to quickly fill the position may also have access to a temporary work permit.
                </Text>

            </div>
        </div>
    )
}

