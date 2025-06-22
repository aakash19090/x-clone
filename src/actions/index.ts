'use server';

import { upload } from '@imagekit/next';
import { getUploadAuthParams } from '@imagekit/next/server';

import ImageKit from 'imagekit';

const imageKit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
    privateKey: process.env.PRIVATE_KEY!,
    urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});

export const ShareNewPost = async (formData: FormData) => {
    const file = formData.get('file') as File | null;
    // const description = formData.get('description') as string;
    if (file) {
        // const arrayBuffer = await file.arrayBuffer();
        // const buffer = Buffer.from(arrayBuffer);
        // imageKit.upload(
        //     {
        //         file: buffer,
        //         fileName: file.name,
        //         folder: '/x-clone/posts',
        //         transformation: {
        //             pre: 'w-600',
        //         },
        //     },
        //     function (error, result) {
        //         if (error) console.log(error);
        //         else console.log('----Uploaded Successfully----');
        //     },
        // );
    }
};
