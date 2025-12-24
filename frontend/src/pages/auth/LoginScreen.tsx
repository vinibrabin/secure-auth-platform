import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface SigninProps {
  heading?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title?: string;
  };
  signupText?: string;
  googleText?: string;
  loginText?: string;
  loginUrl?: string;
}

const LoginScreen = ({
  heading,
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://www.shadcnblocks.com/images/block/logos/shadcnblockscom-wordmark.svg",
    alt: "logo",
    title: "shadcnblocks.com",
  },
  googleText = "Sign in with Google",
  signupText = "Login to your account",
  loginText = "Don't have an account?",
  loginUrl = "/register",
}: SigninProps) => {
  const navigate = useNavigate();
  const isAuthenticated = true;
  const isAdmin = false;

  const handleLogin = () => {
    if (!isAuthenticated) {
      toast.error("Cannot login");
      return;
    }

    if (isAdmin) {
      navigate("/");
    } else {
      navigate("/home");
    }
    toast.success(`${isAdmin ? "Admin" : "User"} Login successfully! `);
  };
  return (
    <section className="bg-muted h-screen font-lora">
      <div className="flex h-full items-center justify-center">
        <div className="border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-8 rounded-md border px-6 py-12 shadow-md">
          <div className="flex flex-col items-center gap-y-2">
            {/* Logo */}
            <div className="flex items-center gap-1 lg:justify-start">
              <a href={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-10 dark:invert"
                />
              </a>
            </div>
            {heading && <h1 className="text-3xl font-semibold">{heading}</h1>}
          </div>
          <div className="flex w-full flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Input type="email" placeholder="Email" required />
              </div>
              <div className="flex flex-col gap-2">
                <Input type="password" placeholder="Password" required />
              </div>
              <div className="flex flex-col gap-4">
                <Button
                  onClick={handleLogin}
                  className="mt-2 w-full cursor-pointer"
                >
                  {signupText}
                </Button>
                <Button variant="outline" className="w-full">
                  <FcGoogle className="mr-2 size-5" />
                  {googleText}
                </Button>
              </div>
            </div>
          </div>
          <div className="text-muted-foreground flex justify-center gap-1 text-sm">
            <p>{loginText}</p>
            <Link
              to={loginUrl}
              className="text-primary font-medium hover:underline"
            >
              sign up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginScreen;
