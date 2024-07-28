import AlertBanner from 'components/AlertBanner'

export default function BlogLayout({
  preview,
  loading,
  children,
}: {
  preview?: boolean
  loading?: boolean
  children?: React.ReactNode
}) {
  return (
    <>
      <div className="min-h-screen max-w-[1440px] mx-auto pt-24">
        <AlertBanner preview={preview} loading={loading} />
        <main>{children}</main>
      </div>
    </>
  )
}
