import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'

import { Button } from '../Button'

type FeedbackProps = {
	avatarUrl: string
	author: string
	quote: string
}

type FeedbackSectionProps = {
	feedbacks: FeedbackProps[]
}

export function FeedbackSection({ feedbacks }: FeedbackSectionProps) {
	return (
		<section className='space-y-8 px-4 sm:px-0'>
			<h2 className='title mb-16 text-center'>What they've said</h2>
			<Swiper
				spaceBetween={35}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className='mySwiper'
				breakpoints={{
					1024: {
						slidesPerView: 3,
					},
					768: {
						slidesPerView: 2.5,
					},
					640: {
						slidesPerView: 2,
					},
				}}
			>
				{feedbacks.map((feedback, index) => {
					return (
						<SwiperSlide key={`${index + feedback.avatarUrl}`}>
							<div className='pt-6'>
								<div className='flex flex-col items-center gap-8 bg-slate-50 text-center'>
									<img
										className='-mt-6 h-20 w-20'
										role='Avatar Person'
										src={feedback.avatarUrl}
									/>
									<h2>{feedback.author}</h2>
									<blockquote>{feedback.quote}</blockquote>
								</div>
							</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
			<Button type='link' href='#' className='self-center'>
				Get Started
			</Button>
		</section>
	)
}
