import React from 'react'
import { Text } from "components";

export const ProvincialNominee = () => {

    return (
        <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
            <div className="flex flex-col gap-[15px] items-start justify-start w-[100%]">
                <Text
                    className="font-manrope text-bluegray_900 text-left tracking-ls057 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    as="h13"
                    variant="h13"
                >
                    Provincial Nominee Program
                </Text>
                <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    Through the Provincial Nominee Programs (PNP), Canada’s provinces and territories can nominate people who wish to immigrate to Canada and reside in a particular province. Canada seeks to welcome over 80,000 immigrants per year under the PNP.
                </Text>
                <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    All provinces and territories, except for Quebec and Nunavut, has its own PNP. Each province determines its own criteria for choosing eligible candidates. PNPs operate Expression of Interest (EOI) systems, similar to Express Entry, and invite the highest scoring candidates in regular draws.
                </Text>
                <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    You do not need to have an Express Entry profile to apply. You can apply directly to a PNP stream. These are called ‘base’ streams.
                </Text>
                <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    You can also apply to PNP streams that are aligned with Express Entry. These are called ‘enhanced’ streams. The benefit of applying to an enhanced stream is that it gives you more options.
                </Text>
                <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    Receiving a provincial nomination through these streams awards Express Entry candidates an additional 600 Comprehensive Ranking System (CRS) points. This practically guarantees receiving an invitation to apply for permanent residence in a subsequent Express Entry draw.
                </Text>
            </div>
        </div>
    )
}

