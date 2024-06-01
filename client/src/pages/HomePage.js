import React from 'react'

export default function HomePage() {
    return (
        <div className='p-6'>
            
                <h1 className="lg:mx-32 text-4xl font-bold text-green-500 py-8" >Covert Your Currency With Today's Rate</h1>
                <p className="lg:mx-32 opacity-40 py-4" >
                    The Currency Converter App is a simple and user-friendly application designed to help
                    users convert between different currencies quickly and accurately. Leveraging real-time
                    exchange rate data from a reliable API, this app ensures that users
                    have access to the most up-to-date conversion rates.
                </p>
            
    
            <div className='mt-5 flex items-center justify-center'>
                <section className='w-full lg:w-1/2'>

                    <form >
                        <div className="mb-5 ">
                            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Today's Date</label>
                            <input type="Date" id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring--500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Today's Date" required />
                        </div>

                        <div className="mb-5 ">
                            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>
                            <select name="" id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring--500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Source Currency" required />
                            <option value="">Select Source Currency</option>
                        </div>

                        <div className="mb-5 ">
                            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency</label>
                            <select name="" id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring--500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Target Currency" required />
                            <option value="">Select Target Currency</option>
                        </div>

                        <div className="mb-5 ">
                            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount in Source Currency</label>
                            <input type="text" id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring--500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Amount in Source Currency" required />
                        </div>

                        <button type="submit" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Converting to Target Currency</button>

                    </form>
                </section>
            </div >
        </div>
    )
}
