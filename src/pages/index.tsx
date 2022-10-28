import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

import Card from '../../components/Card';

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <div className='bg-image-roundbg'>
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
              <h1 className='text-[30px] text-white font-semibold mb-4 bright'>Publish and Share your code</h1>
              <p className='text-[15px] text-white opacity-60'>Phasellus dapibus finibus mattis. Integer pulvinar rutrum arcu, vitae sagittis lorem bibendum nec. Cras tempus ullamcorper diam, sagittis luctus quam accumsan sed.</p>
              <h2 className='text-[20px] font-semibold text-white mt-12 mb-6'>Last notes</h2>
              <Card title='Title here blabla' date='11/11/22'/>
              <Card title='Title here blabla' date='11/11/22'/>
              <Card title='Title here blabla' date='11/11/22'/>
            </div>
            <div>
              <textarea className='block w-[90%] rounded-3xl p-2 mx-auto' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
