'use client'
import React, { useState } from 'react';
import { Segmented } from 'antd';
import Image from 'next/image';

export default function Navbar() {
	const [value, setValue] = useState<string | number>("Information");
	return (
		<Segmented size='large' value={value} onChange={setValue} block className='flex'
			options={[
				{ label: 'Information', value: 'Information', icon: <Image src='/icons/svg/House.svg' width={20} height={20} className='inline md:w-[24px] md:h-[24px]' alt='information'/> },
				{ label: 'Numbers', value: 'Numbers', icon: <Image src='/icons/svg/pull-door 1.svg' width={20} height={20} className='inline md:w-[24px] md:h-[24px]' alt='Numbers'/> },
				{ label: 'Rate', value: 'Rate', icon: <Image src='/icons/svg/note-2.svg' width={20} height={20} className='inline md:w-[24px] md:h-[24px]' alt='Numbers'/> },
				{ label: 'Calendar and prices', value: 'Calendar and prices', icon: <Image src='/icons/svg/calendar_dark.svg' width={20} height={20} className='inline md:w-[24px] md:h-[24px]' alt='Numbers'/> },
				{ label: 'Reservations', value: 'Reservations', icon: <Image src='/icons/svg/receipt-text.svg' width={20} height={20} className='inline md:w-[24px] md:h-[24px]' alt='Numbers'/> },
			]}
		/>
	)

}
