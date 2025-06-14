'use client'
import { BrainCircuit, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (



    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 font-semibold font-mono text-2xl">
            <div className="bg-primary text-primary-foreground flex size-10 items-center justify-center rounded-lg">
              <BrainCircuit className="size-6" />
            </div>
            <span className="text-foreground">EL-EXE</span>
          </div>
        </div>

        {/* 404 Display */}
        <div className="space-y-4">
          <div className="text-8xl font-bold text-primary/20 select-none">
            404
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-foreground">
              Page Not Found
            </h1>
            <p className="text-muted-foreground max-w-sm mx-auto leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist or has been moved to a different location.
            </p>
          </div>
        </div>

        {/* Action Card */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                variant="default" 
                className="flex items-center gap-2"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => window.location.href = '/'}
              >
                <Home className="w-4 h-4" />
                Home
              </Button>
            </div>

        {/* Decorative Elements */}
        <div className="flex justify-center space-x-2 opacity-40">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-200"></div>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-border/30">
          <p className="text-xs text-muted-foreground">
            Need help? Contact our support team
          </p>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}

export default NotFound