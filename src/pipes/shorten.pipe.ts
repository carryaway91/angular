import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class Shorten implements PipeTransform {
    transform(value: any) {
        return value.substr(0, 5) + '...';
    }
}