import { LeftBar } from '@/components/LeftBar';
import './globals.css';
import { RightBar } from '@/components/RightBar';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body>
                <div className='mx-auto flex max-w-screen-md justify-between lg:max-w-screen-lg xl:max-w-screen-lg'>
                    <div className='px-2 lg:px-4'>
                        <LeftBar />
                    </div>
                    <div className='border-borderGray flex-1 border-x-[1px] lg:min-w-[37.5rem]'>{children}</div>
                    <div className='ml-4 hidden flex-1 md:ml-8 lg:block'>
                        <RightBar />
                    </div>
                </div>
            </body>
        </html>
    );
}
