'use client';
import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

import { cn } from '@/lib/utils';

const SignupLabel = React.forwardRef(({ className, ...props }, ref) => (
    <LabelPrimitive.Root
        ref={ref}
        className={cn(
            'text-lg font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
            className
        )}
        {...props}
    />
));
SignupLabel.displayName = LabelPrimitive.Root.displayName;

export { SignupLabel };
