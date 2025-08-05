import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

export default async function SubscribePage() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!user) redirect('/api/auth/login')

  return (
    <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      <form className='bg-white shadow-xl p-6 rounded-lg space-y-12'>
        {/* Section: Delivery Info */}
        <div className='border-b border-gray-200 pb-10'>
          <h2 className='text-lg font-semibold text-gray-900'>
            Delivery Information
          </h2>
          <p className='mt-1 text-sm text-gray-600'>
            Use a permanent address where you can receive mail.
          </p>

          <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <div>
              <label
                htmlFor='first-name'
                className='block text-sm font-medium text-gray-900'
              >
                First name
              </label>
              <input
                id='first-name'
                name='first-name'
                type='text'
                autoComplete='given-name'
                className='mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-indigo-600'
              />
            </div>

            <div>
              <label
                htmlFor='last-name'
                className='block text-sm font-medium text-gray-900'
              >
                Last name
              </label>
              <input
                id='last-name'
                name='last-name'
                type='text'
                autoComplete='family-name'
                className='mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-indigo-600'
              />
            </div>

            <div>
              <label
                htmlFor='plan'
                className='block text-sm font-medium text-gray-900'
              >
                Plan
              </label>
              <select
                id='plan'
                name='plan'
                className='mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-indigo-600'
              >
                <option>Trial</option>
                <option>Fast Start</option>
                <option>Accelerate</option>
              </select>
            </div>

            <div>
              <label
                htmlFor='meal-type'
                className='block text-sm font-medium text-gray-900'
              >
                Meal Type
              </label>
              <select
                id='meal-type'
                name='meal-type'
                className='mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-indigo-600'
              >
                <option>Veg</option>
                <option>Non Veg</option>
                <option>Vegan</option>
              </select>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='street-address'
                className='block text-sm font-medium text-gray-900'
              >
                Address
              </label>
              <input
                id='street-address'
                name='street-address'
                type='text'
                autoComplete='street-address'
                className='mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-indigo-600'
              />
            </div>

            <div>
              <label
                htmlFor='city'
                className='block text-sm font-medium text-gray-900'
              >
                City
              </label>
              <input
                id='city'
                name='city'
                type='text'
                autoComplete='address-level2'
                className='mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-indigo-600'
              />
            </div>

            <div>
              <label
                htmlFor='region'
                className='block text-sm font-medium text-gray-900'
              >
                State / Province
              </label>
              <input
                id='region'
                name='region'
                type='text'
                autoComplete='address-level1'
                className='mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-indigo-600'
              />
            </div>

            <div>
              <label
                htmlFor='postal-code'
                className='block text-sm font-medium text-gray-900'
              >
                ZIP / Postal code
              </label>
              <input
                id='postal-code'
                name='postal-code'
                type='text'
                autoComplete='postal-code'
                className='mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-indigo-600'
              />
            </div>
          </div>
        </div>

        {/* Section: Notifications */}
        <div className='border-b border-gray-200 pb-10'>
          <fieldset>
            <legend className='text-sm font-semibold text-gray-900'>
              Push notifications
            </legend>
            <p className='mt-1 text-sm text-gray-600'>
              These are delivered via SMS to your mobile phone.
            </p>
            <div className='mt-4 space-y-4'>
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
                  className='text-sm font-medium text-gray-900'
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
                  className='text-sm font-medium text-gray-900'
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
                  className='text-sm font-medium text-gray-900'
                >
                  No push notifications
                </label>
              </div>
            </div>
          </fieldset>
        </div>

        {/* Submit Section */}
        <div className='mt-6 flex flex-col sm:flex-row justify-end gap-4'>
          <button type='button' className='text-sm font-semibold text-gray-900'>
            Cancel
          </button>
          <button
            type='submit'
            className='rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-indigo-600'
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
