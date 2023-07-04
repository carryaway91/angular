import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'power'
})
export class Power implements PipeTransform {
    transform(value: number, x = 1) {
        return value * x
    }
}