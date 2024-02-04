import React, { Suspense, useState } from 'react'
import emailjs from '@emailjs/browser'
import Fox from '../models/Fox'
import { Canvas } from '@react-three/fiber'
import Loader from '../Components/Loader'
import useAlert from '../hooks/useAlert'
import Alert from '../Components/Alert'
const Contact = () => {

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle')
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation('hit')

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Yaman Goyal",
        from_email: form.email,
        to_email: "ByteWiizard@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setLoading(false);

      showAlert({ show: true, text: 'Message Sent Suucessfully!', type: 'success' })
      setTimeout(() => {
        setCurrentAnimation('idle');
        setForm({ name: '', email: '', message: '' })
      }, [3000])
      setTimeout(() => {
        showAlert({ show: false, text: '', type: '' })
      }, [3000])

      setForm({ name: '', email: '', message: '' });
      // TODO show success message
      // TODO Hide an alert
    }).catch((err) => {
      console.log(err);
      setCurrentAnimation('idle');
      showAlert({ show: true, text: `I ${`didn't`} receive your message please try again in some time`, type: 'danger' })
    })

  }
  const handleFocus = (e) => { setCurrentAnimation('walk') }
  const handleblur = (e) => { setCurrentAnimation('idle') }


  return (
    <section className='relative flex lg:flex-row flex-col max-container'>

      {alert.show && <Alert {...alert} />}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in touch</h1>

        <form
          onSubmit={HandleSubmit}
          className='w-full flex flex-col gap-7 mt-14'
        >
          <label className='text-black-500 font-semibold '>Name</label>
          <input
            type='text'
            name='name'
            className='input'
            placeholder='Harry Potter'
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleblur}
          />

          <label className='text-black-500 font-semibold '>Email</label>
          <input
            type='email'
            name='email'
            className='input'
            placeholder='hogwardsWizard@hd.in'
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleblur}
          />

          <label className='text-black-500 font-semibold '>Message</label>
          <textarea
            name='message'
            rows='4'
            className='textarea'
            placeholder='You Coming to hogwards?'
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleblur}
          />

          <button
            type='submit'
            className='btn'
            disabled={loading}
            onFocus={handleFocus}
            onBlur={handleblur}
          >
            {loading ? 'Sending' : ' Send Message'}
          </button>
        </form>
      </div>

      <div
        className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'
      >
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>

      </div>
    </section>
  )
}

export default Contact
