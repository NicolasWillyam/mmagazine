export function Container({ children }) {
  return (
    <>
      <div className="sm:max-w-[1440px] 2xl:max-w-[1920px] mx-auto ">
        <main>{children}</main>
      </div>
    </>
  )
}

export default function BlogContainer({ children }) {
  return (
    <div className="w-full xl:max-w-[1440px] mx-auto sm:px-10 xl:px-[60px]  2xl:px-0">
      {children}
    </div>
  )
}
