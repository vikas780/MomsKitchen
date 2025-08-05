import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

export default async function SubscribePage() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!user) redirect('/api/auth/login')

  return (
    <form className='shadow-xl lg:p-4 lg:mt-4'>
      <div className='space-y-12'>
        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold text-gray-900'>
            Delivery Information
          </h2>
          <p className='mt-1 text-sm text-gray-600'>
            Use a permanent address where you can receive mail.
          </p>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label
                htmlFor='first-name'
                className='block text-sm font-medium text-gray-900'
              >
                First name
              </label>
              <div className='mt-2'>
                <input
                  id='first-name'
                  name='first-name'
                  type='text'
                  autoComplete='given-name'
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='last-name'
                className='block text-sm font-medium text-gray-900'
              >
                Last name
              </label>
              <div className='mt-2'>
                <input
                  id='last-name'
                  name='last-name'
                  type='text'
                  autoComplete='family-name'
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='plan'
                className='block text-sm font-medium text-gray-900'
              >
                Plan
              </label>
              <div className='mt-2'>
                <select
                  id='plan'
                  name='plan'
                  autoComplete='plan'
                  className='w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm'
                >
                  <option>Trial</option>
                  <option>Fast Start</option>
                  <option>Accelerate</option>
                </select>
              </div>
            </div>
            <div className='sm:col-span-3'>
              <label
                htmlFor='plan'
                className='block text-sm font-medium text-gray-900'
              >
                Meal type
              </label>
              <div className='mt-2'>
                <select
                  id='plan'
                  name='plan'
                  autoComplete='plan'
                  className='w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm'
                >
                  <option>Veg</option>
                  <option>Non Veg</option>
                  <option>Vegan</option>
                </select>
              </div>
            </div>
            <div className='col-span-full'>
              <label
                htmlFor='street-address'
                className='block text-sm font-medium text-gray-900'
              >
                Address
              </label>
              <div className='mt-2'>
                <input
                  id='street-address'
                  name='street-address'
                  type='text'
                  autoComplete='street-address'
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm'
                />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='city'
                className='block text-sm font-medium text-gray-900'
              >
                City
              </label>
              <div className='mt-2'>
                <input
                  id='city'
                  name='city'
                  type='text'
                  autoComplete='address-level2'
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm'
                />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='region'
                className='block text-sm font-medium text-gray-900'
              >
                State / Province
              </label>
              <div className='mt-2'>
                <input
                  id='region'
                  name='region'
                  type='text'
                  autoComplete='address-level1'
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm'
                />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='postal-code'
                className='block text-sm font-medium text-gray-900'
              >
                ZIP / Postal code
              </label>
              <div className='mt-2'>
                <input
                  id='postal-code'
                  name='postal-code'
                  type='text'
                  autoComplete='postal-code'
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='border-b border-gray-900/10 pb-12'>
          <fieldset>
            <legend className='text-sm font-semibold text-gray-900'>
              Push notifications
            </legend>
            <p className='mt-1 text-sm text-gray-600'>
              These are delivered via SMS to your mobile phone.
            </p>
            <div className='mt-6 space-y-6'>
              <div className='flex items-center gap-x-3'>
                <input
                  id='push-everything'
                  name='push-notifications'
                  type='radio'
                  defaultChecked
                  className='h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-600'
                />
                <label
                  htmlFor='push-everything'
                  className='block text-sm font-medium text-gray-900'
                >
                  Everything
                </label>
              </div>
              <div className='flex items-center gap-x-3'>
                <input
                  id='push-email'
                  name='push-notifications'
                  type='radio'
                  className='h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-600'
                />
                <label
                  htmlFor='push-email'
                  className='block text-sm font-medium text-gray-900'
                >
                  Same as email
                </label>
              </div>
              <div className='flex items-center gap-x-3'>
                <input
                  id='push-nothing'
                  name='push-notifications'
                  type='radio'
                  className='h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-600'
                />
                <label
                  htmlFor='push-nothing'
                  className='block text-sm font-medium text-gray-900'
                >
                  No push notifications
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>

      <div className='mt-6 flex items-center justify-end gap-x-6'>
        <button type='button' className='text-sm font-semibold text-gray-900'>
          Cancel
        </button>
        <button
          type='submit'
          className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-indigo-600'
        >
          Save
        </button>
      </div>
    </form>
  )
}
