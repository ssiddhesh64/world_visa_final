import React from 'react'
import { Text } from "components";

export const Federal = () => {

    const federalPrograms = [
        'Rural and Northern Immigration Pilot (RNIP)',
        'Agri-Food Immigration Pilot',
        'Home Child Care Provider Pilot',
        'Home Support Worker Pilot'
    ]

    return (
        <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
            <div className="flex flex-col gap-[15px] items-start justify-start w-[100%]">
                <Text
                    className="font-manrope text-bluegray_900 text-left tracking-ls057 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    as="h13"
                    variant="h13"
                >
                    Other Federal Skilled Worker Programs
                </Text>
                <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    Additional targeted federal skilled worker programs exist that help certain immigration candidates gain permanent residence. The additional federal programs include:
                </Text>
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
                        {federalPrograms.map(programs => <li
                            className="font-normal font-opensans not-italic text-gray_500 text-left md:tracking-ls1 sm:tracking-ls1 text-[20px]"
                        >
                            {programs}
                        </li>)}
                    </ul>
                </div>

                <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    The RNIP allows small and remote communities across Canada to attract and retain foreign workers. Participating communities take the lead in attracting new immigrants and matching them with suitable jobs.
                </Text>

                <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    The Agri-Food Immigration Pilot provides a pathway to Canadian permanent residence to eligible temporary foreign workers in the Agriculture and Agri-Food industry. In order to be eligible, candidates need to have completed 12 months of work experience, hold a high school diploma and meet minimum language requirements.
                </Text>

                <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    The remaining immigration programs provide pathways to permanent residence for foreign caregivers, including childcare providers and home support workers. Caregivers are required to have at least two years of work experience relevant to the program they are applying for.
                </Text>

            </div>
        </div>
    )
}

