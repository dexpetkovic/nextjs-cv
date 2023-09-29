export const TitleWithSubtitle = (props: { title: string; subtitle: string }): React.ReactElement => {
  const { title, subtitle } = props

  return (
    <div className="flex flex-col max-w-5xl items-center">
      <p className="text-9xl dark:text-white light:text-black">{title}</p>
      <p className="text-5xl font-medium dark:text-white light:text-black">{subtitle}</p>
    </div>
  )
}
