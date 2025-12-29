import { cn } from '@/lib/utils'

export function Logo({ className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src='/images/logo.png'
      alt='LeadNest AI Logo'
      className={cn('size-6 object-contain', className)}
      {...props}
    />
  )
}
