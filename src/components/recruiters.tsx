export const Recruiters = (): React.ReactElement => {
  return (
    <div  id="recruiters" className={'flex flex-col w-full h-full p-4'}>
      <p className="text-xl md:text-4xl dark:text-white light:text-black text-center mb-4">Recruiters</p>
      <p className="text-sm md:text-lg dark:text-white light:text-black text-left">If you are a recruiter and you are interested in my services, this is what you have been waiting for!</p>
      <p className="text-sm md:text-lg dark:text-white light:text-black text-left">Please download my CV and get in touch with me: {' '}
        <a href="/CV_Dejan_Petkovic.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline mt-2">
            PDF
        </a>
      </p>
    </div>
  )
}