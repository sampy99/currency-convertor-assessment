import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function HomePage() {

    //states for fields of form

    const [date, setDate] = useState("");
    const [sourceCurrency, setSourceCurrency] = useState(0);
    const [targetCurrency, setTargetCurrency] = useState(0);
    const [amountInsourceCurrency, setAmountInSourceCurrency] = useState(0);
    const [amountIntargetCurrency, setAmountInTargetCurrency] = useState(0);
    const [currencyNames, setCurrencyNames] = useState([]);

    //handleSubmit method define
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(
                "http://localhost:5000/convertRates", {
                    params: {
                        date,
                        sourceCurrency,
                        targetCurrency,
                        amountInsourceCurrency
                    }
            }
            );

            //data which will be given from the server side

            setAmountInTargetCurrency(response.data);

        } catch (err) {
            console.error(err);
        }

    };

    //get all currency names by API
    useEffect(() => {
        const getCurrencyNames = async () => {
            try {

                const response = await axios.get(
                    "http://localhost:5000/getAllCurrencies"
                );
                setCurrencyNames(response.data);

            } catch (err) {
                console.error(err);
            }
        };
        getCurrencyNames();
    }, [])

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
                            <input onChange={(e) => setDate(e.target.value)} type="Date" id={date} name={date} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring--500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Today's Date" required />
                        </div>

                        <div className="mb-5 ">
                            <label htmlFor={sourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 ">Source Currency</label>
                            <select onChange={(e) => setSourceCurrency(e.target.value)} name={sourceCurrency} id={sourceCurrency} value={sourceCurrency} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring--500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light">
                                <option value="">Select Source Currency</option>
                                {Object.keys(currencyNames).map((currency) => (
                                    <option className='p-1' key={currency} value={currency}>
                                        {currencyNames[currency]}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-5 ">
                            <label htmlFor={targetCurrency} className="block mb-2 text-sm font-medium text-gray-900 ">Target Currency</label>
                            <select onChange={(e) => setTargetCurrency(e.target.value)} name={targetCurrency} id={targetCurrency} value={targetCurrency} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring--500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light">
                                <option value="">Select Target Currency</option>
                                {Object.keys(currencyNames).map((currency) => (
                                    <option className='p-1' key={currency} value={currency}>
                                        {currencyNames[currency]}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-5 ">
                            <label htmlFor={amountInsourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 ">Amount in Source Currency</label>
                            <input onChange={(e) => setAmountInSourceCurrency(e.target.value)} type="number" id={amountInsourceCurrency} name={amountInsourceCurrency} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring--500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Amount in Source Currency" required />
                        </div>

                        <button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Converting to Target Currency</button>

                    </form>
                    <label htmlFor={amountIntargetCurrency} className="block mb-2 text-sm font-medium text-gray-900 p-6 ">{amountIntargetCurrency}</label>

                </section>
            </div >
    
        
            <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-10">
                <div>

                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://sampy99" class="hover:underline">Sampy</a>. All Rights Reserved.</span>
                </div>
            </footer>

        </div>


    )
}




//app id - 01803395b792403b964b02cc2dcc1b38