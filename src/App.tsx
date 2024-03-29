import { Button } from './components/Button'
import { FeedbackSection } from './components/FeedbackSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

import { FeedbackData } from './data'

import './index.css'

function App() {
	return (
		<main className=' font-be-vietnam-pro text-neutral-darkGrayishBlue '>
			<div className='relative -z-20'>
				<div className='absolute -right-7 -top-20 -z-10 h-96 w-96 bg-tablet-pattern bg-cover bg-no-repeat lg:-top-32 lg:h-[600px] lg:w-[600px]'></div>
				<div className='absolute -left-56 top-[1000px] hidden h-[450px] w-[450px] bg-tablet-pattern bg-cover bg-no-repeat lg:block'></div>
			</div>
			<Header />
			<div className='space-y-16 px-4 py-8 lg:px-16 lg:py-16 xl:px-40'>
				<section className='grid items-center md:grid-cols-2'>
					<img
						src='/manage-landpage/images/illustration-intro.svg'
						alt=''
					/>
					<div className='space-y-4 text-center md:row-start-1 md:text-left lg:space-y-8'>
						<h2 className='title'>
							Bring everyone together to build better products.
						</h2>
						<p className='text-balance'>
							Manage makes it simple for software teams to plan
							day-to-day tasks while keeping the larger team goals in
							view.
						</p>
						<Button type='link' href='#' className='md:mx-0'>
							Get Started
						</Button>
					</div>
				</section>
				<div className='flex flex-col gap-8 md:flex-row'>
					<section className='space-y-4 text-center md:space-y-8 md:text-left'>
						<h2 className='title lg:text-5xl'>
							What’s different about Manage?
						</h2>
						<p>
							Manage provides all the functionality your team needs,
							without the complexity. Our software is tailor-made for
							modern digital product teams.
						</p>
					</section>
					<section className='space-y-4'>
						<section className='space-y-2'>
							<h2 className='flex items-center gap-2 rounded-full bg-[#FFF0EC] font-bold text-primary-darkBlue md:bg-transparent'>
								<span className='block rounded-3xl bg-primary-brightRed px-6 py-2 font-bold text-white'>
									01
								</span>
								Track company-wide progress
							</h2>
							<p>
								See how your day-to-day tasks fit into the wider
								vision. Go from tracking progress at the milestone
								level all the way done to the smallest of details.
								Never lose sight of the bigger picture again.
							</p>
						</section>
						<section className='space-y-2'>
							<h2 className='flex items-center gap-2 space-y-2 rounded-full bg-[#FFF0EC] font-bold  text-primary-darkBlue md:bg-transparent'>
								<span className='block rounded-3xl bg-primary-brightRed px-6 py-2 font-bold text-white'>
									02
								</span>
								Advanced built-in reports
							</h2>
							<p>
								Set internal delivery estimates and track progress
								toward company goals. Our customisable dashboard helps
								you build out the reports you need to keep key
								stakeholders informed.
							</p>
						</section>
						<section className='space-y-2'>
							<h2 className='flex items-center gap-2 space-y-2 rounded-full bg-[#FFF0EC] font-bold  text-primary-darkBlue md:bg-transparent'>
								<span className='block rounded-3xl bg-primary-brightRed px-6 py-2 font-bold text-white'>
									03
								</span>
								Everything you need in one place
							</h2>
							<p>
								Stop jumping from one service to another to
								communicate, store files, track tasks and share
								documents. Manage offers an all-in-one team
								productivity solution.
							</p>
						</section>
					</section>
				</div>
			</div>
			<FeedbackSection feedbacks={FeedbackData} />
			<section className='bg-simplify-section-mobile md:bg-simplify-section-desktop relative mt-16 items-center justify-center space-y-8 bg-primary-brightRed bg-no-repeat px-4 py-16 text-white md:flex md:grid-cols-2 md:space-y-0 md:px-10 lg:py-16 xl:px-40'>
				<h2 className='title text-balance text-center text-white md:w-fit md:text-left'>
					Simplify how your team works today.
				</h2>
				<Button
					type='link'
					href='#'
					className='flex h-12 w-fit flex-shrink-0 items-center justify-center bg-neutral-veryLightGray px-5 text-primary-brightRed'
				>
					Get Started
				</Button>
			</section>
			<Footer />
		</main>
	)
}

export default App

