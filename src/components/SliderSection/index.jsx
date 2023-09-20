import React, { useRef, useState, useEffect } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { useRouter } from 'next/router'
import { FaPlusCircle } from 'react-icons/fa'

// import required modules
import Image from 'next/image'
import { RxCross2 } from 'react-icons/rx'
import { FaChevronCircleLeft } from 'react-icons/fa'
import { FaCircleChevronRight } from 'react-icons/fa6'
import SwiperCore, { Navigation } from 'swiper'

SwiperCore.use([Navigation])
const Index = ({ products }) => {
  console.log(products, 'slidersection')
  const [showButton, setShowButton] = useState(false)
  const swiperRef = useRef(null)

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }
  const [slidesPerView, setSlidesPerView] = useState(4) // Default number of slides per view on desktop

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia('(max-width: 767px)').matches
      setSlidesPerView(isMobile ? 2 : 3) // Change number of slides per view based on the device type
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    // Call the handleResize function once to set the initial value
    handleResize()

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const swiperParams = {
    slidesPerView: slidesPerView,
    spaceBetween: 20, // Adjust spacing between slides as needed
    // Add other Swiper options here as needed
  }
  const router = useRouter()

  const handleAddToCart = (product) => {
    window.Snipcart.api.cart.items.add({
      id: product.id,
      name: product.title,
      price: product.price,
      url: `${router.basePath}/products/${product.slug}`,
      image: product.image,
    })
  }

  return (
    <div className="">
      <div className="flex justify-center pb-4 mx-auto max-w-7xl md:pr-2">
        <button
          onClick={() => setShowButton(!showButton)}
          className="relative z-10 inline-flex items-center justify-center h-12 px-6 py-0 overflow-hidden text-base font-medium tracking-wide text-white transition-all duration-300 ease-in-out bg-blue-500 border-2 border-blue-500 border-solid rounded-md cursor-pointer select-none group outline-0 hover:text-blue-500 focus:text-blue-500"
        >
          <FaPlusCircle
            className={`ml-1 fill-white ${
              showButton
                ? 'group-hover:rotate-180 group-hover:rounded-full group-hover:bg-blue-600 group-hover:text-blue-600 group-hover:transition-all'
                : ''
            }`}
            size={22}
          />
          <strong className="pl-2 font-medium text-white">
            Browse Liquid Cultures
          </strong>

          <span
            className={`absolute bottom-0 left-1/2 h-full w-0 -translate-x-1/2 bg-neutral-950/50 transition-all duration-300 ease-in-out ${
              showButton ? 'group-hover:w-[105%]' : ''
            } -z-[1] group-focus:w-[105%]`}
          ></span>
        </button>
      </div>
      <div
        className={`${
          showButton ? 'block' : 'hidden'
        } screen relative mx-auto h-[90%]  max-w-[1440px] rounded-2xl border-gray-500 bg-[#202020] py-6 transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-between">
          <div className="mx-12 my-6">
            <button onClick={() => setShowButton(false)}>
              <RxCross2 className="p-2 text-4xl text-white bg-gray-700 rounded-full" />
            </button>
          </div>
          <div className="flex gap-2 mx-12 my-6">
            <button onClick={handlePrevClick}>
              <FaChevronCircleLeft className="p-2 text-4xl text-white bg-gray-700 rounded-full" />
            </button>
            <button onClick={handleNextClick}>
              <FaCircleChevronRight className="p-2 text-4xl text-white bg-gray-700 rounded-full" />
            </button>
          </div>
        </div>
        <div className="px-8">
          <Swiper
            ref={swiperRef}
            {...swiperParams}
            // centeredSlides={3}
            spaceBetween={30}
            className="h-full mySwiper "
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
          >
            {products?.map((product) => (
              <SwiperSlide
                key={product.id}
                className="flex  h-full w-[40%] items-center justify-center text-center text-lg dark:!text-white md:w-[30%]"
              >
                <article className="... ... ... group relative flex w-full flex-col overflow-hidden rounded-lg border border-zinc-300/60 bg-gradient-to-t from-slate-900/10 via-zinc-100 shadow-sm backdrop-blur-md transition duration-300   ease-in-out  hover:border-blue-600 hover:shadow-xl focus:border-blue-500 active:border-blue-500  dark:border-zinc-700/80 dark:bg-gradient-to-b dark:from-neutral-800/60 dark:via-neutral-900 dark:hover:border-emerald-600">
                  <div className="group relative  h-[200px] md:w-full">
                    <div className="h-[300px] w-[300px]">
                      <Image
                        src={product.image}
                        alt={product.alt}
                        width={300}
                        height={300}
                        className="absolute inset-0 object-cover w-full h-full p-2 duration-300 transform opacity-100 group-hover:ease-in-ease-out group-hover:opacity-0 sm:object-contain"
                      />
                    </div>
                    <Image
                      src={product.relatedImages[0].src}
                      alt={product.alt}
                      width={300}
                      height={300}
                      className="absolute inset-0 object-cover w-full h-full p-2 duration-300 opacity-0 group-hover:ease-in-ease-out rounded-xl group-hover:opacity-100"
                    />
                  </div>
                  <div className="flex flex-col flex-1 w-full px-4 py-4 space-y-0 text-left sm:w-full ">
                    <h4 className="inline-block text-[10px] font-[300] text-zinc-800 dark:text-amber-500 sm:text-xs">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.category}
                    </h4>
                    <h3 className="text-xl font-normal tracking-wide text-shadow text-zinc-800 hover:underline dark:text-amber-100 sm:font-bold sm:tracking-tight md:text-2xl">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </h3>

                    <div className="flex items-center justify-between md:items-center md:py-2.5 lg:justify-between">
                      <div className="flex">
                        <p className="!mb-0 text-xl font-semibold tracking-tight text-blue-600 dark:text-zinc-50 md:text-2xl">
                          ${product.price}
                        </p>
                      </div>
                      <div className="group">
                        <button
                          onClick={() => handleAddToCart(product)}
                          type="button"
                          className="... ... ease-in-ease-out ... ... ... ... rounded-full bg-blue-600 p-2 text-white shadow-sm outline outline-1 outline-offset-4 outline-slate-600/40 transition-transform duration-300 focus:ring-4 focus:ring-[#2557D6]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 group-hover:scale-90  group-hover:bg-emerald-500 group-hover:shadow-md  group-hover:ring group-hover:ring-slate-800/50 group-hover:ring-offset-4 dark:bg-emerald-600 dark:outline dark:outline-1 dark:outline-offset-4 dark:outline-slate-50/50 dark:focus:ring-[#2557D6]/50"
                          aria-label="Add to Cart"
                          role="button"
                        >
                          <ShoppingCartIcon
                            className="w-5 h-5 md:h-6 md:w-6"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Index
