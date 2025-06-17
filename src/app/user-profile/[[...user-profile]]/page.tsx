import { UserProfile } from "@clerk/nextjs"

export default function UserProfilePage() {
  return (
      <div className=" flex justify-center justify-items-stretch py-8">
          <UserProfile path="/user-profile"/>
    </div>
  )
}
