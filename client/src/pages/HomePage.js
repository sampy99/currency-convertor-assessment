import React, { useState } from 'react'

export default function HomePage() {

    //states for fields of form

    const [date, setDate] = useState("");
    const [sourceCurrency, setSourceCurrency] = useState("");
    const [targetCurrency, setTargetCurrency] = useState("");
    const [amountInsourceCurrency, setAmountInSourceCurrency] = useState("");
    const [amountIntargetCurrency, setAmountInTargetCurrency] = useState("");

    //handleSubmit method define
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            date, setAmountInSourceCurrency,targetCurrency,amountInsourceCurrency
        );
    };

    return (
        <div className='p-6'>
            
                <h1 className="lg:mx-32 text-4xl font-bold justify-center text-green-600 py-8" >Covert Your Currency With Today's Rate</h1>
                <p className="lg:mx-32 opacity-40 py-4" >
                    The Currency Converter App is a simple and user-friendly application designed to help
                    users convert between different currencies quickly and accurately. Leveraging real-time
                    exchange rate data from a reliable API, this app ensures that users
                    have access to the most up-to-date conversion rates.
                </p>
            
    
            <div className='mt-5 flex items-center justify-center'>
                <section className='w-full lg:w-1/2'>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-5 ">
                            <label htmlFor={date} className="block mb-2 text-sm font-medium text-gray-900 ">Today's Date</label>
                            <input onChange={(e)=>setDate(e.target.value)} type="Date" id={date} name={date} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring--500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Today's Date" required />
                        </div>

                        <div className="mb-5 ">
                            <label htmlFor={sourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 ">Source Currency</label>
                            <select onChange={(e)=>setSourceCurrency(e.target.value)} name={sourceCurrency} id={sourceCurrency} value={sourceCurrency} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring--500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light">
                            <option value="">Select Source Currency</option>
                            </select>
                        </div>

                        <div className="mb-5 ">
                            <label htmlFor={targetCurrency} className="block mb-2 text-sm font-medium text-gray-900 ">Target Currency</label>
                            <select onChange={(e)=>setTargetCurrency(e.target.value)} name={targetCurrency} id={targetCurrency} value={targetCurrency} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring--500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light">
                            <option value="">Select Target Currency</option>
                            </select>
                        </div>

                        <div className="mb-5 ">
                            <label htmlFor={amountInsourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 ">Amount in Source Currency</label>
                            <input onChange={(e)=>setAmountInSourceCurrency(e.target.value)} type="number" id={amountInsourceCurrency} name={amountInsourceCurrency} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring--500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Amount in Source Currency" required />
                        </div>

                        <button  className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Converting to Target Currency</button>

                    </form>
                </section>
            </div >
        </div>
    )
}
