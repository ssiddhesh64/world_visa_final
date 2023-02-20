import React from 'react'
import { Text } from "components";

export const Quebec = () => {

    return (
        <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
            <div className="flex flex-col gap-[15px] items-start justify-start w-[100%]">
                <Text
                    className="font-manrope text-bluegray_900 text-left tracking-ls057 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    as="h13"
                    variant="h13"
                >
                    Quebec Immigration
                </Text>
                <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    The province of Quebec has its own immigration system with its own selection criteria that is separate from Immigration, Refugees and Citizenship Canada (IRCC) programs and also separate from the PNP. Applicants who are selected to immigrate to Quebec are given a Quebec Selection Certificate, or Certificat de sélection du Québec (CSQ). This is a document that is issued by Quebec’s Immigration Ministry.
                </Text>
                <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    You are able to apply for a CSQ through one of Quebec’s immigration programs.
                </Text>
                <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    The Quebec Skilled Worker Program (QSWP) is for skilled workers who wish to immigrate to Quebec and become permanent residents of Canada.
                </Text>
                <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    The Quebec Experience Program (PEQ) is popular among international students who have completed their post-secondary education in Quebec. This program is also for foreign skilled workers with work experience in the province.
                </Text>
                <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    Quebec also boasts business immigration programs aimed at entrepreneurs and self-employed individuals who wish to run a business in Quebec, as well as those who want to obtain permanent residence in the province as immigrant investors.
                </Text>
            </div>
        </div>
    )
}

