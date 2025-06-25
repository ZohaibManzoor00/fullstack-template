"use client";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Home() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const signOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
          toast.success("Signed out successfully");
        },
      },
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Hello world</h1>
      <ThemeToggle />
      {session ? (
        <div>
          <p>Welcome back {session.user.name}</p>
          <Button onClick={signOut}>Sign out</Button>
        </div>
      ) : (
        <p>You are not logged in</p>
      )}
    </div>
  );
}
