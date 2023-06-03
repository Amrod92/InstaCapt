// pages/example.tsx
import { UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";

export default function Example() {
  return (
    <>
      <header>
        <UserButton afterSignOutUrl="/" />
      </header>
      <div>
        Your pages content can go here.
        <SignInButton mode="modal">
          <button className="btn">Sign in</button>
        </SignInButton>
      </div>
    </>
  );
}
