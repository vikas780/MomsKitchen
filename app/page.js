import Image from 'next/image'
import logo from '@/public/logo1.png'
import about from '@/public/about_svg.svg'
import SubscribeButton from '@/component/SubscribeButton'
import Link from 'next/link'

export default function Home() {
  const aboutUsData = [
    'At The Magic of Mom, we believe that every meal should feel like home. Our mission is to deliver fresh, hygienic, and lovingly prepared tiffins that bring the warmth of a mother’s kitchen to your doorstep.',
    "Whether you're a student living away from home, a working professional with a busy schedule, or a senior citizen in need of nutritious meals — we’ve got you covered with customizable plans and on-time delivery.",
    'With a focus on quality ingredients, eco-friendly packaging, and personal service through WhatsApp and social platforms, we’re redefining convenience without compromising on love and care.',
  ]

  const testimonialsCard = [
    {
      title: 'Ritika, MBA Student',
      discription:
        'I used to skip meals during hectic classes, but Mom’s Tiffin changed that. Nutritious, tasty, and always on time!',
    },
    {
      title: 'Ankit, Software Engineer',
      discription:
        'Feels just like home-cooked food. The subscription is flexible, and I never miss lunch even on busy days.',
    },
  ]

  return (
    <>
      <div className='lg:pl-0 flex flex-col md:flex-row md:justify-between items-center relative sm:pl-[50px] mt-10 lg:mt-20 gap-7 md:gap-0 md:mb-4 mb-4'>
        <div className='flex flex-col items-center md:items-start gap-7'>
          <div className='w-full text-center md:text-left max-w-[46rem] overflow-hidden text-4xl sm:text-5xl lg:text-[87px] text-[#331B3B] font-bold font-hindVadodara leading-[99.8%] tracking-[0.01]'>
            <h1 className='whitespace-nowrap'>We serve homely</h1>
            <p />
            <span className='font-light'>
              meals with
              <br />
              <span className='relative w-full z-10'>
                Mom’s Touch
                <span className='bg-[#FDC221] lg:h-5 h-2 sm:bottom-2.5 bottom-1.5 lg:bottom-4 -z-[1] left-0 absolute w-full' />
              </span>
            </span>
          </div>
          <div className='max-w-[515px] flex flex-col gap-8'>
            <span className='text-[17px] font-normal font-hindVadodara leading-[146.3%] tracking-wide text-center md:text-left lg:mt-4 md:mt-3 mt-2'>
              Busy days should not mean unhealthy meals. Our tiffins bring
              home-style flavors, crafted fresh and delivered with love—just
              like Mom makes.
            </span>
            {/* 
            <button >
              Explore Menu
            </button> */}
            <Link
              href='https://drive.google.com/file/d/1rRB-ropPQize01S1pxsRQ0qNt9fFjUJV/view?usp=sharing'
              target='_blank'
              className='self-center md:self-start max-w-[207px] py-[22px] w-full flex justify-center items-center font-bold leading-[137.3%] tracking-wide bg-[#331B3B] text-white rounded-md lg:mt-4 md:mt-3 mt-2 cursor-pointer'
            >
              Explore Menu
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={logo}
            alt='Home'
            className='h-[362px] lg:h-full p-2'
            width={450}
            height={450}
          />
        </div>
      </div>

      <div className='flex justify-between items-center w-full px-5 sm:px-[50px] flex-col-reverse md:flex-row mt-11 sm:mt-0 gap-16 md:gap-4'>
        <div className='relative'>
          <Image
            src={about}
            className='md:h-full sm:h-[462px] h-[278px] !z-40 relative'
            alt='about us'
            width={350}
            height={350}
          />
        </div>
        <div className='flex flex-col gap-5 justify-start items-center md:items-start'>
          <div className='flex flex-col relative md:mt-28 lg:text-5xl text-4xl text-[#331B3B] leading-[106.3%] -tracking-[0.01] ont-hindVadodara'>
            <h1 className=' font-bold text-center md:text-left'>About Us</h1>
            <span className='lg:text-5xl text-4xl font-light'>
              Fake or
              <span className='ml-3 relative z-10'>
                Real
                <span className='bg-[#FDC221] h-2 md:bottom-2 bottom-1 -z-[1] absolute w-full right-[100px] sm:right-0 left-0' />{' '}
              </span>
            </span>
          </div>
          <div className='flex flex-col gap-2 p-5 lg:p-0'>
            {aboutUsData.map((data, index) => {
              return (
                <span
                  className='text-[15px] mt-[6px] max-w-[515px] text-center md:text-left Light font-medium tracking-[0.02] '
                  key={index}
                >
                  {data}
                </span>
              )
            })}
          </div>
          <div className='mt-2 md:mt-10'>
            <button className='self-center md:self-start max-w-[207px] py-[18px] lg:px-5 w-full flex justify-center items-center font-bold leading-[137.3%] tracking-wide bg-[#331B3B] text-white rounded-md px-5'>
              Explore More
            </button>
          </div>
        </div>
      </div>

      {/* Subscriptions Section */}
      <div className='mt-7 mx-auto '>
        <div className='mb-7 max-w-2xl text-center mx-auto'>
          <h2 className='md:text-5xl text-center w-full text-3xl  text-[#331B3B] font-bold'>
            <span className='relative z-10 ml-2'>
              Subscriptions
              <span className='bg-[#FDC221] h-2 md:bottom-2 bottom-1 -z-[1] absolute w-full right-[100px] sm:right-0 left-0' />
            </span>
          </h2>
        </div>

        <div className='flex lg:min-h-[34rem] md:min-h-[62rem] min-h-[64rem] pt-[30px] py-[30px] px-[40px] bg-[#331B3B] mb-3 rounded-[10px] mx-2'>
          <div className='min-w-full'>
            <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]'>
              {[1, 2, 3].map((id) => (
                <div
                  key={id}
                  className='w-full bg-white rounded-[10px] shadow border border-[#E1E3E5] divide-y'
                >
                  <div className='pt-[15px] px-[25px] pb-[25px]'>
                    <div className='flex justify-end'>
                      <div className='bg-[#F6F6F7] rounded-[20px] flex justify-center items-center px-[12px]'>
                        <p className='text-[#00153B] text-[12px] leading-[28px] font-bold'>
                          {id === 1 ? 'Starter' : id === 2 ? 'Value' : 'Pro'}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className='text-[#00153B] text-[19px] font-bold'>
                        {id === 1
                          ? 'Trial'
                          : id === 2
                          ? 'Fast Start'
                          : 'Accelerate'}
                      </p>
                      <p className='text-[#00153B] text-[50px] font-bold'>
                        {id === 1
                          ? '₹150 - ₹300'
                          : id === 2
                          ? '₹4,300'
                          : '₹20,000'}
                      </p>
                    </div>
                    <div>
                      <p className='text-[#717F87] text-[18px] font-medium'>
                        {id === 1
                          ? 'One time order + Delivery fee (Price may vary according to meal type)'
                          : id === 2
                          ? '15 days plan (Price may vary according to meal type)'
                          : '3 month plan (Price may vary according to meal type)'}
                      </p>
                    </div>
                  </div>
                  <div className='pt-[25px] px-[25px] pb-[35px]'>
                    <div className='text-[#717F87] text-[14px] font-medium space-y-1'>
                      <p>Freshly cooked home-style meals</p>
                      <p>Hygienic packaging & prompt delivery</p>
                      <p>Customizable daily menu</p>
                      <p>Ideal for students & professionals</p>
                      <p>WhatsApp support & reminders</p>
                    </div>
                    <div className='mt-[25px]'>
                      <SubscribeButton
                        label={
                          id === 2
                            ? 'Current Plan'
                            : id === 1
                            ? 'Downgrade +'
                            : 'Upgrade +'
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className='flex flex-col items-center justify-center w-full gap-14 md:mt-[75px] mt-9 px-5'>
          <div className='text-center w-full text-3xl md:text-5xl text-[#331B3B] font-hindVadodara -tracking-[0.01em]'>
            <h1 className='whitespace-nowrap font-bold leading-[99.8%] text-center'>
              Our Testimonials
            </h1>
            <span className='md:whitespace-nowrap !text-center font-light mt-1 max-w-sm md:max-w-xl mx-auto'>
              What Our Clients Are
              <span className='relative z-10 ml-2'>
                Saying
                <span className='bg-[#FDC221] h-2 md:bottom-2 bottom-1 -z-[1] absolute w-full right-[100px] sm:right-0 left-0' />
              </span>
            </span>
          </div>

          <div className='flex sm:gap-[69px] gap-7 flex-col md:flex-row mb-6'>
            {testimonialsCard.map((data, index) => (
              <div
                key={index}
                className='flex flex-col gap-7 justify-start drop-shadow-[0_7px_9px_rgba(0,0,0,0.15)] bg-white pl-[29px] pr-[35px] py-9'
              >
                <div>{/* SVG icon */}</div>
                <div className='flex flex-col justify-start gap-3'>
                  <span className='max-w-[384px] w-full text-base font-normal font-hindVadodara leading-[159.8%] tracking-wide'>
                    {data.discription}
                  </span>
                  <span className='flex gap-2 items-center text-base font-semibold font-hindVadodara leading-[159.8%] tracking-wide'>
                    <span className='border-[2px] border-[#FDC221] w-3 relative bottom-0.5' />
                    {data.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
