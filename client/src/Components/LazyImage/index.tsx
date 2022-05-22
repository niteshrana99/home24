import React, { useEffect, useRef, useState } from 'react';
import { StyledWaterMark } from './styles';

type LazyImageProps = {
    src: string,
    alt ?: string
}

const registerObserver = (ref: HTMLSpanElement, setShowImage: Function) => {
    const observer = new IntersectionObserver(
        (entries, entryObserver) => {
            entries.forEach((entry) => {
                if(!entry.isIntersecting) {
                    return;
                }
                setShowImage(true);
                entryObserver.disconnect();
            })
        }
    );
    observer.observe(ref);
}



const LazyImage = ({src, ...props}: LazyImageProps) => {

    const [showImage, setShowImage] = useState<boolean>(false);
    const imgRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        if(imgRef.current) {
            registerObserver(imgRef.current, setShowImage)
        }
    }, [])

    if(showImage) {
        return <img src={src} {...props} alt={props.alt || 'Article Image'} />
    }


    return (
        <StyledWaterMark ref={imgRef} />
    )
}

export default LazyImage