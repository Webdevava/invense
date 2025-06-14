import { TermsAndConditions } from "@/components/dialogs/terms-conditions";
import { BrainCircuit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-2">
      <div className="grid min-h-[98vh] lg:grid-cols-2 bg-muted rounded-lg border shadow-inner overflow-hidden">
        <div className="flex flex-col gap-4 p-6 md:p-10">
          <div className="flex justify-center gap-2 md:justify-start">
            <Link
              href="/#"
              className="flex items-center gap-2 font-semibold font-mono text-xl bg-accent rounded-md p-2 hover:bg-card/80 transition-colors"
            >
              <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md">
                <BrainCircuit className="size-6" />
              </div>
              EL-EXE
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-xs">{children}</div>
          </div>
          <div className="w-full items-center justify-center">
            <p className="text-xs  text-muted-foreground max-w-xs mx-auto text-center">
              By continuing you accept our <TermsAndConditions/>
            </p>
          </div>
        </div>
        <div className="bg-muted relative hidden lg:block overflow-hidden">
          <Image
            src="/images/download.jpeg"
            alt="Image"
            fill
            className="absolute inset-0 h-full w-full object-fit"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {/* Glass Quote Card Overlay */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-8 shadow-2xl max-w-md transform transition-all duration-300 hover:bg-white/25">
              <div className="text-center space-y-4">
                <blockquote className="text-slate-800 font-medium text-lg leading-relaxed">
                  &quot;The Internet of Things is not just about connecting
                  devices—it&apos;s about connecting possibilities and
                  transforming how we interact with the world around us.&quot;
                </blockquote>
                <div className="pt-2">
                  <cite className="text-slate-600 text-sm font-semibold tracking-wide uppercase">
                    — Future of Automation
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
