import { trigger, state, style, transition, animate } from "@angular/animations"

export const colorAnimation = (name: string, x: number, beginColor: string, endColor: string) => {
  return trigger(name, [
    state('begin', style({
      backgroundColor: beginColor
    })),
    state('end', style({
      backgroundColor: endColor
    })),
    transition('begin <=> end', animate(x))
  ])
}


export const positionAnimation = (name: string, x: number, y: number) => {
  return trigger(name, [
    state('begin', style({
      transform: 'translateX(0) scale(1)'
    })),
    state('end', style({
      transform: 'translateX(' + x + 'px) scale(' + y + ')'
    })),
    transition('begin <=> end', animate(400))
  ])
}

export const appearAnimation = (name: string) => {
  return trigger(name, [
    state('end', style({
      transform: 'translateX(0)',
      opacity: 1
    })),
    transition("void => *", [
      style({
        transform: 'translateX(-100px)',
        opacity: 0
      }),
      animate(300)]),
      transition("* => void", [
        style({
          transform: 'translateX(100px)',
          opacity: 0
        }),
        animate(2300)
      ])
  ])
}
