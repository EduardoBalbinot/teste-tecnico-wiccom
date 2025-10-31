import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState
} from 'react'
import { EmblaCarouselType } from 'embla-carousel'

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

type PropType = ComponentPropsWithRef<'button'>

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
    >
      <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_11272_62532)">
          <path d="M1.81585 3.63624L4.34832 1.10378C4.46736 0.984726 4.52689 0.833215 4.52689 0.64923C4.52689 0.465247 4.46736 0.313732 4.34832 0.194685C4.22927 0.0756371 4.07775 0.0161133 3.89377 0.0161133C3.70979 0.0161133 3.55827 0.0756371 3.43922 0.194685L0.452212 3.1817C0.322341 3.31157 0.257406 3.46309 0.257406 3.63624C0.257406 3.8094 0.322341 3.96092 0.452212 4.09079L3.43922 7.0778C3.55827 7.19687 3.70979 7.2564 3.89377 7.2564C4.07775 7.2564 4.22927 7.19687 4.34832 7.0778C4.46736 6.95874 4.52689 6.80726 4.52689 6.62326C4.52689 6.43926 4.46736 6.28778 4.34832 6.16871L1.81585 3.63624Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_11272_62532">
            <rect width="4.67532" height="7.27273" fill="white" transform="matrix(-1 0 0 1 4.67532 0)" />
          </clipPath>
        </defs>
      </svg>

      {children}
    </button>
  )
}

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="embla__button embla__button--next"
      type="button"
      {...restProps}
    >
      <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.71104 3.62013L0.178572 1.08766C0.0595242 0.968613 5.26379e-07 0.817101 5.26379e-07 0.633117C5.26379e-07 0.449134 0.0595242 0.297619 0.178572 0.178572C0.29762 0.0595238 0.449133 0 0.633117 0C0.817102 0 0.968613 0.0595238 1.08766 0.178572L4.07468 3.16558C4.20455 3.29545 4.26948 3.44697 4.26948 3.62013C4.26948 3.79329 4.20455 3.94481 4.07468 4.07468L1.08766 7.06169C0.968613 7.18075 0.817102 7.24029 0.633117 7.24029C0.449133 7.24029 0.297619 7.18075 0.178571 7.06169C0.0595236 6.94262 0 6.79114 0 6.60714C0 6.42314 0.0595236 6.27166 0.178571 6.1526L2.71104 3.62013Z" fill="white" />
      </svg>

      {children}
    </button>
  )
}
