import Link from 'next/link';
import { ImageKit } from '../ImageKit';
import { PostInfo } from '../PostInfo';
import { PostInteractions } from '../PostInteractions';

export const Post = () => {
    return (
        <div className='border-borderGray border-t p-4'>
            {/* Post Type */}
            <div className='mb-2 flex items-center gap-2'>
                <span className='repost-icon'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24'>
                        <path
                            fill='#71767b'
                            d='M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z'
                        />
                    </svg>
                </span>
                <span className='text-textGray text-sm font-bold'>akash reposted</span>
            </div>

            {/* Post Content */}
            <div className='flex gap-2'>
                {/* Profile Image Left */}
                <Link href='/'>
                    <div className='img'>
                        <ImageKit path='general/avatar.png' w={35} h={35} alt='profileimage' className='rounded-full' />
                    </div>
                </Link>

                {/* Top Content Right */}
                <div className='flex-1'>
                    <div className='flex justify-between'>
                        <Link href='/' className='inline-block space-x-2'>
                            <span className='name text-textGray font-bold'>Akash</span>
                            <span className='text-textGray'>@sortedsigma</span>
                            <span className='text-textGray'>1 day ago</span>
                        </Link>

                        <PostInfo />
                    </div>

                    {/* Text & Media */}
                    <div className='mt-2'>
                        <p className='mt-2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo modi placeat quae
                            delectus nulla eum ex architecto corrupti ipsum! Sapiente ea animi libero rerum eos mollitia
                            commodi. Amet, aspernatur voluptate.
                        </p>

                        <div className='post-img mt-2'>
                            <ImageKit
                                path='general/post.jpeg'
                                alt='Post Image'
                                className=''
                                tr
                                sizeH={600}
                                sizeW={600}
                                w={600}
                                h={600}
                            />
                        </div>
                    </div>

                    {/* Post Interactions */}
                    <PostInteractions />
                </div>
            </div>
        </div>
    );
};
