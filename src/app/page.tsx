import { Feed } from '@/components/Feed';
import { Share } from '@/components/Share';
import Link from 'next/link';

export default function Home() {
    return (
        <div className=''>
            <div className='border-borderGray flex justify-between border-b'>
                <Link href='/' className='hover:bg-accentGray flex-1 text-center'>
                    <span className='border-iconBlue text-md inline-block border-b-3 py-4 font-bold'>For you</span>
                </Link>

                <Link href='/' className='hover:bg-accentGray flex-1 text-center'>
                    <span className='text-md inline-block py-4 font-bold'>Following</span>
                </Link>
            </div>

            {/* Share */}
            <Share />

            {/* Feed */}
            <Feed />
        </div>
    );
}
