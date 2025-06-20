import { Image } from '@imagekit/next';

export type ImageKitProps = {
    path: string;
    alt: string;
    w?: number;
    h?: number;
    className?: string;
    tr?: boolean;
    sizeW?: number;
    sizeH?: number;
};

export const ImageKit = ({ path, alt, w, h, tr, sizeW, sizeH, className }: ImageKitProps) => {
    return (
        <Image
            src={`x-clone/${path}`}
            width={w}
            height={h}
            alt={alt}
            className={className}
            {...(tr ? { transformation: [{ width: sizeW, height: sizeH }] } : {})}
        />
    );
};
