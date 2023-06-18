import { type NextPage } from 'next'
import { useState } from 'react'
import UploadComponent from '~/components/upload'
import Image from 'next/image'
import { api } from '~/utils/api'

const CreatorPage: NextPage = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  const { mutate } = api.visionLearning.imageProcessor.useMutation({
    onSuccess: (analysisResponse) => {
      // Further process the analysisResponse as needed
      if (selectedFiles) {
        console.log('TRPC response:', analysisResponse)
      }
      // Return a value from the onSuccess callback
      return analysisResponse // Assuming analysisResponse is a string
    },
    onError: (e) => {
      console.log('Error:', e)
    },
  })

  const handleFilesChange = (files: File[]) => {
    setSelectedFiles(files)
    console.log(files)
  }

  console.log('this is mutate: ', mutate)

  return (
    <>
      <UploadComponent
        onFilesChange={handleFilesChange}
        mutateOnUpload={mutate}
      />

      <div>
        <div className="m-5 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-16">
            {selectedFiles.map((file, index) => (
              <div className="w-96 border border-gray-300 bg-white" key={index}>
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
                  src={URL.createObjectURL(file)}
                  alt={file.name}
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
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
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
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CreatorPage
