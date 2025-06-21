import Link from 'next/link';
import { ImageKit } from '../ImageKit';

export const Share = () => {
    return (
        <div className='border-borderGray border-t p-4'>
            <div className='flex gap-2'>
                {/* Profile Image */}
                <Link href='/'>
                    <div className='img'>
                        <ImageKit path='general/avatar.png' w={40} h={40} alt='profileimage' className='rounded-full' />
                    </div>
                </Link>

                {/* Add Post */}
                <div className='flex-1'>
                    <div className='postinput'>
                        <textarea
                            name='addpost'
                            id='addpost'
                            className='placeholder:text-textGray w-full resize-none border-none bg-transparent p-4 pt-0 text-xl text-white outline-none'
                            placeholder="What's Happening?"
                        />
                    </div>

                    {/* ICONS */}
                    <div className='mt-2 flex flex-wrap items-center justify-between gap-4'>
                        <div className='icons-left flex flex-wrap items-center justify-between gap-4'>
                            <ImageKit
                                path='icons/image.svg'
                                alt='Image Icon'
                                className='cursor-pointer'
                                w={20}
                                h={20}
                            />
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
                                type='button'
                                className='cursor-pointer rounded-full bg-white px-4 py-2 text-center font-bold text-black hover:bg-gray-100'
                            >
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
