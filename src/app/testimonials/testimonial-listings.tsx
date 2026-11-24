import { MessageCircleDashed, StarIcon, User, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'
import { clientReviews, RatingsContent } from './ratings-data'
import { SectionHeading } from '@/app/ReusableComponents/section-heading'
import Image from 'next/image'
import { cn } from '@/lib/utils'

/* ── Rotating accent set for card variety (subtle, on-brand) ── */
const accents = [
  { tint: 'bg-primary/5', chip: 'bg-primary/10 text-primary', ring: 'ring-primary/20', dot: 'bg-primary' },
  { tint: 'bg-emerald-500/5', chip: 'bg-emerald-500/10 text-emerald-600', ring: 'ring-emerald-500/20', dot: 'bg-emerald-500' },
  { tint: 'bg-amber-500/5', chip: 'bg-amber-500/10 text-amber-600', ring: 'ring-amber-500/20', dot: 'bg-amber-500' },
  { tint: 'bg-sky-500/5', chip: 'bg-sky-500/10 text-sky-600', ring: 'ring-sky-500/20', dot: 'bg-sky-500' },
]

function ReviewCard({
  avatar,
  logo,
  name,
  role,
  reviewtext,
  onClick,
  accentIdx = 0,
}: {
  avatar?: string
  logo?: string
  name: string
  role?: string
  reviewtext: string
  onClick?: () => void
  accentIdx?: number
}) {
  const a = accents[accentIdx % accents.length]

  return (
    <Card
      className={cn(
        'group relative flex h-full flex-col overflow-hidden border-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
        a.tint,
        onClick && 'cursor-pointer'
      )}
      onClick={onClick}
    >
      {/* corner quote mark */}
      <Quote
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-4 size-9 text-foreground/5 transition-colors duration-300 group-hover:text-foreground/10"
      />

      <CardContent className="flex flex-1 flex-col p-5 md:p-7">
        {/* header */}
        <div className="mb-4 flex items-center gap-4">
          {logo ? (
            <div className={cn('flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-card ring-1', a.ring)}>
              <Image
                src={logo}
                alt={name}
                width={48}
                height={48}
                className="h-8 w-8 object-contain"
              />
            </div>
          ) : (
            <Avatar className={cn('size-12 shrink-0 ring-2', a.ring)}>
              <AvatarImage src={avatar} alt={name} loading="lazy" />
              <AvatarFallback className={a.chip}>
                <User className="size-5" />
              </AvatarFallback>
            </Avatar>
          )}

          <div className="min-w-0">
            <p className="truncate text-base font-bold tracking-tight text-foreground">{name}</p>
            {role && <p className="truncate text-sm text-muted-foreground">{role}</p>}
          </div>
        </div>

        {/* review */}
        <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
          {reviewtext}
        </p>

        {/* stars */}
        <div className="flex items-center gap-1.5">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="size-4 fill-amber-400 text-amber-400 md:size-5" />
            ))}
          </div>
          <span className={cn('ml-auto size-2 rounded-full', a.dot)} />
        </div>
      </CardContent>
    </Card>
  )
}

export default function TestimonialListings() {
  return (
    <div className="flex flex-col gap-20 overflow-hidden md:gap-28">
      {/* ── Our Happy Clients ── */}
      <section aria-labelledby="clients-title" className="flex w-full justify-center">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
          <SectionHeading
            primaryHeading="Our Happy Clients"
            secondaryHeading="Our Testimonials"
            icon={MessageCircleDashed}
            isCentered
            highlightedString="Happy"
          />

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-6">
            {clientReviews.map((testimonial, index) => (
              <ReviewCard
                key={index}
                logo={testimonial.logo}
                name={testimonial.name}
                role={testimonial.role}
                reviewtext={testimonial.reviewtext}
                accentIdx={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Ratings ── */}
      <section aria-labelledby="ratings-title" className="flex w-full justify-center">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 2xl:max-w-[1720px] 2xl:px-10">
          <SectionHeading
            primaryHeading="Our Ratings"
            secondaryHeading="Our Ratings"
            icon={StarIcon}
            isCentered
            highlightedString="Ratings"
          />

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-6">
            {RatingsContent.map((testimonial, index) => (
              <ReviewCard
                key={index}
                avatar={testimonial.avatar}
                name={testimonial.name}
                reviewtext={testimonial.reviewtext}
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Kriscent+Techno+Hub+Pvt.+Ltd./@25.172272,75.850743,845m/data=!3m1!1e3!4m8!3m7!1s0x396f84b895107939:0x1444f01d380c68f7!8m2!3d25.172272!4d75.850743!9m1!1b1!16s%2Fg%2F11b7c395fn?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D",
                    '_blank'
                  )
                }
                accentIdx={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
