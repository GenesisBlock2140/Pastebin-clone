import Link from 'next/link'
import { ReactElement } from 'react'
import { trpc } from "../src/utils/trpc";

interface noteViewProps {
  note: string
}

const NoteView = ({note}:noteViewProps) => {

  const noteData = trpc.notes.getNote.useQuery({noteId: note})
  console.log(noteData.data?.text)

  // Copy the note in the clipboard
  const handleClipBoard = () => {
    navigator.clipboard.writeText(noteData.data?.text || "")
  }

  const icon: ReactElement = 
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
  </svg>

  if(!noteData.data){
    return (
      <>
      <p className='text-white text-50 text-center'>Error this note ID don't exist</p>
      </>
    )
  }

  return (
    <>
      <div className='mx-auto max-w-[600px]'>
        <p className="text-[40px] sm:text-[50px] w-[250px] sm:w-[300px] m-5 text-gradient">
            PASTECLONE.
        </p>
        <p className='text-right text-white mt-10 mr-5'>{`${noteData.data.createdAt.getDate()}/${noteData.data.createdAt.getMonth() + 1}/${noteData.data.createdAt.getFullYear()}`}</p>
        <div className='max-w-[600px] h-[500px] m-2 bg-[#1c1c1c] rounded-3xl relative break-words'>
          <p className='text-white text-[12px] sm:text-[14px] p-3'>{noteData.data.text}</p>
          <button className='text-white absolute bottom-2 right-5' onClick={handleClipBoard}>{icon}</button>
        </div>
        <Link href={"/"}>
          <p className='text-white cursor-pointer w-[150px] ml-10'>Go to homepage</p>
        </Link>
      </div>
    </>
  )
}

export default NoteView;