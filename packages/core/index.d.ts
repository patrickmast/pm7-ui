// PM7 Core TypeScript Definitions

// Menu component
export class PM7Menu {
  constructor(element: HTMLElement);
  open(): void;
  close(): void;
  toggle(): void;
}

// Dialog component
export class PM7Dialog {
  constructor(element: HTMLElement);
  open(): void;
  close(): void;
  shake(): void;
  setLoading(loading: boolean): void;
}

export interface DialogOptions {
  title?: string;
  content?: string | HTMLElement;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  variant?: '' | 'alert' | 'success';
  showClose?: boolean;
  buttons?: Array<{
    text: string;
    variant?: string;
    onClick?: () => void;
  }>;
}

export function createDialog(options?: DialogOptions): PM7Dialog;
export function confirm(message: string, options?: {
  title?: string;
  cancelText?: string;
  confirmText?: string;
  variant?: string;
}): Promise<boolean>;
export function alert(message: string, options?: {
  title?: string;
  buttonText?: string;
  variant?: string;
}): Promise<void>;