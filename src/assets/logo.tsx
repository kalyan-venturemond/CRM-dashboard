import { cn } from '@/lib/utils'

export function Logo({ className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src='/images/venturemond-logo.png'
      alt='VentureMond Logo'
      className={cn('size-6', className)}
      {...props}
    />
  )
}
