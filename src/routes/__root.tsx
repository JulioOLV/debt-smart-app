import { QueryClient } from '@tanstack/react-query';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => {
    const path = typeof window !== 'undefined' ? window.location.pathname : '/';

    return (
      <MotionConfig transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}>
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={path}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              style={{ willChange: 'transform, opacity' }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </MotionConfig>
    );
  },
});
