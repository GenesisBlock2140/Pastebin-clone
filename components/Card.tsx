interface CardProps {
  title: string;
  date: Date;
}

const Card = ({title, date}: CardProps) => {
  return (
    <>
      <div className='h-[75px] max-w-[280px] bg-[#090909] text-[#5f5f5f] text-[14px] rounded-3xl p-3 my-5'>
        <p>{title}</p>
        <p>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</p>
      </div>
    </>
  )
}

export default Card