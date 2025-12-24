import { useEffect } from "react";
import { renderCanvas } from "@/components/ui/canvas";
import { DIcons } from "dicons";

import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function HomeScreen() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
    toast.success("Logout successfully!");
  };

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <section id="home">
      <div className="animation-delay-8 font-lora animate-fadeIn mt-5 flex  flex-col items-center justify-center px-4 text-center md:mt-5">
        <div className="z-10 mb-6 mt-5 sm:justify-center md:mb-4 md:mt-5">
          <div className="relative flex items-center whitespace-nowrap rounded-full border bg-popover px-3 py-1 text-xs leading-6  text-primary/60 ">
            <DIcons.Shapes className="h-5 p-1" /> Secure Authentication
            <a
              rel="noreferrer"
              className="hover:text-ali ml-1 flex items-center font-semibold"
            >
              <button
                onClick={handleLogout}
                className="absolute inset-0 flex cursor-pointer"
                aria-hidden="true"
              />
              Log Out{" "}
              <span aria-hidden="true">
                <DIcons.ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>

        <div className="mb-10 mt-4  md:mt-6">
          <div className="px-2">
            <div className="border-ali relative mx-auto h-full max-w-7xl border p-6 mask-[radial-gradient(800rem_96rem_at_center,white,transparent)] md:px-12 md:py-20">
              <h1 className="flex  select-none flex-col  px-3 py-2 text-center text-5xl font-semibold leading-none tracking-tight md:flex-col md:text-8xl lg:flex-row lg:text-8xl">
                <DIcons.Plus
                  strokeWidth={4}
                  className="text-ali absolute -left-5 -top-5 h-10 w-10"
                />
                <DIcons.Plus
                  strokeWidth={4}
                  className="text-ali absolute -bottom-5 -left-5 h-10 w-10"
                />
                <DIcons.Plus
                  strokeWidth={4}
                  className="text-ali absolute -right-5 -top-5 h-10 w-10"
                />
                <DIcons.Plus
                  strokeWidth={4}
                  className="text-ali absolute -bottom-5 -right-5 h-10 w-10"
                />
                Securely manage your account access.
              </h1>
              <div className="flex items-center justify-center gap-1">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <p className="text-xs text-green-500">Available Now</p>
              </div>
            </div>
          </div>

          <h1 className="mt-8 text-2xl md:text-2xl">
            Welcome to <span className="text-ali font-bold">SecureAuth</span>
          </h1>

          <p className="md:text-md mx-auto mb-16 mt-2 max-w-2xl px-6 text-sm text-primary/60 sm:px-6 md:max-w-4xl md:px-20 lg:text-lg">
            Sign in to access your dashboard, manage users, and control
            permissions with our easy-to-use authentication system.
          </p>
          <div className="flex justify-center gap-2">
            <Link to={"/"}>
              <Button variant="default" size="lg">
                Log In
              </Button>
            </Link>
            <Link to={"https://cal.com/aliimam/designali"} target="_blank">
              <Button variant="outline" size="lg">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <canvas
        className="bg-skin-base pointer-events-none absolute inset-0 mx-auto"
        id="canvas"
      ></canvas>
    </section>
  );
}
