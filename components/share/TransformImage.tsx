import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image';
import { CldImage } from 'next-cloudinary';
import { dataUrl, debounce, getImageSize } from '@/lib/utils';
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';

const TransformImage = ({image,type,
                title,isTransforming,setIsTransforming,transformationConfig,
                hasDownload=false
            }:TransformedImageProps) => {

  const downloadHandler=()=>{

  };
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex-between'>
            <h3 className='h3-bold text-dark-600'>
            Transformed
            </h3>
            {hasDownload &&(
                <Button className='download-btn' onClick={downloadHandler}>
                    <Image
                     src={"/assets/icons/download.svg"}
                     alt={"download"}
                     height={24}
                     width={24}
                     className='pb-[6px]'
                    />
                </Button>
            )}
        </div>
        <div>
            {image?.publicId && transformationConfig?(
                <div>
                    <CldImage
                          width={getImageSize(type,image,"width")}
                          height={getImageSize(type,image,"height")}
                          src={image?.publicId}
                          alt={image.title}
                          sizes={"(max-width:767px) 100vw,50vw"}
                          placeholder={dataUrl as PlaceholderValue}
                          className='transformed-image'
                          onLoad={()=>{
                            setIsTransforming && setIsTransforming(false);
                          }}
                          onError={()=>{
                            debounce(()=>{
                                (false)
                            },8000)
                          }}
                          {...transformationConfig}
                         />
                         {isTransforming &&(
                            <div className='transforming-loader'>
                                <Image
                                 src={'/assets/icons/spinner.svg'}
                                 alt='loader'
                                 width={50}
                                 height={50}
                                />
                            </div>
                         )}
                </div>
            ):(
                <div className='transformed-placeholder'>
                    Transform Image
                </div>
            )}
        </div>
    </div>
  )
}

export default TransformImage
