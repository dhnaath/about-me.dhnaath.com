import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  resetKey?: string | number;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('Component error caught by ErrorBoundary:', error, info.componentStack);
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps): void {
    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
      this.setState({ hasError: false });
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-[#3D3D3D] dark:text-[#F2F0EF]">
            <p className="text-base font-medium mb-3">
              Something went wrong while rendering this section.
            </p>
            <button
              type="button"
              onClick={() => this.setState({ hasError: false })}
              className="px-4 py-2 rounded-lg bg-[#3D3D3D] text-[#F2F0EF] dark:bg-[#F2F0EF] dark:text-[#3D3D3D] text-sm cursor-pointer"
            >
              Try Again
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
