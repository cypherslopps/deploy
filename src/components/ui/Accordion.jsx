import React from 'react';
import { cn } from '../../lib/utils';
import * as Accordion from '@radix-ui/react-accordion';
import { Plus } from 'lucide-react';

export const AccordionRoot = Accordion.Root;

// const AccordionDemo = () => (
//   <Accordion.Root
//     className="bg-mauve6 w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
//     type="single"
//     defaultValue="item-1"
//     collapsible
//   >
//     <AccordionItem value="item-1">
//       <AccordionTrigger>Is it accessible?</AccordionTrigger>
//       <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
//     </AccordionItem>

//     <AccordionItem value="item-2">
//       <AccordionTrigger>Is it unstyled?</AccordionTrigger>
//       <AccordionContent>
//         Yes. It's unstyled by default, giving you freedom over the look and feel.
//       </AccordionContent>
//     </AccordionItem>

//     <AccordionItem value="item-3">
//       <AccordionTrigger>Can it be animated?</AccordionTrigger>
//       <AccordionContent>
//         Yes! You can animate the Accordion with CSS or JavaScript.
//       </AccordionContent>
//     </AccordionItem>
//   </Accordion.Root>
// );

export const AccordionItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={cn(
      'focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
));

export const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={cn(
        'text-violet11 cursor-pointer select-none group flex h-[45px] flex-1 items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <Plus
        className="text-grey-500/80 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-500 group-data-[state=open]:rotate-45"
        width={28}
        height={28}
        aria-hidden
        strokeWidth={.8}
      />
    </Accordion.Trigger>
  </Accordion.Header>
));

export const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={cn(
      'text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="py-[15px] px-5">{children}</div>
  </Accordion.Content>
));
