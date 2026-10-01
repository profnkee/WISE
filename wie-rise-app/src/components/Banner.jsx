import { SITE } from '../data/site'

export default function Banner({ tall = false }) {
  return (
    <section
      className={`relative overflow-hidden bg-navy-950 ${
        tall ? 'h-[440px] sm:h-[560px] lg:h-[640px]' : 'h-[300px] sm:h-[380px] lg:h-[420px]'
      }`}
    >
      <img
        src="/assets/nit-jamshedpur-placement (1).jpg"
        alt="NIT Jamshedpur campus"
        className="absolute inset-0 h-full w-full origin-right scale-[1.15] object-cover object-bottom"
      />
      {/* Soft light wash so the banner text reads like DELCON's printed banner */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/65 to-transparent lg:bg-gradient-to-l lg:from-white/90 lg:via-white/70 lg:to-white/0" />

      <div className="relative flex h-full items-start justify-center px-4 pt-6 sm:pt-8 lg:justify-end lg:pr-16">
        <div className="w-full max-w-3xl text-center">
          <div className="flex items-center justify-center gap-5 sm:gap-10">
            <img
              src="/assets/National_Institute_of_Technology,_Jamshedpur_Logo.png"
              alt="NIT Jamshedpur"
              className={tall ? 'h-16 w-auto sm:h-24' : 'h-12 w-auto sm:h-16'}
            />
            <img
              src="/assets/nitlogosc.png"
              alt="WIE-RISE"
              className={`w-auto rounded-md ${tall ? 'h-14 sm:h-20' : 'h-10 sm:h-14'}`}
            />
            <img
              src="/assets/IEEEKSpng.png"
              alt="IEEE Kolkata Section"
              className={tall ? 'h-12 w-auto sm:h-16' : 'h-9 w-auto sm:h-12'}
            />
          </div>

          <h1
            className={`mt-4 font-bold leading-tight text-navy-700 ${
              tall ? 'text-xl sm:text-3xl lg:text-[34px]' : 'text-lg sm:text-2xl'
            }`}
          >
            1<sup>st</sup> IEEE Conference on {SITE.shortName}
          </h1>
          {tall && (
            <p className="mt-2 text-lg font-bold text-navy-700 sm:text-2xl">An International Conference on</p>
          )}
          <p
            className={`mt-1 font-bold text-navy-700 ${
              tall ? 'text-lg sm:text-2xl lg:text-[30px]' : 'text-base sm:text-xl'
            }`}
          >
            Revolutionizing Innovation in Smart Engineering
          </p>
          <p className={`mt-3 font-bold text-slate-900 ${tall ? 'text-base sm:text-lg' : 'text-sm sm:text-base'}`}>
            {SITE.dates}
          </p>
          <p className={`mt-1 font-bold text-slate-900 ${tall ? 'text-base sm:text-lg' : 'text-sm sm:text-base'}`}>
            Venue – {SITE.venueShort}
          </p>
        </div>
      </div>
    </section>
  )
}
