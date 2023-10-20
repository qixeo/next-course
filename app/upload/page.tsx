'use client';
import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary'

interface CloudinaryResult {
    public_id: string;
}

const UploadPage = () => {
    const [publicId, setPublicId] =  useState('');
  return (
    <>
        {publicId && 
            <CldImage src={publicId} width={270} height={180} alt="Some image" />}
        <CldUploadWidget 
        uploadPreset='f5trgvah'
        options={{
            sources: [
                "local",
                "dropbox",
                "google_drive"
            ],
            showAdvancedOptions: true,
            cropping: true,
            multiple: false,
            defaultSource: "local",
            styles: {
                palette: {
                    window: "#FFFFFF",
                    windowBorder: "#90A0B3",
                    tabIcon: "#0078FF",
                    menuIcons: "#5A616A",
                    textDark: "#000000",
                    textLight: "#FFFFFF",
                    link: "#0078FF",
                    action: "#FF620C",
                    inactiveTabIcon: "#0E2F5A",
                    error: "#F44235",
                    inProgress: "#0078FF",
                    complete: "#20B832",
                    sourceBg: "#E4EBF1"
                },
                fonts: {
                    default: null,
                    "'Fira Sans', sans-serif": {
                        url: "https://fonts.googleapis.com/css?family=Fira+Sans",
                        active: true
                    }
                }
            }
        }}
        onUpload={(result, widget) => {
            if(result.event !== 'success') return;
            const info = result.info as CloudinaryResult;
            setPublicId(info.public_id)
            console.log(result)
        }}>
            {({ open }) => 
            <button 
                className='btn btn-primary'
                onClick={() => open()}>Upload</button>}
        </CldUploadWidget>
    </>
  )
}

export default UploadPage