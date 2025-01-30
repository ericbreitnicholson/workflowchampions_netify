/// <reference types="react" />

declare module '@headlessui/react' {
  interface DisclosureRenderPropArg {
    open: boolean;
    close: () => void;
  }

  interface DisclosureProps {
    as?: React.ElementType;
    defaultOpen?: boolean;
    children: (bag: DisclosureRenderPropArg) => React.ReactNode;
    className?: string;
  }

  interface DisclosureButtonProps {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
    href?: string;
  }

  interface DisclosurePanelProps {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
  }

  interface DisclosureComponent extends React.FC<DisclosureProps> {
    Button: React.FC<DisclosureButtonProps>;
    Panel: React.FC<DisclosurePanelProps>;
  }

  export const Disclosure: DisclosureComponent;
  export const Menu: React.FC<any>;
  export const Transition: React.FC<any>;
}

declare module '@heroicons/react/24/outline' {
  interface IconProps {
    className?: string;
    'aria-hidden'?: boolean | string;
  }
  
  export const Bars3Icon: React.FC<IconProps>;
  export const XMarkIcon: React.FC<IconProps>;
  export const ChevronRightIcon: React.FC<IconProps>;
} 