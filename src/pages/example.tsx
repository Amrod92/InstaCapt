// pages/example.tsx
import { UserButton, useUser } from '@clerk/nextjs'
import { SignInButton } from '@clerk/nextjs'

export default function Example() {
  const user = useUser()
  return (
    <>
      <div>
        Your pages content can go here.
        {!user.isSignedIn && (
          <SignInButton mode="modal">
            <button className="btn">Sign in</button>
          </SignInButton>
        )}
      </div>
    </>
  )
}
