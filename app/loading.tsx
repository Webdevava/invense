import { BrainCircuit } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[98vh] h-full w-full">
      <div className="relative">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 w-16 h-16 border-2 border-border rounded-full animate-spin border-t-primary"></div>
        
        {/* Inner pulsing circle with icon */}
        <div className="flex items-center justify-center w-16 h-16 bg-background rounded-full shadow-sm border border-border/50">
          <div className="bg-primary text-primary-foreground flex items-center justify-center w-10 h-10 rounded-full animate-pulse">
            <BrainCircuit className="w-5 h-5" />
          </div>
        </div>
        
        {/* Subtle loading text */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span className="animate-pulse">Loading</span>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading