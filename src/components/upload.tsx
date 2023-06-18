import { useState } from 'react'

interface UploadComponentProps {
  onFilesChange: (files: File[]) => void
  mutateOnUpload: (data: { input: string }) => Promise<string> | void
}

const UploadComponent: React.FC<UploadComponentProps> = ({
  onFilesChange,
  mutateOnUpload,
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string>('')

  const handleFileInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const { files } = event.target
    if (files) {
      const filesArray = Array.from(files)
      setSelectedFiles(filesArray)
      onFilesChange(filesArray)

      const filesAsString = filesArray.map((file) => file.name).join(', ')
      console.log('this is type: ', typeof filesAsString)
      setIsLoading(true)
      setError('')

      try {
        await mutateOnUpload({
          input: JSON.stringify({ input: filesAsString }),
        })
      } catch (error) {
        setError('An error occurred during upload.')
      }

      setIsLoading(false)
    }
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const { files } = event.dataTransfer
    if (files) {
      const filesArray = Array.from(files)
      setSelectedFiles(filesArray)
      onFilesChange(filesArray)
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  return (
    <div
      className="mx-auto max-w-2xl"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="flex w-full items-center justify-center">
        <label
          htmlFor="dropzone-file"
          className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <svg
              className="mb-3 h-10 w-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG, or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileInputChange}
            multiple
          />
        </label>
      </div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
    </div>
  )
}

export default UploadComponent
