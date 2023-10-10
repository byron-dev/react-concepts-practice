import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from "axios";

function App() {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const baseURL = 'https://reqres.in'

  const onSubmit = (data) => {
    axios
      .post(`${baseURL}/api/login`, {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        navigate('/homePage')
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
      <h1>Byron's React Concepts Practice</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email', { required: true })} />
        {errors.email && <><br /><span>This field is required ⬆️</span></>}
        <br />
        <input {...register('password')} />
        <br />
        <input type='submit' value='Login' />
      </form>
    </>
  )
}

export default App
