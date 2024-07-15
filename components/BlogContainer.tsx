export function Container({ children }) {
  return (
    <>
      <div className="xl:max-w-[1440px] 2xl:max-w-[1920px] mx-auto min-h-screen">
        <main>{children}</main>
      </div>
    </>
  )
}

export default function BlogContainer({ children }) {
  return <div className="w-full mx-auto sm:px-[60px]">{children}</div>
}
