import { menuList } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

export const LeftBar = () => {
    return (
        <div className='sticky top-0 flex h-screen flex-col justify-between'>
            <div>
                {/* Logo */}
                <div className='logo'>
                    <Link href='/' className='hover:bg-borderGray inline-block rounded-full p-2'>
                        <Image src='icons/logo.svg' alt='Logo' width={24} height={24} className='' />
                    </Link>
                </div>

                {/* MenuIcon List */}
                <nav>
                    <ul className='flex flex-col gap-4'>
                        {menuList.map((item) => (
                            <li key={item.id}>
                                <Link href={item.link} className='group transition duration-300 ease-in-out'>
                                    <div className='group-hover:bg-borderGray flex items-center gap-3 rounded-full px-3 py-2 lg:mr-10'>
                                        <Image src={`icons/${item.icon}`} alt={item.name} width={24} height={24} />
                                        <span className='hidden text-lg font-semibold lg:inline-block'>
                                            {item.name}
                                        </span>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Post Button */}
                <div className='mt-6'>
                    <Link
                        href='/'
                        className='flex h-14 w-14 items-center justify-center rounded-full bg-white p-4 text-black transition duration-100 ease-in-out hover:bg-gray-100 lg:hidden'
                    >
                        <Image src='icons/post.svg' alt='Post' width={24} height={24} />
                        {/* <span className='text-lg font-bold'>Post</span> */}
                    </Link>

                    <Link
                        href='/'
                        className='hidden w-full rounded-full bg-white px-4 py-2 text-center text-black transition duration-100 ease-in-out hover:bg-gray-100 lg:inline-block'
                    >
                        {/* <Image src='icons/post.svg' alt='Post' width={24} height={24} /> */}
                        <span className='text-lg font-bold'>Post</span>
                    </Link>
                </div>
            </div>

            {/* User Info */}
            <div className='mb-4 flex items-center justify-between rounded-full py-2 lg:gap-4'>
                <div className='flex items-center lg:gap-2'>
                    <div className='h-10 w-10 rounded-full'>
                        <Image
                            src='/general/avatar.png'
                            alt='akash dev'
                            className='rounded-full'
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className='hidden lg:block'>
                        <span className='font-bold'>Akash Dev</span>
                        <p className='text-textGray text-sm'>@akashdev</p>
                    </div>
                </div>
                <div className='hidden cursor-pointer font-bold lg:block'>...</div>
            </div>
        </div>
    );
};
