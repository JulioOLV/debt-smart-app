import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import { cn } from '@/lib/utils';

const Sheet = DialogPrimitive.Root;

const SheetTrigger = DialogPrimitive.Trigger;

const SheetPortal = DialogPrimitive.Portal;

const SheetClose = DialogPrimitive.Close;

const SheetOverlay = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) => (
  <DialogPrimitive.Overlay
    className={cn('fixed inset-0 z-10 bg-black/40', className)}
    {...props}
  />
);

const SheetContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) => (
  <SheetPortal>
    <SheetOverlay />
    <AnimatePresence>
      <DialogPrimitive.Content asChild {...props}>
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className={cn(
            'fixed right-0 bottom-0 left-0 z-20 mx-auto w-full max-w-md rounded-t-4xl bg-white p-6 shadow-lg',
            className,
          )}
        >
          {children}
        </motion.div>
      </DialogPrimitive.Content>
    </AnimatePresence>
  </SheetPortal>
);

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('mb-6 flex items-center justify-between', className)}
    {...props}
  />
);

const SheetTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) => (
  <DialogPrimitive.Title
    className={cn('text-xl font-bold text-slate-900', className)}
    {...props}
  />
);

const SheetCloseButton = ({
  className,
  ...props
}: React.ComponentProps<typeof SheetClose>) => (
  <SheetClose
    className={cn('rounded-full p-2 hover:bg-slate-100', className)}
    {...props}
  >
    <X className="h-5 w-5 text-slate-400" />
  </SheetClose>
);

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetClose,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetCloseButton,
};
