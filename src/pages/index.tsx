import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

import Card from '../../components/Card';
import Footer from '../../components/Footer';
import { ChangeEvent, useRef, useState } from 'react';

const Home: NextPage = () => {

  const [characters, setCharacters] = useState<number>(0);
  const textAreaEl = useRef<HTMLTextAreaElement>(null);
  const notesInfos = trpc.notes.getThreeNote.useQuery({})
  const mutation = trpc.notes.createNote.useMutation({
    onSuccess() {
      if (textAreaEl.current != null) {
        textAreaEl.current.value = ""
      }
      notesInfos.refetch();
      setIsError(false)
    },
    onError() {
      setIsError(true)
    }
  })

  const [isError,setIsError] = useState<boolean>(false)

  const handleTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCharacters(e.currentTarget.value.length)
  }

  // Trigger create new note, send data to trpc server
  const handleCreateNote = async () => {
    if (characters > 0 && characters < 1500 && textAreaEl.current) {
      await mutation.mutate({text: textAreaEl.current?.value})
    } else {
      setIsError(true)
    }
  }

  return (
    <>
      <div className='bg-image-roundbg-mobile sm:bg-image-roundbg'>
        <div className="mx-auto max-w-[1300px]">
          <Head>
            <title>PasteClone - Pastebin Clone with T3-stack</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
          </Head>
          <p className="text-[40px] sm:text-[50px] w-[250px] sm:w-[300px] m-5 text-gradient">
            PASTECLONE.
          </p>
          <div className='sm:grid grid-cols-2 my-20'>
            <div className='px-5'>
              <h1 className='text-[25px] sm:text-[30px] text-white font-semibold mb-4 bright'>Publish and Share your <span className='changeText'> </span></h1>
              <p className='text-[15px] text-white opacity-60'>Phasellus dapibus finibus mattis. Integer pulvinar rutrum arcu, vitae sagittis lorem bibendum nec. Cras tempus ullamcorper diam, sagittis luctus quam accumsan sed.</p>
              <h2 className='text-[20px] font-semibold text-white mt-12 mb-6'>Last notes</h2>
              {notesInfos && notesInfos.data?.map((data) => {
                return (
                  <Card key={data.id} title={data.text.slice(0,28)} date={data.createdAt} id={data.id}/>
                )
              })}
            </div>
            <div>
              {isError && <p className='text-white'>ERROR</p>}
              <textarea ref={textAreaEl} className='block w-[90%] h-[500px] rounded-3xl p-2 mx-auto' onChange={(e) => {handleTextArea(e)}} />
              <div className='grid grid-cols-2'>
                <button className='w-[150px] bg-[#6795da] text-white rounded-2xl p-2 my-5 ml-8' onClick={handleCreateNote} >{"Publish >>"}</button>
                <p className='text-white m-auto'>{`${characters} / 1500`}</p>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default Home;
