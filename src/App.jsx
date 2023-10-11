import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.scss'
import { useForm } from 'react-hook-form'
import axios from "axios"
import { redirect } from 'react-router-dom'

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const baseURL = 'https://reqres.in'

  const onSubmit = (data) => {
    axios
      .post(`${baseURL}/api/login`, {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        return redirect('/homePage')
      })
      .catch((error) => {
        alert(error.response.data.error)
      })
  }

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>React Concepts Practice</h1>

      <p>This form was created using react hook form and axios.</p>
      <p><a href="https://reqres.in/" target='_blank'>Reqres</a> was the API used.</p>

      <form onSubmit={handleSubmit(onSubmit)} data-testid='login-form'>
        <input {...register('email', { required: true })} placeholder='Email' />
        {errors.email && <><br /><span>This field is required ⬆️</span></>}
        <br />
        <input {...register('password')} placeholder='Password' />
        <br />
        <input type='submit' value='Login' />
      </form>
    </>
  )
}

export default App
