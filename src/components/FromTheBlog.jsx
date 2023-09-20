import { useEffect, useRef } from 'react'
import { Container } from '@/components/Container'
import { Swiper, SwiperSlide } from 'swiper/react'
// import required modules
import { Pagination, Navigation } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import moment from 'moment'
import useRecentArticles from '@/hooks/useRecentArticles'
import Link from 'next/link'
/* eslint-disable @next/next/no-img-element */

export function FromTheBlog() {
  const swiperRef = useRef()
  const {
    data: recentArticles,
    loading: isLoading,
    error: isError,
  } = useRecentArticles()
  return (
    <Container className="my-16 sm:my-32">
      <section role="region" aria-label="From the Blog">
        <div className="mx-auto max-w-7xl">
          {/* <div className="background">
            <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132206/news-slider/background.webp" alt="" />
          </div> */}
          <div className="item-bg"></div>

          <div>
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h3 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                Learn, Thrive and Grow.
              </h3>
              <span className="sr-only">
                <h4 className="mt-4 text-base leading-8 text-zinc-600 dark:text-zinc-200">
                  Mushrooms Unveiled: Our Blog, Mushroom Cuisine, Mushroom
                  Glossary, Mushroom Growing Techniques, Health News, and Health
                  Resources
                </h4>
              </span>
            </div>
            <div className="mt-8 border-t border-zinc-200 pt-8 ">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[Pagination, Navigation]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper
                }}
                autoplay={{
                  delay: 3000, // Adjust the delay (in milliseconds) between each slide transition
                  disableOnInteraction: false, // Allow autoplay to continue even when the user interacts with the swiper
                }}
                breakpoints={{
                  768: {
                    // width: 576,
                    slidesPerView: 2,
                  },
                  1080: {
                    // width: 768,
                    slidesPerView: 3,
                  },
                }}
                className="pb-8"
              >
                {recentArticles.length &&
                  recentArticles.map((post) => (
                    <SwiperSlide key={post.slug}>
                      <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl border-2 bg-zinc-900 px-4 pb-8 pt-80 hover:ring-1 hover:ring-emerald-600 hover:ring-offset-1 sm:pt-48 lg:pt-80">
                        <Link
                          href={`/articles/${post.slug}`}
                          className="news__item"
                        >
                          <div>
                            <img
                              src={post.thumbnail}
                              alt={post.description}
                              className="absolute inset-0 -z-10 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-zinc-900 via-zinc-900/40" />
                            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-zinc-900/10" />
                          </div>
                          <div className="flex flex-wrap items-center overflow-hidden text-sm leading-6 text-zinc-300/70">
                            <div className="text-xs text-zinc-200">
                              <time className="">
                                {moment(post.published_at).format('LL')}
                              </time>
                              {post.readingTime && (
                                <>
                                  <span className="mx-2 font-semibold ">·</span>
                                  <span className="">
                                    {post.readingTime} min read
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                          <h4 className="py-4 text-3xl font-light text-white">
                            <div>
                              <span className="absolute inset-0 leading-6" />
                              {post.title}
                            </div>
                          </h4>
                          <span
                            href={post.category.href}
                            className="relative  rounded-full bg-gray-900/90 px-3 py-1.5 text-xs font-thin  text-white "
                          >
                            {post.category}
                          </span>
                        </Link>
                      </article>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>

            <div className="news-slider__ctr mt-8">
              <div className="news-slider__arrows">
                <button
                  className="news-slider__arrow news-slider-prev"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <span className="icon-font">
                    <IoIosArrowBack />
                  </span>
                </button>
                <button
                  className="news-slider__arrow news-slider-next"
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <span className="icon-font">
                    <IoIosArrowForward />
                  </span>
                </button>
              </div>

              <div className="news-slider__pagination"></div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}
