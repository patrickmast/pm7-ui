// PM7 Callout Type Definitions

export interface PM7CalloutOptions {
  variant?: 'info' | 'success' | 'warning' | 'error' | 'danger' | 'tip' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  noBorder?: boolean;
  center?: boolean;
  pulse?: boolean;
}

// Augment the global HTMLElement interface
declare global {
  interface HTMLElement {
    PM7Callout?: PM7CalloutInstance;
  }
}

export interface PM7CalloutInstance {
  element: HTMLElement;
  options: PM7CalloutOptions;
  setVariant(variant: PM7CalloutOptions['variant']): void;
  setSize(size: PM7CalloutOptions['size']): void;
  pulse(): void;
  stopPulse(): void;
}

export class PM7Callout implements PM7CalloutInstance {
  element: HTMLElement;
  options: PM7CalloutOptions;
  
  constructor(element: HTMLElement, options?: PM7CalloutOptions);
  setVariant(variant: PM7CalloutOptions['variant']): void;
  setSize(size: PM7CalloutOptions['size']): void;
  pulse(): void;
  stopPulse(): void;
}

// Initialization function
export function initCallouts(container?: HTMLElement | Document): void;