import { useRouter } from 'next/router'
import NoteView from '../../../components/NoteView';

const Notes = () => {
  const router = useRouter()
  const { noteId } = router.query

  if (noteId === undefined || noteId?.length != 25) {
    return (
    <>
      <p className='text-white text-50 text-center'>Error this note ID don't exist</p>
    </>
    )
  }

  const noteIdClean = noteId.toString()

  return (
    <>
      <NoteView note={noteIdClean} />
    </>
  )
}

export default Notes;