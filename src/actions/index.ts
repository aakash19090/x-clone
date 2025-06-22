'use server';

// Removed unused imports

import ImageKit from 'imagekit';

export const ShareNewPost = async (formData: FormData) => {
    const file = formData.get('file') as File | null;
    // const description = formData.get('description') as string;
    if (file) {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const imageKit = new ImageKit({
            publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
            privateKey: process.env.PRIVATE_KEY!,
            urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
        });

        imageKit.upload(
            {
                file: buffer,
                fileName: file.name,
                folder: '/x-clone/posts',
                transformation: {
                    pre: 'w-600',
                },
            },
            function (error, result) {
                if (error) console.log(error);
                else console.log('----Media Uploaded Successfully----');
            },
        );
    }
};
