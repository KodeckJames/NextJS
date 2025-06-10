export const metadata = {
  title: "About me",
}

function page() {
  return (
    <div>About me {new Date().toLocaleTimeString() }</div>
  )
}

export default page