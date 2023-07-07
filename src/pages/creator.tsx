import { type NextPage } from 'next'
import { useState } from 'react'
import { UploadDropzone } from 'react-uploader'
import Image from 'next/image'
import { Uploader } from 'uploader' // Installed by "react-uploader".
import { UploadButton } from 'react-uploader'
import { api } from '~/utils/api'

// Initialize once (at the start of your app).
const uploader = Uploader({
  apiKey: !!process.env.NEXT_PUBLIC_UPLOAD_API_KEY
    ? process.env.NEXT_PUBLIC_UPLOAD_API_KEY
    : 'free',
})

const CreatorPage: NextPage = () => {
  const [selectedFiles, setSelectedFiles] = useState<string | null>(null)

  // const handleFilesChange = (files: File[]) => {
  //   setSelectedFiles(files)
  //   console.log(files)
  // }

  // Configuration options: https://upload.io/uploader#customize
  const options = {
    maxFileCount: 1,
    mimeTypes: ['image/jpeg', 'image/png', 'image/jpg'],
    editor: { images: { crop: false } },
    styles: { colors: { primary: '#000' } },
  }

  const UploadDropZone = () => (
    <UploadDropzone
      uploader={uploader}
      options={options}
      onUpdate={(file) => {
        if (file.length !== 0) {
          setSelectedFiles(file)
        }
      }}
      width="670px"
      height="250px"
    />
  )

  // async function generatePhoto(fileUrl: string) {
  //   await new Promise((resolve) => setTimeout(resolve, 500));
  //   setLoading(true);

  //   const res = await fetch("/api/generate", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ imageUrl: fileUrl }),
  //   });

  //   let newPhoto = await res.json();
  //   if (res.status !== 200) {
  //     setError(newPhoto);
  //   } else {
  //     mutate();
  //     setRestoredImage(newPhoto);
  //   }
  //   setLoading(false);
  // }

  console.log('selectedFiles: ', selectedFiles)

  return (
    <>
      {/* <UploadComponent onFilesChange={handleFilesChange} /> */}

      {selectedFiles == null ? (
        <UploadDropZone />
      ) : (
        <div>
          <div className="m-5 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-16">
              <div className="w-96 border border-gray-300 bg-white">
                <header className="grid grid-cols-6 items-center border-b border-b-gray-300 p-3">
                  <div>
                    <img
                      src="https://picsum.photos/50/50"
                      className="h-10 w-10 rounded-full"
                    />
                  </div>

                  <div className="col-span-4 text-sm font-semibold">
                    InstaCapt
                  </div>

                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </div>
                </header>

                <Image
                  className="mx-auto mb-3 shadow-lg"
                  src={selectedFiles?.fileUrl}
                  alt={selectedFiles?.originalFile}
                  width={500}
                  height={500}
                />

                <div className="flex flex-col gap-3 p-4">
                  <div className="flex flex-row gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>

                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M25 38c-7.2 0-13-5.8-13-13 0-3.2 1.2-6.2 3.3-8.6l1.5 1.3C15 19.7 14 22.3 14 25c0 6.1 4.9 11 11 11 1.6 0 3.1-.3 4.6-1l.8 1.8c-1.7.8-3.5 1.2-5.4 1.2z" />
                      <path d="M34.7 33.7l-1.5-1.3c1.8-2 2.8-4.6 2.8-7.3 0-6.1-4.9-11-11-11-1.6 0-3.1.3-4.6 1l-.8-1.8c1.7-.8 3.5-1.2 5.4-1.2 7.2 0 13 5.8 13 13 0 3.1-1.2 6.2-3.3 8.6z" />
                      <path d="M18 24h-2v-6h-6v-2h8z" />
                      <path d="M40 34h-8v-8h2v6h6z" />
                    </svg>
                  </div>

                  <div className="text-sm font-semibold">11,552 Likes</div>

                  <div className="text-sm">
                    <span className="font-semibold">gnfi</span> Saat ini
                    Indonesia memiliki 34 provinsi, jumlah tersebut diproyeksi
                    bertambah seiring dengan adanya usulan 30 Daerah Otonomi
                    Baru (DOB) khusus untuk provinsi, dan 9 diantaranya berada
                    di Pulau Jawa.
                  </div>

                  <div className="text-sm text-gray-500">
                    View all 877 comments
                  </div>

                  <div className="text-xs text-gray-400">2 HOURS AGO</div>
                </div>

                <footer></footer>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CreatorPage
