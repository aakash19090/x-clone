'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ImageKit } from '../ImageKit';
import { ShareNewPost } from '@/actions';
import { ImageEditor } from '@/components/ImageEditor';

export type MediaSettingsType = {
    type: 'original' | 'square' | 'wide';
    sensitive: boolean;
};

export const Share = () => {
    const [newPostMedia, setNewPostMedia] = useState<File | null>(null);
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [mediaSettings, setMediaSettings] = useState<MediaSettingsType>({
        type: 'original',
        sensitive: false,
    });

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newFile = event.target.files?.[0]!;
        setNewPostMedia(newFile ?? null);
        if (!newFile) {
            console.log('No file selected');
        }
    };

    useEffect(() => {
        if (newPostMedia) {
            const objectUrl = URL.createObjectURL(newPostMedia);
            setPreviewUrl(objectUrl);
            return () => {
                URL.revokeObjectURL(objectUrl);
            };
        } else {
            setPreviewUrl(null);
        }
    }, [newPostMedia]);

    return (
        <form className='border-borderGray border-t p-4' action={ShareNewPost}>
            <div className='flex gap-2'>
                {/* Profile Image */}
                <Link href='/'>
                    <div className='img'>
                        <ImageKit path='general/avatar.png' w={40} h={40} alt='profileimage' className='rounded-full' />
                    </div>
                </Link>

                {/* Add Post */}
                <div className='flex-1'>
                    <div className='postinput mb-4'>
                        <input
                            type='text'
                            name='description'
                            id='addpost'
                            className='placeholder:text-textGray w-full resize-none border-none bg-transparent px-4 text-xl text-white outline-none'
                            placeholder="What's Happening?"
                        />
                    </div>

                    {previewUrl && (
                        <div className='relative mb-4 overflow-hidden'>
                            <Image src={previewUrl} alt='Preview' width={200} height={10} />
                            <div
                                onClick={() => setIsEditorOpen(true)}
                                className='absolute top-2 left-2 cursor-pointer rounded-full bg-gray-600 px-3 py-1 text-center text-sm font-bold text-white'
                            >
                                Edit
                            </div>
                        </div>
                    )}

                    {isEditorOpen && previewUrl && (
                        <ImageEditor
                            onClose={() => setIsEditorOpen(false)}
                            previewUrl={previewUrl}
                            mediaSettings={mediaSettings}
                            setMediaSettings={setMediaSettings}
                        />
                    )}

                    {/* ICONS */}
                    <div className='mt-2 flex flex-wrap items-center justify-between gap-4'>
                        <div className='icons-left flex flex-wrap items-center justify-between gap-4'>
                            <input type='file' id='file' onChange={handleFileUpload} name='file' className='hidden' />
                            <label htmlFor='file'>
                                <ImageKit
                                    path='icons/image.svg'
                                    alt='Image Icon'
                                    className='cursor-pointer'
                                    w={20}
                                    h={20}
                                />
                            </label>

                            <ImageKit path='icons/gif.svg' alt='Image Icon' className='cursor-pointer' w={20} h={20} />
                            <ImageKit path='icons/poll.svg' alt='Image Icon' className='cursor-pointer' w={20} h={20} />
                            <ImageKit
                                path='icons/emoji.svg'
                                alt='Image Icon'
                                className='cursor-pointer'
                                w={20}
                                h={20}
                            />
                            <ImageKit
                                path='icons/schedule.svg'
                                alt='Image Icon'
                                className='cursor-pointer'
                                w={20}
                                h={20}
                            />
                            <ImageKit
                                path='icons/location.svg'
                                alt='Image Icon'
                                className='cursor-pointer'
                                w={20}
                                h={20}
                            />
                        </div>

                        <div className='post'>
                            <button
                                type='submit'
                                className='cursor-pointer rounded-full bg-white px-4 py-2 text-center font-bold text-black hover:bg-gray-100'
                            >
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};
