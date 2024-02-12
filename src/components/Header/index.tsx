import { useState } from 'react'
import Logo from '/images/logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import { Button } from '../Button'

export function Header() {
	const [openMobileDropDown, setOpenMobileDropDown] = useState(false)

	function handleOpenCloseDropDownMenu() {
		if (openMobileDropDown === false) {
			setOpenMobileDropDown(true)
		} else {
			setOpenMobileDropDown(false)
		}
	}

	return (
		<>
			<div
				className={`fixed inset-0 h-screen bg-gradient-to-t from-neutral-800 to-neutral-veryLightGray opacity-50 md:hidden ${openMobileDropDown ? 'block' : 'hidden'}`}
			></div>
			<nav
				className={`${openMobileDropDown ? 'absolute' : 'hidden'} left-1/2 top-14 flex w-[90vw] -translate-x-1/2 transform flex-col items-center gap-4 bg-white p-8 font-bold text-primary-darkBlue md:hidden`}
			>
				<a href='#'>Princing</a>
				<a href='#'>Product</a>
				<a href='#'>About Us</a>
				<a href='#'>Careers</a>
				<a href='#'>Community</a>
			</nav>
			<header className='mb-16 mt-16 flex items-center justify-between px-4 lg:px-16 xl:px-40'>
				<img src={Logo} alt='Manage' className='z-10' />
				<nav className='hidden gap-4 font-semibold text-primary-darkBlue md:flex lg:gap-8'>
					<a href='#'>Princing</a>
					<a href='#'>Product</a>
					<a href='#'>About Us</a>
					<a href='#'>Careers</a>
					<a href='#'>Community</a>
				</nav>
				<Button href='' type='link' className='mx-0 hidden md:block'>
					Get Started
				</Button>
				<button
					className='z-10 text-primary-darkBlue md:hidden'
					role='Open/Close drop down menu'
					onClick={handleOpenCloseDropDownMenu}
				>
					{openMobileDropDown ? (
						<IoClose size={30} />
					) : (
						<GiHamburgerMenu size={30} />
					)}
				</button>
			</header>
		</>
	)
}
