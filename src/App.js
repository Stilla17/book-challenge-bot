import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
function App() {

  const tg = window.Telegram.WebApp

  const { register, handleSubmit } = useForm()
  const [inputCount, setInputCount] = useState(1);

  const onSubmit = (data) => {
    console.log(data);

    onSendData(data)
  }

  useEffect(() => {
    tg.ready()
  })

  const onSendButton = () => {
    tg.MainButton.text = "Jo'natish"
    tg.MainButton.show()
  }

  const onSendData = useCallback((data) => {
    tg.sendData(JSON.stringify(data))
  }, [])

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)
    return () => {
      tg.offEvent('mainButtonClicked', onSendData)
    }
  }, [onSendData])

  return (
    <>
      <header className=' bg-cyan-400'>
        <nav className='mx-auto max-w-[900px]'>
          <h1 className='text-[32px] text-white'>Kitobim</h1>
        </nav>
      </header>
      <div className="mx-auto max-w-[900px] mt-12">

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <input type='date' className='border-2 focus:outline-none block rounded-md w-full py-2 px-4' {...register('date', { required: true })} /> */}
          <input type='text' placeholder='ID raqamingizni kiriting' className='py-2 px-4 border-2 focus:outline-none block mt-6 rounded-md w-full' {...register('idNumber', { required: true })} />

          {/* <div>
            <input type='text' className='py-2 px-4 border-2 focus:outline-none block mt-6 rounded-md w-full' placeholder={` Kitob nomini kiriting`} {...register(`bookName`, { required: true })} />

            <div className='flex gap-5 mt-6'>

              <label className='flex flex-col text-gray-700 text-sm font-medium '>
                <span className='block text-gray-500'>Sahifadan</span>
                <input type='text' className='py-2 px-4 border-2 focus:outline-none rounded-md'  {...register(`pageFrom`, { required: true })} />
              </label>

              <label className='flex flex-col text-gray-700 text-sm font-medium '>
                <span className='block text-gray-500'>Sahifagacha</span>
                <input type='text' className='py-2 px-4 border-2 focus:outline-none rounded-md' {...register(`pageTo`, { required: true })} />
              </label>

            </div>
          </div> */}


          {/* {
            [...Array(inputCount)].map((_, index) => (
              <div key={index}>
                <input type='text' className='py-2 px-4 border-2 focus:outline-none block mt-6 rounded-md w-full' placeholder={`${index + 1}. Kitob nomini kiriting`} {...register(`bookName${index}`, { required: true })} />

                <div className='flex gap-5 mt-6'>

                  <label className='flex flex-col text-gray-700 text-sm font-medium '>
                    <span className='block text-gray-500'>Sahifadan</span>
                    <input type='text' className='py-2 px-4 border-2 focus:outline-none rounded-md'  {...register(`pageFrom${index}`, { required: true })} />
                  </label>

                  <label className='flex flex-col text-gray-700 text-sm font-medium '>
                    <span className='block text-gray-500'>Sahifagacha</span>
                    <input type='text' className='py-2 px-4 border-2 focus:outline-none rounded-md' {...register(`pageTo${index}`, { required: true })} />
                  </label>

                </div>
              </div>
            ))} */}
          {/* 
          <div className='flex justify-end'>
            <button onClick={() => setInputCount(inputCount + 1)} className='mt-6 w-[50px] h-[50px] bg-yellow-400 text-white flex items-center justify-center rounded-full text-[24px]'>
              +
            </button>
          </div> */}

          <button onClick={onSendButton} className='bg-green-500 text-white py-2 w-full rounded-md mt-12'>Jo'natish</button>
        </form>
      </div>
    </>
  );
}

export default App;
