import React from 'react'
import { Text, Img } from "components";


export const CanadianResources = ({ setPanel }) => {

    const offers = [
        'Immigration Assessment Form: Find out if you are eligible for skilled worker immigration.',
        'Express Entry CRS Calculator: Calculate your Express Entry Comprehensive Ranking System (CRS) score.',
        'Improve your Express Entry CRS Score: Learn how you can maximize your CRS score.',
        'Canada PNP Finder: Learn more about all of Canada\'s Provincial Nominee Program streams.',
        'Canada Work Permits: Read our section on how to work in Canada on a temporary basis.',
        'Family Sponsorship: Discover Canadian family class sponsorship options.',
        'Canada Study Options: Learn how to study in Canada as an international student.',
        'cicnews.com: Find the latest Canada immigration news.'
    ]

    return (
        <div className="flex flex-col gap-[30px] items-start justify-start mt-[50px] mx-[150px] sm:mx-[50px] md:mx-[50px]">
            <div className="flex flex-col gap-[15px] items-start justify-start w-[100%]">
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
                    Helpful Canadian Resources
                </Text>
                <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    1. Immigration, Refugees and Citizenship Canada's Website
                </Text>

                <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    IRCC's website provides information on all of Canada's permanent and temporary visa pathways. It also has FAQs, contact information, and the forms you need to submit your Canadian immigration application.
                </Text>

                <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    2. Worldvisa Immigration toolkits and Resources
                </Text>

                <Text
                    className="font-inter mt-[20px] font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left"
                    variant="body9"
                >
                    Worldvisa offers many additional tools and resources to support your immigration journey. These include:
                </Text>

                <div className='pl-[20px]'>
                    <ul style={{ listStyleType: 'disc' }}>
                        {offers.map(offer => <li
                            className="font-normal font-opensans not-italic text-gray_500 text-left md:tracking-ls1 sm:tracking-ls1 text-[20px]"
                        >
                            {offer}
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}
