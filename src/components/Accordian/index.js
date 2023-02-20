import React, { useState } from 'react'
import { Text, Line } from "components";

const Accordian = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='flex flex-col items-stretch justify-start max-w-[730px] w-[100%]'>
            <div className='flex justify-center items-center' onClick={() => setIsActive(!isActive)}>
                <div className='flex flex-1 flex-col gap-[30px] items-start justify-start max-w-[730px] pt-[30px] w-[100%]'>
                    <Text
                        className="leading-[33.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[686px] text-bluegray_900 text-left tracking-ls032999999999999996 md:tracking-ls1 sm:tracking-ls1"
                        as="h15"
                        variant="h15"
                    >
                        {title}
                    </Text>
                </div>
                <div>{isActive ? '^' : 'v'}</div>
            </div>
            {isActive && <Text
                className="font-normal font-opensans leading-[33.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[686px] not-italic text-gray_500 text-left tracking-ls03 md:tracking-ls1 sm:tracking-ls1"
                as="h14"
                variant="h14"
            >
                {content}
            </Text>}
            <Line className="bg-gray_500 h-[1px] w-[100%] mt-5" />
        </div>
    )
}

export { Accordian }