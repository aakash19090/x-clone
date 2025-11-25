import type { MediaSettingsType } from '@/components/Share';

type ImageEditorProps = {
    mediaSettings: MediaSettingsType;
    setMediaSettings: React.Dispatch<React.SetStateAction<MediaSettingsType>>;
    onClose: () => void;
    previewUrl: string;
};

export const ImageEditor: React.FC<ImageEditorProps> = ({
    mediaSettings,
    setMediaSettings,
    onClose,
    previewUrl,
}: ImageEditorProps) => {
    return (
        <div className='fixed top-0 left-0 z-10 flex h-screen w-screen items-center justify-center bg-black/75'>
            <div className='rounded-xl bg-black p-6'>Test</div>
        </div>
    );
};
