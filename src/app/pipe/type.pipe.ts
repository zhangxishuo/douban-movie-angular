import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'type'
})
export class TypePipe implements PipeTransform {

    transform(value: string[]): any {
        let info = '';
        value.forEach((str) => {
            info += str + '/';
        });
        info = info.substring(0, info.length - 1);
        return info;
    }

}
