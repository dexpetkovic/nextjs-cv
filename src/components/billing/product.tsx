import Link from 'next/link'

export const Product = ({ attributes }: { attributes: any }) => {
  const { description, name, price_formatted, buy_now_url } = attributes

  return (
    <div className="flex flex-col items-start m-8 md:mb-16 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="md:text-xl font-bold dark:text-white light:text-black mb-2">{name}</h2>
      {description ? (
        <div
          className="mb-4"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></div>
      ) : null}

      <p className="md:text-l font-bold dark:text-white light:text-black mb-2">{price_formatted}</p>
      <Link href={buy_now_url}>
        <div className="md:text-sm dark:text-gray-300 light:text-gray-700 inline-block mt-4 px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Buy Now
        </div>
      </Link>
    </div>
  )
}
