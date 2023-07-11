
import { personalInfo } from '../assets/data'

const Info = () => {
  return (
    <>
    {personalInfo.map((item)=>(
        <div key={item.id} >
            <h1><span className='text-[#923AE4]'>{item.title}</span>{item.description}</h1>
        </div>
    ))}
    </>
  )
}

export default Info
